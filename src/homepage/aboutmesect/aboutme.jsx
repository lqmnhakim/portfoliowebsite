import React from "react";  
import './aboutme.css'

import whoweare from './whoweare.png'
import descript from './descript.png'
import catalyst from './catalyst.png'
import journey from './journey.png'
import embrace from './embrace.png'
import intothe from './intothe.png'
import change from './change.png'
import future from './future.png'

const AboutMe = () => {
    return (
        <div className="aboutmesection">
            <div className="aboutsectionbox">
                <div className="mypicture">
                    <img className="whowearepic" src={whoweare}></img>
                </div>
                <div className="mydescript">
                    <img className="whowearepic" src={descript}></img>
                </div>
            </div>
            <div className="aboutsectionbox">
                <div className="mydescript">
                    <img className="whowearepic" src={journey}></img>
                </div>
                <div>
                    <img className="whowearepic" src={catalyst}></img>
                </div>
            </div>
            <div className="aboutsectionbox">
                <div className="mydescript">
                    <img className="whowearepic" src={intothe}></img>
                </div>
                <div>
                    <img className="whowearepic" src={embrace}></img>
                </div>
            </div>
            <div className="aboutsectionbox">
                <div className="mydescript">
                    <img className="whowearepic" src={change}></img>
                </div>
                <div>
                    <img className="whowearepic" src={future}></img>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;