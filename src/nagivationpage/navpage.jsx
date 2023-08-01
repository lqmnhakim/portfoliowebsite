import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import webworkslogo from './webworkslogo.png'
import CompletedProject from '../projectscompleted/projectcompleted';
import ProjectsCurrent from '../projectsongoing/projectsongoing';
import ResumePage from '../resumepage/resumepage';
import HomePageMain from '../homepage/homepage';
import './navpage.css'

const NaviPage = () => {
    return (
    <Router> 
        <div className='navigationbar'>
            <div className='browsernavbar'>
                <div className='navbarphoto'>
                    <img src={webworkslogo}></img>
                </div><div className='buttonnavbar'>
                    <Link to='/'><button className='headerbutton spcl'>WebWorks</button></Link>
                    <Link to='/projectscompleted'><button className='headerbutton spcl'>Deployed</button></Link>
                    <Link to='/projectsongoing'><button className='headerbutton spcl'>In the Works</button></Link>
                    <Link to='/resumepage'><button className='headerbutton spcl'>CV</button></Link>
                </div>  
            </div>
            <div className='mobilenavbar'>
                        <div className='logomobile'>
                            <img className='wwlogo' src={webworkslogo}></img>
                        </div> 
                        <div className='buttonnavbarmobile'>
                            <button className='dropbtnmobile'>===</button>
                            <div className='dropdowncontentmobile'>
                            <Link to='/'><button className='headerbutton mobilespcl'>webworks</button></Link>
                            <Link to='/projectscompleted'><button className='headerbutton mobilespcl'>deployed</button></Link>
                            <Link to='/projectsongoing'><button className='headerbutton mobilespcl'>w-i-p</button></Link>
                            <Link to='/resumepage'><button className='headerbutton mobilespcl'>CV</button></Link>
                            </div>
                        </div>     
                                
            </div>
            <Routes>
                <Route path='/' element={<HomePageMain />} />
                <Route path='/projectscompleted' element={<CompletedProject />} />
                <Route path='/projectsongoing' element={<ProjectsCurrent />} />
                <Route path='/resumepage' element={<ResumePage />} />
            </Routes>
        </div>
    </Router> 
    )
}

export default NaviPage;