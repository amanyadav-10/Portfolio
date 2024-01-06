import React, { useEffect, useState } from 'react'
import './Navbar.css'
import useWindowDimensions from '../utils/useWindowDimension'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
    const { height, width } = useWindowDimensions();
    const isMobile = width <= 768;


    const [clcont, setClcont] = useState("nav__content")
    const [clconth, setClconth] = useState("clconth")
    const [fl, setfl] = useState(0);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    const [clnav, setClnav] = useState(`navi ${scrollPosition > 20 ? ("navi__scroll") : ("navi__scroll")}`)

    window.addEventListener('scroll', handleScroll, { passive: true });

    useEffect(() => {
        setClnav(`navi ${isMobile ? ("nflex") : ("")} ${scrollPosition > 20 ? ("navi__scroll") : ("")}`);
        setClcont(`nav__content ${isMobile ? ("nflexc") : ("")}`)
        setClconth(`clconth ${isMobile ? ("nflexh") : ("")}`)
    }, [isMobile])

    useEffect(() => {
        setClnav(`navi ${isMobile ? ("nflex") : ("")} ${scrollPosition > 20 ? ("navi__scroll") : ("")}`);
        // console.log(scrollPosition);
    }, [scrollPosition])

    const handleClick = () => {
        setClcont(`nav__content ${isMobile ? ("dflexc") : ("")}`);
        setfl(1);
        // clcont = `nav__content ${isMobile ? ("dflexc") : ("")}`;
    }

    const handleClose = () => {
        setClcont(`nav__content ${isMobile ? ("nflexc") : ("")}`);
        setfl(0);
    }

    return (
        <div className={clnav}>
            <div className={clconth}>
                <a href='#home'> {`<Aman />`} </a>
                {
                    isMobile ?
                        (
                            fl === 0 ?
                                (
                                    <div onClick={handleClick}> {isMobile ? (<MenuIcon style={{ fontSize: "2rem", position: "relative", top: "2px" }} />) : ("")} </div>
                                ) : (
                                    <div onClick={handleClose}> {isMobile ? (<CloseIcon style={{ fontSize: "2rem", position: "relative", top: "2px" }} />) : ("")} </div>
                                )
                        ) : ("")
                }

            </div>
            <div className={clcont}>
                <a href='#project' alt=''>Projects</a>
                <a href='https://drive.google.com/drive/folders/1mlWc1x0dJbeT71VoavAbETJZdJX3H6_T' rel="noreferrer" target='_blank' alt='resume'>Resume</a>
                <a href='#about' alt=''>About</a>
                <a href='#skills' alt=''>Skills</a>
            </div>
        </div>
    )
}

export default Navbar