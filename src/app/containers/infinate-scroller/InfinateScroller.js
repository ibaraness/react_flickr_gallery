import _ from 'lodash';
import React, { Component } from 'react';
import ImageGallery from './../../components/image-gallery/ImageGallery';
import { getPictures } from './../../rest-api/api';
import ImageModalContainer from './../image-modal/ImageModalContainer';
import { Config, CONFIG } from './../../config/config';
import {generateFlickrBigImageURL, generateFlickrThumbURL} from './../../utils/general';

class InfinateScroller extends Component {

    constructor(props){
        super(props);
        this.state = {
            pictures:[],
            row:1,
            pageCount:0,
            pageNum:1,
            totalImages:200,
            inifinateScroll: false,
            hasMoreItems: true
        }
        this.imageModal = React.createRef();
        this.loadNextRow = this.loadNextRow.bind(this);
        this.loadPictures = this.loadPictures.bind(this);
        this.setSelectedById = this.setSelectedById.bind(this);
        this.listenToWindowScroll.call(this)
    }

    listenToWindowScroll(){
        window.onscroll = () => {
            console.log("scrolling!");
            if(!this.state.hasMoreItems){
                return;
            }
            if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
                this.loadNextRow();
            }
        }
    }

    loadPictures(filters, reset){
        getPictures({ ...CONFIG.infiniteScroll.defaultFilters, ...filters}).then(data =>{
            this.setState({
                pictures: reset ? [...data.photos.photo] : [...this.state.pictures, ...data.photos.photo],
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
            this.props.setPageCount(0);
        });
    }

    componentDidMount(){
        this.loadPictures(this.props.filters, true);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.filters !== this.props.filters){
            this.loadPictures(this.props.filters, true);
        }
    }

    loadNextRow(){
        const imageNumOnView = CONFIG.infiniteScroll.image_per_page * this.state.row;
        const hasMoreItems = (imageNumOnView + 1) < +this.state.totalImages;
        if(imageNumOnView >= this.state.pictures.length && this.state.pictures.length < +this.state.totalImages){
            this.loadPictures({...this.props.filters, page: this.state.pageNum + 1});
        }
        this.setState({row: this.state.row + 1, hasMoreItems});
    }

    setSelectedById(id){
        const picture = this.state.pictures.find(picture => picture.id === id);
        if(picture){
            this.imageModal.current.openModal(generateFlickrBigImageURL(picture));
        }
    }

    render() {

        const pictures = this.state.pictures
            .filter((item, index) => index < (this.state.row * CONFIG.infiniteScroll.image_per_page))
            .map(picture => ({src: generateFlickrThumbURL(picture), id:picture.id}));

        return(
            <div>
                <ImageGallery setSelectedById={this.setSelectedById} imagesPerPage={24} pictures={pictures}></ImageGallery>
                <ImageModalContainer ref={this.imageModal}></ImageModalContainer>
            </div>   
        )
    }
}
export default InfinateScroller;