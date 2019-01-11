import { getPictures } from './rest-api/api';
import React, { Component } from 'react';
import ImageGalleryContainer from './containers/Image-gallery/ImageGalleryContainer';
import Paganation from './components/paganation/Paganation';
import PaganationContainer from './containers/paganation/PaganationContainer';
import Header from './components/header/Header';
import * as _ from 'lodash';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            pictures:[],
            pageNum:1,
            pageCount:0,
            totalImages:0
        }
        this.setPageNum = this.setPageNum.bind(this);
        this.setImagePerPage = this.setImagePerPage.bind(this);
        this.setPageCount = this.setPageCount.bind(this);
    }

    setPageNum(pageNum){
        this.setState({...this.state, pageNum});
    }

    setPageCount(pageCount){
        this.setState({...this.state, pageCount});
    }

    setImagePerPage(event){
        console.log("pageNum", event.target.value);
    }
    
    render() {
        return(
            <div>
                <Header setImagePerPage={this.setImagePerPage}></Header>
                <ImageGalleryContainer setPageCount={this.setPageCount} pageNum={this.state.pageNum}></ImageGalleryContainer>
                
                <PaganationContainer setPageNum={this.setPageNum} pageCount={this.state.pageCount} pageNum={this.state.pageNum}></PaganationContainer>
            </div>
        )
    }
}
export default App;