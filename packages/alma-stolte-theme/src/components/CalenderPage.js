import { connect, css, styled } from "frontity";
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
                <Col md={12}>
                    <StyledRenderDiv dangerouslySetInnerHTML={{ __html: calenderContent }} />
                </Col>
            </Row>
        </Container>
    )
}

export default connect(CalenderPage);

const StyledRenderDiv = styled.div`

    & h2 {
        background-color: #D9C9BB; 
        margin-bottom: 20px; 
    }

    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #0F0D0E;
    letter-spacing: 1.00px;
    text-align: justify;
    line-height: 33.25px;
    margin-bottom: 60px; 
    padding: 15px; 
` 