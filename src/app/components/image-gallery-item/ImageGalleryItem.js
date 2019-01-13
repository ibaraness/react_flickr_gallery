import React, { Component } from 'react';
import _ from 'lodash';
import './ImageGallery.scss';
import {loadImagePromise} from './../../utils/general';

class ImageGalleryItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount(){
        loadImagePromise(this.props.src).then(img => {
            this.setState({loaded:true});
        });
    }
    
    render() {
        let styles = {

        };
        if(this.state.loaded){
            styles = {
                background:`url(${this.props.src})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            };
        }
        return(
            <div className="image-gallery-item" style={styles}></div>
        )
    }
}
export default ImageGalleryItem;