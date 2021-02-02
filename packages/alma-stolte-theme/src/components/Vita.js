import {React, useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect, styled, css } from 'frontity';
import Item from "./list/list-item";
import Link from './link'

const Vita = ({state}) => {

    const [vitaContent] = useState(state.source["post"][145].content.rendered);

    return(
        <Container id="vita-smooth-scroll">
            <Row>
                <Col md={12}>
                {console.log(vitaContent)}
                    <StyledParagraph dangerouslySetInnerHTML={{ __html: vitaContent}} />
                </Col>
            </Row> 
        </Container>
    ) 
}

export default connect(Vita);

const StyledParagraph = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #0F0D0E;
    letter-spacing: 1.09px;
    text-align: justify;
    line-height: 33.25px;
    margin-bottom: 60px; 
    padding: 15px; 

    &::first-letter {
        font-size: 200%;
      }
` 