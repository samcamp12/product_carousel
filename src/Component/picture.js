import React from 'react';

import './picture.css';

const Picture = (props) => {
    return (
        <div className="picture-container">
            <img src={props.imgURL} alt={props.title} className="image"/>
            <div className="picture-title">{props.title}</div>
        </div>
    )
}

export default Picture;