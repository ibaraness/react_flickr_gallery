import React, { Component } from 'react';
import { loadImagePromise } from './../../utils/general';
import './ImageGalleryItem.scss';
import { LoadStatus} from './../../enums/load-status';

const ImageGalleryItem = ({src, loaded, imagesPerPage, pictureId, setSelectedById}) => {
    const rowSize = imagesPerPage <= 6 ? "row" + imagesPerPage: "row6";
    let styles = {};
    if(loaded === LoadStatus.COMPLETE){
        styles = { background:`url(${src})`, backgroundSize: 'cover',  backgroundPosition: 'center' } 
    }
    else if(loaded === LoadStatus.FAILD){
        styles = { backgroundImage: "none", backgroundColor: "#000000"} 
    }
    return(
        <div className={"image-gallery-item " + rowSize} style={styles} onClick={()=>{
            setSelectedById(pictureId);
        }}></div>
    );
}
export default ImageGalleryItem;