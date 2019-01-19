import React, { Component } from 'react';
import './ImageTags.scss';

const ImageTags = ({tagItems, addTag, deleteTag}) => {

    const tagItemElements = tagItems.map((tagItem,index) => {
        const key = index + tagItem.toLocaleLowerCase().replace(/\ /g,"_");
        return <li key={key} className="tags__list__item">
            {tagItem}<button className="tags__delete-button" onClick={()=>{
                deleteTag(tagItem);
            }}><i className="fas fa-times"></i></button>
        </li>
    });

    const onAddTag = () => {
        const input = document.getElementById('tagTextInput');
        if(input && input.value !== ""){
            addTag(input && input.value || "");
            input.value = "";
        }
    }

    return (<div className="tags header__filter">
        <div className="tags__addition">
            <button className="tags__addition__button fas fa-plus-circle" onClick={onAddTag}></button>
            <input className="tags__addition__input" id="tagTextInput" type="text" onKeyUp={(event)=>{
                if(event.key === "Enter"){
                    onAddTag();
                }
            }} placeholder="Add tag" />
        </div>    
        <ul className="tags__list">
            {tagItemElements}
        </ul>
    </div>
)};

export default ImageTags;