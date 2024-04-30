import React from 'react'
import MountainStart from './MountainStart.jsx'
import InfoSection from '../Info/InfoSection.jsx'
import {useRef} from 'react';
import '../CSS/main.css'
import '../CSS/Start.css'
import MemoryGame from '../Components/MemoryGame.jsx';

function MountainMain(){

    const gridInfoRef = useRef(null);
    const startRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            <main className='sliderContainer'>

                <div className='sliderItem' ref={startRef}>
                    <MountainStart scrollToGridInfo={scrollToGridInfo}/>
                </div>

                <div className='sliderItem'>
                    <MemoryGame/>
                </div>

                <div className='sliderItem' ref={gridInfoRef}>
                    <InfoSection/>
                </div>

            </main>  
        </>
    );

}

export default MountainMain;