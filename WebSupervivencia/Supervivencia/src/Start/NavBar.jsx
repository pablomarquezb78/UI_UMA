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
    // estado 0: oculta el nav | estado 1: muestra con display block | estado 2: muestra con display flex
    const [showMenu,setShowMenu] = useState(2)
    //Control de que se haya pulsado la hamburguesa
    const [manualMenuOpen, setManualMenuOpen] = useState(false);
    //Control transiccion de ancho de pantalla a menor 750px
    const [below750px, setBelow750px] = useState(window.innerWidth <= 750);

    const toggleMenu = () => {
        setManualMenuOpen(prevState => !prevState);
        setShowMenu(prevState => (prevState + 1)%2);
    };

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const wasBelow750px = below750px;
            const isBelow750px = screenWidth <= 750;

            if (isBelow750px && !wasBelow750px && !manualMenuOpen) { // Oculta el menú al pasar por debajo de 750px y si no se ha pulsado la hamburguesa
                setShowMenu(0); 
            } else if(screenWidth > 750) { //Vuelve a mostrar el menu con flex y setea la hamburguesa a no pulsado
                setManualMenuOpen(false);
                setShowMenu(2);
            }

            setBelow750px(isBelow750px);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [manualMenuOpen]);

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
