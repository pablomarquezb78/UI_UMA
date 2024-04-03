import react from 'react';
import { useState } from 'react';
import './Start.css';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';
import videoStart from "./assets/videoStart.mp4";
function VideoStart() {

    const [text] = useTypewriter({
        words: ["Sobrevive", "Adáptate", "Aprende", "Resiste", "Perdura", "Persiste", "Aguanta", "Supéralo"],        
        loop: 0, 
        typeSpeed: 100,
        deleteSpeed: 70,
        delaySpeed: 1000,
    });
    
    return(
        
        
        <div className='videoStart'>
                <video autoPlay loop muted src={videoStart}></video>
        </div>
    )
}

export default VideoStart
