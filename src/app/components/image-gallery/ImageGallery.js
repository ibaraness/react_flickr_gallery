import React, { Component } from 'react';
import ImageGalleryItemContainer from './../../containers/image-gallery-item/ImageGalleryItemContainer';
import './ImageGallery.scss';

const ImageGallery = ({pictures, imagesPerPage, setSelectedById}) => {
    const images = pictures.map((picture, index) => {
        return <ImageGalleryItemContainer 
            key={picture.id + index} 
            pictureId={picture.id} 
            imagesPerPage={imagesPerPage}
            setSelectedById={setSelectedById}
            src={picture.src}></ImageGalleryItemContainer>
    });
    return (
        <div className="image-gallery-items">
            {images}
        </div>
    )
};

export default ImageGallery;