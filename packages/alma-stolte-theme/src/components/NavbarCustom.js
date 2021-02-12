import React, { useState } from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import { Navbar, Nav } from 'react-bootstrap';
import almaBackground from '../assets/images/almaBackground.jpg'
import NavbarCustomLink from "./NavbarCustomLink";


const NavbarCustom = ({ state }) => {

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
                <div>
                    <NavbarCustomLink link={"/"} css={data.isHome ?
                        css`
                        color: #EDE4E5;
                        font-family: LibreBaskerville-Regular;
                        font-size: 30px;
                        letter-spacing: 10.86px;
                        white-space: nowrap;
                        margin: 0px;
                        `
                        :
                        css`color: #333232;
                        font-family: LibreBaskerville-Regular;
                        font-size: 30px;
                        letter-spacing: 10.86px;
                        white-space: nowrap;
                        margin: 0px;
                        `}>ALMA STOLTE
                    </NavbarCustomLink>
                </div>
                <Navbar.Toggle aria-controls="toggle-connection" />
                <Navbar.Collapse id="toggle-connection" className="justify-content-end">
                    <Nav className="mr-auto" className="justify-content-end">
                        <StyledMargin>
                            <NavbarCustomLink link={"/kalender/"} css={data.isHome ? css`color: #EDE4E5;` : css`color: #333232`}>
                                KALENDER
                            </NavbarCustomLink>
                        </StyledMargin>
                        <StyledMargin>
                            <NavbarCustomLink link={"/projekte/"} css={data.isHome ? css`color: #EDE4E5;` : css`color: #333232`}>
                                PROJEKTE
                            </NavbarCustomLink>
                        </StyledMargin>
                        <StyledMargin>
                            <NavbarCustomLink link={"/vita/"} css={data.isHome ? css`color: #EDE4E5;` : css`color: #333232`}>
                                VITA
                            </NavbarCustomLink>
                        </StyledMargin>
                        <StyledMargin>
                            <NavbarCustomLink link={"/media/"} css={data.isHome ? css`color: #EDE4E5;` : css`color: #333232`}>
                                MEDIA
                            </NavbarCustomLink>
                        </StyledMargin>
                        <StyledMargin>
                            <NavbarCustomLink link={"/kontakt/"} css={data.isHome ? css`color: #EDE4E5;` : css`color: #333232`}>
                                KONTAKT
                            </NavbarCustomLink>
                        </StyledMargin>
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

const StyledMargin = styled.div`
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


