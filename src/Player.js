import React from 'react';
import './Player.css';
import Sidebar from './Sidebar'

function Player() {
    return (
        <div className='player'>
            {/* sidebar/body */}
            <div className='player__sidebar'>
                <Sidebar />
            </div>
            
            {/* footer */}
            <div className='footer'>

            </div>
        </div>
    )
}

export default Player
