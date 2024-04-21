import react from 'react';

import '../CSS/Start.css';
import '../CSS/UnderConstruction.css'
import cleaningPenguin from "../assets/UnderConstructionScreen/club-penguin-mop.gif";


function underConstruction({nombrePagina}) {
    
    return(

        <div className="adviseDiv">
            <div className='row'>
                <img className='img-fluid' class='resizeImageSmall' src={cleaningPenguin}></img>
            </div>
            <div className='row'>
                <h4 className='text-center'>Oops...</h4>
            </div>
            <div className='row'>
                <h3 className='text-center'>La pagina de {nombrePagina} sigue en construccion.</h3>
            </div>
            <div className='row'>
                <h5 className='text-center'>Lo sentimos pero no esta disponible por el momento.</h5>
            </div>
        </div>
        
    )
}

export default underConstruction