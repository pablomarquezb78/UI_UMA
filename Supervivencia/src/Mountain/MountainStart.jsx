import React from 'react';
import '../CSS/Start.css';
import NavBar from '../Start/NavBar';
import BiomeStart from '../Components/BiomeStart/BiomeStart'
import { useEffect } from "react";


function MountainStart({scrollToGridInfo}) {
    
    useEffect(() => {
        document.title = "How2Survive ~ Montaña";
    }, []);

    return(       
        <section id="landingSection" className="bg-white vw-100 vh-100 d-flex flex-column justify-content-between">
            <NavBar scrollToGridInfo={scrollToGridInfo} currentLink={2}/>

            <BiomeStart video={'montana'} title={'Montaña'} subtitle={"Un bioma montañoso, majestuoso y escarpado, un dominio elevado donde la naturaleza despliega su grandeza en alturas vertiginosas."}></BiomeStart>

       </section> 
    )
}

export default MountainStart;
