import React from 'react'
import DesertStart from './DesertStart.jsx'
import InfoSection from '../Info/InfoSection.jsx'
import DesertBagGame from './DesertBagGame.jsx';
import DesertCarrousel from '../Components/carouselPage/CarouselInfo.jsx';
import desertPlants from '/public/Desert/plantasDesierto.json';
import desertAnimals from '/public/Desert/animalesDesierto.json';
import {useRef} from 'react';
import '../CSS/main.css'
import '../CSS/Start.css'

function DesertMain(){

    const gridInfoRef = useRef(null);
    const startRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            <main className='sliderContainer'>

                <div className='sliderItem' ref={startRef}>
                    <DesertStart scrollToGridInfo={scrollToGridInfo}/>
                </div> 

                <div className='sliderItem'>
                    <DesertCarrousel data={desertPlants} id='Desert' title={'PLANTAS DEL DESIERTO'}/>
                </div>

                <div className='sliderItem'>
                    <DesertCarrousel data={desertAnimals} id='Desert' title={'ANIMALES DEL DESIERTO'}/>
                </div>

                <div className='sliderItem'>
                    <DesertBagGame/>
                </div>

                <div className='sliderItem helpSlider' ref={gridInfoRef}>
                    <InfoSection/>
                </div>

            </main>  
        </>
    );

}

export default DesertMain;