import React from 'react'
import { NBLink, ImgWrap, Img, NotebookContainer, NotebookWrapper, NotebookRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle} from './NotebookElements'

// export const homeObjOne = {
//     id: 'about',
//     lightBg: false,
//     lightText: true,
//     lightTextDesc: true,
//     topLine: 'Premium Bank',
//     headline: 'Unlimited transactions with zero fees',
//     description:
//       'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
//     buttonLabel: 'Get Started',
//     imgStart: false,
//     img: require('../../images/svg-1.svg').default,
//     alt: 'Car',
//     dark: true,
//     primary: true,
//     darkText: false
//   };

import img from '../../images/coding.svg'



const NotebookSection = () => {
    return (
        <>
            <NotebookContainer lightBg={false} id='Notebooks'>
                <NotebookWrapper>
                    <NotebookRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Coding exercises</TopLine>
                                <Heading lightText={true}>Python notebooks covering the whole text</Heading>
                                <Subtitle darkText={false}>Sixty eight python notebook exercises with missing code to fill in based on the text</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt='Car'/>
                            </ImgWrap>
                        </Column2>
                    </NotebookRow>
                    <NotebookRow>
                        <Column1>
                            <ul>
                                <li> Notebook 1.1 - Background mathematics: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap01/1_1_BackgroundMathematics.ipynb">ipynb/colab</NBLink>
                                </li>
                                <li> Notebook 2.1 - Supervised learning: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap02/2_1_Supervised_Learning.ipynb">ipynb/colab</NBLink>
                                </li>
                                <li> Notebook 3.1 - Shallow networks I: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap03/3_1_Shallow_Networks_I.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 3.2 - Shallow networks II: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap03/3_2_Shallow_Networks_II.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 3.3 - Shallow network regions: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap03/3_3_Shallow_Network_Regions.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 3.4 - Activation functions: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap03/3_4_Activation_Functions.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 4.1 - Composing networks: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap04/4_1_Composing_Networks.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 4.2 - Clipping functions: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap04/4_2_Clipping_functions.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 4.3 - Deep networks: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap04/4_3_Deep_Networks.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 5.1 - Least squares loss: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap05/5_1_Least_Squares_Loss.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 5.2 - Binary cross-entropy loss: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap05/5_2_Binary_Cross_Entropy_Loss.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 5.3 - Multiclass cross-entropy loss: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap05/5_3_Multiclass_Cross_entropy_Loss.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 6.1 - Line search: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap06/6_1_Line_Search.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 6.2 - Gradient descent: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap06/6_2_Gradient_Descent.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 6.3 - Stochastic gradient descent: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap06/6_3_Stochastic_Gradient_Descent.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 6.4 - Momentum: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap06/6_4_Momentum.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 6.5 - Adam: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap06/6_5_Adam.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 7.1 - Backpropagation in toy model: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap07/7_1_Backpropagation_in_Toy_Model.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 7.2 - Backpropagation: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap07/7_2_Backpropagation.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 7.3 - Initialization: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap07/7_3_Initialization.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 8.1 - MNIST-1D performance: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap08/8_1_MNIST_1D_Performance.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 8.2 - Bias-variance trade-off: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap08/8_2_Bias_Variance_Trade_Off.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 8.3 - Double descent: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap08/8_3_Double_Descent.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 8.4 - High-dimensional spaces: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap08/8_4_High_Dimensional_Spaces.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 9.1 - L2 regularization: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap09/9_1_L2_Regularization.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 9.2 - Implicit regularization: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap09/9_2_Implicit_Regularization.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 9.3 - Ensembling: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap09/9_3_Ensembling.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 9.4 - Bayesian approach: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap09/9_4_Bayesian_Approach.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 9.5 - Augmentation <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap09/9_5_Augmentation.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 10.1 - 1D convolution: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap10/10_1_1D_Convolution.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 10.2 - Convolution for MNIST-1D: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap10/10_2_Convolution_for_MNIST_1D.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 10.3 - 2D convolution: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap10/10_3_2D_Convolution.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 10.4 - Downsampling & upsampling: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap10/10_4_Downsampling_and_Upsampling.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 10.5 - Convolution for MNIST: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap10/10_5_Convolution_For_MNIST.ipynb">ipynb/colab </NBLink>
                                </li>
                            </ul>
                        </Column1>
                        <Column2>
                        <ul>
                                <li> Notebook 11.1 - Shattered gradients: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap11/11_1_Shattered_Gradients.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 11.2 - Residual networks: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap11/11_2_Residual_Networks.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 11.3 - Batch normalization: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap11/11_3_Batch_Normalization.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 12.1 - Self-attention: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap12/12_1_Self_Attention.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 12.2 - Multi-head self-attention: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap12/12_2_Multihead_Self_Attention.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 12.3 - Tokenization: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap12/12_3_Tokenization.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 12.4 - Decoding strategies: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap12/12_4_Decoding_Strategies.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 13.1 - Encoding graphs: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap13/13_1_Graph_Representation.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 13.2 - Graph classification : <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap13/13_2_Graph_Classification.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 13.3 - Neighborhood sampling: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap13/13_3_Neighborhood_Sampling.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 13.4 - Graph attention: <NBLink
                                        href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap13/13_4_Graph_Attention_Networks.ipynb">ipynb/colab </NBLink>
                                </li>
                                <li> Notebook 15.1 - GAN toy example: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap15/15_1_GAN_Toy_Example.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 15.2 - Wasserstein distance: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap15/15_2_Wasserstein_Distance.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 16.1 - 1D normalizing flows: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap16/16_1_1D_Normalizing_Flows.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 16.2 - Autoregressive flows: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap16/16_2_Autoregressive_Flows.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 16.3 - Contraction mappings: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap16/16_3_Contraction_Mappings.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 17.1 - Latent variable models: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap17/17_1_Latent_Variable_Models.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 17.2 - Reparameterization trick: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap17/17_2_Reparameterization_Trick.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 17.3 - Importance sampling: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap17/17_3_Importance_Sampling.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 18.1 - Diffusion encoder: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap18/18_1_Diffusion_Encoder.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 18.2 - 1D diffusion model: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap18/18_2_1D_Diffusion_Model.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 18.3 - Reparameterized model: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap18/18_3_Reparameterized_Model.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 18.4 - Families of diffusion models: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap18/18_4_Families_of_Diffusion_Models.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 19.1 - Markov decision processes: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap19/19_1_Markov_Decision_Processes.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 19.2 - Dynamic programming: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap19/19_2_Dynamic_Programming.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 19.3 - Monte-Carlo methods: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap19/19_3_Monte_Carlo_Methods.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 19.4 - Temporal difference methods: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap19/19_4_Temporal_Difference_Methods.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 19.5 - Control variates: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap19/19_5_Control_Variates.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 20.1 - Random data: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap20/20_1_Random_Data.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 20.2 - Full-batch gradient descent: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap20/20_2_Full_Batch_Gradient_Descent.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 20.3 - Lottery tickets: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap20/20_3_Lottery_Tickets.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 20.4 - Adversarial attacks: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap20/20_4_Adversarial_Attacks.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 21.1 - Bias mitigation: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap21/21_1_Bias_Mitigation.ipynb">ipynb/colab </NBLink></li>
                                <li> Notebook 21.2 - Explainability: <NBLink href="https://github.com/udlbook/udlbook/blob/main/Notebooks/Chap21/21_2_Explainability.ipynb">ipynb/colab </NBLink></li>
                            </ul>
                        </Column2>
                    </NotebookRow>

                </NotebookWrapper>
            </NotebookContainer>
        </>
    )
}

export default NotebookSection
