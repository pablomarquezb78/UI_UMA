import React from 'react';
import MountainStart from './MountainStart.jsx';
import GridInfo from '../Info/InfoSection.jsx';
import {useRef} from 'react';
import '../CSS/main.css';
import '../CSS/Start.css';
import MemoryGame from './MemoryGame.jsx';
import MountainInitGame from './MountainInitGame.jsx';


import MountainCarousel from '../Components/carouselPage/CarouselInfo.jsx';
import MountainPlants from '/public/Mountain/1plantasMountain.json';
import MountainAnimals from '/public/Mountain/2animalesMountain.json';


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

                <div className='sliderItem'>
                    <MountainCarousel data={MountainPlants} id='Mountain' title={'PLANTAS DE MONTAÑA'}/>
                </div>

                <div className='sliderItem'>
                    <MountainCarousel data={MountainAnimals} id='Mountain' title={'FAUNA DE MONTAÑA'}/>
                </div>

                <div className='sliderItem'>
                    <MountainInitGame/>
                </div>

                <div className='sliderItem helpSlider' ref={gridInfoRef}>
                    <GridInfo scrollToStart={scrollToStart}/>
                </div>

            </main>  
        </>
    );

}

export default MountainMain;
