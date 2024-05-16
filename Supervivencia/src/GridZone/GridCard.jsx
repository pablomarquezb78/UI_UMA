
import './Grid.css';
import {useState,useEffect,useRef,useId} from 'react';
import { Link } from 'react-router-dom';
import infoCardIcon from '../assets/Start/Logos/info.png'
import reverseCardIcon from '../assets/Start/Logos/reverse.webp'
function GridCard({nameVideo,texto, linkTo}) {

    const[time2Play, setTime2Play] = useState(false)

    const videoId = useId();

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

    <section className='gridCard'>


        <div className='frontCard'>
       

                <Link to={'/UI_UMA/' + linkTo} onMouseEnter={() => {setTime2Play(true)} } onMouseLeave={() => {setTime2Play(false)}}>          
                    <video id={videoId} control={"false"} src={url} muted></video>

                    <div className='textCard w-100 h-100'>
                        <h3 className='text-center text-white' >
                                {texto}
                        </h3> 
                    </div>
                </Link>

        </div>

<<<<<<< HEAD
=======
        <button className="position-absolute bottom-0 start-0 end-0 mx-auto" onClick={() => {setReverseCard(true)}}>
            
            <img alt={"información "+nameVideo} className="w-100 h-100" src={infoCardIcon} hidden={reverseCard}></img>    
        
        </button> 
    
>>>>>>> 037b7cd039d0c0226f4fd71378e78db86bad7ba0
    </section>

    </> 
    )
}

export default GridCard