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
            <h4 className='pb-4 fontControlInfoSectionh5' tabIndex={0}>Ayuda</h4>
            <Link to="/UI_UMA/FAQ" className='text-decoration-none fontControlInfoSection'>Preguntas Frecuentes</Link>
        </div>
        <div className='px-1'>
            <h4 className='pb-4 fontControlInfoSectionh5' tabIndex={0}>Contacto</h4>
            <a className='fontControlInfoSection text-decoration-none' tabIndex={0}>Correo: APND@gmail.com</a><br/>
            <a className='fontControlInfoSection text-decoration-none' tabIndex={0}>Teléfono: 123-456-789</a><br/>
            <div id='socialNetWorkDisplayer' className='d-flex justify-content-around'>
                <InstagramIcon tabIndex={0}/>
                <XIcon tabIndex={0}/>
            </div>
        </div>
        <div className='px-1'>
            <h4 className='pb-4 fontControlInfoSectionh5' tabIndex={0}>Información</h4>
            <Link to="/UI_UMA/AboutUs" className='text-decoration-none fontControlInfoSection'>Sobre Nosotros</Link><br/>
            <Link to="/UI_UMA/UnderConstruction" className='fontControlInfoSection text-decoration-none'>Política de Privacidad</Link><br/>
            <Link to="/UI_UMA/UnderConstruction" className='fontControlInfoSection text-decoration-none'>Aviso Legal</Link><br/>
            <Link to="/UI_UMA/UnderConstruction" className='fontControlInfoSection text-decoration-none'>Política de Cookies</Link>
        </div>

    </div>

    </>
    )
}

export default GridInfo;