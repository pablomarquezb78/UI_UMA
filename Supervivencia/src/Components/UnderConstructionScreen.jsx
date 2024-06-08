import React from 'react';

import '../CSS/Start.css';
import './CSS/UnderConstruction.css'
import cleaningPenguin from "../assets/UnderConstructionScreen/club-penguin-mop.gif";


function underConstruction() {
    
    return(

        <div className="adviseDiv">
            <div>
                <img className='resizeImageSmall' src={cleaningPenguin} alt='Imagen de mantenimiento de página'></img>
            </div>
            <div className='row'>
                <h1 className='text-center'>Oops...</h1>
            </div>
            <div className='row'>
                <h2 className='text-center'>La pagina sigue en construccion.</h2>
            </div>
            <div className='row'>
                <h3 className='text-center'>Lo sentimos pero no esta disponible por el momento.</h3>
            </div>
        </div>
        
    )
}

export default underConstruction