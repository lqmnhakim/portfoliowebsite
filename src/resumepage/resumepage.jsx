import React from "react";
import './resumepage.css'

import resume from './resume.png'

const ResumePage = () => {
    return (
        <div className="cvpage">
            <div className="cvheadliner">
                <h1>My Resume</h1>
            </div>
            <div className="cvheadliner">
                <img className="resume" src={resume}></img>
            </div>
        </div>
    )
}

export default ResumePage;