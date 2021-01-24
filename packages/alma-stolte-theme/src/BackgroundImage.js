import React from 'react';
import { connect, styled, css } from 'frontity';
import almaBackground from './assets/images/almaBackground.jpg'
import {Image} from 'react-bootstrap';


const BackgroundImage = ({ state }) => {
    return(
        <div>
            <div css={css `
                background-image: url(${almaBackground});
                background-size:cover;
                background-position: top;
                height: 100vh`
            }>
            </div>
        </div>
    )
}

export default connect(BackgroundImage)

