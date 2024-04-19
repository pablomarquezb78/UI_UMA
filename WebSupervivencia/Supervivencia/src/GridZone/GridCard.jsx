import react, { useId } from 'react';

import '../CSS/Grid.css';
import {useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import infoCard from '../assets/Start/Logos/info.png'

function GridCard({nameClass,nameVideo,texto}) {

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
        
        <Link to={'/' + nameVideo}>
        <div className="flexDivContent">
                    <h3 className="gridText">
                        {texto}
                    </h3>
        </div> 
        </Link>
        <button onClick={() => {setReverseCard(true)}}>
                        <img src={infoCard}></img>    
        
        </button> 
    </div>


    <article id={reverseCardId} className="reverseCard">

    <h1>resumen</h1>

    </article>


    </div>

    
    </> 
    )
}

export default GridCard