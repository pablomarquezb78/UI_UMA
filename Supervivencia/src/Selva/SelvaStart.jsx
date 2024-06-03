import React from 'react';

import '../CSS/Start.css';
import NavBar from '../Start/NavBar';
import UnderConstruction from '../Components/UnderConstructionScreen'
import downScroll from '../assets/Start/Logos/down_scroll.png'
import BiomeStart from '../Components/BiomeStart/BiomeStart'

function SelvaStart({scrollToGridInfo}) {
    
    return(
        
        
        <section id="landingSection" className="bg-white vw-100 vh-100">
    
            {/* Envuelto por una etiqueta header dentro del componente NavBar*/}
            <NavBar scrollToGridInfo={scrollToGridInfo} currentLink={6}/>

            <BiomeStart video={'jungla'} title={'Jungla'} subtitle={"Un bioma húmedo, exuberante y lleno de vida, un mundo vibrante donde la naturaleza despliega su máximo esplendor."}></BiomeStart>

       </section>
 
    )
}

export default SelvaStart
