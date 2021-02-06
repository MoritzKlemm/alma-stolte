import React from 'react';
import { connect, styled, css } from 'frontity';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Gallery = () => {
    return(
        <StyledContainer id="gallery-smooth-scroll">
            <Row>
                <Col md={6} css={css`padding: 0px`}>
                    <StyledGalleryOne></StyledGalleryOne>
                    <StyledGalleryThree></StyledGalleryThree>
                    <StyledGalleryFive></StyledGalleryFive>
                </Col>
                <Col md={6} css={css`padding: 0px`}>
                    <StyledGalleryTwo></StyledGalleryTwo>
                    <StyledGalleryFour></StyledGalleryFour>
                    <StyledGallerySix></StyledGallerySix>
                </Col>
            </Row>
        </StyledContainer>
    )
}

export default connect(Gallery);

const spaceBetweenImages = "30";

const StyledContainer = styled(Container)`
    margin-bottom: 60px; 
`

// left gallery column ------------------------------------
const StyledGalleryOne = styled.div`
    background-size: cover;
    background-position: center center; 
    background-repeat: no-repeat;
    width: 100%;
    height: 380px;  
    margin: 0px ${spaceBetweenImages}px ${spaceBetweenImages}px 0px;
    padding: 0px; 
`;

const StyledGalleryThree = styled.div`
    background-size: cover;
    background-position: center center; 
    background-repeat: no-repeat;
    width: 100%;
    height: 750px; 
    margin: 0px ${spaceBetweenImages}px ${spaceBetweenImages}px 0px;
    padding: 0px; 
`;

const StyledGalleryFive = styled.div`
    background-size: cover;
    background-position: center center; 
    background-repeat: no-repeat;
    width: 100%;
    height: 350px; 
    margin: 0px 20px 20px 0px;
    padding: 0px; 
`;


// right gallery column ------------------------------------
const StyledGalleryTwo = styled.div`
    background-size: cover;
    background-position: center center; 
    background-repeat: no-repeat;
    width: 100%;
    height: 750px; 
    margin: 0px 0px ${spaceBetweenImages}px ${spaceBetweenImages}px;
    padding: 0px; 
`;

const StyledGalleryFour = styled.div`
    background-size: cover;
    background-position: center center; 
    background-repeat: no-repeat;
    width: 100%;
    height: 380px; 
    margin: 0px 0px ${spaceBetweenImages}px ${spaceBetweenImages}px;
    padding: 0px; 
`;

const StyledGallerySix = styled.div`
    background-size: cover;
    background-position: center top; 
    background-repeat: no-repeat;
    width: 100%;
    height: 350px; 
    margin: 0px 0px ${spaceBetweenImages}px ${spaceBetweenImages}px;
    padding: 0px; 
`;