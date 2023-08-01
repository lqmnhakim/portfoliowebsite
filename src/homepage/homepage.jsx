import React from "react";
import TopHeader from "./topheader/topheader";
import AboutMe from "./aboutmesect/aboutme";
import ContactMeSection from "./contactmesect/contactme";

const HomePageMain = () => {
    return (
        <div className='mainhomepage'>

            <div className='videohead'>
                <TopHeader />
            </div>
            <div className='mainhightlight'>
                <AboutMe />
            </div>
            <div className='featuredheader'>
                <ContactMeSection />
            </div>
        </div>   
    )
}

export default HomePageMain;