import React from "react";
import APND from "../../assets/Info/APND.png";
import useFitText from "use-fit-text";
import '../Info.css';

function AboutUs() { 

    const { fontSize, ref } = useFitText({
        maxFontSize: 200,
        minFontSize: 10,
    });

    return (
        <div id="container" className="position-relative d-flex flex-column align-items-center justify-content-center mx-auto">
            <div id="titleContainer" className="justify-content-center align-items-center text-center">
                <h1 className="fontControlAboutUs">Sobre Nosotros</h1>
            </div>
            <div id="textContainer" ref={ref} style={{ fontSize, height: "20%" , width: "100%", letterSpacing: '1px', lineHeight: '1.2'}}
             className="my-1 text-center">
                <p className="m-0">
                    Somos un grupo de estudiantes de tercer curso de Ingeniería del Software en la Universidad de Málaga,
                     este es nuestro proyecto para la asignatura "Interfaces de Usuario", donde hemos creado una página web
                     orientada a los tips de supervivencia a nivel recreativo de la forma más usable, accesible y atractiva
                     posible. Esperemos que os guste :)
                </p>
            </div>
            <div id="imgContainer" className="d-flex justify-content-center align-items-center">
                <img src={APND} alt="APND Logo" className="fontControlAboutUsAPND"/>
            </div>
        </div>
    );
}

export default AboutUs;
 