import React from 'react'
import { ImgWrap, Img, MediaContainer, MediaContent, MediaWrapper, MediaRow, MediaRow2, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle} from './MediaElements'

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

import img from '../../images/media.svg'



const MediaSection = () => {
    return (
        <>
            <MediaContainer lightBg={false} id='Media'>
                <MediaWrapper>
                    <MediaRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Media</TopLine>
                                <Heading lightText={true}> Reviews, videos, podcasts, interviews</Heading>
                                <Subtitle darkText={false}>Various resources connected to the book</Subtitle>                            
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt='Car'/>
                            </ImgWrap>
                        </Column2>
                    </MediaRow>
                    <MediaRow>
                        <Column1>
                            Machine learning street talk podcast
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/sJXn4Cl4oww?si=Lm_hQPqj0RXy-75H&amp;controls=0" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Column1>
                        <Column2>
                        Deeper insights podcast 
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nQf4o9TDSHI?si=uMk66zLD7uhuSnQ1&amp;controls=0" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Column2>
                    </MediaRow>
                    <MediaRow2>
                        <Column1>
                            <TopLine>Reviews</TopLine>
                            <MediaContent>
                                <ul>
                                    <li> Amazon <a href="https://www.amazon.com/Understanding-Deep-Learning-Simon-Prince-ebook/product-reviews/B0BXKH8XY6/">reviews</a></li>          
                                    <li>Goodreads <a href="https://www.goodreads.com/book/show/123239819-understanding-deep-learning?">reviews </a></li>
                                    <li>Book <a href="https://medium.com/@vishalvignesh/udl-book-review-the-new-deep-learning-textbook-youll-want-to-finish-69e1557b018d">review</a> by Vishal V.</li>
                                </ul>
                            </MediaContent>
                        </Column1>
                        <Column2>
                            <TopLine>Interviews</TopLine>
                            <MediaContent>
                                <ul>
                                    <li>Borealis AI <a href="https://www.borealisai.com/news/understanding-deep-learning/">interview</a></li>
                                    <li>Shepherd ML book <a href="https://shepherd.com/best-books/machine-learning-and-deep-neural-networks">recommendations</a></li>
                                </ul>
                            </MediaContent>
                        </Column2>
                    </MediaRow2>

                </MediaWrapper>
            </MediaContainer>
        </>
    )
}

export default MediaSection
