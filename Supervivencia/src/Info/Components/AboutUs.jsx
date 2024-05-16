import React from "react";
import APND from "../../assets/Info/APND.png";
import '../Info.css';

function AboutUs() {
    return (
        <div id="container" className="container">
            <div id="titleContainer" className="row justify-content-center align-items-center w-100 fontControlAboutUs text-center">
                <h1>Sobre Nosotros</h1>
            </div>
            <div id="textContainer" className="row w-100 fontControlAboutUs text-center">
                <p>
                    Somos un grupo de estudiantes de tercer curso de Ingeniería del Software en la Universidad de Málaga,
                     este es nuestro proyecto para la asignatura "Interfaces de Usuario", donde hemos creado una página web
                     orientada a los tips de supervivencia a nivel recreativo de la forma más usable, accesible y atractiva
                     posible. Esperemos que os guste:
                </p>
            </div>
            <div id="imgContainer" className="row justify-content-center align-items-center w-100">
                <img src={APND} alt="APND Logo" className="img-fluid" />
            </div>
        </div>
    );
}

export default AboutUs;
