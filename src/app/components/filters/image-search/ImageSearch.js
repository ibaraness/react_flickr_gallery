import React, { Component } from 'react';
//import './ImageGallery.scss';

const ImageSearch = props => (
    <div className="search header__filter">
        <i className="search__icon fas fa-search"></i>
        <input className="search__input" type="text" placeholder="Search for images" />
    </div>
);

export default ImageSearch;