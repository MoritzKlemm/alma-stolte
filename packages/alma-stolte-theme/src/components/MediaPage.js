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
            <Row>
                <StyledCol md={12}>
                    <div dangerouslySetInnerHTML={{ __html: mediaContent}} />
                </StyledCol>
            </Row>
        </Container>
    )
}

export default connect(MediaPage);


const StyledCol = styled(Col)`
    display: flex;
    justify-content: center; 
`

const StyledRenderDiv = styled.div`
    
` 