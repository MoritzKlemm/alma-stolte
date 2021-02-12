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
            </ProjectPreviewLink>
        </StyledCol>
    )
}

export default connect(ProjectPreview)

const generalWidth = "90%"

// const backGroundHighlight = keyframes`
// from {
//     background-color: rgb(235, 221, 209);
//   }
//   to {
//     background-color: rgb(226,211,200);
//   }
// `;

const StyledCol = styled(Col)`
    // border-radius: 5px; 

    &:hover {
        // animation: ${backGroundHighlight} 0.2s ease-in-out;  
        // animation-fill-mode: forwards;  
        // box-shadow: 10px 10px 5px rgb(226, 207,192);
    }
`

const StyledTitle = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 26.6px;
    color: #444C92;
    letter-spacing: 3.0px;
    margin: 20px 0px 10px 0px;

    @media (max-width: 1000px) {
        font-size: 20px; 
    }
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
        text-align: justify;
        line-height: 33.25px;

        @media (max-width: 1000px) {
            font-size: 14px; 
        }
    
    }

   
`;