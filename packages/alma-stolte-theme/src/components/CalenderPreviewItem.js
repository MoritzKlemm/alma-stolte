import { React, useState, setState, useEffect } from 'react';
import { connect, styled, css, keyframes } from 'frontity';
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

const breakPointXL = 1199;
const breakPointLG = 991;
const breakPointMD = 767;
const breakPointSM = 575;
const breakPointXS = 424;


const hoverAnimationIn = keyframes`
    0% {
        background-color: transparent;
    }
    100% {
        background-color: rgb(221, 205, 191);
    }
`

const hoverAnimationOut = keyframes`
    0% {
        background-color: rgb(221, 205, 191);
    }
    100% {
        background-color: transparent;
    }
`

const StyledCol = styled(Col)`
    margin: 20px 0px; 
    padding: 0px; 

`

const StyledContent = styled.div`
    
    // general div settings
    font-family: LibreBaskerville-Regular;
    margin: 0px 15px 0px 0px;  
    
    & a {
        color: #727272;
    }

    & a:hover {
        text-decoration: none; 
    }

    @media (max-width: ${breakPointMD}px) {
        margin: 0px;  
    }

    &:hover {
        animation: ${hoverAnimationIn};
        animation-duration: 0.3s;
        animation-fill-mode:forwards;
        animation-timing-function: ease-out; 
    }

    &:not( :hover ) {
        animation: ${hoverAnimationOut};
        animation-duration: 0.3s;
        animation-fill-mode:forwards;
        animation-timing-function: ease-in; 
    }

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
        line-height: 28px;
        margin: 0px; 

        // limits preview to 3 lines
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        @media (max-width: ${breakPointXL}px) {
            font-size: 14px; 
        }
    
        @media (max-width: ${breakPointMD}px) {
            line-height: 22px;
        }
    }

    
    & hr {
        display: none;
    }
`