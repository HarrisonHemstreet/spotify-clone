import React from 'react';
import './Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <p>Album and Song Details</p>
            </div>

            <div className='footer__center'>
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footerIcon' />
                <RepeatIcon className='footer__green' />
                <p>Player Controls</p>
            </div>

            <div className='footer__right'>
                <p>Volume Controls</p>
            </div>
            I am the footer
        </div>
    )
}

export default Footer
