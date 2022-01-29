import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav1 = styled.nav`

    background: black;
    height: 2000px;
    width: 150px;
    margin-top: -2000px; 
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    opacity: 1;
    border-left: 6px solid red;      
    @media screen and (max-width: 960px) {
         transition: 0.8s all ease;
    }
` 

export const NavbarContainer1 = styled.div`
background: transparent;
    margin-top: -1900px;
    display: grid;
    justify-content: space-between; 
    align-items: center; 
    height: 10px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    
`

export const Navlogo1 = styled(LinkR)`
background: transparent;
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: grid;
    align-items: center;
    margin-left: 10px;
    margin-top: 3px;
    margin-bottom: 50px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon1 = styled.div`
background: transparent;
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu1 = styled.ul`
background: transparent;
    display: grid;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 2px;
    border-bottom: 6px solid red;   
    bottom: 10px;

    @media screen and (max-width:768px) {
        display: none;
    }
`

export const NavItem1 = styled.li`
background: transparent;
    height: 80px;
`


export const NavLinks1 = styled(LinkS)`
background: transparent;
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border.bottom: 5px solid red;
    }
`

export const NavBtn1 = styled.nav`
    background: transparent;
    display: flex;
    align-items: center;
    margin-top: 40px;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink1 = styled(LinkR)`
    
    background: transparent;
    border-radius: 50px;
    background: red; 
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`