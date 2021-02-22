import { React, useState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import CalenderPreview from './CalenderPreview';
import Contact from './Contact';
import Vita from './Vita';
import ProjectGrid from './ProjectGrid';
import List from './list';


const HomeContainer = ({ state }) => {

    return (
        <StyledContainer>
            <CalenderPreview />
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
