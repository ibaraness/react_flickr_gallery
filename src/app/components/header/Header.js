import React from 'react';
import ImagePerPage from './../filters/image-per-page/ImagePerPage';
import ImageSearch from './../filters/image-search/ImageSearch';
import ImageTags from './../filters/tags/ImageTags';
import './Header.scss';

const Header = ({
    setInfiniteScroll, 
    showSearch, 
    showImagesPerPAge, 
    showTags, 
    toggleImagePerPAge, 
    toggleSearch, 
    toggleTage,
    imagesPerPage,
    tags,
    deleteTag,
    addTag,
    setImagePerPage,
    onSearch,
    inifinateScroll,
    searchItem
}) => {
    return (
        <header className="header">
                
                {!showSearch ? <div className={"header__filter--button"} onClick={()=>{
                    toggleSearch(!showSearch);
                }}>
                    <i className="fa fa-search"></i>
                    <div className="header__filter--button__label">Search</div>
                </div> : null}
                {showSearch ? <div onBlur={()=>{
                    toggleSearch(!showSearch);
                }}><ImageSearch searchItem={searchItem} onSearch={onSearch}></ImageSearch></div> : null}
                <div className={"header__filter--button " + (!inifinateScroll ? "": "disabled")} onClick = {()=>{setInfiniteScroll(false)}}>
                    <i className="far fa-images"></i>
                    <div className="header__filter--button__label">Pages</div>
                </div>
                <div className={"header__filter--button " + (inifinateScroll ? "": "disabled")} onClick = {()=>{setInfiniteScroll(true)}}>
                    <i className="fas fa-th"></i>
                    <div className="header__filter--button__label">infinite scroll</div>
                </div>
                <div className={"header__filter--button " + (!inifinateScroll ? "": "disabled")} onClick={()=>{
                    toggleImagePerPAge(!showImagesPerPAge);
                }}>
                    <i className="fas fa-dice-three"></i>
                    <div className="header__filter--button__label">Images Per Page</div>
                </div>
                {showImagesPerPAge ? <ImagePerPage imagesPerPage={imagesPerPage} setImagePerPage={setImagePerPage}></ImagePerPage> : null}
                <div className="header__filter--button"onClick={()=>{
                    toggleTage(!showTags);
                }}>
                    <i className="fas fa-tags"></i>
                    <div className="header__filter--button__label">Tags</div>
                </div>
                {showTags ? <ImageTags addTag={addTag} deleteTag={deleteTag} tagItems={tags}></ImageTags> : null}
            
        </header>
    )
};
export default Header;