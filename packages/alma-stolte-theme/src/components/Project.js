import React from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Project = (props) => {

    function parseImageHtmlTag(postContent) {
        var str = "The best things in life are free";
        var patt = new RegExp("<img>*</img>");
        var res = patt.exec(str);
        console.log(postContent)
    }

    return(
        <Container>
            <Row>
                <Col md={12}>
                    <StyledTitle dangerouslySetInnerHTML={props.title} />
                    <StyledDescription dangerouslySetInnerHTML={props.content}/>
                </Col>
            </Row>
        </Container>
    )
}

export default connect(Project)


const StyledTitle = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 26.6px; 
    color: #444C92;
    letter-spacing: 3.99px;
    margin: 20px 0px; 
`;


const StyledDescription = styled.div`
    & p {
        font-family: LibreBaskerville-Regular;
        font-size: 15.2px;
        color: #0F0D0E;
        letter-spacing: 1.09px;
        text-align: justify;
        line-height: 33.25px;
    }

    & img {
        border-radius: 6px;
        object-fit: cover;
        width: 100%;
        height: 240px; 
    }

`;

const StyledButtonMehr = styled.button`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #3E59E8;
    letter-spacing: 1.09px;
    text-align: justify;
    border: none; 
    background-color: transparent;
` 