import React from "react";
import './projectscompleted.css'
import firstproject from './firstproject.png'
import secondproject from './secondproject.png'

const CompletedProject = () => {
    return (
        <div className="listofprojects">
            <div className="projectsheadline">
                <h1>My Completed Project</h1>
            </div>
            <div className="prjcts">
                <div className="firstproject leftbox">
                    <div className="photoproject">
                        <img className="projectimage" src={firstproject}></img>
                    </div>
                    <div className="description">
                        <h1>FE Challenge : Qr Code</h1>
                        <div className="buttonlinking">
                        <button className="viewmorebttn"><a href="https://fe-mentor-qrcode.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>View More</a></button>
                        </div>
                    </div>
                </div>
                <div className="projecttop">
                    <div className="firstproject rightbox">
                        <div className="photoproject">
                            <img className="projectimage" src={secondproject}></img>
                        </div>
                        <div className="description">
                            <h1>FE Challenge : Responsive Product Review Card</h1>
                            <div className="buttonlinking">
                                <button className="viewmorebttn"><a href="https://vermillion-biscotti-a4e74b.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>View More</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prjcts">
                <div className="projecttop">
                    <h1>project 1</h1>
                </div>
                <div className="projecttop">
                    <h1>project 2</h1>
                </div>
            </div>
        </div>
    )
}

export default CompletedProject;