import React, { useState } from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import { Navbar, Nav } from 'react-bootstrap';
import almaBackground from '../assets/images/almaBackground.jpg'
import NavbarCustomLink from "./NavbarCustomLink";


const NavbarCustom = ({ state }, props) => {

    const data = state.source.get(state.router.link);


    return (
        <div css={data.isHome ?
            css`
                    background-image: url(${almaBackground});
                    background-size:cover;
                    background-attachment: fixed; 
                    background-position: top;
                    height: 100vh;`
            :
            css`
                    margin-bottom: 80px; 
                    `}>
            <StyledNavbar variant="dark" expand="xl" fixed="top" css={data.isHome ?
                css`    
                padding: 15px 50px;
                background-color: rgba(0,0,0,0.5);
                `
                :
                css`
                padding: 15px 50px;
                background-color: rgba(235,221,209,0.8);
                `
            }>
                <div href={"/"} css={data.isHome ?
                    css`
                    color: #EDE4E5;
                    font-family: LibreBaskerville-Regular;
                    font-size: 30px;
                    letter-spacing: 10.86px;
                    `
                    :
                    css`color:#333232
                    font-family: LibreBaskerville-Regular;
                    font-size: 30px;
                    letter-spacing: 10.86px;`}>ALMA STOLTE
                </div>
                <Navbar.Toggle aria-controls="toggle-connection" />
                <Navbar.Collapse id="toggle-connection" className="justify-content-end">
                    <Nav className="mr-auto" className="justify-content-end">
                        {state.theme.menu.map(([name, link]) => {
                            return (
                                <StyledDiv key={name}>
                                    <NavbarCustomLink link={link} css={data.isHome ? css`color: #EDE4E5;` : css`color: #333232`}>
                                        {name}
                                    </NavbarCustomLink>
                                </StyledDiv>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </StyledNavbar>

            <div css={data.isHome ?
                css`
                padding: 120px 50px;`
                :
                css`
                display: none;
                `}>
                <StyledSubHeading>Historisches Violoncello</StyledSubHeading>
                <StyledSubHeading>Modernes Violoncello</StyledSubHeading>
            </div>

        </div>
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

const StyledDiv = styled.div`
    margin: 0px 6%;
    
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
    font-family: LibreBaskerville-Regular;
    font-size: 30px;
    letter-spacing: 10.86px;
    // color: #EDE4E5 !important;
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


