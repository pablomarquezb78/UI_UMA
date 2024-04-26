import react, { useId } from 'react';

import '../CSS/Grid.css';
import {useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import infoCardIcon from '../assets/Start/Logos/info.png'
import reverseCardIcon from '../assets/Start/Logos/reverse.webp'
function GridCard({nameClass,nameVideo,texto, linkTo}) {

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


    const url = 'src/assets/VideosGrid/' + nameVideo + '.webm'
   
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

    <div id={nameClass} className="gridCard">

    <div id={frontCardId} className="frontCard" onMouseEnter={() => {setTime2Play(true)} } onMouseLeave={() => {setTime2Play(false);}}  >
        
        <video id={videoId} control={"false"} src={url} muted></video>  
        
        <Link to={'/UI_UMA/' + linkTo}>
        <div className="flexDivContent">
                    <h3 className="gridText" hidden={reverseCard}>
                        {texto}
                    </h3>
        </div> 
        </Link>
        <button onClick={() => {setReverseCard(true)}}>
            
            <img src={infoCardIcon} hidden={reverseCard}></img>    
        
        </button> 
    </div>


    <section id={reverseCardId} className="reverseCard">

    <h1>resumen</h1>

    <article>

        <h1>{nameVideo}</h1>


    </article>

    <Link to={'/UI_UMA/' + linkTo}>
    <button className="knowMore">SABER MÁS</button>
    </Link>
    
    <button onClick={() => {setReverseCard(false)}}>
        
        <img src={reverseCardIcon} hidden={!reverseCard}></img>    
    
    </button> 
    
    </section>


    </div>

    
    </> 
    )
}

export default GridCard