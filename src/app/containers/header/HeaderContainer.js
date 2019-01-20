import React, { Component } from 'react';
import Header from './../../components/header/Header';
import _ from 'lodash';

class HeaderContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            showSearch: false, 
            showImagesPerPAge: false, 
            showTags: false
        }
        this.toggleTage = this.toggleTage.bind(this);
        this.toggleImagePerPAge = this.toggleImagePerPAge.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.clickoutside = this.clickoutside.bind(this);
    }

    clickoutside(){
        document.body.onclick = (event)=>{
            if(!event.target.closest('.header')){
                this.toggleImagePerPAge(false);
                this.toggleSearch(false);
                this.toggleTage(false);
            }
        }
    }

    componentDidMount(){
        this.clickoutside();
    }

    toggleTage(state){
        this.setState({showTags: !!state});
    }

    toggleImagePerPAge(state){
        this.setState({showImagesPerPAge: !!state});
    }

    toggleSearch(state){
        this.setState({showSearch: !!state});
    }


    render() {
        return(
            <Header
                {...this.props}
                showSearch = {this.state.showSearch}
                showImagesPerPAge = {this.state.showImagesPerPAge}
                showTags = {this.state.showTags}
                onSearchKeyUp = {this.onSearchKeyUp}
                toggleTage = {this.toggleTage}
                toggleSearch = {this.toggleSearch}
                toggleImagePerPAge= {this.toggleImagePerPAge}
                >
            </Header>
        )
    }
}
export default HeaderContainer;