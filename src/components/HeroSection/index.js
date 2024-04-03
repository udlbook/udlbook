import React from 'react'
import { HeroContainer, HeroNewsBlock, HeroCitationBlock, HeroCitationTitle, HeroFollowBlock, HeroDownloadsImg, HeroLink, HeroRow, HeroColumn1, HeroColumn2, HeroContent, Img, HeroImgWrap, HeroNewsTitle, HeroNewsItem, HeroNewsItemDate, HeroNewsItemContent} from './HeroElements'
import img from '../../images/F23.prince.learning.turquoise.jpg'

const HeroSection = () => {


    const citation = `
@book{prince2023understanding,
    author = "Simon J.D. Prince",
    title = "Understanding Deep Learning",
    publisher = "The MIT Press",
    year = 2023,
    url = "http://udlbook.com"}
    `
 
    return (
        <HeroContainer id="home">
            <HeroContent>
                <HeroRow>
                    <HeroColumn1>
                        <HeroNewsBlock>
                            <HeroNewsTitle>RECENT NEWS:</HeroNewsTitle>

                            <HeroNewsItem>
                                <HeroNewsItemDate>03/12/24</HeroNewsItemDate>
                                <HeroNewsItemContent> Book now available again.</HeroNewsItemContent>
                            </HeroNewsItem>


                            <HeroNewsItem>
                                <HeroNewsItemDate>02/15/24</HeroNewsItemDate>
                                <HeroNewsItemContent> First printing of book has sold out in most places. Second printing available mid-March.</HeroNewsItemContent>
                            </HeroNewsItem>
    

                            <HeroNewsItem>
                                <HeroNewsItemDate>01/29/24</HeroNewsItemDate>
                                <HeroNewsItemContent> New blog about <a href="https://www.borealisai.com/research-blogs/gradient-flow/"> gradient flow </a> published.</HeroNewsItemContent>
                            </HeroNewsItem>

                            <HeroNewsItem>
                                <HeroNewsItemDate>12/26/23</HeroNewsItemDate>
                                <HeroNewsItemContent> Machine Learning Street Talk  <a href="https://www.youtube.com/watch?v=sJXn4Cl4oww"> podcast </a>  discussing book.</HeroNewsItemContent>
                            </HeroNewsItem>

                            <HeroNewsItem>
                                <HeroNewsItemDate>12/19/23</HeroNewsItemDate>
                                <HeroNewsItemContent>Deeper Insights <a href="https://podcasts.apple.com/us/podcast/understanding-deep-learning-with-simon-prince/id1669436318?i=1000638269385">podcast</a> discussing book.</HeroNewsItemContent>
                            </HeroNewsItem>

                            <HeroNewsItem>
                                <HeroNewsItemDate>12/06/23</HeroNewsItemDate>
                                <HeroNewsItemContent> I did an <a href="https://www.borealisai.com/news/understanding-deep-learning/">interview</a> discussing the book with Borealis AI.</HeroNewsItemContent>
                            </HeroNewsItem>

                            <HeroNewsItem>
                                <HeroNewsItemDate>12/05/23</HeroNewsItemDate>
                                <HeroNewsItemContent> Book released by <a href="https://mitpress.mit.edu/9780262048644/understanding-deep-learning/">The MIT Press</a>.</HeroNewsItemContent>
                            </HeroNewsItem>
                        </HeroNewsBlock>
                        <HeroFollowBlock>
                            Follow me on <a href="https://twitter.com/SimonPrinceAI">Twitter</a> or <a
                            href="https://www.linkedin.com/in/simon-prince-615bb9165/">LinkedIn</a> for updates.
                        </HeroFollowBlock>
                        <HeroCitationTitle>CITATION:</HeroCitationTitle>
                        <HeroCitationBlock>
                            <pre>
                                <code>
                                    <React.Fragment>{citation}</React.Fragment>
                                </code>
                            </pre>
                        </HeroCitationBlock>
                    </HeroColumn1>
                    <HeroColumn2>
                        <HeroImgWrap>
                            <Img src={img} alt="book cover"/>
                        </HeroImgWrap>
                        <HeroLink href="https://github.com/udlbook/udlbook/releases/download/v2.03/UnderstandingDeepLearning_02_26_24_C.pdf">Download full pdf</HeroLink>
                        <HeroDownloadsImg src="https://img.shields.io/github/downloads/udlbook/udlbook/total" alt="download stats shield"/>
                        <HeroLink href="https://mitpress.mit.edu/9780262048644/understanding-deep-learning/">Buy the book</HeroLink>
                        <HeroLink href="https://github.com/udlbook/udlbook/raw/main/UDL_Answer_Booklet_Students.pdf">Answers to selected questions</HeroLink>
                        <HeroLink href="https://github.com/udlbook/udlbook/raw/main/UDL_Errata.pdf">Find/Report Errata</HeroLink>
                    </HeroColumn2>
                </HeroRow>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
