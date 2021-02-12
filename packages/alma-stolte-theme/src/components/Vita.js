import { React, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect, styled, css } from 'frontity';

const Vita = ({ state }) => {

    const [vitaContent] = useState(state.source["post"][145].content.rendered);

    return (
        <Container id="vita-smooth-scroll">
            <Row>
                <Col md={12}>
                    <StyledLine></StyledLine>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <StyledParagraph dangerouslySetInnerHTML={{ __html: vitaContent }} />
                </Col>
            </Row>
        </Container>
    )
}

export default connect(Vita);

const StyledLine = styled.div`
    border-top: 1px solid grey; 
    margin: 40px 15px; 
`

const StyledParagraph = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #0F0D0E;
    letter-spacing: 1.00px;
    text-align: justify;
    line-height: 33.25px;
    margin-bottom: 60px; 
    padding: 15px; 

    &::first-letter {
        font-size: 200%;
      }

    @media (max-width: 1000px) {
        font-size: 14px; 
    }

` 