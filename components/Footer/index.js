import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights } from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
           <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> About Us </FooterLinkTitle> 
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to = "/" onClick = {toggleHome} >Netflix 2.0 </SocialLogo> 
                            <WebsiteRights>{new Date().getFullYear()} All rights reserved</WebsiteRights>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
           </FooterContainer> 
        </>
    )
}

export default Footer
