import React from "react";

import '../CSS/Start.css';
import AboutUS from "./Components/AboutUs";
import NavBar from '../Start/NavBar';

function AboutUsStart({scrollToGridInfo}){
    return(
        <>

        <section id="landingSection" className="bg-white vw-100 vh-100">
            
            {/* Envuelto por una etiqueta header dentro del componente NavBar*/}
            <NavBar scrollToGridInfo={scrollToGridInfo} position={"fixed"}/>

            <AboutUS/>

        </section>

        </>
    );
}

export default AboutUsStart;