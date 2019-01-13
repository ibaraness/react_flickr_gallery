import React, { Component } from 'react';
//import './ImageGallery.scss';
import ImageSearch from './../filters/image-search/ImageSearch';
import ImagePerPage from './../filters/image-per-page/ImagePerPage';
import InfinateScrollToggle from './../filters/infinate-scroll-toggle/InfinateScrollToggle';
import ImageTags from './../filters/tags/ImageTags';

const Header = props => (
    <header className="header">
        <ImageSearch onSearch={props.onSearch}></ImageSearch>
        <InfinateScrollToggle></InfinateScrollToggle>
        <ImagePerPage setImagePerPage={props.setImagePerPage}></ImagePerPage>
        
    </header>
);

export default Header;