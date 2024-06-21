import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
} from "@/components/Navbar/NavbarElements";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

export default function Navbar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false);

    useEffect(() => {
        const changeNav = () => {
            setScrollNav(window.scrollY >= 80);
        };

        window.addEventListener("scroll", changeNav);

        return () => {
            window.removeEventListener("scroll", changeNav);
        };
    }, []);

    const scrollToHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/udlbook/" onClick={scrollToHome}>
                            <h1> Understanding Deep Learning </h1>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="Notebooks"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    activeClass="active"
                                >
                                    Notebooks
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="Instructors"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    activeClass="active"
                                >
                                    Instructors
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="Media"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    activeClass="active"
                                >
                                    Media
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="More"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    activeClass="active"
                                >
                                    More
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}
