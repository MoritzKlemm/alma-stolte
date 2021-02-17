import React, { useState } from 'react';
import { connect, styled, css, keyframes } from 'frontity';
import { Navbar, Nav } from 'react-bootstrap';
import almaBackground from '../assets/images/almaBackground.jpg'
import NavbarCustomLink from "./NavbarCustomLink";



const NavbarCustom = ({ state }) => {

    const data = state.source.get(state.router.link);

    return (

        <div css={data.isHome ?
            css`
                    background-image: url(${almaBackground});
                    background-size:cover;
                    background-attachment: fixed; 
                    background-position: top;
                    height: 100vh;
                    border: 2px solid purple;`

            :
            css`
                    margin-bottom: 80px; 
                    `}>
        </div>
    )
}

export default connect(NavbarCustom)