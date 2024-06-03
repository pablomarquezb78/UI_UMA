import React from 'react';
import '../CSS/Start.css';
import NavBar from '../Start/NavBar';
import UnderConstruction from '../Components/UnderConstructionScreen'
import BiomeStart from '../Components/BiomeStart/BiomeStart'

function CoastStart({scrollToGridInfo}) {
    
    return(
        
        
        <section id="landingSection" className="bg-white vw-100 vh-100">
    
            {/* Envuelto por una etiqueta header dentro del componente NavBar*/}
            <NavBar scrollToGridInfo={scrollToGridInfo} currentLink={5}/>

            <BiomeStart video={'costa'} title={'Costa'} subtitle={"Un bioma costero, dinámico y vibrante, un encuentro perpetuo entre tierra y mar donde la vida prospera en armoniosa diversidad."}></BiomeStart>

       </section>
 
    )
}

export default CoastStart
