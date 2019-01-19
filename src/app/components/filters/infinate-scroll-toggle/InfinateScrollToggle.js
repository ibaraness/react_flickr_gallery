import React, { Component } from 'react';
import './InfinateScrollToggle.scss';

const InfinateScrollToggle = ({setInfiniteScroll}) => (
    <div className="infinate-scroll header__filter desktop_only">
        <input type="checkbox"  onChange={(event) => {setInfiniteScroll(event.target.checked)}} />
        <label className="header__filter__label">Infinate scroll</label>        
    </div>
);

export default InfinateScrollToggle;