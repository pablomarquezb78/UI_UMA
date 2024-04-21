import logoWeb from '../assets/Start/Logos/logo_web.png'
import ayudaWeb from '../assets/Start/Logos/ayuda_logo.png'
import hamburguesa from '../assets/Start/Logos/new_burger.png'
import cross from '../assets/Start/Logos/X.png'

import '../CSS/Start.css';
import '../CSS/BootstrapEdit.css';
import { Link } from "react-router-dom";
import {useState ,useEffect} from 'react';
import React from 'react';

function navBar({ scrollToGridInfo }) {
 
    //Control de como mostar el navList
    const [showMenu,setShowMenu] = useState(2);
    //0 es equivalente a no pulsado y 1 a pulsado 2 es equivalente a ver en grande (flex)
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prevState => (prevState + 1)%2);
        setShowOverlay(prevState => !prevState);
        
    };

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            
            if(screenWidth > 750) { //Vuelve a mostrar el menu con flex y setea la hamburguesa a no pulsado
                setShowMenu(2);
                setShowOverlay(false);
            }else{
                setShowMenu(0);
            }

            if(showMenu == 1){
                setShowOverlay(true);
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

    useEffect(() => {
        console.log(showMenu);

        const overlay = document.getElementById('overlay');
        const LogoStart = document.getElementById('ayudaLogoStart');
        const hamburger = document.getElementById('hamburger');
        if(showMenu == 1){
            overlay.style.display = 'block';
            LogoStart.style.display = 'none';
            hamburger.setAttribute('src', cross);
        }else{
            overlay.style.display = 'none';
            hamburger.setAttribute('src', hamburguesa);
        }
    }, [showOverlay]);

    return(
    <>
        <header className="navBar">
            <div className="navBarItem">
                <Link to='/'><img id="webLogoStart" src={logoWeb}></img></Link>
                <input type='image' id="hamburger" src={hamburguesa} onClick={toggleMenu}/>
            </div>
            <nav>
                <ul id="navList" style={{ 
                    display: showMenu === 0 ? 'none' : showMenu === 2 ? 'flex' : 'none',
                    }}>
                    <li>
                        <Link to='/mountain'>
                        <span className='animatedSpanNavBar'>Montaña</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/forest'>
                        <span className='animatedSpanNavBar'>Bosque</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/desert'>
                            <span className='animatedSpanNavBar'>Desierto</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/coast'>
                            <span className='animatedSpanNavBar'>Costa</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/city'>
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
                <li><Link to='/mountain'><span className='animatedSpanNavBar'>Montaña</span></Link></li>
                <li><Link to='/forest'><span className='animatedSpanNavBar'>Bosque</span></Link></li>
                <li><Link to='/desert'><span className='animatedSpanNavBar'>Desierto</span></Link></li>
                <li><Link to='/coast'><span className='animatedSpanNavBar'>Costa</span></Link></li>
                <li><Link to='/city'><span className='animatedSpanNavBar'>Ciudad</span></Link></li>
            </ul>
        </div> 
    </>
    
    )
}

export default navBar
