import React from "react";

import '../CSS/Start.css';
import FAQ from "./Components/FAQ";
import NavBar from '../Start/NavBar';
import { useEffect } from "react";

function FaqPage({scrollToGridInfo}){

    useEffect(() => {
        document.title = "How2Survive ~ Preguntas Frecuentes";
    }, []);

    return(
        <> 

        <section id="landingSection" className="bg-white vw-100 vh-100">
            
            <NavBar scrollToGridInfo={scrollToGridInfo}/>

            <FAQ/>

        </section>

        </>
    );
} 

export default FaqPage;