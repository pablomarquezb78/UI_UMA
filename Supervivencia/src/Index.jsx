import React from 'react'
import Start from './Start/Start.jsx'
import GridBiomes from './GridZone/GridBiomes.jsx'
import InfoSection from './Info/InfoSection.jsx'
import {useRef} from 'react';
import './CSS/main.css'
import './CSS/Start.css'
import './Components/CSS/Slider.css'

function Index(){

    const gridInfoRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            <main className='sliderContainer'>

                <div className='sliderItem'>
                <Start scrollToGridInfo={scrollToGridInfo}/>
                </div>
            
                <div className='sliderItem' ref={gridInfoRef}>
                <GridBiomes/>
                </div>

                <footer className='sliderItem helpSlider' ref={gridInfoRef}>
                <InfoSection/>
                </footer>

            </main>  
        </>
    );

}

export default Index;