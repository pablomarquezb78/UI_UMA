
import logoWeb from '../assets/Start/Logos/logo_web.png'
import ayudaWeb from '../assets/Start/Logos/ayuda_logo.png'

import '../CSS/Start.css';
import '../CSS/BootstrapEdit.css';

function navBar() {
 
    return(
        
      <header className="navBar">

            <div className="navBarItem">
                <img id="webLogoStart" src={logoWeb}></img>
            </div>
            
            <nav >
                
                <ul id="navList">

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

