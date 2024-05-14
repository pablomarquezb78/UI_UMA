import React from 'react';
import { Link } from "react-router-dom"; 
import './Info.css'
import 'react-accessible-accordion/dist/fancy-example.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

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
            <a>Correo: APND@gmail.com</a><br/>
            <a>Teléfono: 123-456-789</a><br/>
            <div id='socialNetWorkDisplayer'>
                <InstagramIcon/>
                <XIcon/>
            </div>
        </div>
        <div>
            <h5>Información</h5>
            <Link to="/UI_UMA/AboutUs">Sobre Nosotros</Link><br/>
            <a>Política de Privacidad</a><br/>
            <a>Aviso Legal</a><br/>
            <a>Política de Cookies</a>
        </div>

    </div>

    </>
    )
}

export default GridInfo;