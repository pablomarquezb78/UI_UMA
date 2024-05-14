import React, { useId } from 'react';

import './Grid.css';
import {useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import infoCardIcon from '../assets/Start/Logos/info.png'
import reverseCardIcon from '../assets/Start/Logos/reverse.webp'
function GridCard({nameVideo,texto, linkTo}) {

    const[time2Play, setTime2Play] = useState(false)
    const[reverseCard, setReverseCard] = useState(false)


    const videoId = useId();
    const frontCardId = useId()
    const reverseCardId = useId()

    useEffect(() => {

        const Fcard = document.getElementById(frontCardId);
        const Bcard = document.getElementById(reverseCardId);
        if(reverseCard){
            Fcard.style.transform = 'perspective(600px) rotateY(180deg)';
            Bcard.style.transform = 'perspective(600px) rotateY(360deg)';
        }else{
            Fcard.style.transform = 'perspective(600px) rotateY(360deg)';
            Bcard.style.transform = 'perspective(600px) rotateY(180deg)';
        }
            
    
    },[reverseCard])


    const url = 'src/assets/VideosGrid/' + nameVideo + '.mp4'
   
    useEffect(() => {
        
        const videoCard = document.getElementById(videoId);

        if(time2Play){
            videoCard.play()
        }else{
            videoCard.pause()
        }

    },[time2Play])


    return(
    <>

    {/* CARD DEL BIOMA POR DELANTE */}

    <div className="gridCard">

    <section id={frontCardId} className="position-absolute top-0 bottom-0 start-0 end-0 m-0 w-100 h-100 frontCard" onMouseEnter={() => {setTime2Play(true)} } onMouseLeave={() => {setTime2Play(false);}}  >
        
        <video id={videoId} control={"false"} src={url} muted></video>  
        
        <Link to={'/UI_UMA/' + linkTo}>
       
        <div className="position-absolute top-0 right-0 bottom-0 left-0 m-auto d-flex justify-content-center align-items-center w-100 h-100">
                
                <h3 className="text-center text-white w-100 gridText" hidden={reverseCard}>
                        {texto}
                </h3>

        </div> 
        
        </Link>

        <button className="position-absolute bottom-0 start-0 end-0 mx-auto" onClick={() => {setReverseCard(true)}}>
            
            <img className="w-100 h-100" src={infoCardIcon} hidden={reverseCard}></img>    
        
        </button> 
    
    </section>

    
    {/* CARD DEL BIOMA POR DETRÁS */}

    <section id={reverseCardId} className="reverseCard">

    <article className='w-100 h-100'>

        <h1>resumen</h1>
        <h1>{nameVideo}</h1>

    </article>


    <Link to={'/UI_UMA/' + linkTo}>
    <button className="knowMore">SABER MÁS</button>
    </Link>


    <button className="mx-auto" onClick={() => {setReverseCard(false)}}>
        
        <img className="w-100 h-100" src={reverseCardIcon} hidden={!reverseCard}></img>    
    
    </button> 
    
    </section>


    </div>

    </> 
    )
}

export default GridCard