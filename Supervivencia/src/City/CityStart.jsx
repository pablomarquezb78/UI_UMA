import react from 'react';

import '../CSS/Start.css';
import NavBar from '../Start/NavBar';
import UnderConstruction from '../Components/UnderConstructionScreen'
import FlechaScroll from '../assets/Start/Logos/flechas_scroll.png'

function CityStart({scrollToGridInfo}) {
    
    return(
        
        
        <section id="landingSection" className="bg-white vw-100 vh-100">
    
            {/* Envuelto por una etiqueta header dentro del componente NavBar*/}
            <NavBar scrollToGridInfo={scrollToGridInfo}/>

            <UnderConstruction nombrePagina={'ciudad'}/>

            <footer>
                <img className="imgFlechaScroll" src={FlechaScroll}></img>
            </footer>


       </section>
 
    )
}

export default CityStart
