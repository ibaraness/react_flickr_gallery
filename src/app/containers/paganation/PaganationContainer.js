import React, { Component } from 'react';
import Paganation from './../../components/paganation/Paganation';

class PaganationContainer extends Component {
    constructor(props){
        super(props);
        this.setPageNum = this.setPageNum.bind(this);
    }

    setPageNum(event){
        const value = event.target.value;
        let newValue = this.props.pageNum;
        if(!isNaN(+value)){
            newValue = +value;
        } 
        else if(value === 'next'){
            if(this.props.pageNum < this.props.pageCount){
                newValue = this.props.pageNum + 1
            }
        
        } else if(value === 'previous'){
            if(this.props.pageNum > 1){
                newValue = this.props.pageNum - 1;
            }
        }
        this.props.setPageNum(newValue);
    }

    render(){
        return(
            <Paganation setPageNum={this.setPageNum} pageCount={this.props.pageCount} pageNum={this.props.pageNum}></Paganation>
            );
    }
}

export default PaganationContainer;