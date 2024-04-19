import react from 'react';

import '../CSS/Grid.css';
import {useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import infoCard from '../assets/Start/Logos/info.png'

function GridCard({nameClass,nameVideo,texto}) {

    const[time2Play, setTime2Play] = useState(false)

    const elementRef = useRef(null);

    const url = 'src/assets/VideosGrid/' + nameVideo + '.webm'
   
    useEffect(() => {
        
        if(time2Play){
            elementRef.current.play()
        }else{
            elementRef.current.pause()
        }

    },[time2Play])

    return(
    <>
    <div  onMouseEnter={() => {setTime2Play(true)} } onMouseLeave={() => {setTime2Play(false);}} id={nameClass} className="gridCard">
        
            <video ref={elementRef} control={"false"} src={url} muted></video>  
        
        <Link to={'/' + nameVideo}>
        <div className="gridDivContent">
                    <h3 className="gridText">
                        {texto}
                    </h3>
                    <button>
                        <img src={infoCard}></img>    
                    </button> 
        </div> 
        </Link>
       
    </div>
    </> 
    )
}

export default GridCard