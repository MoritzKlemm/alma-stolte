import { React, useState } from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import { Form, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import emailjs from 'emailjs-com';
import ContactAlert from './ContactAlert'
import Alert from 'react-bootstrap/Alert'

export default function ContactUs() {

    // variable to save if alert is shown. three options: hide, success, failure
    const [alertStatus, setAlertStatus] = useState('hide');

    const [name, setName] = useState('')
    const [nameCorrect, setNameCorrect] = useState('form-control')

    const [email, setEmail] = useState('')
    const [emailCorrect, setEmailCorrect] = useState('form-control')

    const [subject, setSubject] = useState('')
    const [subjectCorrect, setSubjectCorrect] = useState('form-control')
    
    

    const validateName = (nameInput) => {

        // keep input field "synchron" with user input
        setName(nameInput)
        
        // define email pattern 
        const regExName = /^[a-zA-Z\s]+$/;

        // create regex object 
        const regExNameObject = new RegExp(regExName)

        // test regex against user input saved in "name"
        let resultName = regExNameObject.test(name.toLowerCase())

        // first checks if string is empty because no validation needed if so. if not empty, checking results of regex.
        setNameCorrect(nameInput == '' ? '' : resultName ? "form-control is-valid" : "form-control is-invalid");

        // needed for final sendEmail function
        return resultName;
    }

    const validateMail = (mailInput) => {
        setEmail(mailInput)

        const regExMail = /\S+@\S+\.\S+/;
        const regExMailObject = new RegExp(regExMail)

        let resultMail = regExMailObject.test(email.toLowerCase())
        setEmailCorrect(mailInput == '' ? '' : resultMail ? "form-control is-valid" : "form-control is-invalid");
        return resultMail; 
    }

    const validateSubject = (subjectInput) => {
        setSubject(subjectInput)

        // if subject has more then 1 or less equal to 160 character it is accepted.
        setSubjectCorrect(subjectInput.length <= 1 ? "form-control is-invalid" : subjectInput.length <= 160 ? "form-control is-valid" : "form-control is-invalid");
    }

    function sendEmail(e) {
        e.preventDefault();

        // check if all fields are correct
        if(nameCorrect == 'form-control is-valid' && emailCorrect == 'form-control is-valid' && subjectCorrect == 'form-control is-valid') {
            
            // credentials derived from emailjs.com
            emailjs.sendForm('service_cmv2a0i', 'template_icmanhg', e.target, 'user_qyKXt1Dj8Hq0dM0sJ1q8r')
                .then(
                    (result) => {
                        console.log(result.text);
                        if (result.text == "OK") {
                            setAlertStatus('success')
                        }
                    },
    
                    (error) => {
                        console.log(error.text);
                        setAlertStatus('failure')
                    }
    
                );
            // e.target.reset();
        } else {
            alert("Ihre Eingaben sind noch nicht alle korrekt!")
        }
    }

    return (
        <StyledContainer id="contact-smooth-scroll">
            <Form className="contact-form" onSubmit={sendEmail}>
                <Form.Group>
                    <StyledInput type="text" name="user_name" placeholder="Vor -und Nachname" value={name} onChange={(e) => {validateName(e.target.value)}} className={nameCorrect}/>
                </Form.Group>
                <Form.Group>
                    <StyledInput type="email" name="user_email" placeholder="Email" value={email} onChange={(e) => {validateMail(e.target.value)}} className={emailCorrect}/>
                </Form.Group>
                <Form.Group>
                    <StyledInput type="text" name="subject" placeholder="Betreff" value={subject} onChange={(e) => {validateSubject(e.target.value)}} className={subjectCorrect}/>
                </Form.Group>
                <Form.Group>
                    <StyledFormControlMessage as="textarea" rows={8} name="message" placeholder="Nachricht an Alma Stolte..." />
                </Form.Group>
                <Form.Group>
                    <StyledFormButton type="submit" value="Send">senden</StyledFormButton>
                </Form.Group>
            </Form>

            {/** rendering alert according to "alertStatus" */}
            {alertStatus == 'hide' ? null : 
                alertStatus == 'success' ? 
                <StyledSuccessAlert variant="success" onClick={() => { setAlertStatus('hide') }} dismissible fade show>
                    Ihre Nachricht wurde verschickt!
                </StyledSuccessAlert>
                :
                <StyledWarningAlert variant="warning" onClick={() => { setAlertStatus('hide') }} dismissible className="fade show">
                    Achtung! Ihre Nachricht wurde nicht verschickt.
                </StyledWarningAlert>
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
const buttonHover = keyframes`
    from {transform: background-color: red;}
    to {transform: background-color: blue;}
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
    background-color: transparent !important;
    border: 1px solid #6F9353; 
    color: #6F9353;
`

const StyledWarningAlert = styled(Alert)`
    background-color: transparent !important;
    border: 1px solid #BF4E30; 
    color: #BF4E30;
`