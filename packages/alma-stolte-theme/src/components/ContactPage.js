import { connect, css, styled } from "frontity";
import {React, useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Contact from './Contact';   

const ContactPage = ({state}) => {

    // saving ID of "contact" page to be independent from ID when it should be deleted and recreated
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
                    <StyledPhoneNumber dangerouslySetInnerHTML={{ __html: contactContent}} />
                </StyledCol>
            </Row>
        </Container>
    )
}

export default connect(ContactPage);


const StyledCol = styled(Col)` 
    display: flex;
    justify-content: center; 
`
const StyledPhoneNumber = styled.p`
    font-family: LibreBaskerville-Regular;
    font-size: 18px;
    color: #595555;
    letter-spacing: 2.99px;
    margin-top: 30px; 
    display: flex; 
    justify-content: center; 
    display: inline;
`