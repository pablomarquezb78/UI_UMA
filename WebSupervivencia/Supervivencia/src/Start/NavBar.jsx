import { useState } from 'react';
import logoWeb from '../assets/Start/logo_web.png'
import '../CSS/Start.css';
import '../CSS/BootstrapEdit.css';

function navBar() {
 
    return(
        
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

    )
}

export default navBar

