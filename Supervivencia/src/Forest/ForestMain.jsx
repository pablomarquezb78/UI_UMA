import React from 'react'
import ForestStart from './ForestStart.jsx'
import ForestAudioGame from './ForestAudioGame.jsx'
import GridInfo from '../Info/InfoSection.jsx'
import {useRef} from 'react';
import '../CSS/main.css'
import '../CSS/Start.css'

function ForestMain(){

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
                    <ForestStart scrollToGridInfo={scrollToGridInfo}/>
                </div>
            
                <div className='sliderItem'>
                    <ForestAudioGame/>
                </div>

                <div className='sliderItem' ref={gridInfoRef}>
                    <GridInfo scrollToStart={scrollToStart}/>
                </div>

            </main>  
        </>
    );

}

export default ForestMain;