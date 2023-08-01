import React from "react";
import './projectsongoing.css'

import fume1 from './fume1.png'
import fume2 from './fume2.png'
import fume3 from './fume3.png'
import fume4 from './fume4.png'


const ProjectsCurrent = () => {
    return (
        <div className="onprojects">
            <div className="projectsheadline">
                <h1>On Going Projects</h1>
            </div>
            <div className="fumeproject">
                <h2>Client Name : [fume.]</h2>
                <h2>By : Luqman Hakim</h2>
            </div>
            <div className="fumeproject">
                <h2>The client : A group of 3 individual in the fashion industry and they are ready to take over the world with their own iteration of unorthodox fashion</h2>
            </div>
            <div className="fumeproject">
                <div className="fumewephotos">
                    <img className="photosprj" src={fume1}></img>
                </div>
                <div className="fumewephotos">
                    <img className="photosprj" src={fume3}></img>
                </div>
            </div>
            <div className="fumeproject">
                <div className="fumewephotos">
                    <img className="photosprj" src={fume2}></img>
                </div>
                <div className="fumewephotos">
                    <img className="photosprj" src={fume4}></img>
                </div>
            </div>
            <div className="fumeproject">
                <button className="viewmorebttn"><a href="https://fe-mentor-qrcode.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>View More</a></button>
            </div>
        </div>
    )
}

export default ProjectsCurrent;

