import React, { Component } from 'react';
import { loadImagePromise } from './../../utils/general';
import ImageModal from './../../components/image-modal/ImageModal';
import {LoadStatus} from './../../enums/load-status';
import {ModalStatus} from './../../enums/modal';

class ImageModalContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            contentLoaded: LoadStatus.LOADING,
            status: ModalStatus.CLOSED,
            src: ""
        }
        this.onClose = this.onClose.bind(this);
        this.afterClose = this.afterClose.bind(this);
    }
    
    openModal(src){
        this.setState({status: ModalStatus.OPEN, contentLoaded: LoadStatus.LOADING, src});
        loadImagePromise(src).then(img => {
            this.setState({contentLoaded: LoadStatus.COMPLETE});
        }).catch(err => {
            this.setState({contentLoaded: LoadStatus.FAILD});
        });
    }

    onClose(){
        this.setState({status: ModalStatus.CLOSING});
    }

    afterClose(){
        this.setState({status: ModalStatus.CLOSED});
        this.setState({contentLoaded: LoadStatus.LOADING});
    }
    
    render() {
        return(
            <ImageModal 
            src={this.state.src} 
            onClose={this.onClose} 
            status={this.state.status} 
            contentLoaded={this.state.contentLoaded}
            afterClose={this.afterClose}></ImageModal>
        )
    }
}
export default ImageModalContainer;