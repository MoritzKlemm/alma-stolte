import React from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import Col from 'react-bootstrap/Col'
import ProjectPreviewLink from './ProjectPreviewLink'


const ProjectPreview = ({ state, item }) => {

    return (
        <StyledCol md={6}>
            <ProjectPreviewLink link={item.link}>
                <StyledAnimation>
                    <StyledTitle dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                    <StyledImage dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                    <StyledExcerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                </StyledAnimation>
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

const hoverAnimationIn = keyframes`
    0% {background-color: rgb(235, 221, 209, 0.8);}
    100% {background-color: rgb(221, 205, 191);}
`

const hoverAnimationOut = keyframes`
    0% {background-color: rgb(221, 205, 191, 0.8);}
    100% {background-color: rgb(235, 221, 209);}
`

const StyledCol = styled(Col)`
    margin-bottom: 30px;
    @media (max-width: ${breakPointMD}px) {
        margin-bottom: 0px; 
    }
   
`
const StyledAnimation = styled.div`
    &:hover {
        animation: ${hoverAnimationIn};
        animation-duration: 0.3s;
        animation-fill-mode:forwards;
        animation-timing-function: ease-out; 
    }

    &:not( :hover ) {
        animation: ${hoverAnimationOut};
        animation-duration: 0.3s;
        animation-fill-mode:forwards;
        animation-timing-function: ease-in; 
    }
`

const StyledTitle = styled.div`
    font-family: LibreBaskerville-Regular;
    font-size: 26.6px;
    color: #444C92;
    letter-spacing: 3.0px;
    margin: 5px 0px;

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
        line-height: 28px;
        text-align: justify;
        margin-bottom 0px; 

        @media (max-width: ${breakPointSM}px) {
            line-height: 22px;
        }

        & a {
            color: #3B487D;
        }
    
        & a:hover {
            text-decoration: none; 
            color: #5D6898;
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