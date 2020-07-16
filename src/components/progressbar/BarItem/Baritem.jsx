import React from "react";
import "./baritem.scss"

const BarItem = (props) => {
    return (
        <div className="progress-bar">
            <div className="filler" style={{width: `${props.percentage()}%`}}/>
        </div>
    )
};

export default BarItem;
