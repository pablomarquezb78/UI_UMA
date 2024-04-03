import react from 'react';
import './Start.css';
import VideoStart from './VideoStart';
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
        
       <section>

        <VideoStart>
        </VideoStart>
        <article className="startText">
            <h2 className="typeWriteText">{'\u00A0'}{text}</h2>
          
            <h3 id="resilencia">Resilencia</h3>
            <footer id="definicionResilencia">Capacidad de adaptación de un ser vivo frente a un agente perturbador o un estado o situación adversos.</footer>
        </article>
       </section>
    )
}

export default Start
