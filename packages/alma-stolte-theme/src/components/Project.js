import React from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import projektAmusana from '../assets/images/projektAmusana.jpg';

const Project = (props) => {
    return(
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <StyledImage variant="top" src={projektAmusana}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <StyledTitle>{props.title}</StyledTitle>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <StyledDescription>{props.description} <StyledButtonMehr href="">MEHR</StyledButtonMehr></StyledDescription>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default connect(Project)


const StyledTitle = styled.h3`
    font-family: LibreBaskerville-Regular;
    font-size: 26.6px;
    color: #444C92;
    letter-spacing: 3.99px;
    margin: 20px 0px; 
`;

const StyledImage = styled.img`
    border-radius: 6px;
    object-fit: cover;
    width: 100%;
    height: 240px; 
`;


const StyledDescription = styled.a`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #0F0D0E;
    letter-spacing: 1.09px;
    text-align: justify;
    line-height: 33.25px;
`;

const StyledButtonMehr = styled.button`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #3E59E8;
    letter-spacing: 1.09px;
    text-align: justify;
    border: none; 
    background-color: transparent;
`