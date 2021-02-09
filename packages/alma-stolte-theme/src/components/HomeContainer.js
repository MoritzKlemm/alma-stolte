import { React, useState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import CalenderPreview from './CalenderPreview';
import Contact from './Contact';
import Vita from './Vita';
import ProjectGrid from './ProjectGrid';
import List from './list/List';


const HomeContainer = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <StyledContainer>
            <List />
            <Vita />
            <Contact />
        </StyledContainer>
    )
}

export default connect(HomeContainer);

const StyledContainer = styled(Container)`
    justify-content: center; 
`
