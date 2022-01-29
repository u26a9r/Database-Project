import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Navlogo to="/" onClick={toggleHome} >Netflix 2.0</Navlogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" smooth={true}>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>

        </>
    )
}

export default Navbar