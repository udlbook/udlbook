import {
    FooterContainer,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
} from "@/components/Footer/FooterElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { animateScroll as scroll } from "react-scroll";

const images = [
    "https://freepik.com/free-vector/hand-coding-concept-illustration_21864184.htm#query=coding&position=17&from_view=search&track=sph&uuid=5896d847-38e4-4cb9-8fe1-103041c7c933",
    "https://freepik.com/free-vector/mathematics-concept-illustration_10733824.htm#query=professor&position=13&from_view=search&track=sph&uuid=5b1a188a-64c5-45af-aae2-8573bc1bed3c",
    "https://freepik.com/free-vector/content-concept-illustration_7171429.htm#query=media&position=3&from_view=search&track=sph&uuid=c7e35cf2-d85d-4bba-91a6-1cd883dcf153",
    "https://freepik.com/free-vector/library-concept-illustration_9148008.htm#query=library&position=40&from_view=search&track=sph&uuid=abecc792-b6b2-4ec0-b318-5e6cc73ba649",
];

const socials = [
    {
        href: "https://twitter.com/SimonPrinceAI",
        icon: FaSquareXTwitter,
        alt: "Twitter",
    },
    {
        href: "https://linkedin.com/in/simon-prince-615bb9165/",
        icon: FaLinkedin,
        alt: "LinkedIn",
    },
    {
        href: "https://github.com/udlbook/udlbook",
        icon: FaGithub,
        alt: "GitHub",
    },
];

export default function Footer() {
    const scrollToHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/udlbook" onClick={scrollToHome}>
                                Understanding Deep Learning
                            </SocialLogo>
                            <WebsiteRights>
                                &copy; {new Date().getFullYear()} Simon J.D. Prince
                            </WebsiteRights>
                            <WebsiteRights>
                                Images by StorySet on FreePik:{" "}
                                {images.map((image, index) => (
                                    <a key={index} href={image}>
                                        [{index + 1}]
                                    </a>
                                ))}
                            </WebsiteRights>
                            <SocialIcons>
                                {socials.map((social, index) => (
                                    <SocialIconLink
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        aria-label={social.alt}
                                        alt={social.alt}
                                    >
                                        <social.icon />
                                    </SocialIconLink>
                                ))}
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    );
}
