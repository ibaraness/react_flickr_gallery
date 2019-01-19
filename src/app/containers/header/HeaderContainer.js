import React, { Component } from 'react';
import Header from './../../components/header/Header';
import _ from 'lodash';

class HeaderContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            menuActive: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({menuActive: !this.state.menuActive});
    }

    render() {
        return(
            <Header
                {...this.props}
                toggleMenu={this.toggleMenu}
                menuActive={this.state.menuActive}
                onSearchKeyUp={this.onSearchKeyUp}
                >
            </Header>
        )
    }
}
export default HeaderContainer;