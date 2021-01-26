import React from 'react';
import { connect, styled, css } from 'frontity';
import celloBackground from '../assets/images/celloBackground.jpg';

const CelloBackground = () => {
    return(
        <StyledBackgroundImage>
            
        </StyledBackgroundImage>
    )
}

export default connect(CelloBackground);

const StyledBackgroundImage = styled.div`
    background-image: url(${celloBackground});
    background-size: cover;
    background-position: center center; 
    background-repeat: no-repeat;
    background-attachment: fixed; 
    width: 100vw;
    height: 40vh; 
    margin: 60px 0px; 
`;