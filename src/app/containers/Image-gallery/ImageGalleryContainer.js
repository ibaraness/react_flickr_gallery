import { getPictures } from './../../rest-api/api';
import React, { Component } from 'react';
import ImageGallery from './../../components/image-gallery/ImageGallery';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import { CONFIG } from './../../config/config';
import ImageModalContainer from './../image-modal/ImageModalContainer';
import {generateFlickrBigImageURL, generateFlickrThumbURL} from './../../utils/general';
import './ImageGalleryContainer.scss';

class ImageGalleryContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            pictures:[],
            pageCount:0,
            totalImages:0
        }
        this.imageModal = React.createRef();
        this.loadPictures = this.loadPictures.bind(this);
        this.setSelectedById = this.setSelectedById.bind(this);
    }

    componentDidMount(){
        this.loadPictures(this.props.filters);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.filters !== this.props.filters){
            this.loadPictures(this.props.filters);
        }
        if(prevProps.imagesPerPage !== this.props.imagesPerPage){
            const pageCount = Math.floor(this.state.totalImages / this.props.imagesPerPage) || 1;
            this.setState({pageCount});
        }
    }

    loadPictures(filters){
        getPictures(filters).then(data =>{
            this.setState({
                pictures: _.cloneDeep(data.photos.photo),
                pageNum: data.photos.page,
                pageCount: Math.floor(data.photos.photo.length / this.props.imagesPerPage) || 1,
                totalImages: +data.photos.total
            });
            this.props.setPageCount(this.state.pageCount);
        }).catch(e => {
            this.setState({
                pictures: [],
                pageNum: 1,
                pageCount: 0,
                totalImages: 0
            });
        });
    }

    setSelectedById(id){
        const picture = this.state.pictures.find(picture => picture.id === id);
        if(picture){
            this.imageModal.current.openModal(generateFlickrBigImageURL(picture));
        }
    }

    render() {
        const marker = (this.props.pageNum - 1) * +this.props.imagesPerPage;
        const pictures = this.state.pictures
            .filter((item, index)=> index >= marker && index < (+marker + +this.props.imagesPerPage))
            .map(picture => ({src: generateFlickrThumbURL(picture), id:picture.id}));
        const searchText = this.props.filters.text || "";
        return(
            <div>
                <h4 className="image-gallery__info">Found {this.state.totalImages} results {searchText !== "" ? " of \"" + searchText +"\"" : ""}</h4>
                <ImageGallery setSelectedById={this.setSelectedById} imagesPerPage={this.props.imagesPerPage} pictures={pictures}></ImageGallery>
                <ImageModalContainer ref={this.imageModal}></ImageModalContainer>
            </div>
        )
    }
}
export default ImageGalleryContainer;