import React from 'react';
import { connect, styled, css } from 'frontity';
import {Navbar, Nav} from 'react-bootstrap';
import almaBackground from '../assets/images/almaBackground.jpg'
import {Link} from 'react-scroll'


//             <p>this is an {state.router.link}</p>

const NavbarCustom = ({ state }, props) => {
    
    return(
        <StyledMainDiv>
            <StyledNavbar expand="lg" fixed="top">
                <StyledNavbarBrand href="#home">ALMA STOLTE</StyledNavbarBrand>
                <Navbar.Toggle aria-controls="toggle-connection"/>
                <Navbar.Collapse id="toggle-connection" className="justify-content-end">
                
                    <Nav className="mr-auto" className="justify-content-end">
                        <Nav.Link href="">
                            <StyledLink to="" smooth={true} duration={1100}>KALENDER</StyledLink>
                        </Nav.Link>                        
                        <Nav.Link href="">
                            <StyledLink to="projekte-smooth-scroll" smooth={true} duration={1100}>PROJEKTE</StyledLink>
                        </Nav.Link>                        
                        <Nav.Link href="">
                            <StyledLink to="vita-smooth-scroll" smooth={true} duration={1100}>VITA</StyledLink>
                        </Nav.Link>                        
                        <Nav.Link href="">
                            <StyledLink to="" smooth={true} duration={1100}>MEDIA</StyledLink>
                        </Nav.Link>   
                        <Nav.Link href="">
                            <StyledLink to="contact-smooth-scroll" smooth={true} duration={1100}>KONTAKT</StyledLink>
                        </Nav.Link>   
                    </Nav>
                </Navbar.Collapse>
            </StyledNavbar>
        </StyledMainDiv>
    )
}

export default connect(NavbarCustom)

const StyledMainDiv = styled.div`
    background-image: url(${almaBackground});
    background-size:cover;
    background-attachment: fixed; 
    background-position: top;
    height: 100vh; 
`;

const StyledNavbar = styled(Navbar)`
    padding: 40px;
`

const StyledLink = styled(Link)`
    font-size: 16px;
    color: #EDE4E5 !important;
    letter-spacing: 3.56px;
    text-align: center;
    margin: 0px 15px;
    
    &::hover {
        text-decoration: none; 
    }
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
    font-family: LibreBaskerville-Regular;
    font-size: 30px;
    color: #EDE4E5 !important;
    letter-spacing: 10.86px;
`;

