import { connect, css, styled } from "frontity";
import {React, useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ImpressumPage = ({state}) => {

    const [impressumID] = useState(state.source.get(state.router.link).id)
    const [impressumContent] = useState(state.source["page"][impressumID].content.rendered);

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <StyledRenderDiv dangerouslySetInnerHTML={{ __html: impressumContent}} />
                </Col>
            </Row>
        </Container>
    )
}

export default connect(ImpressumPage);

const StyledRenderDiv = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #0F0D0E;
    letter-spacing: 1.09px;
    text-align: justify;
    line-height: 33.25px;
    margin-bottom: 60px; 
    padding: 15px; 
` 