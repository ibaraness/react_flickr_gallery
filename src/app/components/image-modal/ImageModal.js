import React, { Component } from 'react';
import './ImageModal.scss';
import {LoadStatus} from './../../enums/load-status';
import {ModalStatus} from './../../enums/modal';

const ImageModal = ({src, contentLoaded, status, onClose, afterClose}) => {
    let modalImageStyle = {};
    let loadedClass = "";
    let showErrorMessage = "";
    if(contentLoaded === LoadStatus.COMPLETE){
        modalImageStyle = {
            backgroundImage: `url(${src})`,
            backgroundSize: "contain"
        };
        loadedClass = "loaded";
    } else if(contentLoaded === LoadStatus.FAILD){
        showErrorMessage = "show";
    }

    const close = status === ModalStatus.CLOSING 
        ? "closing" 
        : (status === ModalStatus.CLOSED ? "closed": "");
    return (
        <div className={"image-modal " + close} onTransitionEnd={(event)=>{
            if(event.target.classList.contains("image-modal")){
               afterClose();
            }
            
        }}>
            <div className={"image-modal__content " + loadedClass} style={modalImageStyle}>
                <button className="image-modal__content--close-btn" onClick={()=>{
                    onClose();
                }}><i className="fas fa-times-circle"></i></button>
                <h4 className={"image-modal__content__error " + showErrorMessage}>Image faild to load!</h4>
            </div>
        </div>
    )
}
export default ImageModal;