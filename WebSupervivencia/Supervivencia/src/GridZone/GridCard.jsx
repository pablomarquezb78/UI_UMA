import react from 'react';

import '../CSS/GridZone.css';
import {useState,useEffect,useRef} from 'react';
import { Link } from "react-router-dom";


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
        <Link to={'/' + nameVideo}>
            <video ref={elementRef} control={"false"} src={url} muted></video>
                <div className="gridDivContent">
                    <h3 className="gridText">
                        {texto}
                    </h3>
                </div>   
        </Link> 
        <button>INFO</button> 
    </div>
    </> 
    )
}

export default GridCard