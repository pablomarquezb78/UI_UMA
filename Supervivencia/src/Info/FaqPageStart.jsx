import React from "react";

import '../CSS/Start.css';
import FAQ from "./Components/FAQ";
import NavBar from '../Start/NavBar';

function FaqPage({scrollToGridInfo}){
    return(
        <>

        <section id="landingSection" className="bg-white vw-100 vh-100">
            
            {/* Envuelto por una etiqueta header dentro del componente NavBar*/}
            <NavBar scrollToGridInfo={scrollToGridInfo}/>

            <FAQ/>

        </section>

        </>
    );
}

export default FaqPage;