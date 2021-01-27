import React from 'react';
import { connect, styled, css } from 'frontity';
import {Navbar, Nav} from 'react-bootstrap';
import almaBackground from '../assets/images/almaBackground.jpg'
import LinkFrontity from "./LinkFrontity";
import {Link} from 'react-scroll';


//             <p>this is an {state.router.link}</p>

const NavbarCustomDynamic = ({ actions, link, className, children }) => {
    const onClick = event => {
        event.preventDefault();
        // Set the router to the new url.
        actions.router.set(link);
        // Move scroll to the top.
        window.scrollTo(0, 0);
      };

    return(
        <StyledMainDiv>
            <StyledNavbar expand="lg" fixed="top">
                <StyledNavbarBrand href="#home">ALMA STOLTE</StyledNavbarBrand>
                <Navbar.Toggle aria-controls="toggle-connection"/>
                <Navbar.Collapse id="toggle-connection" className="justify-content-end">
                
                    <Nav className="mr-auto" className="justify-content-end">
                        <StyledNavLink>KALENDER</StyledNavLink>
                        <StyledNavLink href="/projekte">RPOJEKTE</StyledNavLink>
                        <Link to="vita" smooth={true} duration={1000}>KALENDER</Link>
                        <StyledNavLink href="/media">MEDIA</StyledNavLink>
                        <StyledNavLink href="/kontakt">KONTAKT</StyledNavLink>
                    </Nav>
                </Navbar.Collapse>
            </StyledNavbar>
        </StyledMainDiv>
    )
}

export default connect(NavbarCustomDynamic)

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


const StyledNavLink = styled(Nav.Link)`
    font-size: 16px;
    color: #EDE4E5 !important;
    letter-spacing: 3.56px;
    text-align: center;
    curser: pointer;
    margin: 0px 15px;
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
    font-family: LibreBaskerville-Regular;
    font-size: 30px;
    color: #EDE4E5 !important;
    letter-spacing: 10.86px;
`;

