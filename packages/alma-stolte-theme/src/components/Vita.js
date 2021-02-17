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
                <StyledCol md={12}>
                    <StyledLine></StyledLine>
                </StyledCol>
            </Row>
            <Row>
                <StyledCol md={12}>
                    <StyledParagraph dangerouslySetInnerHTML={{ __html: vitaContent }} />
                </StyledCol>
            </Row>
        </Container>
    )
}

export default connect(Vita);


const breakPointXL = 1200;
const breakPointLG = 992;
const breakPointMD = 768;
const breakPointSM = 576;

const StyledCol = styled(Col)`
    padding: 0px; 
`

const StyledLine = styled.div`
    border-top: 1px solid grey; 
    margin: 5px 0px 30px 0px; 
`

const StyledParagraph = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #0F0D0E;
    letter-spacing: 1.00px;
    text-align: justify;
    line-height: 33.25px;
    margin-bottom: 60px; 

    &::first-letter {
        font-size: 200%;
      }

    @media (max-width: ${breakPointXL}px) {
        font-size: 14px; 
    }

    @media (max-width: ${breakPointSM}px) {
        line-height: 21px;
    }

` 