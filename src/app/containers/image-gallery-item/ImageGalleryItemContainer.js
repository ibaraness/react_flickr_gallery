import React, { Component } from 'react';
import { loadImagePromise } from './../../utils/general';
import ImageGalleryItem from './../../components/image-gallery-item/ImageGalleryItem';
import {LoadStatus} from './../../enums/load-status';

class ImageGalleryItemContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            loaded: LoadStatus.LOADING
        }
    }

    componentDidMount(){
        loadImagePromise(this.props.src).then(img => {
            this.setState({loaded: LoadStatus.COMPLETE});
        }).catch(err => {
            this.setState({loaded: LoadStatus.FAILD});
        });
    }
    
    render() {
        return(
            <ImageGalleryItem {...this.props} loaded={this.state.loaded}></ImageGalleryItem>
        )
    }
}
export default ImageGalleryItemContainer;