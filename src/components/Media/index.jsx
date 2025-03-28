import {
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    MediaContainer,
    MediaContent,
    MediaLink,
    MediaRow,
    MediaRow2,
    MediaWrapper,
    Subtitle,
    TextWrapper,
    TopLine,
    VideoFrame,
} from "@/components/Media/MediaElements";
import img from "@/images/media.svg";

const interviews = [
    {
        href: "https://www.borealisai.com/news/understanding-deep-learning/",
        text: "Borealis AI",
        linkText: "interview",
    },
    {
        href: "https://shepherd.com/best-books/machine-learning-and-deep-neural-networks",
        text: "Shepherd ML book",
        linkText: "recommendations",
    },
];

export default function MediaSection() {
    return (
        <>
            <MediaContainer lightBg={false} id="Media">
                <MediaWrapper>
                    <MediaRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Media</TopLine>
                                <Heading lightText={true}>
                                    Reviews, videos, podcasts, interviews
                                </Heading>
                                <Subtitle darkText={false}>
                                    Various resources connected to the book
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt="Media" />
                            </ImgWrap>
                        </Column2>
                    </MediaRow>
                    <MediaRow>
                        <Column1>
                            Machine learning street talk podcast
                            <VideoFrame>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/sJXn4Cl4oww?si=Lm_hQPqj0RXy-75H&amp;controls=0"
                                    title="YouTube video player"
                                    frameBorder="2"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </VideoFrame>
                        </Column1>
                        <Column2>
                            Deeper insights podcast
                            <VideoFrame>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/nQf4o9TDSHI?si=uMk66zLD7uhuSnQ1&amp;controls=0"
                                    title="YouTube video player"
                                    frameBorder="2"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </VideoFrame>
                        </Column2>
                    </MediaRow>
                    <MediaRow2>
                        <Column1>
                            <TopLine>Reviews</TopLine>
                            <MediaContent>
                                {/* TODO: add dynamic rendering for reviews */}
                                <ul>
                                    <li>
                                        Nature Machine Intelligence{" "}
                                        <MediaLink href="https://github.com/udlbook/udlbook/blob/main/public/NMI_Review.pdf">
                                            {" "}
                                            review{" "}
                                        </MediaLink>{" "}
                                        by{" "}
                                        <MediaLink href="https://wang-axis.github.io/">
                                            Ge Wang
                                        </MediaLink>
                                    </li>
                                    <li>
                                        Amazon{" "}
                                        <MediaLink href="https://www.amazon.com/Understanding-Deep-Learning-Simon-Prince-ebook/product-reviews/B0BXKH8XY6/">
                                            reviews
                                        </MediaLink>
                                    </li>
                                    <li>
                                        Goodreads{" "}
                                        <MediaLink href="https://www.goodreads.com/book/show/123239819-understanding-deep-learning?">
                                            reviews{" "}
                                        </MediaLink>
                                    </li>
                                    <li>
                                        Book{" "}
                                        <MediaLink href="https://medium.com/@vishalvignesh/udl-book-review-the-new-deep-learning-textbook-youll-want-to-finish-69e1557b018d">
                                            review
                                        </MediaLink>{" "}
                                        by Vishal V.
                                    </li>
                                    <li>
                                        Book{" "}
                                        <MediaLink href="https://www.linkedin.com/pulse/review-understanding-deep-learning-prof-simon-prince-chandrasekharan-6egec/">
                                            review
                                        </MediaLink>{" "}
                                        by Nidhin Chandrasekharan
                                    </li>
                                    <li>
                                        Book{" "}
                                        <MediaLink href="https://www.justinmath.com/the-best-neural-nets-textbook/">
                                            review
                                        </MediaLink>{" "}
                                        by Justin Skycak
                                    </li>
                                </ul>
                            </MediaContent>
                        </Column1>
                        <Column2>
                            <TopLine>Interviews</TopLine>
                            <MediaContent>
                                <ul>
                                    {interviews.map((interview, index) => (
                                        <li key={index}>
                                            {interview.text}{" "}
                                            <MediaLink href={interview.href}>
                                                {interview.linkText}
                                            </MediaLink>
                                        </li>
                                    ))}
                                </ul>
                            </MediaContent>
                            <TopLine>Video lectures</TopLine>  
                            <ul>    
                                <li>            
                                    <MediaLink href="https://www.youtube.com/playlist?list=PLRdABJkXXytCz19PsZ1PCQBKoZGV069k3">
                                        Video lectures 
                                    </MediaLink>{" "} for chapters 1-12 from Tamer Elsayed
                                </li>  
                                {/* <li>
                                    <MediaLink href="https://dl4ds.github.io/sp2025/lectures/">
                                        Video lectures and slides
                                    </MediaLink>{" "} that closely follow the book from Thomas Gardos of Boston University.
                                </li> */}
                            </ul> 

          
                        </Column2>
                    </MediaRow2>
                </MediaWrapper>
            </MediaContainer>
        </>
    );
}
