import React from 'react';

import '../CSS/Start.css';
import NavBar from '../Start/NavBar';
import BiomeStart from '../Components/BiomeStart/BiomeStart'
import { useEffect } from "react";

function ForestStart({scrollToGridInfo}) {
    
    useEffect(() => {
        document.title = "How2Survive ~ Bosque";
    }, []);


    return(
    
        <section id="landingSection" className="bg-white vw-100 vh-100">
    
            {/* Envuelto por una etiqueta header dentro del componente NavBar*/}
            <NavBar scrollToGridInfo={scrollToGridInfo} currentLink={3}/>

            <BiomeStart video={'bosque'} title={'Bosque'} subtitle={"Un bioma forestal, frondoso y sereno, un santuario verde donde la vida florece bajo el dosel de árboles centenarios."}></BiomeStart>

       </section>
 
    )
}

export default ForestStart
