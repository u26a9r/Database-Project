import React from 'react'
//import {FaBars1} from 'react-icons/fa'
import {Nav1, NavbarContainer1, Navlogo1, MobileIcon1, NavItem1,NavLinks1,NavMenu1, NavBtn1, NavBtnLink1} from './NavbarElements1'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav1>
                <NavbarContainer1>
                    <Navlogo1 to="/" onClick={toggleHome} >Netflix 2.0</Navlogo1>
                    <MobileIcon1 onClick={toggle}>
                        
                    </MobileIcon1>
                    <NavMenu1>
                    <NavItem1>
                            <NavLinks1 to="about" smooth={true}>Action</NavLinks1>
                        </NavItem1>
                        <NavItem1>
                            <NavLinks1 to="discover" smooth={true}>Horror</NavLinks1>
                        </NavItem1>
                        <NavItem1>
                            <NavLinks1 to="services" smooth={true}>Series</NavLinks1>
                        </NavItem1>
                        <NavItem1>
                            <NavLinks1 to="signup" smooth={true}>Comedy</NavLinks1>
                        </NavItem1>
                    </NavMenu1>
                    <NavBtn1>
                        <NavBtnLink1 to="adminpage">Admin</NavBtnLink1>
                    </NavBtn1>
                </NavbarContainer1>
            </Nav1>

        </>
    )
}

export default Navbar