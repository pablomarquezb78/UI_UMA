// HigherLowerGame.jsx

import React, { useState, useEffect } from 'react';
import data from './RandomImage.jsx';
import './Coast.css';

function HigherLowerGame() {
    const [leftCardIndex, setLeftCardIndex] = useState(0);
    const [rightCardIndex, setRightCardIndex] = useState(1);
    const [imageArray, setImageArray] = useState([]);
    const [isCorrect, setIsCorrect] = useState(0);
    const [showTickAnimation, setShowTickAnimation] = useState(false);
    const [showCrossAnimation, setShowCrossAnimation] = useState(false);

    useEffect(() => {
        const numberOfCardAux = new Array(data.longData()).fill().map((_, index) => index + 1);
        const shuffleCard = numberOfCardAux.sort(() => Math.random() - 0.5);
        setImageArray(shuffleCard);
    }, []);

    useEffect(() => {
        if (rightCardIndex === imageArray.length) {
            window.alert('GANASTE');
            setIsCorrect(0);
            resetGame();
        }
    }, [rightCardIndex]);

    useEffect(() => {
        if (showTickAnimation) {
            const timer = setTimeout(() => {
                setLeftCardIndex(rightCardIndex);
                setRightCardIndex(rightCardIndex + 1);
                setIsCorrect(0);
                setShowTickAnimation(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [showTickAnimation]);

    const handleHigherClick = () => {
        if (parseInt(data.randomImage(imageArray[leftCardIndex]).mortalidad) < parseInt(data.randomImage(imageArray[rightCardIndex]).mortalidad)) {
            setIsCorrect(1);
            setShowTickAnimation(true);
        } else {
            setIsCorrect(2);
            setShowCrossAnimation(true);
            setTimeout(() => {
                resetGame();
                setShowCrossAnimation(false);
            }, 1000); 
        }
    };
    
    const handleLowerClick = () => {
        if (parseInt(data.randomImage(imageArray[leftCardIndex]).mortalidad) > parseInt(data.randomImage(imageArray[rightCardIndex]).mortalidad)) {
            setIsCorrect(1);
            setShowTickAnimation(true);
        } else {
            setIsCorrect(2);
            setShowCrossAnimation(true);
            setTimeout(() => {
                resetGame();
                setShowCrossAnimation(false);
            }, 1000); 
        }
    };

    const resetGame = () => {
        setLeftCardIndex(0);
        setRightCardIndex(1);
        const numberOfCardAux = new Array(data.longData()).fill().map((_, index) => index + 1);
        const shuffleCard = numberOfCardAux.sort(() => Math.random() - 0.5);
        setImageArray(shuffleCard);
        setIsCorrect(0);
    };

    return (
        <section className='gameHOL container d-flex justify-content-center align-items-center text-center vh-100 vw-100'>
            <div className='cabeceraHOL'>
                <h1>Higher or Lower</h1>
                <h2>¿Cuál es más letal 💀?</h2>
            </div>
            <section className='imagenesHOL position-relative d-flex justify-content-center align-items-center vh-100 vw-100'>
                <div className='imagenHOL position-relative'>
                    <img alt='{data.randomImage(imageArray[leftCardIndex])?.nombre}'className='img-fluid' src={`src/assets/Coast/${data.randomImage(imageArray[leftCardIndex])?.foto}`}/>
                    <div id='informacion_imagen_i'>
                        <h3 className='card-text'> {data.randomImage(imageArray[leftCardIndex])?.nombre}: {data.randomImage(imageArray[leftCardIndex])?.mortalidad} muertes al año </h3>
                    </div>      
                </div>
                <div className='imagenHOL position-relative'>
                    <img alt="{data.randomImage(imageArray[rightCardIndex])?.nombre}" className='img-fluid' src={`src/assets/Coast/${data.randomImage(imageArray[rightCardIndex])?.foto}`}/>
                    <div id='informacion_imagen_d'  className='position-absolute text-center'>
                        <h3 className='card-text'> {data.randomImage(imageArray[rightCardIndex])?.nombre}: ? muertes al año </h3>
                    </div>
                    <div className='botonesHOL position-absolute'>
                        <button className='custom-button d-flex justify-content-center mb-1' onClick={handleHigherClick}>Higher</button>
                        <button className='custom-button d-flex justify-content-center' onClick={handleLowerClick}>Lower</button>
                    </div> 
                </div>
                <div className={`position-absolute top-50 start-50 translate-middle ${isCorrect !== 0 && 'fade-icon'}`}>
                    {isCorrect === 0 && <img src="src/assets/Coast/versus-icon.png"  alt="VS" style={{ width: '80px', height: '80px', backgroundColor: 'black', borderRadius:'50%'}} />}
                    {showTickAnimation && <img src="src/assets/Coast/tick-icon.png" alt="Tick" style={{ width: '80px', height: '80px', backgroundColor: 'green', borderRadius:'50%' }} />}
                    {isCorrect === 2 && <img src="src/assets/Coast/cross-icon.png" alt="Cross" style={{ width: '80px', height: '80px', backgroundColor: 'red', borderRadius:'50%' }} />}
                </div>
            </section>
            <div>
            </div>
        </section>
    );
}

export default HigherLowerGame;






