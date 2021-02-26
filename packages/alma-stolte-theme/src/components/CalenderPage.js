import { connect, css, styled, keyframes } from "frontity";
import { React, useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CalenderPage = ({ state }) => {

    const [calenderID] = useState(state.source.get(state.router.link).id)
    const [calenderContent] = useState(state.source["page"][calenderID].content.rendered);

    return (
        <Container>
            <Row>
                <StyledCol md={12}>
                    <StyledRenderDiv dangerouslySetInnerHTML={{ __html: calenderContent }} />
                </StyledCol>
            </Row>
        </Container>
    )
}

export default connect(CalenderPage);

const breakPointXL = 1200;
const breakPointLG = 992;
const breakPointMD = 768;
const breakPointSM = 576;
const breakPointXS = 425;

const StyledCol = styled(Col)`
    padding: 0px; 
`

const StyledRenderDiv = styled.div`

    // general settings
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #0F0D0E;
    letter-spacing: 1.00px;
    text-align: justify;
    line-height: 33.25px;
    margin-bottom: 60px; 
    padding: 15px; 


    // year seperator
    & h2 {
        background-color: #D9C9BB; 
        margin-bottom: 20px; 
        text-align: center; 
        
        @media (max-width: ${breakPointLG}px) {
            font-size: 28px; 
        }
        
        @media (max-width: ${breakPointSM}px) {
            font-size: 24px; 
        }
    }

    // big date
    & h4 {
        font-size: 22.8px;
        color: #3B487D;
        letter-spacing: 1.63px;
        margin: 0px;
    
        @media (max-width: ${breakPointLG}px) {
            font-size: 20px; 
        }
        @media (max-width: ${breakPointSM}px) {
            font-size: 18px; 
        }
    }

    // place
    & p:first-of-type {
        font-size: 15.2px;
        color: #3B487D;
        letter-spacing: 1.00px;
        margin-bottom: 5px; 

        @media (max-width: ${breakPointLG}px) {
            font-size: 14px; 
        }
    }

    // title
    & b {
        color: #333232;
        letter-spacing: 1.00px;

        @media (max-width: ${breakPointLG}px) {
            font-size: 14px; 
        }
    }

    // description
    & p:last-of-type {
        font-size: 15.2px;
        color: #333232;
        letter-spacing: 1.09px;

        @media (max-width: ${breakPointXL}px) {
            font-size: 14px; 
        }

        @media (max-width: ${breakPointMD}px) {
            line-height: 22px;
        }
    }

` 