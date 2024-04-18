import react from 'react';

import '../CSS/Start.css';
import VideoStart from './VideoStart';
import NavBar from './NavBar';
import FlechaScroll from '../assets/Start/Logos/flechas_scroll.png'
import { Typewriter, useTypewriter } from 'react-simple-typewriter';

function Start() {

    const [text] = useTypewriter({
        words: ["Sobrevive", "Adáptate", "Aprende", "Resiste", "Perdura", "Persiste", "Aguanta", "Supéralo"],        
        loop: 0, 
        typeSpeed: 100,
        deleteSpeed: 70,
        delaySpeed: 1000,
    });
    
    return(
        
        
        <section id="landingSection" className="bg-black">
    
            {/* Envuelto por una etiqueta header dentro del componente NavBar*/}
            <NavBar/>

            {/* Envuelto por un etiqueta div dentro del componente VideoStart*/}
            <VideoStart/>

            <article className="startArticle">
            
            <h1 id="typeWriteText">{'\u00A0'}{text}</h1>
            
                <article>

                <h2 id="resilencia">resilencia</h2>
            
                <p id="resilenciaDefinition">Capacidad de adaptación de un ser vivo frente a un agente perturbador o un estado o situación adversos.</p>
            
                </article>

            </article>

            <footer>
                <img className="imgFlechaScroll" src={FlechaScroll}></img>
            </footer>


       </section>
 
    )
}

export default Start
