import react from 'react';

import '../CSS/GridZone.css';
import GridCard from './GridCard';

function GridZone() {

   return(
    
    <section id="sectionGrid" className="vw-100 vh-100">

    <div className='gridSection'>
       
        <GridCard nameClass='topCard' nameVideo='desierto' texto='DESIERTO'/>
        <h1 id="topCard" className="gridCard">sobrevive</h1>
        <GridCard nameClass='topCard' nameVideo='ciudad' texto='CIUDAD'/>
        <GridCard nameClass='bottomCard' nameVideo='montana' texto='MONTAÑA'/>
        <GridCard nameClass='bottomCard' nameVideo='playa' texto='PLAYA'/>
        <GridCard nameClass='bottomCard' nameVideo='bosque' texto='BOSQUE'/>

    </div>
  
    </section>


    )
}

export default GridZone