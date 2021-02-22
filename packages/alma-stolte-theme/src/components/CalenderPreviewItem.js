import { React, useState, setState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LinkFrontity from './LinkFrontity'



const CalenderPreviewItem = ({ state, item }) => {

    return (
        <StyledCol md={4}>
            <LinkFrontity href={"/kalender/"}>
                <StyledContent dangerouslySetInnerHTML={{ __html: item.value }} />
            </LinkFrontity>
        </StyledCol>
    )
}

export default connect(CalenderPreviewItem);


const StyledCol = styled(Col)`
    width: 100%; 
    margin: 20px 0px; 
    padding: 0px; 
`

const StyledContent = styled.div`
    
    // general div settings
    font-family: LibreBaskerville-Regular;
    margin: 0px 15px 0px 0px;  

    

    // big date
    & h4 {
        font-size: 22.8px;
        color: #3B487D;
        letter-spacing: 1.63px;
        margin: 0px;
    
        @media (max-width: 1000px) {
            font-size: 20px; 
        }
    }


    // place
    & p:first-of-type {
        font-size: 15.2px;
        color: #3B487D;
        letter-spacing: 1.00px;
        margin-bottom: 10px; 

        @media (max-width: 1000px) {
            font-size: 14px; 
        }
    }

    // title
    & b {
        font-size: 15.2px;
        color: #333232;
        letter-spacing: 1.00px;

        @media (max-width: 1000px) {
            font-size: 14px; 
        }
    }


    // description
    & p:last-of-type {
        font-size: 15.2px;
        color: #333232;
        letter-spacing: 1.09px;
        margin: 0px 5px 0px 0px; 

        // limits preview to 3 lines
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        @media (max-width: 1000px) {
            font-size: 14px; 
        }
    }

    & hr {
        display: none;
    }
`