# ===----------------------------------------------------------------------=== #
# Notebook 8.2: Bias-Variance Trade-Off  --  Mojo port
#
# This program investigates the bias-variance trade-off for the toy model used
# throughout chapter 8 and reproduces the bias/variance trade off curves seen in
# figure 8.9.
#
# Work through the sections below in order.  In various places you will see the
# words "TODO".  Follow the instructions at these places and make predictions
# about what is going to happen, or write code to complete the functions.
#
# Contact the book's author at udlbookmail@gmail.com if you find any mistakes or
# have any suggestions.
#
# ---------------------------------------------------------------------------
# How to run
#
#   mojo run 8_2_Bias_Variance_Trade_Off.mojo
#
# The maths here is pure Mojo -- the shallow ReLU network, the least squares fit
# and the mean/variance statistics are all written out by hand, so you can see
# every operation the original NumPy one-liners were hiding.  Only the drawing is
# delegated to Python, via matplotlib through Mojo's Python interop, so the
# interpreter that Mojo picks up must have matplotlib installed.
#
# Note on random numbers: this uses Mojo's own generator, not NumPy's Mersenne
# Twister, so seeding with 1 does not reproduce the notebook's figures
# pixel-for-pixel.  The shapes of the curves, and every conclusion drawn from
# them, are unchanged.
# ===----------------------------------------------------------------------=== #

from std.math import exp, sin, sqrt
from std.python import Python, PythonObject
from std.random import randn_float64, random_float64, seed


# ===----------------------------------------------------------------------=== #
# A minimal dense matrix, standing in for the 2D NumPy arrays of the notebook.
# ===----------------------------------------------------------------------=== #
struct Matrix(Copyable, Movable):
    var rows: Int
    var cols: Int
    var data: List[Float64]

    def __init__(out self, rows: Int, cols: Int):
        self.rows = rows
        self.cols = cols
        self.data = List[Float64](length=rows * cols, fill=0.0)

    def __getitem__(self, r: Int, c: Int) -> Float64:
        return self.data[r * self.cols + c]

    def __setitem__(mut self, r: Int, c: Int, v: Float64):
        self.data[r * self.cols + c] = v


# Equivalent of np.linspace(start, stop, num), endpoints included.
def linspace(start: Float64, stop: Float64, num: Int) -> List[Float64]:
    var out = List[Float64](length=num, fill=0.0)
    for i in range(num):
        out[i] = start + (stop - start) * Float64(i) / Float64(num - 1)
    return out^


# ===----------------------------------------------------------------------=== #
# The true function that we are trying to estimate, defined on [0,1]
# ===----------------------------------------------------------------------=== #
def true_function(x: Float64) -> Float64:
    return exp(sin(x * (2 * 3.1413)))


def true_function(x: List[Float64]) -> List[Float64]:
    var y = List[Float64](length=len(x), fill=0.0)
    for i in range(len(x)):
        y[i] = true_function(x[i])
    return y^


# ===----------------------------------------------------------------------=== #
# Generate some data points with or without noise
# ===----------------------------------------------------------------------=== #
def generate_data(
    n_data: Int, sigma_y: Float64 = 0.3
) -> Tuple[List[Float64], List[Float64]]:
    # Generate x values quasi uniformly
    var x = List[Float64](length=n_data, fill=0.0)
    for i in range(n_data):
        x[i] = random_float64(
            Float64(i) / Float64(n_data), Float64(i + 1) / Float64(n_data)
        )

    # y value from running through function and adding noise
    var y = List[Float64](length=n_data, fill=0.0)
    for i in range(n_data):
        y[i] = true_function(x[i])
        y[i] += randn_float64(0.0, sigma_y)

    return (x^, y^)


# ===----------------------------------------------------------------------=== #
# Plotting.  Mojo has no native plotting library, so we hand the numbers to
# matplotlib over Python interop.  An empty list means "this argument was not
# supplied" -- it plays the role of None in the original notebook -- and a
# negative sigma_func means the same for that scalar.
# ===----------------------------------------------------------------------=== #
def to_py(values: List[Float64]) raises -> PythonObject:
    var out = Python.list()
    for i in range(len(values)):
        out.append(values[i])
    return out


# Draw the fitted function, together with uncertainty used to generate points
def plot_function(
    x_func: List[Float64],
    y_func: List[Float64],
    x_data: List[Float64],
    y_data: List[Float64],
    x_model: List[Float64],
    y_model: List[Float64],
    sigma_func: Float64,
    sigma_model: List[Float64],
) raises:
    var plt = Python.import_module("matplotlib.pyplot")

    var figax = plt.subplots()
    var fig = figax[0]
    var ax = figax[1]
    ax.plot(to_py(x_func), to_py(y_func), "k-")

    if sigma_func >= 0.0:
        var lower = List[Float64](length=len(y_func), fill=0.0)
        var upper = List[Float64](length=len(y_func), fill=0.0)
        for i in range(len(y_func)):
            lower[i] = y_func[i] - 2 * sigma_func
            upper[i] = y_func[i] + 2 * sigma_func
        ax.fill_between(
            to_py(x_func), to_py(lower), to_py(upper), color="lightgray"
        )

    if len(x_data) > 0:
        ax.plot(to_py(x_data), to_py(y_data), "o", color="#d18362")

    if len(x_model) > 0:
        ax.plot(to_py(x_model), to_py(y_model), "-", color="#7fe7de")

    if len(sigma_model) > 0:
        var lower = List[Float64](length=len(y_model), fill=0.0)
        var upper = List[Float64](length=len(y_model), fill=0.0)
        for i in range(len(y_model)):
            lower[i] = y_model[i] - 2 * sigma_model[i]
            upper[i] = y_model[i] + 2 * sigma_model[i]
        ax.fill_between(
            to_py(x_model), to_py(lower), to_py(upper), color="lightgray"
        )

    ax.set_xlim(0, 1)
    ax.set_xlabel("Input, $x$")
    ax.set_ylabel("Output, $y$")
    plt.show()
    plt.close(fig)


# ===----------------------------------------------------------------------=== #
# Define model -- beta is a scalar and omega has size n_hidden
# ===----------------------------------------------------------------------=== #
def network(
    x: List[Float64], beta: Float64, omega: List[Float64]
) -> List[Float64]:
    # Retrieve number of hidden units
    var n_hidden = len(omega)

    var y = List[Float64](length=len(x), fill=0.0)
    for c_hidden in range(n_hidden):
        for i in range(len(x)):
            # Evaluate activations based on shifted lines (figure 8.4b-d)
            var line_vals = x[i] - Float64(c_hidden) / Float64(n_hidden)
            var h = line_vals if line_vals > 0 else 0.0
            # Weight activations by omega parameters and sum
            y[i] = y[i] + omega[c_hidden] * h

    # Add bias, beta
    for i in range(len(y)):
        y[i] = y[i] + beta

    return y^


# ===----------------------------------------------------------------------=== #
# Least squares, written out by hand -- this is what np.linalg.lstsq was doing.
#
# Solving (A^TA)^-1 A^Tb directly squares the conditioning of A, which matters
# once the model has nearly as many parameters as there are data points (we go
# up to 13 parameters on 15 points below).  So instead we reduce A to upper
# triangular form with Householder reflections, applying the same reflections to
# b, and then back-substitute.  That is the numerically stable way to get the
# same answer.  If none of that is familiar, take it on trust that this returns
# the coefficients giving the best possible fit.
# ===----------------------------------------------------------------------=== #
def lstsq(A_in: Matrix, b_in: List[Float64]) -> List[Float64]:
    var A = A_in.copy()
    var b = b_in.copy()
    var m = A.rows
    var n = A.cols

    for k in range(n):
        # Length of the part of column k that sits on or below the diagonal
        var norm = 0.0
        for i in range(k, m):
            norm += A[i, k] * A[i, k]
        norm = sqrt(norm)
        if norm < 1e-300:
            continue

        # Reflect that sub-column onto a multiple of the first basis vector,
        # choosing the sign that avoids cancellation
        var alpha = -norm if A[k, k] > 0 else norm
        var v = List[Float64](length=m - k, fill=0.0)
        for i in range(k, m):
            v[i - k] = A[i, k]
        v[0] -= alpha

        var vtv = 0.0
        for i in range(len(v)):
            vtv += v[i] * v[i]
        if vtv < 1e-300:
            continue

        # Apply H = I - 2vv^T/(v^Tv) to the remaining columns of A ...
        for j in range(k, n):
            var dot = 0.0
            for i in range(k, m):
                dot += v[i - k] * A[i, j]
            var f = 2.0 * dot / vtv
            for i in range(k, m):
                A[i, j] = A[i, j] - f * v[i - k]

        # ... and to b, so the system stays equivalent
        var dot_b = 0.0
        for i in range(k, m):
            dot_b += v[i - k] * b[i]
        var f_b = 2.0 * dot_b / vtv
        for i in range(k, m):
            b[i] = b[i] - f_b * v[i - k]

    # A is now upper triangular, so solve for the coefficients from the bottom up
    var x = List[Float64](length=n, fill=0.0)
    for step in range(n):
        var i = n - 1 - step
        var s = b[i]
        for j in range(i + 1, n):
            s -= A[i, j] * x[j]
        var pivot = A[i, i]
        var mag = pivot if pivot > 0 else -pivot
        # A vanishing pivot means this basis function is redundant on this data;
        # pin its coefficient to zero rather than dividing by ~0
        x[i] = 0.0 if mag < 1e-12 else s / pivot

    return x^


# This fits the n_hidden+1 parameters (see fig 8.4a) in closed form.
def fit_model_closed_form(
    x: List[Float64], y: List[Float64], n_hidden: Int
) -> Tuple[Float64, List[Float64]]:
    var n_data = len(x)
    var A = Matrix(n_data, n_hidden + 1)
    for i in range(n_data):
        A[i, 0] = 1.0
        for j in range(1, n_hidden + 1):
            var val = x[i] - Float64(j - 1) / Float64(n_hidden)
            A[i, j] = val if val > 0 else 0.0

    var beta_omega = lstsq(A, y)

    var beta = beta_omega[0]
    var omega = List[Float64](length=n_hidden, fill=0.0)
    for j in range(n_hidden):
        omega[j] = beta_omega[j + 1]

    return (beta, omega^)


# ===----------------------------------------------------------------------=== #
# Run the model many times with different datasets and return the mean and
# variance
# ===----------------------------------------------------------------------=== #
def get_model_mean_variance(
    n_data: Int,
    n_datasets: Int,
    n_hidden: Int,
    sigma_func: Float64,
    x_model: List[Float64],
) -> Tuple[List[Float64], List[Float64]]:
    # Create matrix that stores model results in rows
    var y_model_all = Matrix(n_datasets, len(x_model))

    for c_dataset in range(n_datasets):
        # TODO -- Generate n_data x,y, pairs with standard deviation sigma_func
        # Replace this line
        var data = generate_data(n_data, sigma_func)
        var x_data = data[0].copy()
        var y_data = data[1].copy()

        # TODO -- Fit the model
        # Replace this line:
        var fit = fit_model_closed_form(x_data, y_data, n_hidden)
        var beta = fit[0]
        var omega = fit[1].copy()

        # TODO -- Run the fitted model on x_model
        # Replace this line
        var y_model = network(x_model, beta, omega)

        # Store the model results
        for i in range(len(x_model)):
            y_model_all[c_dataset, i] = y_model[i]

    # Get mean and standard deviation of model
    var mean_model = List[Float64](length=len(x_model), fill=0.0)
    var std_model = List[Float64](length=len(x_model), fill=0.0)
    for i in range(len(x_model)):
        var total = 0.0
        for c_dataset in range(n_datasets):
            total += y_model_all[c_dataset, i]
        mean_model[i] = total / Float64(n_datasets)

        var sq_dev = 0.0
        for c_dataset in range(n_datasets):
            var d = y_model_all[c_dataset, i] - mean_model[i]
            sq_dev += d * d
        std_model[i] = sqrt(sq_dev / Float64(n_datasets))

    # Return the mean and standard deviation of the fitted model
    return (mean_model^, std_model^)


def main() raises:
    # An empty list stands for an argument the notebook would have left as None
    var none = List[Float64]()

    # --- Generate the true function, some data, and plot both ---------------
    var x_func = linspace(0.0, 1.0, 100)
    var y_func = true_function(x_func)

    seed(1)
    var sigma_func = 0.3
    var n_data = 15
    var data = generate_data(n_data, sigma_func)
    var x_data = data[0].copy()
    var y_data = data[1].copy()

    # Plot the function, data and uncertainty
    plot_function(
        x_func, y_func, x_data, y_data, none, none, sigma_func, none
    )

    # --- Fit one model in closed form and plot it ---------------------------
    var fit = fit_model_closed_form(x_data, y_data, 3)
    var beta = fit[0]
    var omega = fit[1].copy()

    # Get prediction for model across graph range
    var x_model = linspace(0.0, 1.0, 100)
    var y_model = network(x_model, beta, omega)

    # Draw the function and the model
    plot_function(
        x_func, y_func, x_data, y_data, x_model, y_model, -1.0, none
    )

    # --- Fit the model to many datasets and look at mean and variance -------
    var n_datasets = 100
    var n_hidden = 5

    seed(1)
    var mv = get_model_mean_variance(
        n_data, n_datasets, n_hidden, sigma_func, x_model
    )
    var mean_model = mv[0].copy()
    var std_model = mv[1].copy()

    # Plot the results
    plot_function(
        x_func, y_func, none, none, x_model, mean_model, -1.0, std_model
    )

    # TODO -- Experiment with changing the number of data points and the number
    # of hidden variables in the model.  Get a feeling for what happens in terms
    # of the bias (squared deviation between cyan and black lines) and the
    # variance (gray region) as we manipulate these quantities.

    # --- Plot the noise, bias and variance as a function of capacity --------
    var max_hidden = 12
    var hidden_variables = List[Int]()
    for h in range(1, max_hidden + 1):
        hidden_variables.append(h)

    var bias = List[Float64](length=len(hidden_variables), fill=0.0)
    var variance = List[Float64](length=len(hidden_variables), fill=0.0)

    var y_true_at_model = true_function(x_model)

    # Set random seed so that we get the same result every time
    seed(1)

    for c_hidden in range(len(hidden_variables)):
        # Get mean and variance of fitted model
        var mv_c = get_model_mean_variance(
            n_data,
            n_datasets,
            hidden_variables[c_hidden],
            sigma_func,
            x_model,
        )
        var mean_c = mv_c[0].copy()
        var std_c = mv_c[1].copy()

        # TODO -- Estimate bias and variance
        # Replace these lines

        # Compute variance -- average of the model variance (average squared
        # deviation of fitted models around mean fitted model)
        var var_total = 0.0
        for i in range(len(std_c)):
            var_total += std_c[i] * std_c[i]
        variance[c_hidden] = var_total / Float64(len(std_c))

        # Compute bias (average squared deviation of mean fitted model around
        # true function)
        var bias_total = 0.0
        for i in range(len(mean_c)):
            var d = mean_c[i] - y_true_at_model[i]
            bias_total += d * d
        bias[c_hidden] = bias_total / Float64(len(mean_c))

    var total = List[Float64](length=len(bias), fill=0.0)
    for i in range(len(bias)):
        total[i] = bias[i] + variance[i]

    # Plot the results
    var plt = Python.import_module("matplotlib.pyplot")
    var figax = plt.subplots()
    var fig = figax[0]
    var ax = figax[1]

    var capacity = Python.list()
    for i in range(len(hidden_variables)):
        capacity.append(hidden_variables[i])

    ax.plot(capacity, to_py(variance), "k-")
    ax.plot(capacity, to_py(bias), "r-")
    ax.plot(capacity, to_py(total), "g-")
    ax.set_xlim(0, max_hidden)
    ax.set_ylim(0, 0.5)
    ax.set_xlabel("Model capacity")
    ax.set_ylabel("Variance")
    ax.legend(["Variance", "Bias", "Bias + Variance"])
    plt.show()
    plt.close(fig)
