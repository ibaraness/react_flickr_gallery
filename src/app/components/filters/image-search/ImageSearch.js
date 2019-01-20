import React, { Component } from 'react';
import './ImageSearch.scss';

const ImageSearch = ({onSearch, searchItem}) => {
    const onImageSearch = ()=>{
        const input = document.getElementById('imageSearchInput');
        if(input){
            onSearch(input.value);
        }
    }
    return (
        <div className="search header__filter">
            <button className="seacrh__buttom search__icon fas fa-search" onClick={onImageSearch}></button>
            <input className="search__input" defaultValue={searchItem} type="text" placeholder="Search for images" id="imageSearchInput"
            onBlur={onImageSearch}
            onKeyUp={(event)=>{
                if(event.key === "Enter"){
                    onImageSearch();
                }
            }}/>
        </div>
    );
}

export default ImageSearch;