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
                        <HeroLink href="https://github.com/udlbook/udlbook/releases/download/v4.0.1/UnderstandingDeepLearning_05_27_24_C.pdf">
                            Download full PDF (27 May 2024)
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
                    </HeroColumn2>
                </HeroRow>
            </HeroContent>
        </HeroContainer>
    );
}
