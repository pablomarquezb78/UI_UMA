import React, { useState, useEffect, useCallback } from "react";
import Bag from './DesertImages/Bag.png';
import './Desert.css';
import initialItemList from './itemsBag.json';
import useFitText from "use-fit-text";
import rightButton from './DesertImages/rightButton.png';
import leftButton from './DesertImages/leftButton.png';
import addButton from './DesertImages/add.png';

function DesertBagGame() {
    const imgPath = "src/Desert/DesertImages/";
    const [suma, setSuma] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isItemIncluded, setIsItemIncluded] = useState(false);
    const [indexChanged, setIndexChanged] = useState(false);
    const [itemList, setItemList] = useState([...initialItemList]);

    const { fontSize, ref } = useFitText({
        maxFontSize: 200,
        minFontSize: 10,
    });

    useEffect(() => {
        setIndexChanged(true);
        setTimeout(() => {
            setIndexChanged(false);
        }, 500);
    }, [currentIndex]);

    useEffect(() => {
        if (!isAnimating && isItemIncluded) {
            setTimeout(() => {
                setIsItemIncluded(false);
            }, 500);
        }
    }, [isAnimating, isItemIncluded]);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % itemList.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + itemList.length) % itemList.length);
    };

    const includeItem = () => {
        if (itemList.length === 8) {
            return;
        }
        setSuma(suma + itemList[currentIndex].puntuacion);
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
            setIsItemIncluded(true);
            const newItemList = [...itemList];
            newItemList.splice(currentIndex, 1);
            setItemList(newItemList);
            setCurrentIndex((currentIndex) % newItemList.length);
        }, 500);
    };

    const restartGame = () => {
        setSuma(0);
        setCurrentIndex(0);
        setItemList([...initialItemList]);
    };

    return (
        <section id="desertGameCompleteSection" className="position-relative vw-100 vh-100">
            <div id="completeGameSection" className="d-flex flex-column position-absolute start-50 translate-middle-x">
                <div id="resultDisplay" className="d-flex justify-content-center">
                    <h1 className="text-center text-white">¡Prepara la mochila para sobrevivir!</h1>
                    <button className="btn btn-transparent" onClick={restartGame}>Reiniciar</button>
                    <button className="btn btn-transparent" onClick={restartGame}>Tutorial</button>
                </div>
                <div id="bagGameDisplay" className="d-flex justify-content-center align-items-center">
                    <div id="bagPlace" className="d-flex flex-grow-0 h-100 flex-column justify-content-center">
                        <div id="CapacityContainer">
                            <h5 className="d-block text-center text-white f-size-4">{16 - itemList.length}/8</h5>
                        </div>
                        <div id="BagContainer" className={`d-flex justify-content-center flex-grow-0 w-100  ${isItemIncluded ? "item-included" : ""}`}>
                            <img src={Bag} alt="Bag" className="img-fluid"></img>
                        </div>
                    </div>
                    <div id="itemsContainer" className="h-100 d-flex flex-column align-items-center justify-content-center">
                        <div id="itemImgContainer" className="d-flex justify-content-center w-100">
                            <img
                                src={imgPath + itemList[currentIndex].imagen}
                                alt={`Imagen ${itemList[currentIndex].id}`}
                                className={`${isAnimating ? "move-left-scale-animation" : ""} ${(isItemIncluded || indexChanged) ? "appear-animation" : ""} `}
                                onAnimationEnd={() => {
                                    setIsAnimating(false); // Indica que la animación del objeto ha terminado
                                }}
                            />
                        </div>
                        {itemList.length === 8 && (
                            <div className=" position-absolute z-1 bg-white rounded p-3">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h2 className="text-center">¡Fin del juego! Has conseguido {suma} puntos de supervivencia</h2>
                                    <button className="btn btn-dark" onClick={restartGame}>Reiniciar</button>
                                </div>
                            </div>
                        )}
                        <div id="bagButtonContainer" className="d-flex justify-content-center align-items-center">
                            <button id="leftButtonBag" className="mb-1 bg-transparent border-0 btn-hover-zoom" onClick={prevImage}><img src={leftButton} className="w-100 h-100"></img></button>
                            <button id="addButtonBag" className="bg-transparent border-0 btn-hover-zoom" onClick={includeItem}><img src={addButton} className="w-100 h-100"></img></button>
                            <button id="rigtButtonBag" className="mb-1 bg-transparent border-0 btn-hover-zoom" onClick={nextImage}><img src={rightButton} className="w-100 h-100"></img></button>
                        </div>
                    </div>
                    <div id="itemInfoContainer" className='d-flex flex-column justify-content-center'>
                        <span id="itemDisplayed" ref={ref} style={{fontSize , height: '20%', width:'100%', letterSpacing: '1px', lineHeight: '1.2'}} className="text-white text-center">
                            {itemList[currentIndex].nombre}
                        </span>
                        <span id='pros' ref={ref} style={{fontSize , height: '40%', width:'100%' , letterSpacing: '1px', lineHeight: '1.2'}} className="text-white">
                            Ventajas: {itemList[currentIndex].ventajas}
                        </span><br/>
                        <span id='cons' ref={ref} style={{fontSize , height: '40%', width:'100%', letterSpacing: '1px', lineHeight: '1.2'}} className="text-white">
                            Desventajas: {itemList[currentIndex].desventajas}
                        </span>
                         {/*PARA DEBUGEAR EL FITTEXT AÑADIR border: "1px solid red" AL STYLE*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DesertBagGame;
