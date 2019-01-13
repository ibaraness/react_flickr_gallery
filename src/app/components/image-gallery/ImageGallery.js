import React, { Component } from 'react';
import ImageGalleryItem from './../image-gallery-item/ImageGalleryItem';
import './ImageGallery.scss';

const ImageGallery = ({pictures}) => {
    const images = pictures.map(picture => {
        return <ImageGalleryItem key={picture.id} src={picture.src}></ImageGalleryItem>
    });
    return (
        <div className="image-gallery-items">
            {images}
        </div>
    )
};

export default ImageGallery;