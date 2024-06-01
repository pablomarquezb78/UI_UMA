import logoWeb from '../assets/Start/Logos/logo_web.png'

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import '../CSS/Start.css';
import '../CSS/NavBar.css';
import { Link ,NavLink} from "react-router-dom";
import {useState ,useEffect} from 'react';
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
import React from 'react';
 
function navBar({ scrollToGridInfo, currentLink}) {
 
    const AnimatedIconButton = styled(IconButton)`
    .MuiSvgIcon-root {
        color: black;

        width: calc(30px + (80 - 30) * ((100vmin - 350px) / (1080 - 350)));
        height: auto;
    }
    `;
 
    //Control background blanco
    const bg = currentLink == "1" ? "" : "bg-white";

    //0 es equivalente a hamburguesa no pulsada,  1 a pulsada y 2 es equivalente a ver pagina en grande (flex)
    const [showMenu,setShowMenu] = useState(2);
    const [prevShowMenu, setPrevShowMenu] = useState(2); // Estado previo del menú

    const toggleMenu = () => {
        setShowMenu(prevState => (prevState + 1)%2);
    };

    //Control de tamaño de pantalla y el estado del menu de navegacion
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            
            if(screenWidth > 600) { //Vuelve a mostrar el menu con flex y setea la hamburguesa a no pulsado
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

    //Control cambios del estado del overlay
    useEffect(() => {
        const overlay = document.getElementById('overlay');

        if (showMenu === 1) {;

            //Se muestra el overlay
            overlay.style.display = 'block';
            overlay.classList.remove('hidden');
        } else {

            //En grande desaparece el overlay.
            if(showMenu === 2) overlay.style.display = 'none'; 
           
            //Si se estaba mostrando el overlay y se quita se oculta
            if(prevShowMenu !==2 && showMenu === 0){
                overlay.classList.add('hidden');
            }

        }
        // Actualiza el estado previo del menú
        setPrevShowMenu(showMenu);
    }, [showMenu]);

    return(
    <>
        <header className={`d-flex flex-row position-${currentLink === 1 ? "absolute" : "fixed"} ${bg} top-0 start-0 end-0 z-3 vw-100 vh-9 navBar`}>
            <div className="navBarItem">
                {showMenu === 0 && (
                    <AnimatedIconButton title="Menú despliegue navegación" disableRipple={true}>
                        <MenuIcon id="hamburger" onClick={toggleMenu} />
                    </AnimatedIconButton>
                )}
                {showMenu === 1 && (
                    <AnimatedIconButton title="Cerrar Menú navegación" disableRipple={true}>
                        <CloseIcon id="hamburger" onClick={toggleMenu} />
                    </AnimatedIconButton>
                )}
                {showMenu === 2 && (
                    <Link to='/'><img alt='paginaInicio' id="webLogoStart" src={logoWeb}></img></Link>
                )}
            </div>
            <nav>
                <ul id="navList" style={{ 
                    display: showMenu === 2 ? 'flex' : 'none',
                    }}>
                    <li>
                        <NavLink to='/mountain' className={`${currentLink == 2 ? "activeMontaña" : ""}`}>
                        <span className='animatedSpanNavBar'>Montaña</span>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/forest' className={`${currentLink == 3 ? "activeBosque" : ""}`}>
                        <span className='animatedSpanNavBar'>Bosque</span>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/desert' className={`${currentLink == 4 ? "activeDesierto" : ""}`}>
                            <span className='animatedSpanNavBar'>Desierto</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/coast' className={`${currentLink == 5 ? "activeCosta" : ""}`}>
                            <span className='animatedSpanNavBar'>Costa</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/jungle' className={`${currentLink == 6 ? "activeJungla" : ""}`}>
                            <span className='animatedSpanNavBar'>Jungla</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="navBarItem">
                <AnimatedIconButton title="Ayuda Página" className="navBarItem" id="ayudaLogoStart" disableRipple={true} onClick={scrollToGridInfo}><HelpOutlineIcon alt='seccionAyuda'></HelpOutlineIcon></AnimatedIconButton>
            </div>
        </header>
        <div id="overlay">
            <ul>
                <li><NavLink end to='/' className={`${currentLink == 1 ? "activeIndice" : ""}`}>
                    <span className='animatedSpanNavBar'>Inicio</span></NavLink>
                </li>
                <li><NavLink to='/mountain' className={`${currentLink == 2 ? "activeMontaña" : ""}`}>
                    <span className='animatedSpanNavBar'>Montaña</span></NavLink>
                </li>
                <li><NavLink to='/forest' className={`${currentLink == 3 ? "activeBosque" : ""}`}>
                    <span className='animatedSpanNavBar'>Bosque</span></NavLink>
                </li>
                <li><NavLink to='/desert' className={`${currentLink == 4 ? "activeDesierto" : ""}`}>
                    <span className='animatedSpanNavBar'>Desierto</span></NavLink>
                </li>
                <li><NavLink to='/coast' className={`${currentLink == 5 ? "activeCosta" : ""}`}>
                    <span className='animatedSpanNavBar'>Costa</span></NavLink>
                </li>
                <li><NavLink to='/jungle' className={`${currentLink == 6 ? "activeJungla" : ""}`}>
                    <span className='animatedSpanNavBar'>Jungla</span></NavLink>
                </li>
            </ul>
        </div> 
    </>
    
    )
}

export default navBar

