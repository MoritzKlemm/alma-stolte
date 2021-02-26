import { connect, css, styled } from "frontity";
import { React, useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import Contact from './Contact';

const ContactPage = ({ state }) => {

    // saving ID of "contact" page to be independent from ID when it should be deleted and recreated in wp cms
    const [contactPageID] = useState(state.source.get(state.router.link).id)
    const [contactContent] = useState(state.source["page"][contactPageID].content.rendered);

    return (
        <Container>
            <Row>
                <StyledCol md={6}>
                    <Contact />
                </StyledCol>
                <StyledColRight md={6}>
                    <StyledGreeting>Gerne beantworte ich ihre Nachricht oder nehme ihren Anruf entgegen! </StyledGreeting> 
                    <StyledPhoneNumber dangerouslySetInnerHTML={{ __html: contactContent }} />
                    <StyledButtonWrapper>
                        <StyledInstagram target="_blank" href="https://www.instagram.com/alma.s.cello/">instagram</StyledInstagram> 
                        <StyledFacebook target="_blank" href="https://www.facebook.com/alma.stolte">facebook</StyledFacebook> 
                        <StyledYoutube target="_blank" href="https://www.youtube.com/user/MsAlmaCello/featured">youtube</StyledYoutube> 
                    </StyledButtonWrapper>
                </StyledColRight>
            </Row>
        </Container>
    )
}

export default connect(ContactPage);

const linkColor = "rgba(89,85,85,0.59)"
const linkFontSize = "18px;"

const StyledCol = styled(Col)` 
    display: flex;
    justify-content: center; 
`

const StyledColRight = styled(Col)` 
    display: flex;
    justify-content: left; 
    flex-direction: column; 
`

const StyledGreeting = styled.p `
    font-family: LibreBaskerville-Regular;
    font-size: 18px;
    color: rgba(89,85,85,0.59);
    letter-spacing: 1.02px;
    line-height: 30px;
    margin: 22px 0px 20px 0px; 
`

const StyledPhoneNumber = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 18px;
    color: ${linkColor};
    letter-spacing: 1.02px;
    line-height: 30px;
    padding: 0px;
    margin: 5px 0px; 
    
    & p {
        margin: 0px; 
    }
`
const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledInstagram = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: ${linkFontSize};
    color: ${linkColor};
    letter-spacing: 1.02px;
    line-height: 30px;
    padding: 0px;
    margin: 5px 0px; 
    background-color: rgba(129, 52, 175, 0.8); 
    border-radius: 0px;
    border: none;  
    flex-grow: 3;
    height: 35px; 
    background-color: transparent;
    // border: 1px solid grey; 

    &:hover {
        text-decoration: none; 
        curser: pointer; 
        color: rgba(129, 52, 175, 0.6);
    }
`

const StyledFacebook = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: ${linkFontSize};
    color: ${linkColor};
    letter-spacing: 1.02px;
    line-height: 30px;
    padding: 0px;
    margin: 5px 0px; 
    border-radius: 0px;
    border: none;  
    flex-grow: 3;
    height: 35px; 
    background-color: transparent;
    // border: 1px solid grey; 

    &:hover {
        text-decoration: none; 
        curser: pointer; 
        color: rgba(59, 89, 152, 0.6);
    }
`

const StyledYoutube = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: ${linkFontSize};
    color: ${linkColor};
    letter-spacing: 1.02px;
    line-height: 30px;
    padding: 0px;
    margin: 5px 0px; 
    border-radius: 0px;
    border: none;  
    flex-grow: 3;
    height: 35px; 
    background-color: transparent;
    // border: 1px solid grey; 

    &:hover {
        text-decoration: none; 
        curser: pointer; 
        color: rgba(230, 33, 23, 0.6);
    }
`