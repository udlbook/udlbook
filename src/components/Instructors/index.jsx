import {
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    InstructorsContainer,
    InstructorsContent,
    InstructorsLink,
    InstructorsRow,
    InstructorsRow2,
    InstructorsWrapper,
    Subtitle,
    TextWrapper,
    TopLine,
} from "@/components/Instructors/InstructorsElements";
import img from "@/images/instructor.svg";

const fullSlides = [
    {
        text: "Introduction",
        link: "https://drive.google.com/uc?export=download&id=17RHb11BrydOvxSFNbRIomE1QKLVI087m",
    },
    {
        text: "Supervised Learning",
        link: "https://drive.google.com/uc?export=download&id=1491zkHULC7gDfqlV6cqUxyVYXZ-de-Ub",
    },
    {
        text: "Shallow Neural Networks",
        link: "https://drive.google.com/uc?export=download&id=1XkP1c9EhOBowla1rT1nnsDGMf2rZvrt7",
    },
    {
        text: "Deep Neural Networks",
        link: "https://drive.google.com/uc?export=download&id=1e2ejfZbbfMKLBv0v-tvBWBdI8gO3SSS1",
    },
    {
        text: "Loss Functions",
        link: "https://drive.google.com/uc?export=download&id=1fxQ_a1Q3eFPZ4kPqKbak6_emJK-JfnRH",
    },
    {
        text: "Fitting Models",
        link: "https://drive.google.com/uc?export=download&id=17QQ5ZzXBtR_uCNCUU1gPRWWRUeZN9exW",
    },
    {
        text: "Computing Gradients",
        link: "https://drive.google.com/uc?export=download&id=1hC8JUCOaFWiw3KGn0rm7nW6mEq242QDK",
    },
    {
        text: "Initialization",
        link: "https://drive.google.com/uc?export=download&id=1tSjCeAVg0JCeBcPgDJDbi7Gg43Qkh9_d",
    },
    {
        text: "Performance",
        link: "https://drive.google.com/uc?export=download&id=1RVZW3KjEs0vNSGx3B2fdizddlr6I0wLl",
    },
    {
        text: "Regularization",
        link: "https://drive.google.com/uc?export=download&id=1LTicIKPRPbZRkkg6qOr1DSuOB72axood",
    },
    {
        text: "Convolutional Networks",
        link: "https://drive.google.com/uc?export=download&id=1bGVuwAwrofzZdfvj267elIzkYMIvYFj0",
    },
    {
        text: "Image Generation",
        link: "https://drive.google.com/uc?export=download&id=14w31QqWRDix1GdUE-na0_E0kGKBhtKzs",
    },
    {
        text: "Transformers and LLMs",
        link: "https://drive.google.com/uc?export=download&id=1af6bTTjAbhDYfrDhboW7Fuv52Gk9ygKr",
    },
];

const figures = [
    {
        text: "Introduction",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap1PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1udnl5pUOAc8DcAQ7HQwyzP9pwL95ynnv",
            pptx: "https://docs.google.com/presentation/d/1IjTqIUvWCJc71b5vEJYte-Dwujcp7rvG/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Supervised learning",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap2PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1VSxcU5y1qNFlmd3Lb3uOWyzILuOj1Dla",
            pptx: "https://docs.google.com/presentation/d/1Br7R01ROtRWPlNhC_KOommeHAWMBpWtz/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Shallow neural networks",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap3PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=19kZFWlXhzN82Zx02ByMmSZOO4T41fmqI",
            pptx: "https://docs.google.com/presentation/d/1e9M3jB5I9qZ4dCBY90Q3Hwft_i068QVQ/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Deep neural networks",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap4PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1ojr0ebsOhzvS04ItAflX2cVmYqHQHZUa",
            pptx: "https://docs.google.com/presentation/d/1LTSsmY4mMrJbqXVvoTOCkQwHrRKoYnJj/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Loss functions",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap5PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=17MJO7fiMpFZVqKeqXTbQ36AMpmR4GizZ",
            pptx: "https://docs.google.com/presentation/d/1gcpC_3z9oRp87eMkoco-kdLD-MM54Puk/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Training models",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap6PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1VPdhFRnCr9_idTrX0UdHKGAw2shUuwhK",
            pptx: "https://docs.google.com/presentation/d/1AKoeggAFBl9yLC7X5tushAGzCCxmB7EY/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Gradients and initialization",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap7PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1TTl4gvrTvNbegnml4CoGoKOOd6O8-PGs",
            pptx: "https://docs.google.com/presentation/d/11zhB6PI-Dp6Ogmr4IcI6fbvbqNqLyYcz/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Measuring performance",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap8PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=19eQOnygd_l0DzgtJxXuYnWa4z7QKJrJx",
            pptx: "https://docs.google.com/presentation/d/1SHRmJscDLUuQrG7tmysnScb3ZUAqVMZo/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Regularization",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap9PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1LprgnUGL7xAM9-jlGZC9LhMPeefjY0r0",
            pptx: "https://docs.google.com/presentation/d/1VwIfvjpdfTny6sEfu4ZETwCnw6m8Eg-5/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Convolutional networks",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap10PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1-Wb3VzaSvVeRzoUzJbI2JjZE0uwqupM9",
            pptx: "https://docs.google.com/presentation/d/1MtfKBC4Y9hWwGqeP6DVwUNbi1j5ncQCg/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Residual networks",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap11PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1Mr58jzEVseUAfNYbGWCQyDtEDwvfHRi1",
            pptx: "https://docs.google.com/presentation/d/1saY8Faz0KTKAAifUrbkQdLA2qkyEjOPI/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Transformers",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap12PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1txzOVNf8-jH4UfJ6SLnrtOfPd1Q3ebzd",
            pptx: "https://docs.google.com/presentation/d/1GVNvYWa0WJA6oKg89qZre-UZEhABfm0l/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Graph neural networks",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap13PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1lQIV6nRp6LVfaMgpGFhuwEXG-lTEaAwe",
            pptx: "https://docs.google.com/presentation/d/1YwF3U82c1mQ74c1WqHVTzLZ0j7GgKaWP/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Unsupervised learning",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap14PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1aMbI6iCuUvOywqk5pBOmppJu1L1anqsM",
            pptx: "https://docs.google.com/presentation/d/1A-lBGv3NHl4L32NvfFgy1EKeSwY-0UeB/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "GANs",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap15PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1EErnlZCOlXc3HK7m83T2Jh_0NzIUHvtL",
            pptx: "https://docs.google.com/presentation/d/10Ernk41ShOTf4IYkMD-l4dJfKATkXH4w/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Normalizing flows",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap16PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1SNtNIY7khlHQYMtaOH-FosSH3kWwL4b7",
            pptx: "https://docs.google.com/presentation/d/1nLLzqb9pdfF_h6i1HUDSyp7kSMIkSUUA/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Variational autoencoders",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap17PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1B9bxtmdugwtg-b7Y4AdQKAIEVWxjx8l3",
            pptx: "https://docs.google.com/presentation/d/1lQE4Bu7-LgvV2VlJOt_4dQT-kusYl7Vo/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Diffusion models",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap18PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1A-pIGl4PxjVMYOKAUG3aT4a8wD3G-q_r",
            pptx: "https://docs.google.com/presentation/d/1x_ufIBtVPzWUvRieKMkpw5SdRjXWwdfR/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Deep reinforcement learning",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap19PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1a5WUoF7jeSgwC_PVdckJi1Gny46fCqh0",
            pptx: "https://docs.google.com/presentation/d/1TnYmVbFNhmMFetbjyfXGmkxp1EHauMqr/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Why does deep learning work?",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap20PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1M2d0DHEgddAQoIedKSDTTt7m1ZdmBLQ3",
            pptx: "https://docs.google.com/presentation/d/1coxF4IsrCzDTLrNjRagHvqB_FBy10miA/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Deep learning and ethics",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap21PDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1jixmFfwmZkW_UVYzcxmDcMsdFFtnZ0bU",
            pptx: "https://docs.google.com/presentation/d/1EtfzanZYILvi9_-Idm28zD94I_6OrN9R/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
    {
        text: "Appendices",
        links: {
            pdf: "https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLAppendixPDF.zip",
            svg: "https://drive.google.com/uc?export=download&id=1k2j7hMN40ISPSg9skFYWFL3oZT7r8v-l",
            pptx: "https://docs.google.com/presentation/d/1_2cJHRnsoQQHst0rwZssv-XH4o5SEHks/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true",
        },
    },
];

export default function InstructorsSection() {
    return (
        <>
            <InstructorsContainer lightBg={true} id="Instructors">
                <InstructorsWrapper>
                    <InstructorsRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Instructors</TopLine>
                                <Heading lightText={false}>Resources for instructors</Heading>
                                <Subtitle darkText={true}>
                                    All the figures in vector and image formats, full slides for
                                    first twelve chapters, instructor answer booklet
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt="Instructor" />
                            </ImgWrap>
                        </Column2>
                    </InstructorsRow>
                    <InstructorsRow2>
                        <Column1>
                            <TopLine>Register</TopLine>
                            <InstructorsLink href="https://mitpress.ublish.com/request?cri=15055">
                                Register
                            </InstructorsLink>{" "}
                            with MIT Press for answer booklet.
                            <InstructorsContent></InstructorsContent>
                            <TopLine>Full slides</TopLine>
                            <InstructorsContent>
                                Slides for 20 lecture undergraduate deep learning course:
                            </InstructorsContent>
                            <InstructorsContent>
                                <ol>
                                    {fullSlides.map((slide, index) => (
                                        <li key={index}>
                                            {slide.text}{" "}
                                            <InstructorsLink href={slide.link}>
                                                PPTX
                                            </InstructorsLink>
                                        </li>
                                    ))}
                                </ol>
                            </InstructorsContent>
                        </Column1>
                        <Column2>
                            <TopLine>Figures</TopLine>
                            <InstructorsContent>
                                <ol>
                                    {figures.map((figure, index) => (
                                        <li key={index}>
                                            {figure.text}:{" "}
                                            <InstructorsLink href={figure.links.pdf}>
                                                PDF
                                            </InstructorsLink>{" "}
                                            /{" "}
                                            <InstructorsLink href={figure.links.svg}>
                                                {" "}
                                                SVG
                                            </InstructorsLink>{" "}
                                            /{" "}
                                            <InstructorsLink href={figure.links.pptx}>
                                                PPTX{" "}
                                            </InstructorsLink>
                                        </li>
                                    ))}
                                </ol>
                            </InstructorsContent>
                            <InstructorsLink href="https://drive.google.com/file/d/1T_MXXVR4AfyMnlEFI-UVDh--FXI5deAp/view?usp=sharing">
                                Instructions
                            </InstructorsLink>{" "}
                            for editing equations in figures.
                            <InstructorsContent></InstructorsContent>
                        </Column2>
                    </InstructorsRow2>
                </InstructorsWrapper>
            </InstructorsContainer>
        </>
    );
}
