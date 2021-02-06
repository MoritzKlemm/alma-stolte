import React from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import Col from 'react-bootstrap/Col'
import Link from './link'


const ProjectPreview = ({state, item}) => {

    return(
        <Col md={6}>
            <Link link={item.link}>
                <StyledTitle dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
            </Link>
            <StyledImage dangerouslySetInnerHTML={{ __html: item.content.rendered }}/>
            <StyledExcerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}/>
        </Col>  
    )
}

export default connect(ProjectPreview)


const StyledTitle = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 26.6px; 
    color: #444C92;
    letter-spacing: 3.99px;
    margin: 20px 0px; 
`;

// hiding full paragraph which automatically comes in with "item.content.rendered"
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
