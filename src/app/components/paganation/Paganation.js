import React, { Component } from 'react';
import './Paganation.scss';

const Paganation = ({setPageNum, pageNum, pageCount}) => {
    console.log("Paganation", pageNum)
    const pageNumbers = [];
    const offset = pageNum > 4 ? pageNum - 3: 1;
    const lastPAge = offset + 4;
    for(let i = offset; i < lastPAge; i++){
        if(i <= pageCount){
            const disabled = pageNum === i ? " disabled" : "";
            pageNumbers.push(
                <li key={i} className={"paganation__pages__item" + disabled}>
                <button className={"paganation--btn" + disabled} value={i} onClick={setPageNum}>{i}</button>
                </li>);
        }
    } 
    const previousActive = pageNum > 1 ? "" : " disabled";
    const nextActive = pageNum < pageCount ? "" : " disabled";

    return (
    <div className="paganation">
        <button className={"paganation__nav paganation--btn" + previousActive} value="previous" onClick={setPageNum}>Previous</button>
        <ul className="paganation__pages">
            {pageNumbers}
        </ul>
        <button className={"paganation__nav paganation--btn" + nextActive} value="next" onClick={setPageNum}>Next</button>
    </div>
)};

export default Paganation;