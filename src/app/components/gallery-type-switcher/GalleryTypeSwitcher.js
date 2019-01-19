import React, { Component } from 'react';
import ImageGalleryContainer from './../../containers/Image-gallery/ImageGalleryContainer';
import PaganationContainer from './../../containers/paganation/PaganationContainer';
import InfinateScroller from './../../containers/infinate-scroller/InfinateScroller';

const GalleryTypeSwitcher = props => {
    const imageGallery = <div><ImageGalleryContainer
                                filters={props.filters}
                                imagesPerPage={props.imagesPerPage}
                                setPageCount={props.setPageCount} 
                                pageNum={props.pageNum}>
                            </ImageGalleryContainer>
                            <PaganationContainer 
                                setPageNum={props.setPageNum} 
                                pageCount={props.pageCount} 
                                pageNum={props.pageNum}
                            ></PaganationContainer>
                        </div>;
    const infiniteScroller =  <div><InfinateScroller
                                filters={props.filters}
                                imagesPerPage={props.imagesPerPage}
                                setPageCount={props.setPageCount} 
                                pageNum={props.pageNum}
                            ></InfinateScroller> 
                            </div>
    return props.inifinateScroll ? infiniteScroller : imageGallery;
}

export default GalleryTypeSwitcher;