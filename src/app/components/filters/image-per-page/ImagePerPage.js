import React, { Component } from 'react';
import './ImagePerPage.scss';

const ImagePerPage = ({setImagePerPage, imagesPerPage}) => {
    let options = [];
    for(let i = 1; i < 21; i++){
        options.push(<option key={i} value={i}>{i}</option>)
    }
    return (
    <div className="image-per-page ">
        <label className="header__filter__label">Images per page:</label>
        <select className="image-per-page__dropdown" value={imagesPerPage} onChange={(event)=>{
            setImagePerPage(event.target.value);
        }}>
            {options}
        </select>
    </div>
)};

export default ImagePerPage;