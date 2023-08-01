import React from "react";
import './contactme.css';
import webworkslogo from './webworkslogo.png'

const ContactMeSection = () => {
    return (
        <div className="contactmepage">
            <div className="contactheader">
                <img className="weblogo" src={webworkslogo}></img>
            </div>
            <div className="contactbox">
                <p id="footertext">Email : lqmnhakim32@gmail.com</p>
                <p id="footertext">Phone     : 012-3587275 (text only) </p>
                <p id="footertext">TikTok    : W-I-P </p>
                <p id="footertext">Instagram : W-I-P </p>
            </div>
        </div>
    )
}

export default ContactMeSection;