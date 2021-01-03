import React from 'react';
import './Player.css';
import Sidebar from './Sidebar'
import Body from './Body';
import Footer from './Footer';

function Player() {
    return (
        <div className='player'>
            {/* sidebar/body */}
            <div className='player__sidebar'>
                <Sidebar />
                <Body />
            </div>
            
            {/* footer */}
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Player
