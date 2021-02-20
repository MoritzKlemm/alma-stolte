import { React, useState } from 'react';
import { connect, styled, css } from 'frontity';
import { Form, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import emailjs from 'emailjs-com';
import ContactAlert from './ContactAlert'
import Alert from 'react-bootstrap/Alert'

export default function ContactUs() {

    const [alertStatus, setAlertStatus] = useState(null);
    const [displayToggle, setDisplayToggle] = useState('none')

    function sendEmail(e) {
        e.preventDefault();

        // credentials derived from emailjs.com
        emailjs.sendForm('service_cmv2a0i', 'template_icmanhg', e.target, 'user_qyKXt1Dj8Hq0dM0sJ1q8r')
            .then((result) => {
                console.log(result.text);
                if (result.text == "OK") {
                    setAlertStatus(true)
                    setDisplayToggle('')
                }
            }, (error) => {
                console.log(error.text);
                setAlertStatus(false)
            });
        //   e.target.reset();
    }

    return (
        <StyledContainer id="contact-smooth-scroll">

            <Form className="contact-form" onSubmit={sendEmail}>
                <Form.Group>
                    <StyledInput type="text" name="user_name" placeholder="Vor -und Nachname" />
                </Form.Group>
                <Form.Group>
                    <StyledInput type="email" name="user_email" placeholder="Email" />
                </Form.Group>
                <Form.Group>
                    <StyledInput type="text" name="subject" placeholder="Betreff" />
                </Form.Group>
                <Form.Group>
                    <StyledFormControlMessage as="textarea" rows={8} name="message" placeholder="Nachricht" />
                </Form.Group>
                <Form.Group>
                    <StyledFormButton type="submit" value="Send">senden</StyledFormButton>
                </Form.Group>
            </Form>

            {alertStatus 
                ?
                <StyledSuccessAlert variant="success" onClick={() => {setDisplayToggle("none")}} css={css`display: ${displayToggle}`} dismissible >
                    Ihre Nachricht wurde verschickt!
                </StyledSuccessAlert> 
                :
                <Alert variant="warning" onClick={() => {setDisplayToggle("none")}} css={css`display: ${displayToggle}`} dismissible>
                    Leider ist etwas schief gegangen. 
                </Alert>
            }

        </StyledContainer>
    );
}

const StyledContainer = styled(Container)`
    max-width: 450px; 
    padding: 0px; 
`

// input styling --------------------------------------

// bootstrap <input> component. with type = "x" saying what type 
const StyledInput = styled(Form.Control)`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #595555;
    letter-spacing: 1.0px;
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
    font-size: 15.2px;
    color: #595555;
    letter-spacing: 1.0px;
    text-align: justify;
    background-color: transparent; 
    border: 1px solid grey;
    border-radius: 0px; 
    height: 200px; 
    padding: 4px 10px; 
    margin-top: 50px; 

    &:focus {
        background-color: transparent; 
    }
`
const StyledFormButton = styled.button`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #595555;
    letter-spacing: 1.0px;
    width: 100%; 
    height: 35px; 
    background-color: #6F9353;
    color: white; 
    border: none; 
    border-radius: 0px; 

    &:hover {
        background-color: #5F8046;
    }
`

const StyledSuccessAlert = styled(Alert)`
`