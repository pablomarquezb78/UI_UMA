import React from 'react';

import '../CSS/Start.css';
import NavBar from '../Start/NavBar';
import UnderConstruction from '../Components/UnderConstructionScreen'
import BiomeStart from '../Components/BiomeStart/BiomeStart'

function DesertStart({scrollToGridInfo}) {
    
    return(
        
        
        <section id="landingSection" className="bg-white vw-100 vh-100">
    
            {/* Envuelto por una etiqueta header dentro del componente NavBar*/}
            <NavBar scrollToGridInfo={scrollToGridInfo} currentLink={4}/>

            <BiomeStart video={'desierto'} title={'Desierto'} subtitle={"Un bioma desértico, árido y austero, un reino de vastedad donde la vida se adapta y prospera en condiciones extremas."}></BiomeStart>
       </section>
 
    )
}

export default DesertStart
