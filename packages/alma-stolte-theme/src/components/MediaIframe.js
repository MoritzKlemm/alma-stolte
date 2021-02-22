import { React, useState, setState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LinkFrontity from './LinkFrontity'



const MediaIframe = ({ state, item }) => {

    return (
        <StyledCol md={12}>
            <StyledContent dangerouslySetInnerHTML={{ __html: item.value }} />
        </StyledCol>
    )
}

export default connect(MediaIframe);


const StyledCol = styled(Col)`
    text-align: center;
    padding-bottom: 30px; 
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