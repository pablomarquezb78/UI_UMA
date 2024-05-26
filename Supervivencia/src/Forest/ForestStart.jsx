import React from 'react';

import '../CSS/Start.css';
import NavBar from '../Start/NavBar';

function ForestStart({scrollToGridInfo}) {
    
    return(
        
        
        <section id="landingSection" className="bg-white vw-100 vh-100">
    
            {/* Envuelto por una etiqueta header dentro del componente NavBar*/}
            <NavBar scrollToGridInfo={scrollToGridInfo} currentLink={3}/>

       </section>
 
    )
}

export default ForestStart
