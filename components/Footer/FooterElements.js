import styled from "styled-components"
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background: black;
    background-color: black;
`

export const FooterWrap = styled.div`
    background: black;
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto; 
`

export const FooterLinksContainer = styled.div`
    
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
background: black;
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
background: black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
background: black;
    font-size: 20px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
background: black;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 18px;

    &:hover {
        color: red;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
background: black;
    max-width: 1000px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
background: black;
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
background: black;
    color: #fff;
    margin-bottom: 16px;
`