import React from 'react';
import { Link } from "react-router-dom"; 
import './Info.css'
import 'react-accessible-accordion/dist/fancy-example.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function GridInfo() {

   return(
    <>

    <div id="infoSection" className='bg-light d-flex align-items-start justify-content-around py-5 px-3'>

        <div className='px-1'>
            <h5 className='pb-4'>Ayuda</h5>
            <Link to="/UI_UMA/FAQ" className='text-decoration-none'>Preguntas Frecuentes</Link>
        </div>
        <div className='px-1'>
            <h5 className='pb-4'>Contacto</h5>
            <a>Correo: APND@gmail.com</a><br/>
            <a>Teléfono: 123-456-789</a><br/>
            <div id='socialNetWorkDisplayer' className='d-flex justify-content-around'>
                <InstagramIcon/>
                <XIcon/>
            </div>
        </div>
        <div className='px-1'>
            <h5 className='pb-4'>Información</h5>
            <Link to="/UI_UMA/AboutUs" className='text-decoration-none'>Sobre Nosotros</Link><br/>
            <a>Política de Privacidad</a><br/>
            <a>Aviso Legal</a><br/>
            <a>Política de Cookies</a>
        </div>

    </div>

    </>
    )
}

export default GridInfo;