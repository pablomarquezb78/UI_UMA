import React from 'react';

import './Grid.css';
import GridCard from './GridCard';

function GridZone() {

   return(
    
    <section id="sectionGrid" className="vw-100 vh-100">

    <div className='gridBiomeSection'>
       
        <GridCard nameClass='topCard' nameVideo='desierto' texto='DESIERTO' linkTo='desert'/>
        <div id="topCard" className="gridCard">
            <h1>Sobrevive</h1>
            <h2>Desde los consejos más básicos a los más avanzados.<br/><br/>
            Adéntrate en el mundo de la supervivencia.
            </h2>
        </div>
        <GridCard nameClass='topCard' nameVideo='ciudad' texto='CIUDAD' linkTo='city'/>
        <GridCard nameClass='bottomCard' nameVideo='montana' texto='MONTAÑA' linkTo='mountain'/>
        <GridCard nameClass='bottomCard' nameVideo='costa' texto='COSTA' linkTo='coast'/>
        <GridCard nameClass='bottomCard' nameVideo='bosque' texto='BOSQUE' linkTo='forest'/>

    </div>

    </section>

    )
}

export default GridZone;