import React, { Component } from 'react';
import './ImageSearch.scss';

const ImageSearch = props => (
    <div className="search header__filter">
        <button className="seacrh__buttom search__icon fas fa-search"></button>
        <input className="search__input" type="text" placeholder="Search for images" onBlur={props.onSearch}/>
    </div>
);

export default ImageSearch;