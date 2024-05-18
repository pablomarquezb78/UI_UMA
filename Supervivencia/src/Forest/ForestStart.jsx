import react from 'react';

import '../CSS/Start.css';
import UnderConstruction from '../Components/UnderConstructionScreen'
import downScroll from '../assets/Start/Logos/down_scroll.png'

function ForestStart({scrollToGridInfo}) {
    
    return(
        
        
        <section id="landingSection" className="bg-white vw-100 vh-100">

            {/* Temporalmente está el archivo de bosque */}
            <UnderConstruction nombrePagina={'bosque'}/>

            {/* <footer>
                <img className="imgFlechaScroll" src={downScroll}></img>
            </footer> */}


       </section>
 
    )
}

export default ForestStart
