import React, { Component } from 'react';
//import './ImageGallery.scss';

const ImagePerPage = ({setImagePerPage}) => {
    return (
    <div className="image-per-page header__filter">
        <label className="header__filter__label">Images per page:</label>
        <select onChange={setImagePerPage}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    </div>
)};

export default ImagePerPage;