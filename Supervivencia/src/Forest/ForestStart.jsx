import React from 'react';

import '../CSS/Start.css';
import UnderConstruction from '../Components/UnderConstructionScreen'

function ForestStart({scrollToGridInfo}) {
    
    return(
        
        
        <section id="landingSection" className="bg-white vw-100 vh-100">

            {/* Temporalmente está el archivo de bosque */}
            <UnderConstruction nombrePagina={'bosque'}/>

       </section>
 
    )
}

export default ForestStart
