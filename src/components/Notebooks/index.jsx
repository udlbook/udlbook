import {
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    NBLink,
    NotebookContainer,
    NotebookRow,
    NotebookWrapper,
    Subtitle,
    TextWrapper,
    TopLine,
} from "@/components/Notebooks/NotebookElements";
import img from "@/images/coding.svg";

const notebooks = [
    {
        text: "Notebook 1.1 - Background mathematics",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap01/1_1_BackgroundMathematics.ipynb",
    },
    {
        text: "Notebook 2.1 - Supervised learning",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap02/2_1_Supervised_Learning.ipynb",
    },
    {
        text: "Notebook 3.1 - Shallow networks I",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap03/3_1_Shallow_Networks_I.ipynb",
    },
    {
        text: "Notebook 3.2 - Shallow networks II",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap03/3_2_Shallow_Networks_II.ipynb",
    },
    {
        text: "Notebook 3.3 - Shallow network regions",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap03/3_3_Shallow_Network_Regions.ipynb",
    },
    {
        text: "Notebook 3.4 - Activation functions",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap03/3_4_Activation_Functions.ipynb",
    },
    {
        text: "Notebook 4.1 - Composing networks",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap04/4_1_Composing_Networks.ipynb",
    },
    {
        text: "Notebook 4.2 - Clipping functions",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap04/4_2_Clipping_functions.ipynb",
    },
    {
        text: "Notebook 4.3 - Deep networks",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap04/4_3_Deep_Networks.ipynb",
    },
    {
        text: "Notebook 5.1 - Least squares loss",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap05/5_1_Least_Squares_Loss.ipynb",
    },
    {
        text: "Notebook 5.2 - Binary cross-entropy loss",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap05/5_2_Binary_Cross_Entropy_Loss.ipynb",
    },
    {
        text: "Notebook 5.3 - Multiclass cross-entropy loss",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap05/5_3_Multiclass_Cross_entropy_Loss.ipynb",
    },
    {
        text: "Notebook 6.1 - Line search",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap06/6_1_Line_Search.ipynb",
    },
    {
        text: "Notebook 6.2 - Gradient descent",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap06/6_2_Gradient_Descent.ipynb",
    },
    {
        text: "Notebook 6.3 - Stochastic gradient descent",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap06/6_3_Stochastic_Gradient_Descent.ipynb",
    },
    {
        text: "Notebook 6.4 - Momentum",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap06/6_4_Momentum.ipynb",
    },
    {
        text: "Notebook 6.5 - Adam",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap06/6_5_Adam.ipynb",
    },
    {
        text: "Notebook 7.1 - Backpropagation in toy model",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap07/7_1_Backpropagation_in_Toy_Model.ipynb",
    },
    {
        text: "Notebook 7.2 - Backpropagation",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap07/7_2_Backpropagation.ipynb",
    },
    {
        text: "Notebook 7.3 - Initialization",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap07/7_3_Initialization.ipynb",
    },
    {
        text: "Notebook 8.1 - MNIST-1D performance",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap08/8_1_MNIST_1D_Performance.ipynb",
    },
    {
        text: "Notebook 8.2 - Bias-variance trade-off",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap08/8_2_Bias_Variance_Trade_Off.ipynb",
    },
    {
        text: "Notebook 8.3 - Double descent",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap08/8_3_Double_Descent.ipynb",
    },
    {
        text: "Notebook 8.4 - High-dimensional spaces",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap08/8_4_High_Dimensional_Spaces.ipynb",
    },
    {
        text: "Notebook 9.1 - L2 regularization",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap09/9_1_L2_Regularization.ipynb",
    },
    {
        text: "Notebook 9.2 - Implicit regularization",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap09/9_2_Implicit_Regularization.ipynb",
    },
    {
        text: "Notebook 9.3 - Ensembling",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap09/9_3_Ensembling.ipynb",
    },
    {
        text: "Notebook 9.4 - Bayesian approach",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap09/9_4_Bayesian_Approach.ipynb",
    },
    {
        text: "Notebook 9.5 - Augmentation",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap09/9_5_Augmentation.ipynb",
    },
    {
        text: "Notebook 10.1 - 1D convolution",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap10/10_1_1D_Convolution.ipynb",
    },
    {
        text: "Notebook 10.2 - Convolution for MNIST-1D",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap10/10_2_Convolution_for_MNIST_1D.ipynb",
    },
    {
        text: "Notebook 10.3 - 2D convolution",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap10/10_3_2D_Convolution.ipynb",
    },
    {
        text: "Notebook 10.4 - Downsampling & upsampling",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap10/10_4_Downsampling_and_Upsampling.ipynb",
    },
    {
        text: "Notebook 10.5 - Convolution for MNIST",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap10/10_5_Convolution_For_MNIST.ipynb",
    },
    {
        text: "Notebook 11.1 - Shattered gradients",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap11/11_1_Shattered_Gradients.ipynb",
    },
    {
        text: "Notebook 11.2 - Residual networks",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap11/11_2_Residual_Networks.ipynb",
    },
    {
        text: "Notebook 11.3 - Batch normalization",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap11/11_3_Batch_Normalization.ipynb",
    },
    {
        text: "Notebook 12.1 - Self-attention",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap12/12_1_Self_Attention.ipynb",
    },
    {
        text: "Notebook 12.2 - Multi-head self-attention",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap12/12_2_Multihead_Self_Attention.ipynb",
    },
    {
        text: "Notebook 12.3 - Tokenization",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap12/12_3_Tokenization.ipynb",
    },
    {
        text: "Notebook 12.4 - Decoding strategies",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap12/12_4_Decoding_Strategies.ipynb",
    },
    {
        text: "Notebook 13.1 - Encoding graphs",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap13/13_1_Graph_Representation.ipynb",
    },
    {
        text: "Notebook 13.2 - Graph classification",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap13/13_2_Graph_Classification.ipynb",
    },
    {
        text: "Notebook 13.3 - Neighborhood sampling",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap13/13_3_Neighborhood_Sampling.ipynb",
    },
    {
        text: "Notebook 13.4 - Graph attention",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap13/13_4_Graph_Attention_Networks.ipynb",
    },
    {
        text: "Notebook 15.1 - GAN toy example",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap15/15_1_GAN_Toy_Example.ipynb",
    },
    {
        text: "Notebook 15.2 - Wasserstein distance",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap15/15_2_Wasserstein_Distance.ipynb",
    },
    {
        text: "Notebook 16.1 - 1D normalizing flows",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap16/16_1_1D_Normalizing_Flows.ipynb",
    },
    {
        text: "Notebook 16.2 - Autoregressive flows",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap16/16_2_Autoregressive_Flows.ipynb",
    },
    {
        text: "Notebook 16.3 - Contraction mappings",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap16/16_3_Contraction_Mappings.ipynb",
    },
    {
        text: "Notebook 17.1 - Latent variable models",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap17/17_1_Latent_Variable_Models.ipynb",
    },
    {
        text: "Notebook 17.2 - Reparameterization trick",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap17/17_2_Reparameterization_Trick.ipynb",
    },
    {
        text: "Notebook 17.3 - Importance sampling",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap17/17_3_Importance_Sampling.ipynb",
    },
    {
        text: "Notebook 18.1 - Diffusion encoder",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap18/18_1_Diffusion_Encoder.ipynb",
    },
    {
        text: "Notebook 18.2 - 1D diffusion model",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap18/18_2_1D_Diffusion_Model.ipynb",
    },
    {
        text: "Notebook 18.3 - Reparameterized model",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap18/18_3_Reparameterized_Model.ipynb",
    },
    {
        text: "Notebook 18.4 - Families of diffusion models",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap18/18_4_Families_of_Diffusion_Models.ipynb",
    },
    {
        text: "Notebook 19.1 - Markov decision processes",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap19/19_1_Markov_Decision_Processes.ipynb",
    },
    {
        text: "Notebook 19.2 - Dynamic programming",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap19/19_2_Dynamic_Programming.ipynb",
    },
    {
        text: "Notebook 19.3 - Monte-Carlo methods",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap19/19_3_Monte_Carlo_Methods.ipynb",
    },
    {
        text: "Notebook 19.4 - Temporal difference methods",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap19/19_4_Temporal_Difference_Methods.ipynb",
    },
    {
        text: "Notebook 19.5 - Control variates",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap19/19_5_Control_Variates.ipynb",
    },
    {
        text: "Notebook 20.1 - Random data",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap20/20_1_Random_Data.ipynb",
    },
    {
        text: "Notebook 20.2 - Full-batch gradient descent",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap20/20_2_Full_Batch_Gradient_Descent.ipynb",
    },
    {
        text: "Notebook 20.3 - Lottery tickets",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap20/20_3_Lottery_Tickets.ipynb",
    },
    {
        text: "Notebook 20.4 - Adversarial attacks",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap20/20_4_Adversarial_Attacks.ipynb",
    },
    {
        text: "Notebook 21.1 - Bias mitigation",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap21/21_1_Bias_Mitigation.ipynb",
    },
    {
        text: "Notebook 21.2 - Explainability",
        link: "https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap21/21_2_Explainability.ipynb",
    },
];

export default function NotebookSection() {
    return (
        <>
            <NotebookContainer lightBg={false} id="Notebooks">
                <NotebookWrapper>
                    <NotebookRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Coding exercises</TopLine>
                                <Heading lightText={true}>
                                    Python notebooks covering the whole text
                                </Heading>
                                <Subtitle darkText={false}>
                                    Sixty eight python notebook exercises with missing code to fill
                                    in based on the text
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt="Coding" />
                            </ImgWrap>
                        </Column2>
                    </NotebookRow>
                    <NotebookRow>
                        <Column1>
                            <ul>
                                {/* render first half of notebooks*/}
                                {notebooks.slice(0, notebooks.length / 2).map((notebook, index) => (
                                    <li key={index}>
                                        {notebook.text}:{" "}
                                        <NBLink href={notebook.link}>ipynb/colab</NBLink>
                                    </li>
                                ))}
                            </ul>
                        </Column1>
                        <Column2>
                            <ul>
                                {/* render second half of notebooks*/}
                                {notebooks.slice(notebooks.length / 2).map((notebook, index) => (
                                    <li key={index}>
                                        {notebook.text}:{" "}
                                        <NBLink href={notebook.link}>ipynb/colab</NBLink>
                                    </li>
                                ))}
                            </ul>
                        </Column2>
                    </NotebookRow>
                </NotebookWrapper>
            </NotebookContainer>
        </>
    );
}
