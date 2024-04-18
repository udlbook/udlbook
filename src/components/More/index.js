import React from 'react'
import { ImgWrap, Img, MoreContainer, MoreLink, MoreRow2, MoreWrapper, MoreRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, MoreOuterList, MoreInnerList, MoreInnerP} from './MoreElements'
import img from '../../images/more.svg'


const MoreSection = () => {
    return (
        <>
            <MoreContainer lightBg={true} id='More'>
                <MoreWrapper> 
                    <MoreRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>More</TopLine>
                                <Heading lightText={false}>Further reading</Heading>
                                <Subtitle darkText={true}>Other articles, blogs, and books that I have written. Most in a similar style and using the same notation as Understanding Deep Learning. </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt='Car'/>
                            </ImgWrap>
                        </Column2>
                    </MoreRow>
                    <MoreRow2>
                     
                        <Column1>
                            <TopLine>Book</TopLine>
                                <MoreOuterList>
                                    <li>
                                        <MoreLink href="http://computervisionmodels.com" target="_blank" rel="noreferrer">Computer vision: models, learning, and inference</MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                <li> 2012 book published with CUP </li>
                                                <li> Focused on probabilistic models </li>
                                                <li> Pre-"deep learning" </li>
                                                <li> Lots of ML content</li>
                                                <li> Individual chapters available below</li>
                                            </MoreInnerList> 
                                        </MoreInnerP>
                                    </li>
                                </MoreOuterList>

                            <TopLine>Transformers & LLMs</TopLine>
                            <MoreOuterList>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/research-blogs/a-high-level-overview-of-large-language-models/" target="_blank"  rel="noreferrer">Intro to LLMs</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> What is an LLM?</li>
                                            <li> Pretraining</li>
                                            <li> Instruction fine-tuning</li>
                                            <li> Reinforcement learning from human feedback</li>
                                            <li> Notable LLMs</li>
                                            <li> LLMs without training from scratch</li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-14-transformers-i-introduction/" target="_blank"  rel="noreferrer">Transformers I</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Dot-Product self-attention </li>
                                            <li> Scaled dot-product self-attention </li>
                                            <li> Position encoding</li>
                                            <li> Multiple heads </li>
                                            <li> Transformer block </li>
                                            <li> Encoders </li>
                                            <li> Decoders </li>
                                            <li> Encoder-Decoders </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-16-transformers-ii-extensions/" target="_blank"  rel="noreferrer">Transformers II</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Sinusoidal position embeddings </li>
                                            <li> Learned position embeddings </li>
                                            <li> Relatives vs. absolute position embeddings</li>
                                            <li> Extending transformers to longer sequences </li>
                                            <li> Reducing attention matrix size </li>
                                            <li> Making attention matrix sparse </li>
                                            <li> Kernelizing attention computation </li>
                                            <li> Attention as an RNN</li>
                                            <li> Attention as a hypernetwork </li>
                                            <li> Attention as a routing network </li>
                                            <li> Attention and graphs </li>
                                            <li> Attention and convolutions </li>
                                            <li> Attention and gating </li>
                                            <li> Attention and memory retrieval </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-17-transformers-iii-training/" target="_blank"  rel="noreferrer">Transformers III</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Tricks for training transformers </li>
                                            <li> Why are these tricks required? </li>
                                            <li> Removing layer normalization</li>
                                            <li> Balancing residual dependencies </li>
                                            <li> Reducing optimizer variance </li>
                                            <li> How to train deeper transformers on small datasets </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/research-blogs/training-and-fine-tuning-large-language-models/" target="_blank"  rel="noreferrer">Training and fine-tuning LLMs</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Large language models </li>
                                            <li> Pretraining </li>
                                            <li> Supervised fine tuning</li>
                                            <li> Reinforcement learning from human feedback </li>
                                            <li> Direct preference optimization</li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/research-blogs/speeding-up-inference-in-transformers/" target="_blank"  rel="noreferrer">Speeding up inference in LLMs</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Problems with transformers</li>
                                            <li> Attention-free transformers </li>
                                            <li> Complexity</li>
                                            <li> RWKV </li>
                                            <li> Linear transformers and performers</li>
                                            <li> Retentive network</li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                            </MoreOuterList>

                            <TopLine>Math for machine learning</TopLine>
                            <MoreOuterList>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1j2v2n6STPnblOCZ1_GBcVAZrsYkjPYwR/view?usp=sharing" target="_blank"  rel="noreferrer">Linear algebra</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Vectors and matrices </li>
                                            <li> Determinant and trace </li>
                                            <li> Orthogonal matrices </li>
                                            <li> Null space </li>
                                            <li> Linear transformations </li>
                                            <li> Singular value decomposition </li>
                                            <li> Least squares problems </li>
                                            <li> Principal direction problems </li>
                                            <li> Inversion of block matrices</li>
                                            <li> Schur complement identity</li>
                                            <li> Sherman-Morrison-Woodbury</li>
                                            <li> Matrix determinant lemma</li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1cmxXneW122-hcfmMRjEE-n5C9T2YvuQX/view?usp=sharing" target="_blank"  rel="noreferrer">Introduction to probability</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Random variables </li>
                                            <li> Joint probability </li>
                                            <li> Marginal probability </li>
                                            <li> Conditional probability </li>
                                            <li> Bayes' rule </li>
                                            <li> Independence </li>
                                            <li> Expectation </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1GI3eZNB1CjTqYHLyuRhCV215rwqANVOx/view?usp=sharing" target="_blank"  rel="noreferrer">Probability distributions</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Bernouilli distribution </li>
                                            <li> Beta distribution</li>
                                            <li> Categorical distribution </li>
                                            <li> Dirichlet distribution</li>
                                            <li> Univariate normal distribution </li>
                                            <li> Normal inverse-scaled gamma distribution </li>
                                            <li> Multivariate normal distribution </li>
                                            <li> Normal inverse Wishart distribution </li>
                                            <li> Conjugacy </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1DZ4rCmC7AZ8PFc51PiMUIkBO-xqKT_CG/view?usp=sharing" target="_blank"  rel="noreferrer">Fitting probability distributions</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Maximum likelihood </li>
                                            <li> Maximum a posteriori </li>
                                            <li> Bayesian approach </li>
                                            <li> Example: fitting normal </li>
                                            <li> Example: fitting categorical </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1CTfmsN-HJWZBRj8lY0ZhgHEbPCmYXWnA/view?usp=sharing" target="_blank"  rel="noreferrer">The normal distribution</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Types of covariance matrix </li>
                                            <li> Decomposition of covariance </li>
                                            <li> Linear transformations </li>
                                            <li> Marginal distributions </li>
                                            <li> Conditional distributions </li>
                                            <li> Product of two normals </li>
                                            <li> Change of variable formula </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                            </MoreOuterList>

                            <TopLine>Optimization</TopLine>
                            <MoreOuterList>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1IoOSfJ0ku89aVyM9qygPl4MVnAhMEbAZ/view?usp=sharing" target="_blank"  rel="noreferrer">Gradient-based optimization</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Convexity </li>
                                            <li> Steepest descent </li>
                                            <li> Newton's method </li>
                                            <li> Gauss-Newton method </li>
                                            <li> Line search </li>
                                            <li> Reparameterization </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-8-bayesian-optimization/" target="_blank"  rel="noreferrer">Bayesian optimization</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Gaussian processes </li>
                                            <li> Acquisition functions </li>
                                            <li> Incorporating noise</li>
                                            <li> Kernel choice </li>
                                            <li> Learning GP parameters </li>
                                            <li> Tips, tricks, and limitations  </li>
                                            <li> Beta-Bernoulli bandit  </li>
                                            <li> Random forests for BO </li>
                                            <li> Tree-Parzen estimators </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-9-sat-solvers-i-introduction-and-applications/" target="_blank"  rel="noreferrer">SAT Solvers I</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Boolean logic and satisfiability </li>
                                            <li> Conjunctive normal form </li>
                                            <li> The Tseitin transformation </li>
                                            <li> SAT and related problems </li>
                                            <li> SAT constructions </li>
                                            <li> Graph coloring and scheduling </li>
                                            <li> Fitting binary neural networks</li>
                                            <li> Fitting decision trees</li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-10-sat-solvers-ii-algorithms/" target="_blank"  rel="noreferrer">SAT Solvers II</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Conditioning </li>
                                            <li> Resolution </li>
                                            <li> Solving 2-SAT by unit propagation </li>
                                            <li> Directional resolution </li>
                                            <li> SAT as binary search </li>
                                            <li> DPLL </li>
                                            <li> Conflict driven clause learning</li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-11-sat-solvers-iii-factor-graphs-and-smt-solvers/" target="_blank"  rel="noreferrer">SAT Solvers III</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Satisfiability vs. problem size </li>
                                            <li> Factor graph representation </li>
                                            <li> Max product / sum product for SAT </li>
                                            <li> Survey propagation </li>
                                            <li> SAT with non-binary variables </li>
                                            <li> SMT solvers </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                            </MoreOuterList>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-11-sat-solvers-iii-factor-graphs-and-smt-solvers/" target="_blank"  rel="noreferrer">SAT Solvers III</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Satisfiability vs. problem size </li>
                                            <li> Factor graph representation </li>
                                            <li> Max product / sum product for SAT </li>
                                            <li> Survey propagation </li>
                                            <li> SAT with non-binary variables </li>
                                            <li> SMT solvers </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>

                            <TopLine>Computer vision</TopLine>
                                <MoreOuterList>
                                    <li>
                                        <MoreLink href="https://drive.google.com/file/d/1r3V1GC5grhPF2pD91izuE0hTrTUEpQ9I/view?usp=sharing" target="_blank" rel="noreferrer">Image Processing</MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList>
                                                <li> Whitening </li>
                                                <li> Histogram equalization </li>
                                                <li> Filtering </li>
                                                <li> Edges and corners </li>
                                                <li> Dimensionality reduction </li>
                                            </MoreInnerList> 
                                        </MoreInnerP>
                                    </li>
                                    <li>
                                        <MoreLink href="https://drive.google.com/file/d/1dbMBE13MWcd84dEGjYeWsC6eXouoC0xn/view?usp=sharing" target="_blank" rel="noreferrer">Pinhole camera</MoreLink>
                                        <MoreInnerP>
                                            <MoreInnerList> 
                                                <li> Pinhole camera model </li>
                                                <li> Radial distortion </li>
                                                <li> Homogeneous coordinates </li>
                                                <li> Learning extrinsic parameters </li>
                                                <li> Learning intrinsic parameters </li>
                                                <li> Inferring three-dimensional world points </li>
                                            </MoreInnerList>
                                        </MoreInnerP>
                                    </li>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1UArrb1ovqvZHbv90MufkW372r__ZZACQ/view?usp=sharing" target="_blank" rel="noreferrer">Geometric transformations</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Euclidean, similarity, affine, projective transformations </li>
                                            <li> Fitting transformation models </li>
                                            <li> Inference in transformation models </li>
                                            <li> Three geometric problems for planes </li>
                                            <li> Transformations between images </li>
                                            <li> Robust learning of transformations </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1RqUoc7kvK8vqZF1NVuw7bIex9v4_QlSx/view?usp=sharing" target="_blank" rel="noreferrer">Multiple cameras</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Two view geometry </li>
                                            <li> The essential matrix </li>
                                            <li> The fundamental matrix </li>
                                            <li> Two-view reconstruction pipeline </li>
                                            <li> Rectification </li>
                                            <li> Multiview reconstruction </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                            </MoreOuterList>  

                            <TopLine>Reinforcement learning</TopLine>
                            <MoreOuterList>
                                <li>
                                    <MoreLink href="https://arxiv.org/abs/2307.05979" target="_blank"  rel="noreferrer">Transformers in RL</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Challenges in RL</li>
                                            <li> Advantages of transformers for RL</li>
                                            <li> Representation learning</li>
                                            <li> Transition function learning</li>
                                            <li> Reward learning </li>
                                            <li> Policy learning </li>
                                            <li> Training strategy </li>
                                            <li> Interpretability </li>
                                            <li> Applications </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                            </MoreOuterList>
                        </Column1>

                        {/* ########################################### */}

                        <Column2>
                            <TopLine>AI Theory</TopLine>
                            <MoreOuterList>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/research-blogs/gradient-flow/" target="_blank"  rel="noreferrer">Gradient flow</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Gradient flow </li>
                                            <li> Evolution of residual </li>
                                            <li> Evolution of parameters </li>
                                            <li> Evolution of model predictions </li>
                                            <li> Evolution of prediction covariance </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                <MoreLink href="https://www.borealisai.com/research-blogs/the-neural-tangent-kernel/" target="_blank"  rel="noreferrer">Neural tangent kernel</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Infinite width neural networks </li>
                                            <li> Training dynamics </li>
                                            <li> Empirical NTK for shallow network</li>
                                            <li> Analytical NTK for shallow network </li>
                                            <li> Empirical NTK for ddep network </li>
                                            <li> Analtical NTK for deep network</li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                            </MoreOuterList>

                            <TopLine>Temporal models</TopLine>
                            <MoreOuterList>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1rrzGNyZDjXQ3_9ZqCGDmRMM3GYtHSBvj/view?usp=sharing" target="_blank"  rel="noreferrer">Temporal models</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Kalman filter </li>
                                            <li> Smoothing </li>
                                            <li> Extended Kalman filter </li>
                                            <li> Unscented Kalman filter </li>
                                            <li> Particle filtering </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                            </MoreOuterList>

                            <TopLine> Unsupervised learning</TopLine>
                            <MoreOuterList>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1BrPHxAuyz28hhz_FtbO0A1cWYdMs2_h8/view?usp=sharing" target="_blank"  rel="noreferrer">Modeling complex data densities</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Hidden variables </li>
                                            <li> Expectation maximization </li>
                                            <li> Mixture of Gaussians </li>
                                            <li> The t-distribution </li>
                                            <li> Factor analysis </li>
                                            <li> The EM algorithm in detail </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>

                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-5-variational-auto-encoders/" target="_blank"  rel="noreferrer">Variational autoencoders</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Non-linear latent variable models </li>
                                            <li> Evidence lower bound (ELBO) </li>
                                            <li> ELBO properties </li>
                                            <li> Variational approximation </li>
                                            <li> The variational autoencoder </li>
                                            <li> Reparameterization trick </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://arxiv.org/abs/1908.09257" target="_blank"  rel="noreferrer">Normalizing flows: introduction and review</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                        <li> Normalizing flows </li>
                                        <li> Elementwise and linear flows </li>
                                        <li> Planar and radial flows </li>
                                        <li> Coupling and auto-regressive flows </li>
                                        <li> Coupling functions </li>
                                        <li> Residual flows </li>
                                        <li> Infinitesimal (continuous) flows </li>
                                        <li> Datasets and performance </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                            </MoreOuterList>
                            <TopLine>Graphical Models</TopLine>
                            <MoreOuterList>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1ghgeRmeZMyzNHcuzVwS4vRP6BXi3npVO/view?usp=sharing" target="_blank"  rel="noreferrer">Graphical models</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Conditional independence </li>
                                            <li> Directed graphical models </li>
                                            <li> Undirected graphical models </li>
                                            <li> Inference in graphical models </li>
                                            <li> Sampling in graphical models </li>
                                            <li> Learning in graphical models </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1WAMc3wtZoPv5wRkdF-D0SShVYF6Net84/view?usp=sharing" target="_blank"  rel="noreferrer">Models for chains and trees</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Hidden Markov models </li>
                                            <li> Viterbi algorithm </li>
                                            <li> Forward-backward algorithm </li>
                                            <li> Belief propagation </li>
                                            <li> Sum product algorithm </li>
                                            <li> Extension to trees </li>
                                            <li> Graphs with loops </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1qqS9OfA1z7t12M45UaBr4CSCj1jwzcwz/view?usp=sharing" target="_blank"  rel="noreferrer">Models for grids</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Markov random fields </li>
                                            <li> MAP inference in binary pairwise MRFs </li>
                                            <li> Graph cuts </li>
                                            <li> Multi-label pairwise MRFs </li>
                                            <li> Alpha-expansion algorithm </li>
                                            <li> Conditional random fields </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                            </MoreOuterList>

                            <TopLine>Machine learning</TopLine>
                            <MoreOuterList>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1ArWWi-qbzK2ih6KpOeIF8wX5g3S4J5DY/view?usp=sharing" target="_blank"  rel="noreferrer">Learning and inference</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Discriminative models </li>
                                            <li> Generative models </li>
                                            <li> Example: regression </li>
                                            <li> Example: classification </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1QZX5jm4xN8rhpvdjRsFP5Ybw1EXSNGaL/view?usp=sharing" target="_blank"  rel="noreferrer">Regression models</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Linear regression </li>
                                            <li> Bayesian linear regression </li>
                                            <li> Non-linear regression </li>
                                            <li> Bayesian non-linear regression </li>
                                            <li> The kernel trick </li>
                                            <li> Gaussian process regression </li>
                                            <li> Sparse linear regression </li>
                                            <li> Relevance vector regression </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://drive.google.com/file/d/1-_f4Yfm8iBWcaZ2Gyjw6O0eZiODipmSV/view?usp=sharing" target="_blank"  rel="noreferrer">Classification models</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Logistic regression </li>
                                            <li> Bayesian logistic regression </li>
                                            <li> Non-linear logistic regression </li>
                                            <li> Gaussian process classification </li>
                                            <li> Relevance vector classification </li>
                                            <li> Incremental fitting: boosting and trees </li>
                                            <li> Multi-class logistic regression </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-2-few-shot-learning-and-meta-learning-i/" target="_blank"  rel="noreferrer">Few-shot learning and meta-learning I</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Meta-learning framework </li>
                                            <li> Approaches to meta-learning </li>
                                            <li> Matching networks </li>
                                            <li> Prototypical networks </li>
                                            <li> Relation networks </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-3-few-shot-learning-and-meta-learning-ii/" target="_blank"  rel="noreferrer">Few-shot learning and meta-learning II</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> MAML & Reptile </li>
                                            <li> LSTM based meta-learning </li>
                                            <li> Reinforcement learning based approaches</li>
                                            <li> Memory augmented neural networks </li>
                                            <li> SNAIL </li>
                                            <li> Generative models </li>
                                            <li> Data augmentation approaches </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                           </MoreOuterList>

                           <TopLine>Natural language processing</TopLine>
                           <MoreOuterList>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-6-neural-natural-language-generation-decoding-algorithms/" target="_blank"  rel="noreferrer">Neural natural language generation I</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Encoder-decoder architecture </li>
                                            <li> Maximum-likelihood training </li>
                                            <li> Greedy search </li>
                                            <li> Beam search </li>
                                            <li> Diverse beam search </li>
                                            <li> Top-k sampling </li>
                                            <li> Nucleus sampling </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-7-neural-natural-language-generation-sequence-level-training/" target="_blank"  rel="noreferrer">Neural natural language generation II</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Fine-tuning with reinforcement learning </li>
                                            <li> Training from scratch with RL </li>
                                            <li> RL vs. structured prediction </li>
                                            <li> Minimum risk training </li>
                                            <li> Scheduled sampling </li>
                                            <li> Beam search optimization </li>
                                            <li> SeaRNN </li>
                                            <li> Reward-augmented maximum likelihood </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-15-parsing-i-context-free-grammars-and-cyk-algorithm/" target="_blank"  rel="noreferrer">Parsing I</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Parse trees </li>
                                            <li> Context-free grammars </li>
                                            <li> Chomsky normal form </li>
                                            <li> CYK recognition algorithm </li>
                                            <li> Worked example </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-18-parsing-ii-wcfgs-inside-algorithm-and-weighted-parsing/" target="_blank"  rel="noreferrer">Parsing II</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Weighted context-free grammars </li>
                                            <li> Semirings </li>
                                            <li> Inside algorithm </li>
                                            <li> Inside weights </li>
                                            <li> Weighted parsing </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-19-parsing-iii-pcfgs-and-inside-outside-algorithm/" target="_blank"  rel="noreferrer">Parsing III</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Probabilistic context-free grammars </li>
                                            <li> Parameter estimation (supervised) </li>
                                            <li> Parameter estimation (unsupervised) </li>
                                            <li> Viterbi training </li>
                                            <li> Expectation maximization </li>
                                            <li> Outside from inside </li>
                                            <li> Interpretation of outside weights </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/understanding-xlnet/" target="_blank"  rel="noreferrer">XLNet</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Language modeling </li>
                                            <li> XLNet training objective </li>
                                            <li> Permutations </li>
                                            <li> Attention mask </li>
                                            <li> Two stream self-attention </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                            </MoreOuterList>

       
                           
                           <TopLine>Responsible AI</TopLine>
                           <MoreOuterList>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial1-bias-and-fairness-ai/" target="_blank"  rel="noreferrer">Bias and fairness</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Sources of bias</li>
                                            <li> Demographic Parity </li>
                                            <li> Equality of odds</li>
                                            <li> Equality of opportunity </li>
                                            <li> Individual fairness</li>
                                            <li> Bias mitigation</li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/research-blogs/explainability-i-local-post-hoc-explanations/" target="_blank"  rel="noreferrer">Explainability I</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Taxonomy of XAI approaches</li>
                                            <li> Local post-hoc explanations </li>
                                            <li> Individual conditional explanation</li>
                                            <li> Counterfactual explanations</li>
                                            <li> LIME & Anchors</li>
                                            <li> Shapley additive explanations & SHAP</li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/research-blogs/explainability-ii-global-explanations-proxy-models-and-interpretable-models/" target="_blank"  rel="noreferrer">Explainability II</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Global feature importance</li>
                                            <li> Partial dependence & ICE plots</li>
                                            <li> Accumulated local effects</li>
                                            <li> Aggregate SHAP values</li>
                                            <li> Prototypes & criticisms</li>
                                            <li> Surrogate / proxy models</li>
                                            <li> Inherently interpretable models</li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-12-differential-privacy-i-introduction/" target="_blank"  rel="noreferrer">Differential privacy I</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Early approaches to privacy </li>
                                            <li> Fundamental law of information recovery </li>
                                            <li> Differential privacy</li>
                                            <li> Properties of differential privacy </li>
                                            <li> The Laplace mechanism</li>
                                            <li> Examples</li>
                                            <li> Other mechanisms and definitions</li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                                <li>
                                    <MoreLink href="https://www.borealisai.com/en/blog/tutorial-13-differential-privacy-ii-machine-learning-and-data-generation/" target="_blank"  rel="noreferrer">Differential privacy II</MoreLink>
                                    <MoreInnerP>
                                        <MoreInnerList> 
                                            <li> Differential privacy and matchine learning</li>
                                            <li> DPSGD</li>
                                            <li> PATE </li>
                                            <li> Differentially private data generation</li>
                                            <li> DPGAN</li>
                                            <li> PateGAN </li>
                                        </MoreInnerList>
                                    </MoreInnerP>
                                </li>
                           </MoreOuterList>
                        </Column2>
                    </MoreRow2>
                </MoreWrapper>
            </MoreContainer>
        </>
    )
}

export default MoreSection


