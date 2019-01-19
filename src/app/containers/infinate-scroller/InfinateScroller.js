import _ from 'lodash';
import React, { Component } from 'react';
import ImageGallery from './../../components/image-gallery/ImageGallery';
import { getPictures } from './../../rest-api/api';
import ImageModalContainer from './../image-modal/ImageModalContainer';

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
            if(!this.state.hasMoreItems){
                return;
            }
            if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
                this.loadNextRow();
            }
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
        });
    }

    componentDidMount(){
        this.loadPictures({...this.props.filters, "per_page":50});
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.filters !== this.props.filters){
            this.loadPictures({...this.props.filters, "per_page":50});
        }
    }

    loadNextRow(){
        const hasMoreItems = (24 * this.state.row + 1) < +this.state.totalImages;
        if((24 * this.state.row + 1) >= this.state.pictures.length && this.state.pictures.length < +this.state.totalImages){
            getPictures({"privacy_filter":1, "page":this.state.pageNum + 1,"min_upload_date": "2005-01-01T00:00:00.00", ...this.props.filters}).then(data =>{
                console.log("data", data);
                this.setState({
                    pictures: this.state.pictures.concat(data.photos.photo),
                    pageCount: Math.floor(data.photos.photo.length / this.props.imagesPerPage),
                    pageNum: data.photos.page,
                    totalImages: +data.photos.total
                });
                this.props.setPageCount(this.state.pageCount);
            })
        }
        console.log("hasMoreItems", hasMoreItems, (24 * this.state.row + 1), this.state.totalImages, this.state.pictures.length);
        this.setState({row: this.state.row + 1, hasMoreItems});
    }

    setSelectedById(id){
        const picture = this.state.pictures.find(picture => picture.id === id);
        if(picture){
            const selectedImageSrc = `https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}_h.jpg`;
            this.imageModal.current.openModal(selectedImageSrc);
        }
    }

    render() {

        const pictures = this.state.pictures
            .filter((item, index)=>{
                return index < (this.state.row * 24)
            })
            .map(photo => {
            const src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
            return {src, id:photo.id};
            //return <img key={photo.id} src={src} />
        });
        const loader = <div className="loader">Loading ...</div>;

        return(
            <div>
                <ImageGallery setSelectedById={this.setSelectedById} imagesPerPage={4} pictures={pictures}></ImageGallery>
                <ImageModalContainer ref={this.imageModal}></ImageModalContainer>
            </div>   
        )
    }
}
export default InfinateScroller;