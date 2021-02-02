import React from 'react';
import { connect, styled, css } from 'frontity';
import CelloBackgroundServer from './CelloBackgroundServer';

const CelloBackground = () => {


    return(
        <StyledBackgroundImage />
    )
}

export default connect(CelloBackground);

const StyledBackgroundImage = styled.div`
    background-image: url("https://cmsalmastolte.files.wordpress.com/2021/01/12-gambe-bc4o2332.jpg");
    background-size: cover;
    background-position: center center; 
    background-repeat: no-repeat;
    background-attachment: fixed; 
    width: 100vw;
    height: 40vh; 
    margin: 60px 0px; 
`;