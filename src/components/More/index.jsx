import {
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    MoreContainer,
    MoreInnerList,
    MoreInnerP,
    MoreLink,
    MoreOuterList,
    MoreRow,
    MoreRow2,
    MoreWrapper,
    Subtitle,
    TextWrapper,
    TopLine,
} from "@/components/More/MoreElements";
import img from "@/images/more.svg";

const book = [
    {
        text: "Computer vision: models, learning, and inference",
        link: "http://computervisionmodels.com",
        details: [
            "2012 book published with CUP",
            "Focused on probabilistic models",
            'Pre-"deep learning"',
            "Lots of ML content",
            "Individual chapters available below",
        ],
    },
];

const transformersAndLLMs = [
    {
        text: "Intro to LLMs",
        link: "https://www.borealisai.com/research-blogs/a-high-level-overview-of-large-language-models/",
        details: [
            "What is an LLM?",
            "Pretraining",
            "Instruction fine-tuning",
            "Reinforcement learning from human feedback",
            "Notable LLMs",
            "LLMs without training from scratch",
        ],
    },
    {
        text: "Transformers I",
        link: "https://www.borealisai.com/en/blog/tutorial-14-transformers-i-introduction/",
        details: [
            "Dot-Product self-attention",
            "Scaled dot-product self-attention",
            "Position encoding",
            "Multiple heads",
            "Transformer block",
            "Encoders",
            "Decoders",
            "Encoder-Decoders",
        ],
    },
    {
        text: "Transformers II",
        link: "https://www.borealisai.com/en/blog/tutorial-16-transformers-ii-extensions/",
        details: [
            "Sinusoidal position embeddings",
            "Learned position embeddings",
            "Relatives vs. absolute position embeddings",
            "Extending transformers to longer sequences",
            "Reducing attention matrix size",
            "Making attention matrix sparse",
            "Kernelizing attention computation",
            "Attention as an RNN",
            "Attention as a hypernetwork",
            "Attention as a routing network",
            "Attention and graphs",
            "Attention and convolutions",
            "Attention and gating",
            "Attention and memory retrieval",
        ],
    },
    {
        text: "Transformers III",
        link: "https://www.borealisai.com/en/blog/tutorial-17-transformers-iii-training/",
        details: [
            "Tricks for training transformers",
            "Why are these tricks required?",
            "Removing layer normalization",
            "Balancing residual dependencies",
            "Reducing optimizer variance",
            "How to train deeper transformers on small datasets",
        ],
    },
    {
        text: "Training and fine-tuning LLMs",
        link: "https://www.borealisai.com/research-blogs/training-and-fine-tuning-large-language-models/",
        details: [
            "Large language models",
            "Pretraining",
            "Supervised fine tuning",
            "Reinforcement learning from human feedback",
            "Direct preference optimization",
        ],
    },
    {
        text: "Speeding up inference in LLMs",
        link: "https://www.borealisai.com/research-blogs/speeding-up-inference-in-transformers/",
        details: [
            "Problems with transformers",
            "Attention-free transformers",
            "Complexity",
            "RWKV",
            "Linear transformers and performers",
            "Retentive network",
        ],
    },
];

const mathForMachineLearning = [
    {
        text: "Linear algebra",
        link: "https://drive.google.com/file/d/1j2v2n6STPnblOCZ1_GBcVAZrsYkjPYwR/view?usp=sharing",
        details: [
            "Vectors and matrices",
            "Determinant and trace",
            "Orthogonal matrices",
            "Null space",
            "Linear transformations",
            "Singular value decomposition",
            "Least squares problems",
            "Principal direction problems",
            "Inversion of block matrices",
            "Schur complement identity",
            "Sherman-Morrison-Woodbury",
            "Matrix determinant lemma",
        ],
    },
    {
        text: "Introduction to probability",
        link: "https://drive.google.com/file/d/1cmxXneW122-hcfmMRjEE-n5C9T2YvuQX/view?usp=sharing",
        details: [
            "Random variables",
            "Joint probability",
            "Marginal probability",
            "Conditional probability",
            "Bayes' rule",
            "Independence",
            "Expectation",
        ],
    },
    {
        text: "Probability distributions",
        link: "https://drive.google.com/file/d/1GI3eZNB1CjTqYHLyuRhCV215rwqANVOx/view?usp=sharing",
        details: [
            "Bernouilli distribution",
            "Beta distribution",
            "Categorical distribution",
            "Dirichlet distribution",
            "Univariate normal distribution",
            "Normal inverse-scaled gamma distribution",
            "Multivariate normal distribution",
            "Normal inverse Wishart distribution",
            "Conjugacy",
        ],
    },
    {
        text: "Fitting probability distributions",
        link: "https://drive.google.com/file/d/1DZ4rCmC7AZ8PFc51PiMUIkBO-xqKT_CG/view?usp=sharing",
        details: [
            "Maximum likelihood",
            "Maximum a posteriori",
            "Bayesian approach",
            "Example: fitting normal",
            "Example: fitting categorical",
        ],
    },
    {
        text: "The normal distribution",
        link: "https://drive.google.com/file/d/1CTfmsN-HJWZBRj8lY0ZhgHEbPCmYXWnA/view?usp=sharing",
        details: [
            "Types of covariance matrix",
            "Decomposition of covariance",
            "Linear transformations",
            "Marginal distributions",
            "Conditional distributions",
            "Product of two normals",
            "Change of variable formula",
        ],
    },
];

const optimization = [
    {
        text: "Gradient-based optimization",
        link: "https://drive.google.com/file/d/1IoOSfJ0ku89aVyM9qygPl4MVnAhMEbAZ/view?usp=sharing",
        details: [
            "Convexity",
            "Steepest descent",
            "Newton's method",
            "Gauss-Newton method",
            "Line search",
            "Reparameterization",
        ],
    },
    {
        text: "Bayesian optimization",
        link: "https://www.borealisai.com/en/blog/tutorial-8-bayesian-optimization/",
        details: [
            "Gaussian processes",
            "Acquisition functions",
            "Incorporating noise",
            "Kernel choice",
            "Learning GP parameters",
            "Tips, tricks, and limitations",
            "Beta-Bernoulli bandit",
            "Random forests for BO",
            "Tree-Parzen estimators",
        ],
    },
    {
        text: "SAT Solvers I",
        link: "https://www.borealisai.com/en/blog/tutorial-9-sat-solvers-i-introduction-and-applications/",
        details: [
            "Boolean logic and satisfiability",
            "Conjunctive normal form",
            "The Tseitin transformation",
            "SAT and related problems",
            "SAT constructions",
            "Graph coloring and scheduling",
            "Fitting binary neural networks",
            "Fitting decision trees",
        ],
    },
    {
        text: "SAT Solvers II",
        link: "https://www.borealisai.com/en/blog/tutorial-10-sat-solvers-ii-algorithms/",
        details: [
            "Conditioning",
            "Resolution",
            "Solving 2-SAT by unit propagation",
            "Directional resolution",
            "SAT as binary search",
            "DPLL",
            "Conflict driven clause learning",
        ],
    },
    {
        text: "SAT Solvers III",
        link: "https://www.borealisai.com/en/blog/tutorial-11-sat-solvers-iii-factor-graphs-and-smt-solvers/",
        details: [
            "Satisfiability vs. problem size",
            "Factor graph representation",
            "Max product / sum product for SAT",
            "Survey propagation",
            "SAT with non-binary variables",
            "SMT solvers",
        ],
    },
];

const temporalModels = [
    {
        text: "Temporal models",
        link: "https://drive.google.com/file/d/1rrzGNyZDjXQ3_9ZqCGDmRMM3GYtHSBvj/view?usp=sharing",
        details: [
            "Kalman filter",
            "Smoothing",
            "Extended Kalman filter",
            "Unscented Kalman filter",
            "Particle filtering",
        ],
    },
];

const computerVision = [
    {
        text: "Image Processing",
        link: "https://drive.google.com/file/d/1r3V1GC5grhPF2pD91izuE0hTrTUEpQ9I/view?usp=sharing",
        details: [
            "Whitening",
            "Histogram equalization",
            "Filtering",
            "Edges and corners",
            "Dimensionality reduction",
        ],
    },
    {
        text: "Pinhole camera",
        link: "https://drive.google.com/file/d/1dbMBE13MWcd84dEGjYeWsC6eXouoC0xn/view?usp=sharing",
        details: [
            "Pinhole camera model",
            "Radial distortion",
            "Homogeneous coordinates",
            "Learning extrinsic parameters",
            "Learning intrinsic parameters",
            "Inferring three-dimensional world points",
        ],
    },
    {
        text: "Geometric transformations",
        link: "https://drive.google.com/file/d/1UArrb1ovqvZHbv90MufkW372r__ZZACQ/view?usp=sharing",
        details: [
            "Euclidean, similarity, affine, projective transformations",
            "Fitting transformation models",
            "Inference in transformation models",
            "Three geometric problems for planes",
            "Transformations between images",
            "Robust learning of transformations",
        ],
    },
    {
        text: "Multiple cameras",
        link: "https://drive.google.com/file/d/1RqUoc7kvK8vqZF1NVuw7bIex9v4_QlSx/view?usp=sharing",
        details: [
            "Two view geometry",
            "The essential matrix",
            "The fundamental matrix",
            "Two-view reconstruction pipeline",
            "Rectification",
            "Multiview reconstruction",
        ],
    },
];

const reinforcementLearning = [
    {
        text: "Transformers in RL",
        link: "https://arxiv.org/abs/2307.05979",
        details: [
            "Challenges in RL",
            "Advantages of transformers for RL",
            "Representation learning",
            "Transition function learning",
            "Reward learning",
            "Policy learning",
            "Training strategy",
            "Interpretability",
            "Applications",
        ],
    },
];

const aiTheory = [
    {
        text: "Gradient flow",
        link: "https://www.borealisai.com/research-blogs/gradient-flow/",
        details: [
            "Gradient flow",
            "Evolution of residual",
            "Evolution of parameters",
            "Evolution of model predictions",
            "Evolution of prediction covariance",
        ],
    },
    {
        text: "Neural tangent kernel",
        link: "https://www.borealisai.com/research-blogs/the-neural-tangent-kernel/",
        details: [
            "Infinite width neural networks",
            "Training dynamics",
            "Empirical NTK for shallow network",
            "Analytical NTK for shallow network",
            "Empirical NTK for deep network",
            "Analytical NTK for deep network",
        ],
    },
    {
        text: "NTK applications",
        link: "https://www.borealisai.com/research-blogs/neural-tangent-kernel-applications/",
        details: [
            "Trainability",
            "Convergence bounds",
            "Evolution of parameters",
            "Evolution of predictions",
            "NTK Gaussian processes",
            "NTK and generalizability",
        ],
    },
];

const unsupervisedLearning = [
    {
        text: "Modeling complex data densities",
        link: "https://drive.google.com/file/d/1BrPHxAuyz28hhz_FtbO0A1cWYdMs2_h8/view?usp=sharing",
        details: [
            "Hidden variables",
            "Expectation maximization",
            "Mixture of Gaussians",
            "The t-distribution",
            "Factor analysis",
            "The EM algorithm in detail",
        ],
    },
    {
        text: "Variational autoencoders",
        link: "https://www.borealisai.com/en/blog/tutorial-5-variational-auto-encoders/",
        details: [
            "Non-linear latent variable models",
            "Evidence lower bound (ELBO)",
            "ELBO properties",
            "Variational approximation",
            "The variational autoencoder",
            "Reparameterization trick",
        ],
    },
    {
        text: "Normalizing flows: introduction and review",
        link: "https://arxiv.org/abs/1908.09257",
        details: [
            "Normalizing flows",
            "Elementwise and linear flows",
            "Planar and radial flows",
            "Coupling and auto-regressive flows",
            "Coupling functions",
            "Residual flows",
            "Infinitesimal (continuous) flows",
            "Datasets and performance",
        ],
    },
];

const graphicalModels = [
    {
        text: "Graphical models",
        link: "https://drive.google.com/file/d/1ghgeRmeZMyzNHcuzVwS4vRP6BXi3npVO/view?usp=sharing",
        details: [
            "Conditional independence",
            "Directed graphical models",
            "Undirected graphical models",
            "Inference in graphical models",
            "Sampling in graphical models",
            "Learning in graphical models",
        ],
    },
    {
        text: "Models for chains and trees",
        link: "https://drive.google.com/file/d/1WAMc3wtZoPv5wRkdF-D0SShVYF6Net84/view?usp=sharing",
        details: [
            "Hidden Markov models",
            "Viterbi algorithm",
            "Forward-backward algorithm",
            "Belief propagation",
            "Sum product algorithm",
            "Extension to trees",
            "Graphs with loops",
        ],
    },
    {
        text: "Models for grids",
        link: "https://drive.google.com/file/d/1qqS9OfA1z7t12M45UaBr4CSCj1jwzcwz/view?usp=sharing",
        details: [
            "Markov random fields",
            "MAP inference in binary pairwise MRFs",
            "Graph cuts",
            "Multi-label pairwise MRFs",
            "Alpha-expansion algorithm",
            "Conditional random fields",
        ],
    },
];

const machineLearning = [
    {
        text: "Learning and inference",
        link: "https://drive.google.com/file/d/1ArWWi-qbzK2ih6KpOeIF8wX5g3S4J5DY/view?usp=sharing",
        details: [
            "Discriminative models",
            "Generative models",
            "Example: regression",
            "Example: classification",
        ],
    },
    {
        text: "Regression models",
        link: "https://drive.google.com/file/d/1QZX5jm4xN8rhpvdjRsFP5Ybw1EXSNGaL/view?usp=sharing",
        details: [
            "Linear regression",
            "Bayesian linear regression",
            "Non-linear regression",
            "Bayesian non-linear regression",
            "The kernel trick",
            "Gaussian process regression",
            "Sparse linear regression",
            "Relevance vector regression",
        ],
    },
    {
        text: "Classification models",
        link: "https://drive.google.com/file/d/1-_f4Yfm8iBWcaZ2Gyjw6O0eZiODipmSV/view?usp=sharing",
        details: [
            "Logistic regression",
            "Bayesian logistic regression",
            "Non-linear logistic regression",
            "Gaussian process classification",
            "Relevance vector classification",
            "Incremental fitting: boosting and trees",
            "Multi-class logistic regression",
        ],
    },
    {
        text: "Few-shot learning and meta-learning I",
        link: "https://www.borealisai.com/en/blog/tutorial-2-few-shot-learning-and-meta-learning-i/",
        details: [
            "Meta-learning framework",
            "Approaches to meta-learning",
            "Matching networks",
            "Prototypical networks",
            "Relation networks",
        ],
    },
    {
        text: "Few-shot learning and meta-learning II",
        link: "https://www.borealisai.com/en/blog/tutorial-3-few-shot-learning-and-meta-learning-ii/",
        details: [
            "MAML & Reptile",
            "LSTM based meta-learning",
            "Reinforcement learning based approaches",
            "Memory augmented neural networks",
            "SNAIL",
            "Generative models",
            "Data augmentation approaches",
        ],
    },
];

const nlp = [
    {
        text: "Neural natural language generation I",
        link: "https://www.borealisai.com/en/blog/tutorial-6-neural-natural-language-generation-decoding-algorithms/",
        details: [
            "Encoder-decoder architecture",
            "Maximum-likelihood training",
            "Greedy search",
            "Beam search",
            "Diverse beam search",
            "Top-k sampling",
            "Nucleus sampling",
        ],
    },
    {
        text: "Neural natural language generation II",
        link: "https://www.borealisai.com/en/blog/tutorial-7-neural-natural-language-generation-sequence-level-training/",
        details: [
            "Fine-tuning with reinforcement learning",
            "Training from scratch with RL",
            "RL vs. structured prediction",
            "Minimum risk training",
            "Scheduled sampling",
            "Beam search optimization",
            "SeaRNN",
            "Reward-augmented maximum likelihood",
        ],
    },
    {
        text: "Parsing I",
        link: "https://www.borealisai.com/en/blog/tutorial-15-parsing-i-context-free-grammars-and-cyk-algorithm/",
        details: [
            "Parse trees",
            "Context-free grammars",
            "Chomsky normal form",
            "CYK recognition algorithm",
            "Worked example",
        ],
    },
    {
        text: "Parsing II",
        link: "https://www.borealisai.com/en/blog/tutorial-18-parsing-ii-wcfgs-inside-algorithm-and-weighted-parsing/",
        details: [
            "Weighted context-free grammars",
            "Semirings",
            "Inside algorithm",
            "Inside weights",
            "Weighted parsing",
        ],
    },
    {
        text: "Parsing III",
        link: "https://www.borealisai.com/en/blog/tutorial-19-parsing-iii-pcfgs-and-inside-outside-algorithm/",
        details: [
            "Probabilistic context-free grammars",
            "Parameter estimation (supervised)",
            "Parameter estimation (unsupervised)",
            "Viterbi training",
            "Expectation maximization",
            "Outside from inside",
            "Interpretation of outside weights",
        ],
    },
    {
        text: "XLNet",
        link: "https://www.borealisai.com/en/blog/understanding-xlnet/",
        details: [
            "Language modeling",
            "XLNet training objective",
            "Permutations",
            "Attention mask",
            "Two stream self-attention",
        ],
    },
];

const responsibleAI = [
    {
        text: "Bias and fairness",
        link: "https://www.borealisai.com/en/blog/tutorial1-bias-and-fairness-ai/",
        details: [
            "Sources of bias",
            "Demographic Parity",
            "Equality of odds",
            "Equality of opportunity",
            "Individual fairness",
            "Bias mitigation",
        ],
    },
    {
        text: "Explainability I",
        link: "https://www.borealisai.com/research-blogs/explainability-i-local-post-hoc-explanations/",
        details: [
            "Taxonomy of XAI approaches",
            "Local post-hoc explanations",
            "Individual conditional explanation",
            "Counterfactual explanations",
            "LIME & Anchors",
            "Shapley additive explanations & SHAP",
        ],
    },
    {
        text: "Explainability II",
        link: "https://www.borealisai.com/research-blogs/explainability-ii-global-explanations-proxy-models-and-interpretable-models/",
        details: [
            "Global feature importance",
            "Partial dependence & ICE plots",
            "Accumulated local effects",
            "Aggregate SHAP values",
            "Prototypes & criticisms",
            "Surrogate / proxy models",
            "Inherently interpretable models",
        ],
    },
    {
        text: "Differential privacy I",
        link: "https://www.borealisai.com/en/blog/tutorial-12-differential-privacy-i-introduction/",
        details: [
            "Early approaches to privacy",
            "Fundamental law of information recovery",
            "Differential privacy",
            "Properties of differential privacy",
            "The Laplace mechanism",
            "Examples",
            "Other mechanisms and definitions",
        ],
    },
    {
        text: "Differential privacy II",
        link: "https://www.borealisai.com/en/blog/tutorial-13-differential-privacy-ii-machine-learning-and-data-generation/",
        details: [
            "Differential privacy and matchine learning",
            "DPSGD",
            "PATE",
            "Differentially private data generation",
            "DPGAN",
            "PateGAN",
        ],
    },
];

export default function MoreSection() {
    return (
        <>
            <MoreContainer lightBg={true} id="More">
                <MoreWrapper>
                    <MoreRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>More</TopLine>
                                <Heading lightText={false}>Further reading</Heading>
                                <Subtitle darkText={true}>
                                    Other articles, blogs, and books that I have written. Most in a
                                    similar style and using the same notation as Understanding Deep
                                    Learning.
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt="More" />
                            </ImgWrap>
                        </Column2>
                    </MoreRow>
                    <MoreRow2>
                        <Column1>
                            <TopLine>Book</TopLine>
                            <MoreOuterList>
                                {book.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>

                            <TopLine>Transformers & LLMs</TopLine>
                            <MoreOuterList>
                                {transformersAndLLMs.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>

                            <TopLine>Math for machine learning</TopLine>
                            <MoreOuterList>
                                {mathForMachineLearning.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>

                            <TopLine>Optimization</TopLine>
                            <MoreOuterList>
                                {optimization.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>

                            <TopLine>Temporal models</TopLine>
                            <MoreOuterList>
                                {temporalModels.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>

                            <TopLine>Computer vision</TopLine>
                            <MoreOuterList>
                                {computerVision.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>

                            <TopLine>Reinforcement learning</TopLine>
                            <MoreOuterList>
                                {reinforcementLearning.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>
                        </Column1>

                        <Column2>
                            <TopLine>AI Theory</TopLine>
                            <MoreOuterList>
                                {aiTheory.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>

                            <TopLine>Unsupervised learning</TopLine>
                            <MoreOuterList>
                                {unsupervisedLearning.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>

                            <TopLine>Graphical Models</TopLine>
                            <MoreOuterList>
                                {graphicalModels.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>

                            <TopLine>Machine learning</TopLine>
                            <MoreOuterList>
                                {machineLearning.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>

                            <TopLine>Natural language processing</TopLine>
                            <MoreOuterList>
                                {nlp.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>

                            <TopLine>Responsible AI</TopLine>
                            <MoreOuterList>
                                {responsibleAI.map((item, index) => (
                                    <li key={index}>
                                        <MoreLink href={item.link} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                ))}
                            </MoreOuterList>
                        </Column2>
                    </MoreRow2>
                </MoreWrapper>
            </MoreContainer>
        </>
    );
}
