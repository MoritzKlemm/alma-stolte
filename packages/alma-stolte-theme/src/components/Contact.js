import React from 'react';
import { connect, styled, css } from 'frontity';
import {Form, Button} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IconPhone from '../assets/icons/IconPhone';
import { AiFillPhone } from 'react-icons';

const Contact = () => {
    return(
        <StyledContainer id="contact-smooth-scroll">
            <Row>
                <Col md={12}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <StyledFormControl type="text" placeholder="Vor -und Nachname" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <StyledFormControl type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <StyledFormControl type="text" placeholder="Telefon" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <StyledFormControl type="text" placeholder="Betreff" />
                        </Form.Group>
                        
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <StyledFormControlMessage as="textarea" rows={10} placeholder="Nachricht"/>
                        </Form.Group>

                        <StyledFormButton variant="primary" type="submit">
                          senden
                        </StyledFormButton>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <StyledPhoneNumber>+49 176 35601648</StyledPhoneNumber>
                </Col>
            </Row>
        </StyledContainer>
        
    )
}

export default connect(Contact);

const StyledContainer = styled(Container)`
    width: 600px; 
`

const StyledFormControl = styled(Form.Control)`
    font-family: LibreBaskerville-Regular;
    font-size: 16px;
    color: #595555;
    letter-spacing: 1.22px;
    text-align: justify;
    background-color: transparent; 
    border: none; 
    border-bottom: 1px solid grey;
    border-radius: 0px; 
    padding: 2px 10px; 

    &:focus {
        background-color: transparent; 
    }

    &::hover {
        curser: pointer; 
    }
`

const StyledFormControlMessage = styled(Form.Control)`
    font-family: LibreBaskerville-Regular;
    font-size: 16px;
    color: #595555;
    letter-spacing: 1.22px;
    text-align: justify;
    background-color: transparent; 
    border: 1px solid grey;
    border-radius: 5px; 
    height: 200px; 
    padding: 2px 10px; 
    margin-top: 50px; 

    &:focus {
        background-color: transparent; 
    }
`
const StyledFormButton = styled(Button)`
    font-family: LibreBaskerville-Regular;
    font-size: 16px;
    color: #595555;
    letter-spacing: 1.22px;
    width: 100%; 
    background-color: #6F9353;
    color: white; 
    border: none; 

    &:hover {
        background-color: #5F8046;
    }
`

const StyledPhoneNumber = styled.p`
    font-family: LibreBaskerville-Regular;
    font-size: 18px;
    color: #595555;
    letter-spacing: 2.99px;
    margin-top: 30px; 
    display: flex; 
    justify-content: center; 
`