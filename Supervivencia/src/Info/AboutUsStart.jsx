import React from "react";

import '../CSS/Start.css';
import AboutUS from "./Components/AboutUs";
import NavBar from '../Start/NavBar';

function AboutUsStart({scrollToGridInfo}){
    return(
        <>

        <section id="landingSection" className="bg-white vw-100 vh-100">
            
            <NavBar scrollToGridInfo={scrollToGridInfo}/>

            <AboutUS/>

        </section> 

        </>
    );
}

export default AboutUsStart;