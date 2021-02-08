import { React, useState, useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Switch from "@frontity/components/switch";
import Container from 'react-bootstrap/Container'
import Footer from './Footer';
import FooterImpressum from './FooterImpressum';


const FooterContainer = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <StyledContainer>
            <Switch>
                <StyledLink href="">alma stolte ©</StyledLink>
                <StyledLink href="">created by xx</StyledLink>
                <StyledLink to="/impressum">impressum</StyledLink>
            </Switch>
        </StyledContainer>
    )
}

export default connect(FooterContainer);

const StyledContainer = styled(Container)`
    justify-content: center; 
`
