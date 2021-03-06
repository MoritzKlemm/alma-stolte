import React, { useState, useEffect } from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import { Navbar, Nav } from 'react-bootstrap';
import almaBackground from '../assets/images/almaBackground.jpg'
import NavbarCustomLink from "./NavbarCustomLink";
import { Share, Download, Menu } from 'react-feather';


const NavbarCustom = ({ state }) => {

    // used to determine if the navbar needs to be styled light / dark
    const data = state.source.get(state.router.link);

    // like bootstrap breakpoints md, lg, xl
    const breakPointXL = 1199;
    const breakPointLG = 992;
    const breakPointMD = 768;
    const breakPointSM = 576;
    const breakPointXS = 425;

    // variable which changes color of toggler menu on click
    const [toggleBGColor, setToggleBGColor] = useState('rgba(0,0,0,0.7)')

    // toggles background color when data.isHome = true
    const onClickToggleBGColor = () => {
        (toggleBGColor == 'rgba(0,0,0,0.7)' ? setToggleBGColor('rgba(0,0,0,1)') : setToggleBGColor('rgba(0,0,0,0.7)'))
    }

    const dynamicLinkStyle = () => {
        return (data.isHome ? css`color: #EDE4E5 !important;` : css`color: #333232 !important;`)
    }

    const dynamicTogglerStyle = () => {
        return (
            css`border: none; 
                background-color: none; 
                padding: 2px; 
                display: flex;
                
                @media (max-width: ${breakPointSM}px) {
                    font-size: 18px; 
                    padding: 0px 0px 2px 0px; 
                }`
        )
    }

    const dynamicNavbarStyle = () => {
        return (
            data.isHome ?
                css`padding: 15px 50px;
                    background-color: ${toggleBGColor};
                    display: flex;
                    align-items: center; 

                    // + right - left | + bottom - top | blure | size
                    // box-shadow: 0px 2px 15px 2px  rgba(0,0,0,0.7);

                    @media (max-width: ${breakPointMD}px) {
                        padding: 20px 20px;
                    }

                    @media (max-width: ${breakPointSM}px) {
                        padding: 15px 15px;
                    }
                `
                :
                css`padding: 15px 50px;
                    background-color: rgba(235,221,209,1.0);

                    @media (max-width: ${breakPointXL}px) {
                        padding: 20px 40px;
                    }
                    @media (max-width: ${breakPointMD}px) {
                        padding: 20px 20px;
                    }
                    @media (max-width: ${breakPointSM}px) {
                        padding: 15px 15px;
                    }
                `
        )
    }

    const dynamicImageStyle = () => {
        return(
            data.isHome ?
            css`    background-image: url(${almaBackground});
                    background-size:cover;
                    background-attachment: fixed; 
                    background-position: top;
                    height: 100vh;
                    width: auto;
                    max-width: 100%;`
            :
            css`    margin-bottom: 80px;`
        )
    }

    const dynamicLogoStyle = () => {
        return (data.isHome ?
            css`color: #EDE4E5;
                font-family: LibreBaskerville-Regular;
                font-size: 30px;
                letter-spacing: 10.86px;
                white-space: nowrap;
                margin: 0px;

                @media (max-width: ${breakPointLG}px) {
                    font-size: 26px; 
                    letter-spacing: 9.86px;
                }

                @media (max-width: ${breakPointSM}px) {
                    font-size: 22px; 
                    letter-spacing: 8.86px;
                }
                
                @media (max-width: ${breakPointXS}px) {
                    font-size: 21px; 
                    letter-spacing: 5.86px;
                }`
            :
            css`color: #333232;
                font-family: LibreBaskerville-Regular;
                font-size: 30px;
                letter-spacing: 10.86px;
                white-space: nowrap;
                margin: 0px;
                
                @media (max-width: ${breakPointLG}px) {
                    font-size: 26px; 
                    letter-spacing: 9.86px;
                }

                @media (max-width: ${breakPointSM}px) {
                    font-size: 22px; 
                    letter-spacing: 8.86px;
                }
                
                @media (max-width: ${breakPointXS}px) {
                    font-size: 21px; 
                    letter-spacing: 5.86px;
                }`)
    }

    return (

        <div css={dynamicImageStyle}>

            {/* changes hamburger color according to home, not home with bootstrap default "dark", "light" */}
            <Navbar variant={data.isHome ? "dark" : "light"} expand="xl" fixed="top" css={dynamicNavbarStyle}>

                <div>
                    {/* logo Alma Stolte */}
                    <NavbarCustomLink link={"/"} css={dynamicLogoStyle}>ALMA STOLTE
                    </NavbarCustomLink>
                </div>

                {/* hamburger button */}
                <Navbar.Toggle aria-controls="toggle-connection" css={dynamicTogglerStyle} onClick={onClickToggleBGColor} />

                {/* toggle menu when uncollapsed */}
                <Navbar.Collapse id="toggle-connection" className="justify-content-end">

                    {/* toggle menu when collapsed */}
                    <StyledToggleArea className="mr-auto" className="justify-content-end" css={css`margin-top: 15px;`}>
                        <StyledNavLink href={"/kalender/"} css={dynamicLinkStyle}>KALENDER</StyledNavLink>
                        <StyledNavLink href={"/vita/"} css={dynamicLinkStyle}>VITA</StyledNavLink>
                        <StyledNavLink href={"/media/"} css={dynamicLinkStyle}>MEDIA</StyledNavLink>
                        <StyledNavLink href={"/kontakt/"} css={dynamicLinkStyle}>KONTAKT</StyledNavLink>
                    </StyledToggleArea>
                </Navbar.Collapse>

            </Navbar>

            <div css={data.isHome ?
                css`
                padding: 120px 50px;
                
                @media (max-width: ${breakPointMD}px) {
                    padding: 80px 50px; 
                }
               
                @media (max-width: ${breakPointSM}px) {
                    padding: 80px 15px;
                }
                `
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

// like bootstrap breakpoints md, lg, xl
const breakPointXL = 1199;
const breakPointLG = 992;
const breakPointMD = 768;
const breakPointSM = 576;


// -----------------------------------------

const appear = keyframes`
from {
    color: rgba(219, 204, 205, 0.0);
  }
  to {
    color: rgba(219, 204, 205, 0.9);
  }
`;

// -----------------------------------------

const moveup = keyframes`
from {
    transform: translateY(50px);
  } 
  to {
    transform: translateY(0px);
  }
`;



const StyledToggleArea = styled(Nav)`
`
const StyledMargin = styled.div`
    margin: 0px 6%;
    @media (max-width: ${breakPointXL}px) {
        margin: 10px 0px; 
    }
`;

const StyledNavLink = styled(Nav.Link)`
    font-size: 16px;
    color: #EDE4E5 !important;
    letter-spacing: 3.56px;
    margin: 0px 0px 0px 12% !important;
    padding: 0px; 

    // styling link text on hover
    &:hover {
    text-decoration: none;   
    cursor: pointer; 
    color: rgb(175,175,175) !important;
    } 

    @media (max-width: 1500px) {
        margin: 0px 0px 0px 8% !important;
    }

    @media (max-width: ${breakPointXL}px) {
        margin: 10px 0px !important; 
    }
`

const StyledSubHeading = styled.h4`
    font-family: LibreBaskerville-Italic;
    font-size: 20px;
    color: rgba(219, 204, 205, 0.9);
    letter-spacing: 3.53px;
    line-height: 30px;
    animation: ${appear} 1.8s ease-in-out;

    @media (max-width: ${breakPointMD}px) {
        font-size: 18px; 
        line-height: 25px;
    }

    @media (max-width: ${breakPointMD}px) {
        font-size: 16px; 
        line-height: 20px;
    }

`

