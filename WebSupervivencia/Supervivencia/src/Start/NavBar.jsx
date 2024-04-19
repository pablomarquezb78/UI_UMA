import logoWeb from '../assets/Start/Logos/logo_web.png'
import ayudaWeb from '../assets/Start/Logos/ayuda_logo.png'
import hamburguesa from '../assets/Start/Logos/new_burger.png'

import '../CSS/Start.css';
import '../CSS/BootstrapEdit.css';
import { Link } from "react-router-dom";
import {useState ,useEffect} from 'react';
import React from 'react';

function navBar() {
 
    //Control de como mostar el navList
    const [showMenu,setShowMenu] = useState(2);
    //0 es equivalente a no pulsado y 1 a pulsado 2 es equivalente a ver en grande (flex)

    const toggleMenu = () => {
        setShowMenu(prevState => (prevState + 1)%2);
    };

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

    return(
    <>
        <header className="navBar">
            <div className="navBarItem">
                <img id="webLogoStart" src={logoWeb}></img>
                <input type='image' id="hamburger" src={hamburguesa} onClick={toggleMenu}/>
            </div>
            <nav>
                <ul id="navList" style={{ 
                    display: showMenu === 0 ? 'none' : showMenu === 1 ? 'block' : 'flex',
                    //Añadir el estilo deseado al display block
                    // position: showMenu === 1 ? 'fixed' : '',
                    // left: showMenu === 1 ? '0' : '',
                    // paddingLeft: showMenu === 1 ? '75px' : '',
                    }}>
                    <li>
                        <Link to='/prueba'>
                        <span className='animatedSpanNavBar'>Montaña</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/prueba'>
                        <span className='animatedSpanNavBar'>Bosque</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='prueba'>
                            <span className='animatedSpanNavBar'>Desierto</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='prueba'>
                            <span className='animatedSpanNavBar'>Costa</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='prueba'>
                            <span className='animatedSpanNavBar'>Ciudad</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div id="divAyudaLogoStart" className="navBarItem">
                <img id="ayudaLogoStart" src={ayudaWeb}></img>
            </div>
        </header>
    </>
    
    )
}

export default navBar
