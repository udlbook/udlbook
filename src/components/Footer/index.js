import React from 'react'
import { FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterImg } from './FooterElements'
import { SocialMedia,  SocialMediaWrap, SocialIcons, SocialIconLink, WebsiteRights, SocialLogo } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'
import twitterImg from '../../images/square-x-twitter.svg'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/udlbook/' onClick={toggleHome}>
                                Understanding Deep Learning
                            </SocialLogo>
                            <WebsiteRights>©{new Date().getFullYear()} Simon J.D. Prince</WebsiteRights>
                            <WebsiteRights>
                            Images by StorySet on FreePik: <a href="https://www.freepik.com/free-vector/hand-coding-concept-illustration_21864184.htm#query=coding&position=17&from_view=search&track=sph&uuid=5896d847-38e4-4cb9-8fe1-103041c7c933"> [1] </a> <a href="https://www.freepik.com/free-vector/mathematics-concept-illustration_10733824.htm#query=professor&position=13&from_view=search&track=sph&uuid=5b1a188a-64c5-45af-aae2-8573bc1bed3c">[2]</a> <a href="https://www.freepik.com/free-vector/content-concept-illustration_7171429.htm#query=media&position=3&from_view=search&track=sph&uuid=c7e35cf2-d85d-4bba-91a6-1cd883dcf153"> [3]</a>  <a href="https://www.freepik.com/free-vector/library-concept-illustration_9148008.htm#query=library&position=40&from_view=search&track=sph&uuid=abecc792-b6b2-4ec0-b318-5e6cc73ba649"> [4]</a> 
                            </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="https://twitter.com/SimonPrinceAI" target="_blank" aria-label="Twitter">
                                    <FooterImg src={twitterImg} alt="twitter"/>
                                </SocialIconLink>
                                <SocialIconLink href="https://www.linkedin.com/in/simon-prince-615bb9165/" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>  
            </FooterContainer>  
        </>
    )
}

export default Footer
