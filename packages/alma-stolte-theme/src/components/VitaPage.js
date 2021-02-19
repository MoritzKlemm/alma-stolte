import {React, useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect, styled, css } from 'frontity';

const VitaPage = ({state}) => {

    const [vitaID] = useState(state.source.get(state.router.link).id)
    const [vitaContent] = useState(state.source["page"][vitaID].content.rendered);
    
    return( 
        <Container id="vita-smooth-scroll">
            <Row>
                <StyledCol md={12}> 
                    <StyledParagraph dangerouslySetInnerHTML={{ __html: vitaContent}} />
                </StyledCol> 
            </Row> 
        </Container>
    ) 
}

export default connect(VitaPage);

const StyledCol = styled(Col)`
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
` 