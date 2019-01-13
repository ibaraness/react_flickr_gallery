import { getPictures } from './../../rest-api/api';
import React, { Component } from 'react';
import ImageGallery from './../../components/image-gallery/ImageGallery';
import _ from 'lodash';

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
                pictures: _.cloneDeep(data.photos.photo),
                pageNum: data.photos.page,
                pageCount: Math.floor(data.photos.photo.length / 3),
                totalImages: +data.photos.total
            });
            this.props.setPageCount(this.state.pageCount);
        })
    }

    // componentWillReceiveProps(nextProps){
    //     if(this.props.pageNum !== nextProps.pageNum){
    //         this.setState({pictures:[]});
    //         getPictures({geo_context:2, text:"wild", page:nextProps.pageNum}).then(data =>{
    //             console.log("data", data);
    //             this.setState({
    //                 pictures: _.cloneDeep(data.photos.photo),
    //                 pageNum: data.page,
    //                 pageCount: data.pages,
    //                 totalImages: +data.total
    //             });
    //         })
    //         return true;
    //     }
    //     return false;
    // }

    componentDidUpdate(){
        
    }

    
    render() {
        //TODO load pseudo images on start
        const marker = (this.props.pageNum - 1) * 3;
        const pictures = this.state.pictures
            .filter((item, index)=>{
                return index >= marker && index < (marker + 3)
            })
            .map(photo => {
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