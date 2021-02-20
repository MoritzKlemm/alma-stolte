import React from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import Col from 'react-bootstrap/Col'
import ProjectPreviewLink from './ProjectPreviewLink'


const ProjectPreview = ({ state, item }) => {

    return (
        <StyledCol md={6}>
            <ProjectPreviewLink link={item.link}>
                <StyledTitle dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                <StyledImage dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                <StyledExcerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                {/** <StyledButton href={item.link}>MEHR</StyledButton> */}
            </ProjectPreviewLink>
        </StyledCol>
    )
}

export default connect(ProjectPreview)


const breakPointXL = 1200;
const breakPointLG = 992;
const breakPointMD = 768;
const breakPointSM = 576;


const StyledCol = styled(Col)`
`

const StyledTitle = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 26.6px;
    color: #444C92;
    letter-spacing: 3.0px;
    margin: 0px 0px 10px 0px;

`;

// hiding full paragraph which automatically comes in with "item.content.rendered"
const StyledImage = styled.div`
    & p {
        display: none;
    }

    & img {
        // border-radius: 6px;
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
        letter-spacing: 1.00px;
        line-height: 33.25px;
        text-align: justify;
        margin-bottom: 30px; 

        @media (max-width: ${breakPointSM}px) {
            line-height: 22px;
        }
    }
`;

const StyledButton = styled.button`
    font-family: LibreBaskerville-Regular;
    font-size: 15.2px;
    color: #3E59E8;
    letter-spacing: 1.09px;
    text-align: justify;
    display: inline;
    background: transparent;
    border: none;

`