import React from 'react'
import { ImgWrap, Img, InstructorsContainer, InstructorsContent, InstructorsRow2, InstructorsWrapper, InstructorsRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle} from './InstructorsElements'

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

import img from '../../images/instructor.svg'



const InstructorsSection = () => {
    return (
        <>
            <InstructorsContainer lightBg={true} id='Instructors'>
                <InstructorsWrapper>
                    <InstructorsRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Instructors</TopLine>
                                <Heading lightText={false}>Resources for instructors</Heading>
                                <Subtitle darkText={true}>All the figures in vector and image formats, full slides for first twelve chapters, instructor answer booklet</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt='Car'/>
                            </ImgWrap>
                        </Column2>
                    </InstructorsRow>
                    <InstructorsRow2>
                        <Column1>
                            <TopLine>Register</TopLine>
                            <a href="https://mitpress.ublish.com/request?cri=15055">Register</a> with MIT Press for answer booklet.
                            <InstructorsContent>

                            </InstructorsContent>
                           
                            <TopLine>Full slides</TopLine>
                            <InstructorsContent>
                                Slides for 20 lecture undergraduate deep learning course:
                            </InstructorsContent>
                            <InstructorsContent>
                                <ol>
                                    <li>Introduction <a href="https://drive.google.com/uc?export=download&id=17RHb11BrydOvxSFNbRIomE1QKLVI087m">PPTX</a></li>
                                    <li>Supervised Learning <a href="https://drive.google.com/uc?export=download&id=1491zkHULC7gDfqlV6cqUxyVYXZ-de-Ub">PPTX</a></li>
                                    <li>Shallow Neural Networks <a href="https://drive.google.com/uc?export=download&id=1XkP1c9EhOBowla1rT1nnsDGMf2rZvrt7">PPTX</a></li>
                                    <li>Deep Neural Networks <a href="https://drive.google.com/uc?export=download&id=1e2ejfZbbfMKLBv0v-tvBWBdI8gO3SSS1">PPTX</a></li>
                                    <li>Loss Functions <a href="https://drive.google.com/uc?export=download&id=1fxQ_a1Q3eFPZ4kPqKbak6_emJK-JfnRH">PPTX</a></li>
                                    <li>Fitting Models <a href="https://drive.google.com/uc?export=download&id=17QQ5ZzXBtR_uCNCUU1gPRWWRUeZN9exW">PPTX</a></li>
                                    <li>Computing Gradients <a href="https://drive.google.com/uc?export=download&id=1hC8JUCOaFWiw3KGn0rm7nW6mEq242QDK">PPTX</a></li>
                                    <li>Initialization <a href="https://drive.google.com/uc?export=download&id=1tSjCeAVg0JCeBcPgDJDbi7Gg43Qkh9_d">PPTX</a></li>
                                    <li>Performance <a href="https://drive.google.com/uc?export=download&id=1RVZW3KjEs0vNSGx3B2fdizddlr6I0wLl">PPTX</a></li>
                                    <li>Regularization <a href="https://drive.google.com/uc?export=download&id=1LTicIKPRPbZRkkg6qOr1DSuOB72axood">PPTX</a></li>
                                    <li>Convolutional Networks <a href="https://drive.google.com/uc?export=download&id=1bGVuwAwrofzZdfvj267elIzkYMIvYFj0">PPTX</a></li>
                                    <li>Image Generation <a href="https://drive.google.com/uc?export=download&id=14w31QqWRDix1GdUE-na0_E0kGKBhtKzs">PPTX</a></li>
                                    <li>Transformers and LLMs <a href="https://drive.google.com/uc?export=download&id=1af6bTTjAbhDYfrDhboW7Fuv52Gk9ygKr">PPTX</a></li>
                                </ol>
                             </InstructorsContent>
                        </Column1>
                        <Column2>
                            <TopLine>Figures</TopLine>
                            <InstructorsContent>
                            <ol>
                                <li> Introduction: <a href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap1PDF.zip">PDF</a> / <a href="https://drive.google.com/uc?export=download&id=1udnl5pUOAc8DcAQ7HQwyzP9pwL95ynnv"> SVG</a> / <a href="https://docs.google.com/presentation/d/1IjTqIUvWCJc71b5vEJYte-Dwujcp7rvG/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX </a></li>

                            <li> Supervised learning: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap2PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1VSxcU5y1qNFlmd3Lb3uOWyzILuOj1Dla"> SVG</a> / <a href="https://docs.google.com/presentation/d/1Br7R01ROtRWPlNhC_KOommeHAWMBpWtz/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Shallow neural networks: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap3PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=19kZFWlXhzN82Zx02ByMmSZOO4T41fmqI"> SVG</a> / <a href="https://docs.google.com/presentation/d/1e9M3jB5I9qZ4dCBY90Q3Hwft_i068QVQ/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Deep neural networks: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap4PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1ojr0ebsOhzvS04ItAflX2cVmYqHQHZUa"> SVG</a>
                                    /
                                    <a href="https://docs.google.com/presentation/d/1LTSsmY4mMrJbqXVvoTOCkQwHrRKoYnJj/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Loss functions: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap5PDF.zip">PDF
                                    </a> / <a href="https://drive.google.com/uc?export=download&id=17MJO7fiMpFZVqKeqXTbQ36AMpmR4GizZ">
                                    SVG
                                    </a> / <a
                                        href="https://docs.google.com/presentation/d/1gcpC_3z9oRp87eMkoco-kdLD-MM54Puk/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Training models: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap6PDF.zip">PDF
                                    </a> / <a href="https://drive.google.com/uc?export=download&id=1VPdhFRnCr9_idTrX0UdHKGAw2shUuwhK">
                                    SVG
                                    </a> / <a
                                        href="https://docs.google.com/presentation/d/1AKoeggAFBl9yLC7X5tushAGzCCxmB7EY/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Gradients and initialization: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap7PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1TTl4gvrTvNbegnml4CoGoKOOd6O8-PGs"> SVG</a> / <a href="https://docs.google.com/presentation/d/11zhB6PI-Dp6Ogmr4IcI6fbvbqNqLyYcz/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Measuring performance: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap8PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=19eQOnygd_l0DzgtJxXuYnWa4z7QKJrJx"> SVG</a> / <a href="https://docs.google.com/presentation/d/1SHRmJscDLUuQrG7tmysnScb3ZUAqVMZo/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Regularization: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap9PDF.zip">PDF
                                    </a> / <a href="https://drive.google.com/uc?export=download&id=1LprgnUGL7xAM9-jlGZC9LhMPeefjY0r0">
                                    SVG
                                    </a> / <a
                                        href="https://docs.google.com/presentation/d/1VwIfvjpdfTny6sEfu4ZETwCnw6m8Eg-5/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Convolutional networks: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap10PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1-Wb3VzaSvVeRzoUzJbI2JjZE0uwqupM9"> SVG</a> / <a href="https://docs.google.com/presentation/d/1MtfKBC4Y9hWwGqeP6DVwUNbi1j5ncQCg/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Residual networks: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap11PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1Mr58jzEVseUAfNYbGWCQyDtEDwvfHRi1"> SVG</a> / <a href="https://docs.google.com/presentation/d/1saY8Faz0KTKAAifUrbkQdLA2qkyEjOPI/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Transformers: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap12PDF.zip">PDF</a> / <a href="https://drive.google.com/uc?export=download&id=1txzOVNf8-jH4UfJ6SLnrtOfPd1Q3ebzd">
                                    SVG</a> / <a
                                        href="https://docs.google.com/presentation/d/1GVNvYWa0WJA6oKg89qZre-UZEhABfm0l/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Graph neural networks: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap13PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1lQIV6nRp6LVfaMgpGFhuwEXG-lTEaAwe"> SVG</a> / <a href="https://docs.google.com/presentation/d/1YwF3U82c1mQ74c1WqHVTzLZ0j7GgKaWP/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Unsupervised learning: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap14PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1aMbI6iCuUvOywqk5pBOmppJu1L1anqsM"> SVG</a> / <a href="https://docs.google.com/presentation/d/1A-lBGv3NHl4L32NvfFgy1EKeSwY-0UeB/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">
                                        PPTX</a></li>
                                <li> GANs: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap15PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1EErnlZCOlXc3HK7m83T2Jh_0NzIUHvtL"> SVG</a> / <a href="https://docs.google.com/presentation/d/10Ernk41ShOTf4IYkMD-l4dJfKATkXH4w/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Normalizing flows: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap16PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1B9bxtmdugwtg-b7Y4AdQKAIEVWxjx8l3"> SVG</a> / <a href="https://docs.google.com/presentation/d/1nLLzqb9pdfF_h6i1HUDSyp7kSMIkSUUA/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Variational autoencoders: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap17PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1SNtNIY7khlHQYMtaOH-FosSH3kWwL4b7"> SVG</a> / <a href="https://docs.google.com/presentation/d/1lQE4Bu7-LgvV2VlJOt_4dQT-kusYl7Vo/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Diffusion models: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap18PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1A-pIGl4PxjVMYOKAUG3aT4a8wD3G-q_r"> SVG</a> / 
                                    <a href="https://docs.google.com/presentation/d/1x_ufIBtVPzWUvRieKMkpw5SdRjXWwdfR/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">
                                    PPTX</a></li>
                                <li> Deep reinforcement learning: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap19PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1a5WUoF7jeSgwC_PVdckJi1Gny46fCqh0"> SVG</a> / <a href="https://docs.google.com/presentation/d/1TnYmVbFNhmMFetbjyfXGmkxp1EHauMqr/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">
                                        PPTX </a></li>
                                <li> Why does deep learning work?: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap20PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1M2d0DHEgddAQoIedKSDTTt7m1ZdmBLQ3"> SVG</a> / <a href="https://docs.google.com/presentation/d/1coxF4IsrCzDTLrNjRagHvqB_FBy10miA/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">
                                        PPTX</a></li>
                                <li> Deep learning and ethics: <a
                                        href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLChap21PDF.zip">PDF</a> / <a
                                        href="https://drive.google.com/uc?export=download&id=1jixmFfwmZkW_UVYzcxmDcMsdFFtnZ0bU">SVG</a> / <a
                                            href="https://docs.google.com/presentation/d/1EtfzanZYILvi9_-Idm28zD94I_6OrN9R/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                                <li> Appendices - <a href="https://github.com/udlbook/udlbook/raw/main/PDFFigures/UDLAppendixPDF.zip">PDF</a> / <a href="https://drive.google.com/uc?export=download&id=1k2j7hMN40ISPSg9skFYWFL3oZT7r8v-l">
                                    SVG</a> / <a
                                        href="https://docs.google.com/presentation/d/1_2cJHRnsoQQHst0rwZssv-XH4o5SEHks/edit?usp=drive_link&ouid=110441678248547154185&rtpof=true&sd=true">PPTX</a></li>
                            </ol>
                            </InstructorsContent>
                            <a href="https://drive.google.com/file/d/1T_MXXVR4AfyMnlEFI-UVDh--FXI5deAp/view?usp=sharing">Instructions</a> for editing equations in figures.

                            <InstructorsContent>
                                
                            </InstructorsContent>
                        </Column2>
                    </InstructorsRow2>

                </InstructorsWrapper>
            </InstructorsContainer>
        </>
    )
}

export default InstructorsSection
