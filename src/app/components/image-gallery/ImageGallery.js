import React, { Component } from 'react';
import './ImageGallery.scss';

const ImageGallery = ({pictures}) => {
    const images = pictures.map(picture => {
        const styles = {
            background:`url(${picture.src})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };
        return <div key={picture.id} className="image-gallery-item" style={styles}></div>
    });
    return (
        <div className="image-gallery-items">
            {images}
        </div>
    )
};

export default ImageGallery;