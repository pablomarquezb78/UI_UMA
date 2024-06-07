import React from "react";
import InfoSection from './InfoSection.jsx'
import {useRef} from 'react';
import FaqPageStart from "./FaqPageStart";
import '../CSS/main.css'
import '../CSS/Start.css'

function FaqPageMain(){ 

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <> 
            <main className='sliderContainer'>

            <div className='sliderItem'>
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