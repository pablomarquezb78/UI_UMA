
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
                    <video id={videoId} control={"false"} muted>
                        <source src={url} type="video/mp4"></source>
                    </video>
                    <div className='w-100 h-100'></div>
                    <div className='textCard w-100 h-100'>
                        <h1 className='text-center text-white' >
                                {texto}
                        </h1> 
                    </div>
                </Link>

        </div>

    </section>

    </> 
    )
}

export default GridCard