import React from 'react';
import '../CSS/Start.css';
import NavBar from '../Start/NavBar';
import UnderConstruction from '../Components/UnderConstructionScreen';

function MountainStart({scrollToGridInfo}) {
    
    return(       
        <section id="landingSection" className="bg-white vw-100 vh-100 d-flex flex-column justify-content-between">
            <NavBar scrollToGridInfo={scrollToGridInfo} currentLink={2}/>
            <UnderConstruction nombrePagina={'montaña'}/>
       </section> 
    )
}

export default MountainStart;
