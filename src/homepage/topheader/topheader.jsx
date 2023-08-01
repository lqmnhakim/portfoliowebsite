import React from "react";  

import topheader from './mainpicturelogo.png'
import './topheader.css'

const TopHeader = () => {
    return (
        <div className="mainheader">
            <img className="headerphoto" src={topheader}></img>
        </div>
    )
}

export default TopHeader;