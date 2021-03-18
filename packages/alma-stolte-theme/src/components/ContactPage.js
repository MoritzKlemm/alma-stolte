import { connect, css, styled } from "frontity";
import { React, useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


import Contact from './Contact';

const ContactPage = ({ state }) => {

    // saving ID of "contact" page to be independent from ID when it should be deleted and recreated in wp cms
    const [contactPageID] = useState(state.source.get(state.router.link).id)
    const [contactContent] = useState(state.source["page"][contactPageID].content.rendered);

    return (
        <Container>
            <Row>
                <StyledCol md={12}>
                    <Contact />
                </StyledCol>
            </Row>

            <Row>
                <StyledCol md={12}>
                    <StyledWrapper>
                        <StyledGreeting>
                            Gerne beantworte ich ihnen hier ihre Nachricht, oder über meine Kanäle auf 
                            <StyledFacebook target="_blank" href="https://www.facebook.com/alma.stolte"> Facebook</StyledFacebook> oder 
                            <StyledInstagram target="_blank" href="https://www.instagram.com/alma.s.cello/"> Instagram</StyledInstagram>.
                        </StyledGreeting> 
                    </StyledWrapper>
                </StyledCol>
            </Row>
            
            {/** 
            <Row>
                <StyledCol md={12}>
                    <StyledWrapper>
                        <StyledGreeting>Gerne beantworte ich ihre Nachricht oder <br />nehme ihren Anruf entgegen! </StyledGreeting>
                        
                        <StyledPhoneNumber dangerouslySetInnerHTML={{ __html: contactContent }} /> 
                    </StyledWrapper>
                </StyledCol>
            </Row>
            */}
            
        </Container>
    )
}

export default connect(ContactPage);

const breakPointXL = 1200;
const breakPointLG = 992;
const breakPointMD = 768;
const breakPointSM = 576;
const breakPointXS = 425;



const linkColor = "rgba(89,85,85,0.59)"
const linkFontSize = "16px;"
const margin = "2px 0px"

const StyledCol = styled(Col)` 
    display: flex;
    align-items: center; 
    flex-direction: column; 
`

const StyledWrapper = styled.div`
    max-width: 540px; 
`

const StyledGreeting = styled.p`
    font-family: LibreBaskerville-Regular;
    font-size: 16px;
    color: rgba(89,85,85,0.59);
    letter-spacing: 1px;
    line-height: 28px;
    margin: 22px 0px 0px 0px; 
    text-align: center; 

    @media (max-width: ${breakPointXL}px) {
        font-size: 14px; 
    }

    @media (max-width: ${breakPointSM}px) {
        line-height: 22px;
    }  

`

const StyledPhoneNumber = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 16px;
    color: rgba(89,85,85,0.59);
    letter-spacing: 1px;
    line-height: 30px;
    padding: 0px;
    margin: ${margin};
    text-align: center; 
    
    & p {
        margin: 0px; 
    }
`
const StyledButtonWrapper = styled.div`
    display: flex;
    
`

const StyledInstagram = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: ${linkFontSize};
    color: rgba(129, 52, 175, 0.8);
    letter-spacing: 1.02px;
    line-height: 30px;
    padding: 0px;
    margin: ${margin};
    background-color: rgba(129, 52, 175, 0.8); 
    border-radius: 0px;
    border: none;  
    flex-grow: 3;
    height: 35px; 
    background-color: transparent;
    // border: 1px solid grey; 

    &:hover {
        color: rgba(129, 52, 175, 0.8);
        text-decoration: none; 
        curser: pointer; 
    }

    @media (max-width: ${breakPointXL}px) {
        font-size: 14px; 
    }

    @media (max-width: ${breakPointSM}px) {
        line-height: 22px;
    }  
`

const StyledFacebook = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: ${linkFontSize};
    color: rgba(59, 89, 152, 0.8);
    letter-spacing: 1.02px;
    line-height: 30px;
    padding: 0px;
    margin: ${margin};
    border-radius: 0px;
    border: none;  
    flex-grow: 3;
    height: 35px; 
    background-color: transparent;
    // border: 1px solid grey; 

    &:hover {
        text-decoration: none; 
        curser: pointer; 
        color: rgba(59, 89, 152, 0.8);
    }

    @media (max-width: ${breakPointXL}px) {
        font-size: 14px; 
    }

    @media (max-width: ${breakPointSM}px) {
        line-height: 22px;
    }  
`

const StyledYoutube = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: ${linkFontSize};
    color: ${linkColor};
    letter-spacing: 1.02px;
    line-height: 30px;
    padding: 0px;
    margin: ${margin};
    border-radius: 0px;
    border: none;  
    flex-grow: 3;
    height: 35px; 
    background-color: transparent;
    // border: 1px solid grey; 

    &:hover {
        text-decoration: none; 
        curser: pointer; 
        color: rgba(230, 33, 23, 0.8);
    }
`