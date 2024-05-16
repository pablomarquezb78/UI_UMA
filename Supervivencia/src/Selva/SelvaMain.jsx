import React from 'react'
import GridInfo from '../Info/InfoSection.jsx'
import {useRef} from 'react';
import '../CSS/main.css'
import '../CSS/Start.css'
import TinderGame from './TinderGame.jsx';
import SelvaStart from './SelvaStart.jsx';

function SelvaMain(){

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
                    <SelvaStart scrollToGridInfo={scrollToGridInfo}/>
                </div>
            
                <div className='sliderItem'>
                    <TinderGame/>
                </div>

                <div className='sliderItem' ref={gridInfoRef}>
                    <GridInfo scrollToStart={scrollToStart}/>
                </div>

            </main>  
        </>
    );

}

export default SelvaMain;