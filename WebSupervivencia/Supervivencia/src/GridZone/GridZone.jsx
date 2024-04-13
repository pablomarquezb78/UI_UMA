import react from 'react';

import '../CSS/GridZone.css';
import GridCard from './GridCard';

function GridZone() {

   return(
    
    <section id="sectionGrid" className="vw-100 vh-100">

    <div className='gridSection'>
       
        <GridCard nameClass='topCard' nameVideo='desierto' texto='DESIERTO'/>
        <div id="topCard" className="gridCard">
            <h1>Sobrevive</h1>
            <h2>Desde los consejos más básicos a los más avanzados.<br/><br/>
            Adéntrate en el mundo de la supervivencia
            </h2>
        </div>
        <GridCard nameClass='topCard' nameVideo='ciudad' texto='CIUDAD'/>
        <GridCard nameClass='bottomCard' nameVideo='montana' texto='MONTAÑA'/>
        <GridCard nameClass='bottomCard' nameVideo='costa' texto='COSTA'/>
        <GridCard nameClass='bottomCard' nameVideo='bosque' texto='BOSQUE'/>

    </div>
  
    </section>


    )
}

export default GridZone