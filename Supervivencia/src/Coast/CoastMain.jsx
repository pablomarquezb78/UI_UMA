import React from 'react'
import CoastStart from './CoastStart.jsx';
import InfoSection from '../Info/InfoSection.jsx'
import HigerOrLowerGame from './HigherOrLower.jsx'
import {useRef} from 'react';
import '../CSS/main.css'
import '../CSS/Start.css'
import NavBar from '../Start/NavBar';

function CoastMain(){

    const gridInfoRef = useRef(null);
    const startRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    // const scrollToStart = () => {
    //     startRef.current.scrollIntoView({ behavior: 'smooth' });
    // };

    return(
        <>
            <main className='sliderContainer'>
                <NavBar scrollToGridInfo={scrollToGridInfo} position={"fixed"}/>

                <div className='sliderItem' ref={startRef}>
                    <CoastStart scrollToGridInfo={scrollToGridInfo}/>
                </div>

                <div className='sliderItem' ref={gridInfoRef}>
                    <HigerOrLowerGame/>
                </div>

                <div className='sliderItem' ref={gridInfoRef}>
                    <InfoSection/>
                </div>

            </main>  
        </>
    );

}

export default CoastMain;