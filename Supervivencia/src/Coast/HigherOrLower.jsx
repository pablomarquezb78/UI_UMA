import React, { useState, useEffect } from 'react';
import data from './RandomImage.jsx';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SosIcon from '@mui/icons-material/Sos';
import './Coast.css';

function HigherLowerGame() {
    const AnimatedIconButton = styled(IconButton)`
    color: black;

    &:focus {
        transform: scale(1.1);
        transition: transform 0.1s ease;
    }

    .MuiSvgIcon-root {
        width: calc(22px + (50 - 22) * ((100vmin - 350px) / (1080 - 350)));
        height: calc(22px + (50 - 22) * ((100vmin - 350px) / (1080 - 350)));
    }
    `;


    const [leftCardIndex, setLeftCardIndex] = useState(0);
    const [rightCardIndex, setRightCardIndex] = useState(1);
    const [imageArray, setImageArray] = useState([]);
    const [showDeaths, setShowDeaths] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState(true);

    const [isCorrect, setIsCorrect] = useState(0);
    const [tickAnimation, setTickAnimation] = useState(false);
    const [crossAnimation, setCrossAnimation] = useState(false);

    const [showAnimation, setShowAnimation] = useState(false);
    const [counter, setCounter] = useState(0);
    const [showResult, setShowResult] = useState(false); 
    const [needHelp, setNeedHelp] = useState(false);

    useEffect(() => {
        const numberOfCardAux = new Array(data.longData()).fill().map((_, index) => index + 1);
        const shuffleCard = numberOfCardAux.sort(() => Math.random() - 0.5);
        setImageArray(shuffleCard);
    }, []);

    useEffect(() => {
        setShowAnimation(true);
        setTimeout(() => {
            setShowAnimation(false);
        }, 500);
    }, [rightCardIndex, showResult]);

    useEffect(() => {
        if (tickAnimation) {
            const timer = setTimeout(() => {
                if (rightCardIndex + 1 > imageArray.length - 1) {
                    setShowResult(true);
                    setTickAnimation(false);
                } else {
                    setLeftCardIndex(rightCardIndex);
                    setRightCardIndex(rightCardIndex + 1);
                    setIsCorrect(0);
                    setTickAnimation(false);
                    setShowDeaths(false);
                    setButtonsVisible(true);
                }
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [tickAnimation, rightCardIndex, imageArray.length]);

    const handleHigherClick = () => {
        setButtonsVisible(false);
        if (parseInt(data.randomImage(imageArray[leftCardIndex]).mortalidad) <= parseInt(data.randomImage(imageArray[rightCardIndex]).mortalidad)) {
            setIsCorrect(1);
            setShowDeaths(true);
            setTickAnimation(true);
            setTimeout(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1500);
        } else {
            setIsCorrect(2);
            setShowDeaths(true);
            setCrossAnimation(true);
            setTimeout(() => {
                setCrossAnimation(false);
                setShowResult(true);
            }, 1500);
        }
    };

    const handleLowerClick = () => {
        setButtonsVisible(false);
        if (parseInt(data.randomImage(imageArray[leftCardIndex]).mortalidad) >= parseInt(data.randomImage(imageArray[rightCardIndex]).mortalidad)) {
            setIsCorrect(1);
            setShowDeaths(true);
            setTickAnimation(true);
            setTimeout(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1500);
        } else {
            setIsCorrect(2);
            setShowDeaths(true);
            setCrossAnimation(true);
            setTimeout(() => {
                setCrossAnimation(false);
                setShowResult(true);
            }, 1500);
        }
    };

    const resetGame = () => {
        const numberOfCardAux = new Array(data.longData()).fill().map((_, index) => index + 1);
        const shuffleCard = numberOfCardAux.sort(() => Math.random() - 0.5);
        setImageArray(shuffleCard);
        setLeftCardIndex(0);
        setRightCardIndex(1);
        setIsCorrect(0);
        setShowDeaths(false);
        setCounter(0);
        setButtonsVisible(true);
        setShowResult(false);
    };

    const cancelGame = () => {
        setShowResult(false);
        setNeedHelp(false);
    };

    const helpHandler = () => {
        setNeedHelp(true);
    };


    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key.toLowerCase() === 'r') {
                resetGame();
            } else if (e.key.toLowerCase() === 'h') {
                helpHandler();
            } else if (e.key === '8') {
                handleHigherClick();
            } else if (e.key === '2') {
                handleLowerClick();
            } else if (e.key.toLowerCase() === 'c') {
                cancelGame();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    },);


    return (
        <section className='gameHOL d-flex flex-column justify-content-center align-items-center text-center vh-100 vw-100'>
            <div id='cabeceraHOL' className='position-relative w-100 d-flex justify-content-center align-items-center'>
            <div>
                <h2 className='tituloHOL'>Higher or Lower</h2>
                <h2 className='tituloHOL'>¿Cuál es más letal para el humano 💀?</h2>
            </div>
            <AnimatedIconButton className='helpHOL position-absolute' aria-label='Ayuda' aria-hidden='false' role='img' style={{ right: '0', top: '70%', transform: 'translateY(-50%)', marginRight: '1%' }} onClick={() => { helpHandler() }}><SosIcon/></AnimatedIconButton>
        </div>
            <section className='imagenesHOL position-relative d-flex justify-content-center align-items-center'>
                <div className='imagenHOL position-relative'>
                    <img alt={data.randomImage(imageArray[leftCardIndex])?.nombre} className='img-fluid' src={`src/assets/Coast/${data.randomImage(imageArray[leftCardIndex])?.foto}`}/>
                    <div id='informacion_imagen_i'>
                        <h3 className='card-text'> {data.randomImage(imageArray[leftCardIndex])?.nombre}: {data.randomImage(imageArray[leftCardIndex])?.mortalidad} muertes al año </h3>
                    </div>      
                </div>
                <div className='imagenHOL position-relative'>
                    <img alt={data.randomImage(imageArray[rightCardIndex])?.nombre} className='img-fluid' src={`src/assets/Coast/${data.randomImage(imageArray[rightCardIndex])?.foto}`}/>
                    <div id='informacion_imagen_d'  className='position-absolute text-center'>
                        <h3 className='card-text'> {data.randomImage(imageArray[rightCardIndex])?.nombre}: {showDeaths ? data.randomImage(imageArray[rightCardIndex])?.mortalidad : '?'} muertes al año </h3>
                    </div>
                    <div className='botonesHOL position-absolute'>
                        {buttonsVisible && (
                            <>
                                <button className='custom-button mb-1' onClick={handleHigherClick}>Higher</button>
                                <button className='custom-button' onClick={handleLowerClick}>Lower</button>
                            </>
                        )}
                    </div> 
                </div>
                {needHelp && (
                    <div className="puntuacionHOL position-absolute z-1 bg-white rounded p-2 border border-black" style={{ width: '80%', maxWidth: '1050px', textAlign: 'center'}}>
                        <h2 style={{fontSize:'calc(20px + (30 - 20) * ((100vmin - 350px) / (1080 - 350)))'}}>Ayuda</h2>
                        <p style={{ whiteSpace: 'normal' }}>El juego está basado en el típico juego de Higher Or Lower pero con una pequeña modificación. <br/>
                        Tienes que seleccionar si el ser vivo de la imagen de la derecha mata más o menos personas al año que el ser vivo izquierda.</p>
                        <button className='custom-button m-2' onClick={cancelGame}>Volver al juego</button>         
                    </div>
                )}
                {showResult && (
                    <div className=" puntuacionHOL position-absolute z-1 bg-white rounded p-2 border border-black" >
                        <h2 style={{fontSize:'calc(20px + (30 - 20) * ((100vmin - 350px) / (1080 - 350)))'}} className={`${isCorrect == 2 ? 'text-danger' : 'text-success'}`}>{isCorrect === 2 ? '¡Fallaste!' : '¡Ganaste!'}</h2>
                        <button className='custom-button m-2' onClick={cancelGame}>Cancelar</button>
                        <button className='custom-button m-2' onClick={resetGame}>Volver a jugar</button>      
                    </div>
                )}
                <div className={`position-absolute ${isCorrect !== 0 && 'fade-icon'}`}>
                    {isCorrect === 0 && <img src="src/assets/Coast/versus-icon.png"  alt="VS" style={{ maxWidth: 'calc(50px + (100 - 50) * ((100vmin - 350px) / (1080 - 350)))', backgroundColor: 'black', borderRadius:'50%'}} />}
                    {isCorrect === 1 && <img src="src/assets/Coast/tick-icon.png" alt="Tick" style={{ maxWidth: 'calc(50px + (100 - 50) * ((100vmin - 350px) / (1080 - 350)))', backgroundColor: 'green', borderRadius:'50%' }} />}
                    {isCorrect === 2 && <img src="src/assets/Coast/cross-icon.png" alt="Cross" style={{ maxWidth: 'calc(50px + (100 - 50) * ((100vmin - 350px) / (1080 - 350)))', backgroundColor: 'red', borderRadius:'50%' }} />}
                </div>
            </section>
            <div className="d-flex justify-content-center align-items-center">
                {!showResult && <button className='custom-button m-3' onClick={resetGame}>Reiniciar</button>}
                <h3 style={{fontSize:'calc(15px + (30 - 15) * ((100vmin - 350px) / (1080 - 350)))'}} className={`${showAnimation ? "puntuacionHOL" : ""}`}>Puntuación: {counter}</h3>
            </div>
        </section>
    );
}

export default HigherLowerGame;

