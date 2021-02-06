import { React, useState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavbarCustomLight from './NavbarCustomLight'

const Project = ({ state }) => {

    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const post = state.source[data.type][data.id];

    return (
        <div>
            <StyledContainer>
                <Row>
                    <Col md={12}>
                        <StyledContent dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </Col>
                </Row>
            </StyledContainer>
        </div>
    )
}

export default connect(Project);

const StyledContainer = styled(Container)`
    margin-top: 60px; 
    max-width: 1000px; 
`

// styling excerpt which only comes with a paragraph 
const StyledContent = styled.div`
    & p {
        font-family: LibreBaskerville-Regular;
        font-size: 15.2px;
        color: #0F0D0E;
        letter-spacing: 1.09px;
        text-align: justify;
        line-height: 33.25px;
    }

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%; 
    }
    

`;