import React from "react";
import './menu-item.scss';

const MenuItem = ({title, imageurl}) => (
    <div style={{backgroundImage:`url(${imageurl})`}} className="menu-item">
        <div className="backgroundImage"
        style={{backgroundImage:`url(${imageurl})`}} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);
export default MenuItem;