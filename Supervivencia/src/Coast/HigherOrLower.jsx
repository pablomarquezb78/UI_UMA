// HigherLowerGame.jsx


import React, { useState, useEffect } from 'react';
import data from './RandomImage.jsx';
import './Coast.css';

function HigherLowerGame() {
    const [leftCardIndex, setLeftCardIndex] = useState(0);
    const [rightCardIndex, setRightCardIndex] = useState(1);
    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        const numberOfCardAux = new Array(data.longData()).fill().map((_, index) => index + 1);
        const shuffleCard = numberOfCardAux.sort(() => Math.random() - 0.5);
        setImageArray(shuffleCard);
    }, []);

    useEffect(() => {
        if(rightCardIndex == imageArray.length){
            window.alert('GANASTE');
            resetGame();
        }
    }, [rightCardIndex]);

    const handleHigherClick = () => {
        if (parseInt(data.randomImage(imageArray[leftCardIndex]).mortalidad) > parseInt(data.randomImage(imageArray[rightCardIndex]).mortalidad)) {
            setLeftCardIndex(rightCardIndex);
            setRightCardIndex(rightCardIndex + 1);
        } else {
            window.alert('Fallaste');
            // Maneja la lógica de reinicio o finalización del juego aquí
            resetGame();
        }
    };

    const handleLowerClick = () => {
        if (parseInt(data.randomImage(imageArray[leftCardIndex]).mortalidad) < parseInt(data.randomImage(imageArray[rightCardIndex]).mortalidad)) {
            setLeftCardIndex(rightCardIndex);
            setRightCardIndex(rightCardIndex + 1);
        } else {
            window.alert('Fallaste');
            // Maneja la lógica de reinicio o finalización del juego aquí
            resetGame();
        }
    };

    const resetGame = () => {
        // Reiniciar el juego aquí
        setLeftCardIndex(0);
        setRightCardIndex(1);
        const numberOfCardAux = new Array(data.longData()).fill().map((_, index) => index + 1);
        const shuffleCard = numberOfCardAux.sort(() => Math.random() - 0.5);
        setImageArray(shuffleCard);
    };


    return (
        <section className='container'>
            <h1>Higher or Lower</h1>
            <h2>¿Cúal es más letal 💀?</h2>
            <section className='cards'>
                <div className='card'>
                    <img src={`src/assets/Coast/${data.randomImage(imageArray[leftCardIndex])?.foto}`}/>
                    <h2 className='nombre'>{data.randomImage(imageArray[leftCardIndex])?.nombre}</h2>
                    <h2>{data.randomImage(imageArray[leftCardIndex])?.mortalidad} muertes al año</h2>
                </div>
                <div className='card'>
                    <img src={`src/assets/Coast/${data.randomImage(imageArray[rightCardIndex])?.foto}`}/>
                    <h2 className='nombre'>{data.randomImage(imageArray[rightCardIndex])?.nombre}</h2>        
                </div>
            </section>
            <button onClick={handleHigherClick}>Higher</button>
            <button onClick={handleLowerClick}>Lower</button>
        </section>
    );
}

export default HigherLowerGame;




