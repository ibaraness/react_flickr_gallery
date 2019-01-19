import { getPictures } from './rest-api/api';
import React, { Component } from 'react';
import ImageGalleryContainer from './containers/Image-gallery/ImageGalleryContainer';
import Paganation from './components/paganation/Paganation';
import PaganationContainer from './containers/paganation/PaganationContainer';
import Header from './components/header/Header';
import * as _ from 'lodash';
import HeaderContainer from './containers/header/HeaderContainer';
import InfinateScroller from './containers/infinate-scroller/InfinateScroller';
import GalleryTypeSwitcher from './components/gallery-type-switcher/GalleryTypeSwitcher';
import {CONFIG} from './config/config';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            pageNum:1,
            pageCount:0,
            imagesPerPage:3,
            inifinateScroll: false,
            filters: CONFIG.getPictures.defaultFilters
        }
        this.setPageNum = this.setPageNum.bind(this);
        this.setImagePerPage = this.setImagePerPage.bind(this);
        this.setPageCount = this.setPageCount.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.setInfiniteScroll = this.setInfiniteScroll.bind(this);
        this.addTag = this.addTag.bind(this);
        this.deleteTag = this.deleteTag.bind(this);
    }

    setInfiniteScroll(inifinateScroll){
        this.setState({inifinateScroll});
    }

    setPageNum(pageNum){
        this.setState({...this.state, pageNum});
    }

    setPageCount(pageCount){
        this.setState({...this.state, pageCount});
    }

    setImagePerPage(imagesPerPage){
        this.setState({imagesPerPage});
    }

    onSearch(value){
        if(value !== this.state.filters.text){
            const filters = {...this.state.filters, text: value};
            this.setState({filters, pageNum:1});
        } 
    }

    addTag(tag){
        const tags = [...this.state.filters.tags] || [];
        if(this.state.filters.tags && this.state.filters.tags.indexOf(tag) < 0){
            tags.push(tag);
            this.setState({filters: {...this.state.filters, tags}, pageNum:1})
        }
    }

    deleteTag(tag){
        const tags = [...this.state.filters.tags] || [];
        if(tags.indexOf(tag) > -1){
            tags.splice(tags.indexOf(tag),1);
            this.setState({filters: {...this.state.filters, tags}, pageNum:1})
        }
    }

    render() {

        return(
            <div>
                <HeaderContainer 
                    setImagePerPage={this.setImagePerPage} 
                    onSearch={this.onSearch} 
                    setInfiniteScroll={this.setInfiniteScroll}
                    tags={this.state.filters.tags}
                    addTag={this.addTag}
                    deleteTag={this.deleteTag}
                    imagesPerPage={this.state.imagesPerPage}>
                </HeaderContainer>
                <GalleryTypeSwitcher
                    inifinateScroll={this.state.inifinateScroll}
                    filters={this.state.filters}
                    imagesPerPage={this.state.imagesPerPage}
                    setPageCount={this.setPageCount}
                    pageNum={this.state.pageNum}
                    setPageNum={this.setPageNum}
                    pageCount={this.state.pageCount}
                >
                </GalleryTypeSwitcher>
            </div>
        )
    }
}
export default App;