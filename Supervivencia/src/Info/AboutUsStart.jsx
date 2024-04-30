import React from "react";

import '../CSS/Start.css';
import AboutUS from "../Components/AboutUs";
import NavBar from '../Start/NavBar';
import downScroll from '../assets/Start/Logos/down_scroll.png'

function AboutUsStart({scrollToGridInfo}){
    return(
        <>

        <section id="landingSection" className="bg-white vw-100 vh-100">
            
            {/* Envuelto por una etiqueta header dentro del componente NavBar*/}
            <NavBar scrollToGridInfo={scrollToGridInfo}/>

            <AboutUS/>

        </section>

        </>
    );
}

export default AboutUsStart;