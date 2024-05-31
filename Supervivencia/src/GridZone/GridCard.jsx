
import './Grid.css';
import {useState,useEffect,useRef,useId} from 'react';
import { Link } from 'react-router-dom';
function GridCard({nameVideo,texto, linkTo}) {

    const[time2Play, setTime2Play] = useState(false)

    const videoId = useId();

    const url = '/VideosGrid/' + nameVideo + '.mp4'

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
       

                <Link to={'/' + linkTo} onMouseEnter={() => {setTime2Play(true)} } onMouseLeave={() => {setTime2Play(false)}}>          
                    <video id={videoId} control={"false"} src={url} muted></video>

                    <div className='textCard w-100 h-100'>
                        <h3 className='text-center text-white' >
                                {texto}
                        </h3> 
                    </div>
                </Link>

        </div>

    </section>

    </> 
    )
}

export default GridCard