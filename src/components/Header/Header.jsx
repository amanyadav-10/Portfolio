import React from 'react'
import './Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
    return (
        <div className='header' id='home'>
            <div className='header__content'>
                <h1>Aman Yadav</h1>
                <h4>Full Stack Developer</h4>
                <div className='header__socialhandles'>
                    <GitHubIcon style={{ fontSize: '3.4rem' }} />
                    <FacebookIcon style={{ fontSize: '3.4rem' }} />
                    <InstagramIcon style={{ fontSize: '3.4rem' }} />
                    <LinkedInIcon style={{ fontSize: '3.4rem' }} />
                </div>
                <a href="#about" className='header__about'>
                    More about me
                </a>
            </div>
        </div>
    )
}

export default Header