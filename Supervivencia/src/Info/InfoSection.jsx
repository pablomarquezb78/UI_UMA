import React from 'react';
import { Link } from "react-router-dom"; 
import './Info.css'
import 'react-accessible-accordion/dist/fancy-example.css';
import APNDLogo from './Logo_EquipoAPND.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function InfoSection() {

   return(
    <div className='position-relative bg-light'>
        <div id="infoSection" className='d-flex align-items-start justify-content-around py-5 px-3'>

            <div className='px-1'>
                <h1 className='pb-4 fontControlInfoSectionh4'>Ayuda</h1>
                <Link to="/FAQ" className='text-decoration-none fontControlInfoSection'>Preguntas Frecuentes</Link>
            </div>
            <div className='px-1'>
                <h1 className='pb-4 fontControlInfoSectionh4'>Contacto</h1>
                <span className='fontControlInfoSection text-decoration-none'>Correo: APND@gmail.com</span><br/>
                <span className='fontControlInfoSection text-decoration-none'>Teléfono: 123-456-789</span><br/>
                <div id='socialNetWorkDisplayer' className='d-flex justify-content-around'>
                    <Link title='Enlace Instagram' to="/UnderConstruction"><InstagramIcon/></Link>
                    <Link title='Enlace Twitter' to="/UnderConstruction"><XIcon/></Link>
                </div>
            </div>
            <div className='px-1'>
                <h1 className='pb-4 fontControlInfoSectionh4'>Información</h1>
                <Link to="/AboutUs" className='text-decoration-none fontControlInfoSection'>Sobre Nosotros</Link><br/>
                <Link to="/UnderConstruction" className='fontControlInfoSection text-decoration-none'>Política de Privacidad</Link><br/>
                <Link to="/UnderConstruction" className='fontControlInfoSection text-decoration-none'>Aviso Legal</Link><br/>
                <Link to="/UnderConstruction" className='fontControlInfoSection text-decoration-none'>Política de Cookies</Link>
            </div>
        </div>
        <div className='px-2 pb-3'>
            <img id="APNDLOGO" className='"position-absolute bottom-0 end-0"' alt='Logo del equipo APND' src={APNDLogo}></img> <span style={{ fontSize: 'calc(10px + (14 - 10) * ((100vmin - 350px) / (1080 - 350)))'}}>2024 - APND Team</span>
        </div>
    </div>
    )
}

export default InfoSection;