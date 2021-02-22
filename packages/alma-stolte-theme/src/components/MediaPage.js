import { connect, css, styled } from "frontity";
import {React, useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MediaPage = ({state}) => {

    // saving ID of "media" page to be independent from ID when it should be deleted and recreated
    const [mediaPageID] = useState(state.source.get(state.router.link).id)
    const [mediaContent] = useState(state.source["page"][mediaPageID].content.rendered);

    return (
        <Container>
            <StyledRow>
                <StyledCol md={12}>
                    <StyledRenderDiv dangerouslySetInnerHTML={{ __html: mediaContent}} />
                </StyledCol>
            </StyledRow>
        </Container>
    )
}

export default connect(MediaPage);

const StyledRow = styled(Row)`
`

const StyledCol = styled(Col)`
    display: flex;
    justify-content: center; 
`

const StyledRenderDiv = styled.div`
    display: inline; 
    margin: 0px 15px; 

    & iframe {
        position: relative;
        width: 100%;
        height: 0;
    }
` 