import logoWeb from '../assets/Start/Logos/logo_web.png'
import ayudaWeb from '../assets/Start/Logos/ayuda_logo.png'
import hamburguesa from '../assets/Start/Logos/new_burger.png'

import '../CSS/Start.css';
import '../CSS/BootstrapEdit.css';
import { useState ,useEffect} from 'react';
import React from 'react';

function navBar() {
 
    const [showMenu,setShowMenu] = useState(2)

    const toggleMenu = () => {
        setShowMenu(prevState => (prevState + 1)%2);
    };

    // 0 oculta 1 block 2 flex

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 700) {
                setShowMenu(0);
            } else {
                setShowMenu(2);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        
      <header className="navBar">

            <div className="navBarItem">
                <img id="webLogoStart" src={logoWeb}></img>
                <input type='image' id="hamburger" src={hamburguesa} onClick={toggleMenu}/>
            </div>
            
            <nav>
                
                <ul id="navList" style={{ display: showMenu === 0 ? 'none' : showMenu === 1 ? 'block' : 'flex' }}>

                    <li>
                        <a>
                        <span className='animatedSpanNavBar'>Montaña</span>
                        </a>
                    </li>
                    
                    <li>
                        <a>
                        <span className='animatedSpanNavBar'>Bosque</span>
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            <span className='animatedSpanNavBar'>Desierto</span>
                        </a>
                    </li>

                    <li>
                        <a>
                            <span className='animatedSpanNavBar'>Mar</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='animatedSpanNavBar'>Ciudad</span>
                        </a>
                    </li>
                </ul>
            
            </nav>

            <div id="divAyudaLogoStart" className="navBarItem">
                <img id="ayudaLogoStart" src={ayudaWeb}></img>
            </div>
           
      </header>

    )
}

export default navBar

