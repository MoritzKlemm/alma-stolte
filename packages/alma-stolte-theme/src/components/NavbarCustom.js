import React, { useState } from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import { Navbar, Nav } from 'react-bootstrap';
import almaBackground from '../assets/images/almaBackground.jpg'
import { Link, animateScroll } from 'react-scroll'


const NavbarCustom = ({ state }, props) => {

    const [clickedLink, setClickedLink] = useState('white');


    return (
        <StyledNavbarSection onScroll={() => animateScroll.scrollToTop()} >
            <StyledNavbar variant="dark" expand="xl" fixed="top">
                <StyledNavbarBrand href="#home">ALMA STOLTE</StyledNavbarBrand>
                <Navbar.Toggle aria-controls="toggle-connection" />
                <Navbar.Collapse id="toggle-connection" className="justify-content-end">

                    <Nav className="mr-auto" className="justify-content-end">

                        <StyledLink to="" smooth={true} duration={1100}>KALENDER</StyledLink>

                        <StyledLink to="projekte-smooth-scroll" smooth={true} duration={1100} spy={true}>PROJEKTE</StyledLink>

                        <StyledLink to="vita-smooth-scroll" smooth={true} duration={1100}>VITA</StyledLink>

                        <StyledLink to="gallery-smooth-scroll" smooth={true} duration={1100}>MEDIA</StyledLink>

                        <StyledLink to="contact-smooth-scroll" smooth={true} duration={1100}>KONTAKT</StyledLink>

                    </Nav>
                </Navbar.Collapse>
            </StyledNavbar>

            <StyledSubHeadingWrapper>
                <StyledSubHeading>Historisches Violoncello</StyledSubHeading>
                <StyledSubHeading>Modernes Violoncello</StyledSubHeading>
            </StyledSubHeadingWrapper>
            
        </StyledNavbarSection>
    )
}

export default connect(NavbarCustom)

const StyledNavbarSection = styled.div`
    background-image: url(${almaBackground});
    background-size:cover;
    background-attachment: fixed; 
    background-position: top;
    height: 100vh; 
`;

const StyledNavbar = styled(Navbar)`
    padding: 10px 50px;
    background-color: rgba(0,0,0,0.5);
`
// link scrolls to target with react-scroll "Link" component
const StyledLink = styled(Link)`
    font-size: 16px;
    color: #EDE4E5 !important;
    letter-spacing: 3.56px;
    text-align: center;
    margin: 0px 6%;
    
    &:hover {
        cursor: pointer; 
    }
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
    font-family: LibreBaskerville-Regular;
    font-size: 30px;
    color: #EDE4E5 !important;
    letter-spacing: 10.86px;
`;

// -----------------------------------------

const appear = keyframes`
from {
    color: rgba(219, 204, 205, 0.0);
  }
  to {
    color: rgba(219, 204, 205, 0.9);
  }
`;

const StyledSubHeading = styled.h4`
    font-family: LibreBaskerville-Italic;
    font-size: 20px;
    color: rgba(219, 204, 205, 0.9);
    letter-spacing: 3.53px;
    line-height: 30px;
    animation: ${appear} 1.8s ease-in-out;
`

// -----------------------------------------

const moveup = keyframes`
from {
    transform: translateY(50px);
  } 
  to {
    transform: translateY(0px);
  }
`;

const StyledSubHeadingWrapper = styled.div`
    padding: 120px 50px;
    // animation: ${moveup} 1.8s ease-in-out;
`


