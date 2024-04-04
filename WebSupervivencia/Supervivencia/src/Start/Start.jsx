import react from 'react';

import '../CSS/Start.css';
import VideoStart from './VideoStart';
import NavBar from './NavBar';
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
        
        <>
        
        <NavBar/>
        
        <section className="bg-black relative text-left">
    
        <VideoStart/>
        
        <article className="startArticle">
            <h2 id="typeWriteText">{'\u00A0'}{text}</h2>
            <header id="resilencia">Resilencia</header>
            <p id="resilenciaDefinition">Capacidad de adaptación de un ser vivo frente a un agente perturbador o un estado o situación adversos.</p>
        </article>
       
       </section>
        </>
             
    )
}

export default Start
