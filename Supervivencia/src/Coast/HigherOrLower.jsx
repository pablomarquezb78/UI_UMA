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





// import React, { useState, useEffect } from 'react';
// import data from './RandomImage.jsx';
// import './Coast.css';

// function HigherLowerGame() {

//     const [usedIndexes, setUsedIndexes] = useState([currentCard.id]);
//     const [restart, setRestart] = useState(); //0 no pulsado, 1 si pulsado
//     const [imageArray, setNumberOfCard] = useState();
        
//     useEffect(() => {
     
//         const numberOfCardAux = new Array(data.longData()).fill().map((_, index) => index + 1);
//         const shuffleCard = numberOfCardAux.sort(() => Math.random() - 0.5);
//         setNumberOfCard(shuffleCard);
//     },[])


// useEffect(() => {
//     if(usedIndexes.length === data.longData()){
//         setUsedIndexes([]);
//         window.alert("GANASTE, FELICIDADES!");
//         handleGameReset();
//     }
// }, [usedIndexes]);


// useEffect(() => {
//         if(restart == 1){
//             setUsedIndexes([]);
//         } 
// }, [restart]);

//     const handleGameReset = () => {
//         setCurrentCard(data.randomImage(getRandomCardIndex()));
//         setUsedIndexes([currentCard.id]);
//         setNextCard(data.randomImage(getRandomIndex()));
        
//     };

//     const handleHigherClick = () => {
//         if (parseInt(currentCard.mortalidad) > parseInt(nextCard.mortalidad)) {
//             moveCards(true);
//         } else {
//             setRestart(1);
//             handleGameReset();
//             setRestart(0);
//             window.alert('Fallaste');
//         }
//     };

//     const handleLowerClick = () => {
//         if (parseInt(currentCard.mortalidad) < parseInt(nextCard.mortalidad)) {
//             moveCards(true);
//         } else {
//             handleGameReset();
//             window.alert('Fallaste');
//         }
//     };

//     const moveCards = (correct) => {
//         if (correct && usedIndexes.length < data.longData()) {
//             setCurrentCard(nextCard);
//             console.log(usedIndexes);
//             let nextIndex = getRandomIndex();  
//             setNextCard(data.randomImage(nextIndex));
//             setUsedIndexes([...usedIndexes, nextIndex]);
//         }
//     };

    


//     return (
//         <section className='container'>
//             <h1>Higher or Lower</h1>
//             <section className='cards'>
//                 <div className='card'>
//                     <img src={`src/assets/Coast/${imageArray[0]}`} alt={`Current Card: ${currentCard.nombre}`} />
//                 </div>
//                 <div  className='card'>
//                     <img src={`src/assets/Coast/${nextCard.foto}`} alt={`Next Card: ${nextCard.nombre}`} />
//                 </div>
                
//             </section>
//                 <button onClick={handleHigherClick}>Higher</button>
//                 <button onClick={handleLowerClick}>Lower</button>
//         </section>
//     );
// }

// export default HigherLowerGame;


