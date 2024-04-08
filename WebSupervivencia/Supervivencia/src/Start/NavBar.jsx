import { useState } from 'react';
<<<<<<< HEAD

import logoWeb from '../assets/Start/Logos/logo_web.png'
import ayudaWeb from '../assets/Start/Logos/ayuda_logo.png'

=======
import logoWeb from '../assets/Start/logo_web.png'
>>>>>>> f15425ccaee7809518ca31f2e424d48b1b47f6b6
import '../CSS/Start.css';
import '../CSS/BootstrapEdit.css';

function navBar() {
 
    return(
        
<<<<<<< HEAD
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
=======
       <header className="navHeader">

        <nav className="navbar navbar-expand-lg bg-transparent">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>



        <div>
         {/* <a className="navbar-brand" href="#"> */}
         <img src={logoWeb} alt="Logo web" width="70" height="54"/>
         {/* </a> */}
        </div>


        <div className="container-fluid">
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                <div className="navbar-nav mx-auto">

                    <a className="nav-link active" href="#">Bosque</a>
                    <a className="nav-link active" href="#">Montaña</a>
                    <a className="nav-link active" href="#">Río</a>
                    <a className="nav-link active" href="#">Ciudad</a>

                </div>


            </div>

        </div>
            
        </nav>


       </header>
>>>>>>> f15425ccaee7809518ca31f2e424d48b1b47f6b6

    )
}

export default navBar

