import torch, torch.nn as nn
import matplotlib.pyplot as plt
from torch.utils.data import TensorDataset, DataLoader
from torch.optim.lr_scheduler import StepLR

# define input size, hidden layer size, output size
D_i, D_k, D_0 = 10, 40, 5

# crete model with two hidden layers 
model = nn.Sequential(
    nn.Linear(D_i, D_k),
    nn.ReLU(),
    nn.Linear(D_k, D_k),
    nn.ReLU(),
    nn.Linear(D_k, D_0),
    nn.Sigmoid()
)

# He initialization of weights
def weights_init(layer_in):
    if isinstance(layer_in, nn.Linear):
        nn.init.kaiming_normal_(layer_in.weight)
        layer_in.bias.data.fill_(0.0)
model.apply(weights_init)

# choose binary cross-entropy
criterian = nn.BCELoss()

# construct SGD optimizer and initialize learning rate and momentum 
optimizer = torch.optim.SGD(model.parameters(), lr=0.1, momentum=0.9)
#object that decreases learning rate by half every 10 epochs
scheduler = StepLR(optimizer, step_size=10, gamma=0.5)

# create 100 random data points and store in data loader class 
x = torch.randn(100, D_i)
# binary targets, one per output unit; BCELoss needs them as floats
y = torch.randint(0, 2, (100, D_0)).float()
data_loader = DataLoader(TensorDataset(x,y), batch_size=10, shuffle=True)

# record the mean loss for each epoch so we can plot it afterwards
losses = []

# loop over the dataset 100 times
for epoch in range(100):
    epoch_loss = 0.0 
    # loop over batches 
    for i, data in enumerate(data_loader):
        # retrieve imputs and labels for this batch 
        x_batch, y_batch = data
        # zero the parameter gradients
        optimizer.zero_grad()
        # forward pass 
        pred = model(x_batch)
        loss = criterian(pred, y_batch)
        #backward pass 
        loss.backward()
        # SGD update 
        optimizer.step()
        # update statistics 
        epoch_loss += loss.item()
    # mean loss per batch, so the value doesn't depend on the number of batches 
    epoch_loss /= len(data_loader)
    losses.append(epoch_loss)
    # print error
    print(f'Epoch {epoch: 5d}, loss {epoch_loss: .3f}')
    # tell scheduler to consider updating learning rate 
    scheduler.step()


# plot the training loss against the epoch number 
fig, ax = plt.subplots(figsize=(7,4))
ax.plot(range(1, len(losses) + 1), losses, color='#3b6fd4', linewidth=2)
ax.set_xlabel('Epoch')
ax.set_ylabel('Training loss (BCE)')
ax.set_title('Training loss per epoch')
# keep the grid and frame recessive so the curve dominates 
ax.grid(True, color='#e5e5e5', linewidth=0.8)
ax.set_axisbelow(True)
for side in ('top', 'right'):
    ax.spines[side].set_visible(False)
fig.tight_layout()
plt.show()

