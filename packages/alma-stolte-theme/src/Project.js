import React from 'react';
import { connect, styled, css } from 'frontity';
import projektAmusana from './assets/images/projektAmusana.jpg';
import Card from 'react-bootstrap/Card';

const Project = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Card.Img variant="top" src={projektAmusana} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <StyledTitle>{props.title}</StyledTitle>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <StyledDescription>{props.description} <StyledButtonMehr href="">MEHR</StyledButtonMehr></StyledDescription>
                </div>
            </div>
        </div>
    )
}

export default connect(Project)

const StyledMainDiv = styled.div`
   background-color: blue;
   height: 350px; 
   width: 250px;
   margin: 15px; 
`;

const StyledTitle = styled.h3`
    font-family: LibreBaskerville-Regular;
    font-size: 26.6px;
    color: #444C92;
    letter-spacing: 3.99px;
    margin: 20px 0px; 
`;

const StyledDescription = styled.p`
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