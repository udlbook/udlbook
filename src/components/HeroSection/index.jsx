import {
    HeroCitationBlock,
    HeroCitationTitle,
    HeroColumn1,
    HeroColumn2,
    HeroContainer,
    HeroContent,
    HeroDownloadsImg,
    HeroFollowBlock,
    HeroImgWrap,
    HeroLink,
    HeroNewsBlock,
    HeroNewsItem,
    HeroNewsItemContent,
    HeroNewsItemDate,
    HeroNewsMoreButton,
    HeroNewsTitle,
    HeroRow,
    Img,
    UDLLink,
} from "@/components/HeroSection/HeroElements";
import img from "@/images/book_cover.jpg";
import { useState } from "react";

const citation = `
    @book{prince2023understanding,
        author = "Simon J.D. Prince",
        title = "Understanding Deep Learning",
        publisher = "The MIT Press",
        year = 2023,
        url = "http://udlbook.com"
    }
    `;

const news = [
    {
        // date: "03/6/25",
        // content: (
        //     <HeroNewsItemContent>
        //         New {" "}
        //         <UDLLink href="https://dl4ds.github.io/sp2025/lectures/">
        //             slides and video lectures
        //         </UDLLink>{" "}
        //         that closely follow the book from Thomas Gardos of Boston University.
        //     </HeroNewsItemContent>
        // ),
    },
    {
        date: "02/19/25",
        content: (
            <HeroNewsItemContent>
                Three new blogs {" "}
                <UDLLink href="https://rbcborealis.com/research-blogs/odes-and-sdes-for-machine-learning/">
                    [1]
                </UDLLink>
                <UDLLink href="https://rbcborealis.com/research-blogs/introduction-ordinary-differential-equations/">
                    [2]
                </UDLLink>
                <UDLLink href="https://rbcborealis.com/research-blogs/closed-form-solutions-for-odes/">
                    [3]
                </UDLLink>{" "}
                on ODEs and SDEs in machine learning.
            </HeroNewsItemContent>
        ),
    },
    {
        date: "01/23/25",
        content: (
            <HeroNewsItemContent>
                Added{" "}
                <UDLLink href="https://github.com/udlbook/udlbook/raw/main/understanding-deep-learning-final.bib">
                    bibfile 
                </UDLLink>{" "} for book and
                <UDLLink href="https://github.com/udlbook/udlbook/raw/main/UDL_Equations.tex">
                LaTeX 
                </UDLLink>{" "}
                for all equations 
            </HeroNewsItemContent>
        ),
    },
    {
        date: "12/17/24",
        content: (
            <HeroNewsItemContent>
                
                <UDLLink href="https://www.youtube.com/playlist?list=PLRdABJkXXytCz19PsZ1PCQBKoZGV069k3">
                    Video lectures
                </UDLLink>{" "}
                for chapters 1-12 from Tamer Elsayed of Qatar University.
            </HeroNewsItemContent>
        ),
    },
    {
        date: "12/05/24",
        content: (
            <HeroNewsItemContent>
                New{" "}
                <UDLLink href="https://rbcborealis.com/research-blogs/neural-network-gaussian-processes/">
                    blog
                </UDLLink>{" "}
                on Neural network Gaussian processes
            </HeroNewsItemContent>
        ),
    },

    {
        date: "11/14/24",
        content: (
            <HeroNewsItemContent>
                New{" "}
                <UDLLink href=" https://rbcborealis.com/research-blogs/bayesian-neural-networks/">
                    blog
                </UDLLink>{" "}
                on Bayesian Neural Networks
            </HeroNewsItemContent>
        ),
    },
    {
        date: "08/13/24",
        content: (
            <HeroNewsItemContent>
                New{" "}
                <UDLLink href="https://www.borealisai.com/research-blogs/bayesian-machine-learning-function-space/">
                    blog
                </UDLLink>{" "}
                on Bayesian machine learning (function perspective)
            </HeroNewsItemContent>
        ),
    },
    {
        date: "08/05/24",
        content: (
            <HeroNewsItemContent>
                Added{" "}
                <UDLLink href="https://udlbook.github.io/udlfigures/">
                    interactive figures
                </UDLLink>{" "}
                to explore 1D linear regression, shallow and deep networks, Gabor model.
            </HeroNewsItemContent>
        ),
    },
    {
        date: "07/30/24",
        content: (
            <HeroNewsItemContent>
                New{" "}
                <UDLLink href="https://www.borealisai.com/research-blogs/bayesian-machine-learning-parameter-space/">
                    blog
                </UDLLink>{" "}
                on Bayesian machine learning (parameter perspective)
            </HeroNewsItemContent>
        ),
    },
    {
        date: "05/22/24",
        content: (
            <HeroNewsItemContent>
                New{" "}
                <UDLLink href="https://borealisai.com/research-blogs/neural-tangent-kernel-applications/">
                    blog
                </UDLLink>{" "}
                about the applications of the neural tangent kernel.
            </HeroNewsItemContent>
        ),
    },
    {
        date: "05/10/24",
        content: (
            <HeroNewsItemContent>
                Positive{" "}
                <UDLLink href="https://github.com/udlbook/udlbook/blob/main/public/NMI_Review.pdf">
                    review
                </UDLLink>{" "}
                in Nature Machine Intelligence.
            </HeroNewsItemContent>
        ),
    },
    // {
    //     date: "03/12/24",
    //     content: <HeroNewsItemContent>Book now available again.</HeroNewsItemContent>,
    // },
    {
        date: "02/21/24",
        content: (
            <HeroNewsItemContent>
                New blog about the{" "}
                <UDLLink href="https://borealisai.com/research-blogs/the-neural-tangent-kernel/">
                    Neural Tangent Kernel
                </UDLLink>
                .
            </HeroNewsItemContent>
        ),
    },
    // {
    //     date: "02/15/24",
    //     content: (
    //         <HeroNewsItemContent>
    //             First printing of book has sold out in most places. Second printing available
    //             mid-March.
    //         </HeroNewsItemContent>
    //     ),
    // },
    {
        date: "01/29/24",
        content: (
            <HeroNewsItemContent>
                New blog about{" "}
                <UDLLink href="https://borealisai.com/research-blogs/gradient-flow/">
                    gradient flow
                </UDLLink>{" "}
                published.
            </HeroNewsItemContent>
        ),
    },
    {
        date: "12/26/23",
        content: (
            <HeroNewsItemContent>
                Machine Learning Street Talk{" "}
                <UDLLink href="https://youtube.com/watch?v=sJXn4Cl4oww">podcast</UDLLink> discussing
                book.
            </HeroNewsItemContent>
        ),
    },
    {
        date: "12/19/23",
        content: (
            <HeroNewsItemContent>
                Deeper Insights{" "}
                <UDLLink href="https://podcasts.apple.com/us/podcast/understanding-deep-learning-with-simon-prince/id1669436318?i=1000638269385">
                    podcast
                </UDLLink>{" "}
                discussing book.
            </HeroNewsItemContent>
        ),
    },
    {
        date: "12/06/23",
        content: (
            <HeroNewsItemContent>
                <UDLLink href="https://borealisai.com/news/understanding-deep-learning/">
                    Interview
                </UDLLink>{" "}
                with Borealis AI.
            </HeroNewsItemContent>
        ),
    },
    {
        date: "12/05/23",
        content: (
            <HeroNewsItemContent>
                Book released by{" "}
                <UDLLink href="https://mitpress.mit.edu/9780262048644/understanding-deep-learning/">
                    The MIT Press
                </UDLLink>
                .
            </HeroNewsItemContent>
        ),
    },
];

export default function HeroSection() {
    const [showMoreNews, setShowMoreNews] = useState(false);

    const toggleShowMore = () => {
        setShowMoreNews((p) => !p);
    };

    return (
        <HeroContainer id="home">
            <HeroContent>
                <HeroRow>
                    <HeroColumn1>
                        <HeroNewsBlock>
                            <HeroNewsTitle>RECENT NEWS:</HeroNewsTitle>
                            {(showMoreNews ? news : news.slice(0, 7)).map((item, index) => (
                                <HeroNewsItem key={index}>
                                    <HeroNewsItemDate>{item.date}</HeroNewsItemDate>
                                    {item.content}
                                </HeroNewsItem>
                            ))}
                            <HeroNewsMoreButton onClick={toggleShowMore}>
                                {showMoreNews ? "Show less" : "Show more"}
                            </HeroNewsMoreButton>
                        </HeroNewsBlock>
                        <HeroCitationTitle>CITATION:</HeroCitationTitle>
                        <HeroCitationBlock>
                            <pre>
                                <code>{citation}</code>
                            </pre>
                        </HeroCitationBlock>
                        <HeroFollowBlock>
                            Follow me on{" "}
                            <UDLLink href="https://twitter.com/SimonPrinceAI">Twitter</UDLLink> or{" "}
                            <UDLLink href="https://linkedin.com/in/simon-prince-615bb9165/">
                                LinkedIn
                            </UDLLink>{" "}
                            for updates.
                        </HeroFollowBlock>
                    </HeroColumn1>
                    <HeroColumn2>
                        <HeroImgWrap>
                            <Img src={img} alt="Book Cover" />
                        </HeroImgWrap>
                        <HeroLink href="https://github.com/udlbook/udlbook/releases/download/v5.0.1/UnderstandingDeepLearning_03_26_25_C.pdf">
                            Download full PDF (26 March 2025)
                        </HeroLink>
                        <br /> 
                        <HeroDownloadsImg
                            src="https://img.shields.io/github/downloads/udlbook/udlbook/total"
                            alt="download stats shield"
                        />
                        <HeroLink href="https://mitpress.mit.edu/9780262048644/understanding-deep-learning/">
                            Buy the book
                        </HeroLink>
                        <HeroLink href="https://github.com/udlbook/udlbook/raw/main/UDL_Answer_Booklet_Students.pdf">
                            Answers to selected questions
                        </HeroLink>
                        <HeroLink href="https://github.com/udlbook/udlbook/raw/main/UDL_Errata.pdf">
                            Errata
                        </HeroLink>
                    </HeroColumn2> <h1></h1>
                </HeroRow> 
            </HeroContent>
        </HeroContainer>
    );
}
