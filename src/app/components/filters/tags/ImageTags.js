import React, { Component } from 'react';
//import './ImageGallery.scss';

const ImageTags = props => (
    <div className="tags header__filter">
        <input className="tags-input" type="text" placeholder="Add tag" />
        <ul className="tags-list">
            <li className="tags-item">Nature<button className="tags-button"><i className="fas fa-times"></i></button></li>
            <li className="tags-item">Home<button><i className="fas fa-times"></i></button></li>
            <li className="tags-item">Nature<button className="tags-button"><i className="fas fa-times"></i></button></li>
            <li className="tags-item">Home<button><i className="fas fa-times"></i></button></li>
            <li className="tags-item">Nature<button className="tags-button"><i className="fas fa-times"></i></button></li>
            <li className="tags-item">Home<button><i className="fas fa-times"></i></button></li>
            <li className="tags-item">Nature<button className="tags-button"><i className="fas fa-times"></i></button></li>
            <li className="tags-item">Home<button><i className="fas fa-times"></i></button></li>
        </ul>
    </div>
);

export default ImageTags;