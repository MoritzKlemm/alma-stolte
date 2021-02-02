import React from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Project = ({state, item}) => {

    // function parseImageHtmlTag(postContent) {
    //     var str = "The best things in life are free";
    //     var patt = new RegExp("<img>*</img>");
    //     var res = patt.exec(str);
    //     console.log(postContent)
    // }

    return(
        <Col md={6}>
            <StyledTitle dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
            <StyledImage dangerouslySetInnerHTML={{ __html: item.content.rendered }}/>
            <StyledExcerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}/>
        </Col>
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

// hiding full paragraph automatically comming with "item.content.rendered"
const StyledImage = styled.div`
    & p {
        display: none;
    }

    & img {
        border-radius: 6px;
        object-fit: cover;
        width: 100%;
        height: 240px; 
    }

`;

// styling excerpt which only comes with a paragraph 
const StyledExcerpt = styled.div`
    & p {
        font-family: LibreBaskerville-Regular;
        font-size: 15.2px;
        color: #0F0D0E;
        letter-spacing: 1.09px;
        text-align: justify;
        line-height: 33.25px;
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