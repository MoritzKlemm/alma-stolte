import React from 'react';
import { connect, styled, css } from 'frontity';
import galleryOne from './assets/images/galleryOne.jpg';
import galleryTwo from './assets/images/galleryTwo.jpg';
import galleryThree from './assets/images/galleryThree.jpg';
import galleryFour from './assets/images/galleryFour.jpg';
import galleryFive from './assets/images/galleryFive.jpg';
import gallerySix from './assets/images/gallerySix.jpg';

const Gallery = () => {
    return(
        <div className="container">
            <ul class="mdc-image-list mdc-image-list--masonry my-masonry-image-list" css={css`list-style: none`}>
                <li className="mdc-image-list__item">
                    <StyledGalleryImage class="mdc-image-list__image" src={galleryOne}/>
                </li>
            </ul>
        </div>
    )
}

export default connect(Gallery);

const StyledGalleryImage = styled.img`
border-radius: 6px;
object-fit: cover;
width: 100%;
height: 240px; 
`;