import { React, useState, setState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const MediaIframe = ({ state, item }) => {

    return (
        <StyledCol md={12}>
            <StyledContent dangerouslySetInnerHTML={{ __html: item.value }} />
        </StyledCol>
    )
}

export default connect(MediaIframe);

const breakPointSM = 576;

const StyledCol = styled(Col)`
    text-align: center;
    padding: 0px 0px 15px 0px; 

    @media (max-width: ${breakPointSM}px) {
        padding: 0px 15px 15px 15px; 
    }
`

const StyledContent = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 51%;

    & iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0; top: 0;
    }
`