import React from "react";

import '../CSS/Start.css';
import FAQ from "../Components/FAQ";
import NavBar from '../Start/NavBar';
import downScroll from '../assets/Start/Logos/down_scroll.png'

function FaqPage({scrollToGridInfo}){
    return(
        <>

        <section id="landingSection" className="bg-white vw-100 vh-100">
            
            {/* Envuelto por una etiqueta header dentro del componente NavBar*/}
            <NavBar scrollToGridInfo={scrollToGridInfo}/>

            <FAQ/>

            <footer>
                <img className="imgFlechaScroll" src={downScroll}></img>
            </footer>

        </section>

        </>
    );
}

export default FaqPage;