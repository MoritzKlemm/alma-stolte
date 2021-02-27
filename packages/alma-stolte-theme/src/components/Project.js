import { React, useState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Project = ({ state }) => {

    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const post = state.source[data.type][data.id];

    return (
        <StyledContainer>
            <Row>
                <Col md={12}>
                    <StyledContent dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </Col>
            </Row>
        </StyledContainer>
    )
}

export default connect(Project);

const breakPointXL = 1200;
const breakPointLG = 992;
const breakPointMD = 768;
const breakPointSM = 576;

const StyledContainer = styled(Container)`
    padding: 0px 15px;
`

// styling excerpt which only comes with a paragraph 
const StyledContent = styled.div`
    & p {
        font-family: LibreBaskerville-Regular;
        font-size: 15.2px;
        color: #0F0D0E;
        letter-spacing: 1.00px;
        text-align: justify;
        line-height: 28px;

        @media (max-width: ${breakPointXL}px) {
            font-size: 14px; 
        }
    
        @media (max-width: ${breakPointSM}px) {
            line-height: 22px;
        }    
        
    }

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%; 
    }

   

`;