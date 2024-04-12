import react from 'react';

import '../CSS/GridZone.css';
import {useState,useEffect,useRef} from 'react';


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

        <div className="gridDivContent">
            <h3 className="gridText">
               {texto}
            </h3>
        </div>
     
    </div>
   
       
    </> 
    )
}

export default GridCard