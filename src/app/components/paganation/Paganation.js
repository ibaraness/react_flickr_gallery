import React, { Component } from 'react';
import './Paganation.scss';

const Paganation = ({setPageNum, pageNum, pageCount}) => {
    console.log("Paganation", pageNum)
    const pageNumbers = [];
    for(let i = 1; i < 5; i++){
        if(pageNum + i <= pageCount){
            pageNumbers.push(
                <li key={pageNum + i} className="paganation__pages__item">
                <button className="paganation--btn" value={pageNum + i} onClick={setPageNum}>{pageNum + i}</button>
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