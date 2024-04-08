import react from 'react';

import '../CSS/Start.css';
import VideoStart from './VideoStart';
import NavBar from './NavBar';
<<<<<<< HEAD
import FlechaScroll from '../assets/Start/Logos/flechas_scroll.png'
=======
>>>>>>> f15425ccaee7809518ca31f2e424d48b1b47f6b6
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
        
<<<<<<< HEAD
        
=======
>>>>>>> f15425ccaee7809518ca31f2e424d48b1b47f6b6
        <section className="bg-black relative text-left">
    
        <VideoStart/>
        
        <article className="startArticle">
            <h2 id="typeWriteText">{'\u00A0'}{text}</h2>
<<<<<<< HEAD
            <header id="resilencia">resilencia</header>
            <p id="resilenciaDefinition">Capacidad de adaptación de un ser vivo frente a un agente perturbador o un estado o situación adversos.</p>
        </article>
       
        <footer>
            <img className="imgFlechaScroll" src={FlechaScroll}></img>
        </footer>

=======
            <header id="resilencia">Resilencia</header>
            <p id="resilenciaDefinition">Capacidad de adaptación de un ser vivo frente a un agente perturbador o un estado o situación adversos.</p>
        </article>
       
>>>>>>> f15425ccaee7809518ca31f2e424d48b1b47f6b6
       </section>
        </>
             
    )
}

export default Start
