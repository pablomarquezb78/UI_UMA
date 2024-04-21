import React from 'react'
import Start from './Start/Start.jsx'
import GridBiomes from './GridZone/GridBiomes.jsx'
import GridInfo from './GridZone/GridInfo.jsx'
import {useRef} from 'react';
import './CSS/main.css'
import './CSS/Start.css'

function Index(){

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
                <Start scrollToGridInfo={scrollToGridInfo}/>
                </div>
            
                <div className='sliderItem'>
                <GridBiomes/>
                </div>

                <div className='sliderItem' ref={gridInfoRef}>
                <GridInfo scrollToStart={scrollToStart}/>
                </div>

            </main>  
        </>
    );

}

export default Index;