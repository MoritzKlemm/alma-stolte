import {React, useState} from 'react';
import { connect, styled, css } from 'frontity';
import {Form, Button} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mbm4nb8', 'template_nn9ukco', e.target, 'user_qyKXt1Dj8Hq0dM0sJ1q8r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    //   e.target.reset();
  }

  return (
      <StyledContainer>
        <Form className="contact-form" onSubmit={sendEmail}>
            <Form.Group>
                <StyledInput type="text" name="user_name" placeholder="Vor -und Nachname"/>
            </Form.Group>
            <Form.Group>
                <StyledInput type="email" name="user_email" placeholder="Email"/>
            </Form.Group>
            <Form.Group>
                <StyledInput type="text" name="subject" placeholder="Betreff"/>
            </Form.Group>
            <Form.Group>
                <StyledFormControlMessage as="textarea" rows={10} name="message" placeholder="Nachricht"/>
            </Form.Group>
            <Form.Group>
                <StyledFormButton type="submit" value="Send">senden</StyledFormButton>
            </Form.Group>
        </Form>
      </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
    width: 40%; 
`

// input styling --------------------------------------

// bootstrap <input> component. with type = "x" saying what type 
const StyledInput = styled(Form.Control)`
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
    margin: 20px 0px; 
 
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
    padding: 4px 10px; 
    margin-top: 50px; 

    &:focus {
        background-color: transparent; 
    }
`
const StyledFormButton = styled.button`
    font-family: LibreBaskerville-Regular;
    font-size: 16px;
    color: #595555;
    letter-spacing: 1.22px;
    width: 100%; 
    height: 35px; 
    background-color: #6F9353;
    color: white; 
    border: none; 
    border-radius: 5px; 

    &:hover {
        background-color: #5F8046;
    }
`

// Static phone number -------------------------------

const StyledPhoneNumber = styled.p`
    font-family: LibreBaskerville-Regular;
    font-size: 18px;
    color: #595555;
    letter-spacing: 2.99px;
    margin-top: 30px; 
    display: flex; 
    justify-content: center; 
`