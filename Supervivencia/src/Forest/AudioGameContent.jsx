import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

import './AudioGameContent.css';
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import SkipNextIcon from "@mui/icons-material/SkipNext"
import PauseIcon from "@mui/icons-material/Pause"
import ReplayIcon from "@mui/icons-material/Replay"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import VolumeDownIcon from "@mui/icons-material/VolumeDown"
import VolumeMuteIcon from "@mui/icons-material/VolumeMute"
import {animals} from '../assets/Forest/AudioGameAssets/AudioGameDataset.json'

function GameContent({backFunction, passFunction}) {

    //Editing

    const [play, setPlay] = useState(false);
    const [ended, setEnded] = useState(false);
    const [started, setStarted] = useState(false);
    const audioRef = useRef(new Audio());
    const timeRef = useRef();
    const [volume, setVolume] = useState(60);
    const [volumeUp, setVolumeUp] = useState(true);
    const [volumeMute, setVolumeMute] = useState(false);

    const [responsesArray, setResponsesArray] = useState([]);
    //const [audioSrc, setAudioSrc] = useState('');
    const audioSrc = useRef();
    //const [correctResponse, setCorrectResponse] = useState(0);
    const correctResponse = useRef();
    const [score, setScore] = useState(0);
    
    useLayoutEffect(() =>{
        loadGameResources();
    },[]);

    useEffect(() => {
        if (audioRef) {
          audioRef.current.volume = volume / 100;
        }
        if(volume > 50)
        {
            setVolumeUp(true);
            setVolumeMute(false);
        }
        if(volume <= 50 && volume > 1)
        {
            setVolumeUp(false);
            setVolumeMute(false);
        }
        if(volume <= 1)
        {
            setVolumeUp(false);
            setVolumeMute(true);
        }
    }, [volume, audioRef]);

    const startTimer = () =>
    {
        clearInterval(timeRef.current);

        timeRef.current = setInterval(() =>
        {
            if (audioRef.current.ended)
            {
                setPlay(false);
                setEnded(true);
            }
        }
        ,[1000])
    }

    function playAudio()
    {
        if(!started)
        {
            //audioRef.current.src = `public/Forest/AudioGamePublicAssets/AudiosMP3/${audioSrc}`;
            audioRef.current.src = `public/Forest/AudioGamePublicAssets/AudiosMP3/${audioSrc.current}`;
            setEnded(false);
        }
        if(play)
        {
            audioRef.current.pause();
            setPlay(false);
            clearInterval(timeRef.current);
        }
        else
        {
            audioRef.current.play()
            setPlay(true);
            setStarted(true);
            startTimer();
        }
    }

    const loadGameResources = () =>
    {
        if(play)
        {
            audioRef.current.pause();
            clearInterval(timeRef.current);
        }
        setPlay(false);
        setStarted(false);
        setEnded(false);

        let randomCorrectIndex = Math.floor(Math.random() * animals.length);
        let randomIncorrectIndex01 = 0; let randomIncorrectIndex02 = 0; let randomIncorrectIndex03 = 0;
        do{
            randomIncorrectIndex01 = Math.floor(Math.random() * animals.length);
        } while(randomIncorrectIndex01 == randomCorrectIndex)
        do{
            randomIncorrectIndex02 = Math.floor(Math.random() * animals.length);
        } while(randomIncorrectIndex02 == randomCorrectIndex || randomIncorrectIndex02 == randomIncorrectIndex01)
        do{
            randomIncorrectIndex03 = Math.floor(Math.random() * animals.length);
        } while(randomIncorrectIndex03 == randomCorrectIndex || randomIncorrectIndex03 == randomIncorrectIndex01 || randomIncorrectIndex03 == randomIncorrectIndex02)

        let randomCorrectPosition = Math.floor(Math.random() * 4);
        //setCorrectResponse(randomCorrectPosition);
        correctResponse.current = randomCorrectPosition;
        switch (randomCorrectPosition){
            case 0:
                const responses0 = [randomCorrectIndex, randomIncorrectIndex01, randomIncorrectIndex02, randomIncorrectIndex03].map(index => animals[index].text);
                setResponsesArray(responses0);
            break;
            case 1:
                const responses1 = [randomIncorrectIndex01, randomCorrectIndex, randomIncorrectIndex02, randomIncorrectIndex03].map(index => animals[index].text);
                setResponsesArray(responses1);
            break;
            case 2:
                const responses2 = [randomIncorrectIndex01, randomIncorrectIndex02, randomCorrectIndex, randomIncorrectIndex03].map(index => animals[index].text);
                setResponsesArray(responses2);
            break;
            case 3:
                const responses3 = [randomIncorrectIndex01, randomIncorrectIndex02, randomIncorrectIndex03, randomCorrectIndex].map(index => animals[index].text);
                setResponsesArray(responses3);
            break;
            default:
                const responses = [randomCorrectIndex, randomIncorrectIndex01, randomIncorrectIndex02, randomIncorrectIndex03].map(index => animals[index].text);
                setResponsesArray(responses);
            break;
        }
        //setAudioSrc(animals[randomCorrectIndex].src);
        audioSrc.current = animals[randomCorrectIndex].src
    }

    function tutorialClickHandle()
    {
        if(play)
        {
            playAudio();
        }
        backFunction();
    }

    function pressResponse(num)
    {
        if(correctResponse.current == num)
        {
            setScore(score + 1);
            loadGameResources();
        }
        else
        {
            console.log("eliminado");
            passFunction();
        }
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'S' || e.key === 's') {
            loadGameResources();
          } else if (e.key === 'R' || e.key === 'r') {
            playAudio();
          } else if (e.key === '1') {
            pressResponse(0);
          } else if (e.key === '2') {
            pressResponse(1);
          } else if (e.key === '3') {
            pressResponse(2);
          } else if (e.key === '4') {
            pressResponse(3);
          } else if (e.key === 'T' || e.key === 't' || e.key === 'ArrowLeft') {
            tutorialClickHandle();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        // Limpieza del event listener cuando el componente se desmonte
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    return(
        <div id='gameZoneCenter'>
            <div className='container-fluid h-75 w-75' id='gameBox'>
                <div className='topElement row justify-content-center align-items-center h-25'>
                    <div className='topElement row justify-content-center align-items-center h-50'>
                        {/* <div className='col-md-2'></div> */}
                        <div className='col-4 col-md-2'>
                            <button onClick={playAudio}>
                                <div className='playerIconSVG'>
                                    {!play ? (
                                        !started ? (
                                            <PlayArrowIcon/>
                                        ) : (
                                            !ended ? (
                                                <PlayArrowIcon/>
                                            ) : (   
                                                <ReplayIcon/>
                                            )
                                        )
                                    )
                                    : (            
                                        <PauseIcon/>
                                    )}
                                    <br />
                                    {!play ? (
                                        <p>Reproducir</p>
                                    )
                                    : (
                                        <p>Pausar</p>
                                    )}
                                </div>
                            </button>
                        </div>
                        {/* <div className='col-md-2'></div> */}
                        <div className='col-3 col-md-3'></div>
                        <div className='col-4 col-md-2'>
                            <button onClick={loadGameResources}>
                                <div className='playerIconSVG'>
                                    <SkipNextIcon/>
                                    <br />
                                    <p>Saltar</p>
                                </div>
                            </button>
                        </div>
                        {/* <div className='col-md-2'></div> */}
                    </div>
                    <div className='topElement row justify-content-center align-items-center h-50 audioIconSVG'>
                        <div className='col h-75'>
                            <div className='d-flex justify-content-center'>
                                {volumeMute ? (
                                        <VolumeMuteIcon/>
                                    ) : (
                                        volumeUp ? (
                                            <VolumeUpIcon/>
                                        ) : (
                                            <VolumeDownIcon/>
                                        )
                                )}
                            </div>
                        {/* </div> */}
                        {/* <div className='topElement row justify-content-center align-items-center h-50'> */}
                            {/* <div className='col-3'></div> */}
                            <div className='d-flex justify-content-center'>
                                <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(e.target.value)}/>
                            </div>
                            {/* <div className='col-3'></div> */}
                        </div>
                    </div>
                </div>
                
                <div className='midElement row justify-content-center align-items-center h-50'>
                    <div className='midElement row justify-content-center align-items-center h-50'>
                        <div className='col h-75'>
                            <button onClick={() => pressResponse(0)}>
                                {responsesArray[0]}
                            </button>
                        </div>
                        <div className='col h-75'>
                            <button onClick={() => pressResponse(1)}>
                                {responsesArray[1]}
                            </button>
                        </div>
                    </div>
                    <div className='midElement row justify-content-center align-items-center h-50'>
                        <div className='col h-75'>
                            <button onClick={() => pressResponse(2)}>
                                {responsesArray[2]}
                            </button>
                        </div>
                        <div className='col h-75'>
                            <button onClick={() => pressResponse(3)}>
                                {responsesArray[3]}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bottomElement row justify-content-center align-items-center h-25'>
                    <div className='bottomElement row justify-content-center align-items-center h-50' id='score'>
                        <div className='col-auto'>
                            <p>Puntuacion: {score}</p>
                        </div>
                    </div>
                    <div className='bottomElement row justify-content-center align-items-center h-50'>
                        <button onClick={tutorialClickHandle} className='scaleDown'>
                            <div className='bottomIconSVG'>
                                <LibraryBooksIcon className='iconSVG'/>
                                <br/>
                                <p>Volver al tutorial</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default GameContent