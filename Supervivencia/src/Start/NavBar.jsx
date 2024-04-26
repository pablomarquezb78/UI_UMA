import logoWeb from '../assets/Start/Logos/logo_web.png'
import ayudaWeb from '../assets/Start/Logos/ayuda_logo.png'
import hamburguesa from '../assets/Start/Logos/new_burger.png'
import cross from '../assets/Start/Logos/X.png'

import '../CSS/Start.css';
import { Link } from "react-router-dom";
import {useState ,useEffect} from 'react';
import React from 'react';

function navBar({ scrollToGridInfo }) {
 
    //0 es equivalente a hamburguesa no pulsads,  1 a pulsada y 2 es equivalente a ver pagina en grande (flex)
    const [showMenu,setShowMenu] = useState(2);

    const toggleMenu = () => {
        setShowMenu(prevState => (prevState + 1)%2);
    };

    //Control de tamaño de pantalla y el estado del menu de navegacion
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            
            if(screenWidth > 750) { //Vuelve a mostrar el menu con flex y setea la hamburguesa a no pulsado
                setShowMenu(2);
            }else{
                setShowMenu(0);
            }

        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
        window.addEventListener('load', handleResize);;
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, []);

    //Control cambios del estado del menu de navegacion
    useEffect(() => {
        const overlay = document.getElementById('overlay');
        const ayudaLogoStart = document.getElementById('ayudaLogoStart');
        const hamburger = document.getElementById('hamburger');
        const webLogoStart = document.getElementById('webLogoStart')

        if(showMenu == 1){
            overlay.style.display = 'block';
            ayudaLogoStart.style.display = 'none';
            hamburger.setAttribute('src', cross);
        }else{
            //Cuando se pone modo movil debe mostrarse la hamburguesa y ocultarse el logo
            if(showMenu == 0){
                webLogoStart.style.display = 'none';
                hamburger.style.display = 'block';
            }else{
                webLogoStart.style.display = 'block';
                hamburger.style.display = 'none';
            }

            overlay.style.display = 'none';
            hamburger.setAttribute('src', hamburguesa);
        }
    }, [showMenu]);

    //Si estoy en inicio y pulso inicio otra vez debe haber un reload
    const handleInicioClick = () => {
        if (window.location.pathname === '/UI_UMA/') {
            window.location.reload();
        }
    };

    return(
    <>
        <header className="navBar">
            <div className="navBarItem">
                <Link to='/UI_UMA/' onClick={handleInicioClick}><img id="webLogoStart" src={logoWeb}></img></Link>
                <input type='image' id="hamburger" src={hamburguesa} onClick={toggleMenu}/>
            </div>
            <nav>
                <ul id="navList" style={{ 
                    display: showMenu === 0 ? 'none' : showMenu === 2 ? 'flex' : 'none',
                    }}>
                    <li>
                        <Link to='/UI_UMA/mountain'>
                        <span className='animatedSpanNavBar'>Montaña</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/UI_UMA/forest'>
                        <span className='animatedSpanNavBar'>Bosque</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/UI_UMA/desert'>
                            <span className='animatedSpanNavBar'>Desierto</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/UI_UMA/coast'>
                            <span className='animatedSpanNavBar'>Costa</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/UI_UMA/city'>
                            <span className='animatedSpanNavBar'>Ciudad</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div id="divAyudaLogoStart" className="navBarItem">
                <button id="ayudaLogoStart" onClick={scrollToGridInfo}>
                    <img src={ayudaWeb}></img>
                </button>
            </div>
        </header>
        <div id="overlay">
            <ul>
                <li><Link to='/UI_UMA/' onClick={handleInicioClick}><span className='animatedSpanNavBar'>Inicio</span></Link></li>
                <li><Link to='/UI_UMA/mountain'><span className='animatedSpanNavBar'>Montaña</span></Link></li>
                <li><Link to='/UI_UMA/forest'><span className='animatedSpanNavBar'>Bosque</span></Link></li>
                <li><Link to='/UI_UMA/desert'><span className='animatedSpanNavBar'>Desierto</span></Link></li>
                <li><Link to='/UI_UMA/coast'><span className='animatedSpanNavBar'>Costa</span></Link></li>
                <li><Link to='/UI_UMA/city'><span className='animatedSpanNavBar'>Ciudad</span></Link></li>
            </ul>
        </div> 
    </>
    
    )
}

export default navBar
