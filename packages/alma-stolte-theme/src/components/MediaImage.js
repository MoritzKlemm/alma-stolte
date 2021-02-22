import { React, useState, setState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LinkFrontity from './LinkFrontity'



const MediaImage = ({ state, item }) => {

    return (
        <StyledCol md={6}>
            <StyledContent dangerouslySetInnerHTML={{ __html: item.value }} />
        </StyledCol>
    )
}

export default connect(MediaImage);

const breakPointXL = 1200;
const breakPointLG = 992;
const breakPointMD = 768;
const breakPointSM = 576;
const breakPointXS = 425;


const StyledCol = styled(Col)`
`

const StyledContent = styled.div`
    & img {
       width: 100%;
       height: auto;
       padding-bottom: 15px; 
    }

`