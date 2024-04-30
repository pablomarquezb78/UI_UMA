import React from "react";

import APND from "../assets/Info/APND.png"
import '../Info/Info.css'

function AboutUs(){
    return (
        <>
            <div id="APND_Logo">
                <h1>Sobre Nosotros</h1>
                <p>Somos un grupo de estudiantes de tercer curso de Ingeniería del Software 
                en la Universidad de Málaga, este es nuestro proyecto para la asignatura "Interfaces
                de Usuario", donde hemos creado una página web orientada a los tips de supervivencia a nivel
                recreativo de la forma más usable, accesible y atractiva posible. Esperemos que os guste :)
                </p>
                <img src={APND}></img>
            </div>
        </>
    );
}

export default AboutUs;