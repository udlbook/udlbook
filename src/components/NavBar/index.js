import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ( {toggle} ) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if (window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/udlbook/" onClick={toggleHome}>
                        <h1> Understanding Deep Learning </h1>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="Notebooks" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Notebooks</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Instructors" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Instructors</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Media" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Media</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="More" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>More</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
}

export default Navbar
