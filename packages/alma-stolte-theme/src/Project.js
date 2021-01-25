import React from 'react';
import { connect, styled, css } from 'frontity';
import projektAmusana from './assets/images/projektAmusana.jpg';
import Card from 'react-bootstrap/Card';

const Project = (props) => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <StyledImage variant="top" src={projektAmusana}/>
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