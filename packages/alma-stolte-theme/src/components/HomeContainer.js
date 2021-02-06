import { React, useState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Contact from './Contact';
import Vita from './Vita';

const HomeContainer = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <Container>
            <Vita />
            <Contact />
        </Container>
    )
}

export default connect(HomeContainer);
