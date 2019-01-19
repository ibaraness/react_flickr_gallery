import React, { Component } from 'react';
import './Paganation.scss';

const Paganation = ({setPageNum, pageNum, pageCount}) => {
    const pageNumButtons = [];
    const firstShownPage = pageNum > 4 ? pageNum - 3: 1;
    const lastShownPage = firstShownPage + 5;

    for(let i = firstShownPage; i < lastShownPage; i++){
        if(i <= pageCount){
            const buttonDisabled = pageNum === i ? " disabled" : "";
            pageNumButtons.push(
            <li key={i} className={"paganation__pages__item" + buttonDisabled}>
                <button className={"paganation--btn" + buttonDisabled} value={i} onClick={setPageNum}>{i}</button>
            </li>
            );
        }
    } 
    
    const previousActive = pageNum > 1 ? "" : " disabled";
    const nextActive = pageNum < pageCount ? "" : " disabled";

    return (
    <div className="paganation">
        <button className={"paganation__nav paganation--btn" + previousActive} value="previous" onClick={setPageNum}>Previous</button>
        <ul className="paganation__pages">
            {pageNumButtons}
        </ul>
        <button className={"paganation__nav paganation--btn" + nextActive} value="next" onClick={setPageNum}>Next</button>
    </div>
)};

export default Paganation;