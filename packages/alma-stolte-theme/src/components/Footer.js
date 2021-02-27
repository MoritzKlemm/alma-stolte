import React from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LinkFrontity from './LinkFrontity'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BrushIcon from '@material-ui/icons/Brush';
import PaletteIcon from '@material-ui/icons/Palette';


const Footer = ({ state }) => {

    const data = state.source.get(state.router.link);

    return (
        <StyledContainer>
            <StyledRow>
                <StyledCol md={3}>
                    <StyledSocialsWrapper>
                        <StyledInstagram target="_blank" href="https://www.instagram.com/alma.s.cello/"><InstagramIcon fontSize="small" /></StyledInstagram>
                        <StyledFacebook target="_blank" href="https://www.facebook.com/alma.stolte"><FacebookIcon fontSize="small" /></StyledFacebook>
                        <StyledYoutube target="_blank" href="https://www.youtube.com/user/MsAlmaCello/featured"><YouTubeIcon fontSize="small" /></StyledYoutube>
                    </StyledSocialsWrapper>
                </StyledCol>
                <StyledCol md={3}>
                    <StyledFrontityLink href={"/impressum/"}>impressum</StyledFrontityLink>
                </StyledCol>
                <StyledCol md={3}>
                    <StyledParagraph>©alma stolte</StyledParagraph>
                </StyledCol>
                <StyledCol md={3}>
                    <StyledLink href="mailto:designed.containers@gmail.com"><PaletteIcon fontSize="small" />byte affairs</StyledLink>
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    )
}

export default connect(Footer);

const breakPointXL = 1200;
const breakPointLG = 992;
const breakPointMD = 768;
const breakPointSM = 576;
const breakPointXS = 425;

const linkColor = "rgba(89,85,85,0.59)"
const linkFontSize = "16px;"
const socialsMargin = "0px 3px"

const StyledContainer = styled(Container)`
    padding: 125px 15px 0px 15px; 

    @media (max-width: ${breakPointMD}px) {
        padding: 100px 10px 0px 10px ; 
    }
    
    @media (max-width: ${breakPointSM}px) {
        padding: 80px 10px 0px 10px ; 
    }
`;

const StyledRow = styled(Row)`
    border-top: 1px solid rgba(140,140,140); 
    
    @media (max-width: ${breakPointSM}px) {
        background-color: #DECFC3;
    }
`;

const StyledCol = styled(Col)`
    display: flex; 
    justify-content: space-around;
    align-items: center;
    // border-top: 1px solid rgba(140,140,140); 
    padding-top: 30px;
    padding-bottom: 30px; 

    @media (max-width: ${breakPointMD}px) {
        padding: 15px 0px; 
    }
`;

const StyledFrontityLink = styled(LinkFrontity)`
`

const StyledLink = styled.a`
    text-decoration: none; 
    font-family: LibreBaskerville-Regular;
    color: rgba(115,115,115);
    font-size: 12px;
    letter-spacing: 1.3px;
 
    &:hover {
        curser: pointer; 
        text-decoration: none; 
        color: rgba(100,100,100);
    }
`

const StyledParagraph = styled.p`
    text-decoration: none; 
    font-family: LibreBaskerville-Regular;
    color: rgba(115,115,115);
    font-size: 12px;
    letter-spacing: 1.3px;
    margin: 0px; 
`

const StyledSocialsWrapper = styled.div`
`

const StyledInstagram = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: ${linkFontSize};
    color: ${linkColor};
    letter-spacing: 1.02px;
    line-height: 30px;
    padding: 0px;
    margin: ${socialsMargin};

    &:hover {
        text-decoration: none; 
        curser: pointer; 
        color: rgba(129, 52, 175, 0.8);
    }
`

const StyledFacebook = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: ${linkFontSize};
    color: ${linkColor};
    letter-spacing: 1.02px;
    line-height: 30px;
    padding: 0px;
    margin: ${socialsMargin};

    &:hover {
        text-decoration: none; 
        curser: pointer; 
        color: rgba(59, 89, 152, 0.8);
    }
`

const StyledYoutube = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: ${linkFontSize};
    color: ${linkColor};
    letter-spacing: 1.02px;
    line-height: 30px;
    padding: 0px;
    margin: ${socialsMargin};

    &:hover {
        text-decoration: none; 
        curser: pointer; 
        color: rgba(230, 33, 23, 0.8);
    }
`