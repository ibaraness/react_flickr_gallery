import React, { Component } from 'react';
import './Header.scss';
import ImageSearch from './../filters/image-search/ImageSearch';
import ImagePerPage from './../filters/image-per-page/ImagePerPage';
import InfinateScrollToggle from './../filters/infinate-scroll-toggle/InfinateScrollToggle';
import ImageTags from './../filters/tags/ImageTags';

const Header = props => (
    <header className="header">
        <ImageSearch onSearch={props.onSearch}></ImageSearch> 
        <button className="mobile-menu-button" onClick={props.toggleMenu}><i className="fas fa-bars"></i></button>
        <div className={ props.menuActive? "mobile-menu-content active":"mobile-menu-content"}>
            <InfinateScrollToggle setInfiniteScroll={props.setInfiniteScroll}></InfinateScrollToggle>
            <ImagePerPage imagesPerPage={props.imagesPerPage} setImagePerPage={props.setImagePerPage}></ImagePerPage>
            <ImageTags addTag={props.addTag} deleteTag={props.deleteTag} tagItems={props.tags}></ImageTags>
        </div>
    </header>
);
export default Header;