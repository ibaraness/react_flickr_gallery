import { getPictures } from './../../rest-api/api';
import React, { Component } from 'react';
import ImageGallery from './../../components/image-gallery/ImageGallery';

class ImageGalleryContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            pictures:[],
            pageNum:1,
            pageCount:0,
            totalImages:0
        }
    }

    componentDidMount(){
        getPictures({geo_context:2, text:"wild"}).then(data =>{
            console.log("data", data);
            this.setState({
                pictures: data.photos.photo,
                pageNum: data.photos.page,
                pageCount: data.photos.pages,
                totalImages: +data.photos.total
            });
            this.props.setPageCount(data.photos.pages);
        })
    }

    componentWillReceiveProps(nextProps){
        if(this.props.pageNum !== nextProps.pageNum){
            console.log("nextProps, prevState", nextProps);
            getPictures({geo_context:2, text:"wild", page:nextProps.pageNum}).then(data =>{
                console.log("data", data);
                this.setState({
                    pictures: data.photos.photo,
                    pageNum: data.page,
                    pageCount: data.pages,
                    totalImages: +data.total
                });
            })
            return true;
        }
        return false;
    }

    componentDidUpdate(){
        
    }

    
    render() {

        const pictures = this.state.pictures.map(photo => {
            const src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
            return {src, id:photo.id};
            //return <img key={photo.id} src={src} />
        });

        return(
            <ImageGallery pictures={pictures}></ImageGallery>
        )
    }
}
export default ImageGalleryContainer;