import React from 'react';
import { connect, styled, css } from 'frontity';
import {Navbar, Nav} from 'react-bootstrap';
import Link from './Link';
import almaBackground from './assets/images/almaBackground.jpg'


//             <p>this is an {state.router.link}</p>

const NavbarCustom = ({ state, className }) => {
    return(
        <StyledMainDiv>
            <Navbar bg="transparent" expand="lg" fixed="top">
                <Navbar.Brand href="#home"><StyledLogo>ALMA STOLTE</StyledLogo></Navbar.Brand>
                <Navbar.Toggle aria-controls="toggle-connection"/>
                <Navbar.Collapse id="toggle-connection" className="justify-content-end">
                
                    <Nav className="mr-auto" className="justify-content-end">
                        <Nav.Link href="/kalender"><StyledNavLink>KALENDER</StyledNavLink></Nav.Link>
                        <Nav.Link href="/projekte"><StyledNavLink>PROJEKTE</StyledNavLink></Nav.Link>
                        <Nav.Link href="/vita"><StyledNavLink>VITA</StyledNavLink></Nav.Link>
                        <Nav.Link href="/media"><StyledNavLink>MEDIA</StyledNavLink></Nav.Link>
                        <Nav.Link href="/kontakt"><StyledNavLinkLast>KONTAKT</StyledNavLinkLast></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </StyledMainDiv>
    )
}

export default connect(NavbarCustom)

const StyledMainDiv = styled.div`
    background-image: url(${almaBackground});
    background-size:cover;
    background-position: top;
    height: 100vh;

   
`;

const StyledNavLink = styled.div`
    font-size: 16px;
    color: #EDE4E5;
    letter-spacing: 3.56px;
    text-align: center;
    curser: pointer;
    margin: 0px 20px;
`;

const StyledNavLinkLast = styled.div`
    font-size: 16px;
    color: #EDE4E5;
    letter-spacing: 3.56px;
    text-align: center;
    curser: pointer;
    margin-left: 20px; 
`;

const StyledLogo = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 30px;
    color: #EDE4E5;
    letter-spacing: 10.86px;
`;

