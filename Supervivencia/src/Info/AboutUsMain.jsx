import React from "react";
import InfoSection from '../Info/InfoSection.jsx'
import {useRef} from 'react';
import AboutUsStart from "./AboutUsStart";
import '../CSS/main.css'
import '../CSS/Start.css'

function AboutUsMain(){
    const gridInfoRef = useRef(null);
    const startRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <main className='sliderContainer'>

            <div className='sliderItem' ref={startRef}>
                <AboutUsStart scrollToGridInfo={scrollToGridInfo}/>
            </div>
            
            <div className='sliderItem' ref={gridInfoRef}>
                <InfoSection/>
            </div>

            </main>  
        </>
    );
}

export default AboutUsMain;