import React from 'react';
import { Link } from "react-router-dom"; 
import './Info.css'
import 'react-accessible-accordion/dist/fancy-example.css';

function GridInfo() {

   return(
    <>

    <div id="infoSection">

        <div>
            <h5>Ayuda</h5>
            <Link to="/UI_UMA/FAQ">Preguntas Frecuentes</Link>
        </div>
        <div>
            <h5>Contacto</h5>
            <p>Correo: APND@gmail.com</p>
            <p>Teléfono: 123-456-789</p>
            <div id='socialNetWorkDisplayer'>
                <p>Red 1</p>
                <p>Red 2</p>
            </div>
        </div>
        <div>
            <h5>Información</h5>
            <Link to="/UI_UMA/AboutUs">Sobre Nosotros</Link><br/><br/>
            <p>Política de Privacidad</p>
            <p>Aviso Legal</p>
            <p>Política de Cookies</p>
        </div>

    </div>

    </>
    )
}

export default GridInfo;