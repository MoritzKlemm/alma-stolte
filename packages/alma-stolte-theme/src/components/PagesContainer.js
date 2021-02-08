import { React, useState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Contact from './Contact';
import Vita from './Vita';

const PagesContainer = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <StyledContainer>
            test
        </StyledContainer>
    )
}

export default connect(PagesContainer);

const StyledContainer = styled(Container)`
    justify-content: center; 
`
