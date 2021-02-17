import React, { useState } from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import { Navbar, Nav } from 'react-bootstrap';
import almaBackground from '../assets/images/almaBackground.jpg'
import NavbarCustomLink from "./NavbarCustomLink";



const NavbarCustom = ({ state }) => {

    const data = state.source.get(state.router.link);
    
    // like bootstrap breakpoints md, lg, xl
    const breakPointXL = 1200;
    const breakPointLG = 992;
    const breakPointMD = 768;
    const breakPointSM = 576; 
    const breakPointXS = 425; 

    // change background when click on toggle
    const [toggleBGColor, setToggleBGColor] = useState('rgba(0,0,0,0.5)')
    const onClickToggleBGColor = () => {
        (toggleBGColor == 'rgba(0,0,0,0.5)' ? setToggleBGColor('rgba(0,0,0,0.9)') : setToggleBGColor('rgba(0,0,0,0.5)'))
    }

    return (
        <div css={data.isHome ?
            css`    background-image: url(${almaBackground});
                    background-size:cover;
                    background-attachment: fixed; 
                    background-position: top;
                    height: 100vh;`
            :
            css`    margin-bottom: 80px;`}>

            <Navbar variant="dark" expand="xl" fixed="top" css={data.isHome ?
                css`padding: 15px 50px;
                    background-color: ${toggleBGColor};

                    @media (max-width: ${breakPointSM}px) {
                        padding: 15px 15px;
                    }
                `
                :
                css`padding: 15px 50px;
                    background-color: rgba(235,221,209,0.8);
                `}>
                
                <div>
                    {/* logo Alma Stolte */}
                    <NavbarCustomLink link={"/"} css={data.isHome ?
                        css`color: #EDE4E5;
                            font-family: LibreBaskerville-Regular;
                            font-size: 30px;
                            letter-spacing: 10.86px;
                            white-space: nowrap;
                            margin: 0px;

                            @media (max-width: ${breakPointLG}px) {
                                font-size: 26px; 
                            }

                            @media (max-width: ${breakPointMD}px) {
                                font-size: 22px; 
                            }
                        
                            @media (max-width: ${breakPointSM}px) {
                                font-size: 20px; 
                            }`
                            :
                            css`color: #333232;
                            font-family: LibreBaskerville-Regular;
                            font-size: 30px;
                            letter-spacing: 10.86px;
                            white-space: nowrap;
                            margin: 0px;`
                        }>ALMA STOLTE
                    </NavbarCustomLink>
                </div>

                {/* hamburger button */}
                <Navbar.Toggle aria-controls="toggle-connection" onClick={onClickToggleBGColor} />

                {/* toggle menu */} 
                <Navbar.Collapse id="toggle-connection" className="justify-content-end">
                    <StyledToggleArea className="mr-auto" className="justify-content-end">
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
const breakPointXL = 1200;
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
@media (max-width: ${breakPointXL}px) {
        margin-top: 20px; 
    }

`
const StyledMargin = styled.div`
    margin: 0px 6%;
    @media (max-width: ${breakPointXL}px) {
        margin: 10px 0px; 
    }
`;

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

