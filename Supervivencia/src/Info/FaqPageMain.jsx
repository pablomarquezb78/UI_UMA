import React from "react";
import InfoSection from './InfoSection.jsx'
import {useRef} from 'react';
import FaqPageStart from "./FaqPageStart";
import '../CSS/main.css'
import '../CSS/Start.css'

function FaqPageMain(){ 
    const startRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <> 
            <main className='sliderContainer'>

            <div className='sliderItem' ref={startRef}>
                <FaqPageStart scrollToGridInfo={scrollToGridInfo}/>
            </div> 
            
            <div className='sliderItem'>
                <InfoSection/>
            </div>

            </main>  
        </>
    );
}

export default FaqPageMain;