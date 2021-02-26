import { React, useState, setState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const MediaImage = ({ state, item }) => {

    return (
        <StyledCol md={6}>
            <StyledContent dangerouslySetInnerHTML={{ __html: item.value }} />
        </StyledCol>
    )
}

export default connect(MediaImage);

const breakPointSM = 576;

const StyledCol = styled(Col)`
    padding: 0px;

    @media (max-width: ${breakPointSM}px) {
        padding: 0px 15px; 
    }
`

const StyledContent = styled.div`
    & img {
       width: 100%;
       height: auto;
       padding: 0px;
    }
`