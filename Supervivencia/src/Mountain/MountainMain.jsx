import React from 'react'
import MountainStart from './MountainStart.jsx'
import GridInfo from '../GridZone/GridInfo.jsx'
import {useRef} from 'react';
import '../CSS/main.css'
import '../CSS/Start.css'

function MountainMain(){

    const gridInfoRef = useRef(null);
    const startRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToStart = () => {
        startRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            <main className='sliderContainer'>

                <div className='sliderItem' ref={startRef}>
                    <MountainStart scrollToGridInfo={scrollToGridInfo}/>
                </div>

                <div className='sliderItem' ref={gridInfoRef}>
                    <GridInfo scrollToStart={scrollToStart}/>
                </div>

            </main>  
        </>
    );

}

export default MountainMain;