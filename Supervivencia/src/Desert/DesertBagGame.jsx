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
        <section id="completeSection" className="position-relative vw-100 vh-100">
            <div id="resultDisplay" className="">
                <h1 className="text-center text-white">¡Prepara la mochila para sobrevivir!</h1>
                <h2 className={`text-center text-white ${itemList.length === 7 ? "" : "d-none"}`}>¡Fin del juego! Has conseguido {suma} puntos de supervivencia</h2>
            </div>
            <div id="bagGameDisplay" className="position-absolute d-flex justify-content-center w-100">
                <div id="BagContainer" className={`d-flex flex-grow-0 h-100 ${isItemIncluded ? "item-included" : ""}`}>
                    <img src={Bag} alt="Bag" className="img-fluid"></img>
                </div>
                <div id="itemsContainer" className="h-100 d-flex flex-column align-items-center justify-content-center">
                    <div id="imgContainer" className="d-flex justify-content-center flex-grow-0 w-100">
                         <img src={imgPath + itemList[currentIndex].imagen} alt={`Imagen ${itemList[currentIndex].id}`}
                          className={`img-fluid ${isAnimating ? "move-left-scale-animation" : ""}`}
                          onAnimationEnd={() => {
                              setIsAnimating(false); // Indica que la animación del objeto ha terminado
                          }} />
                    </div>
                    <div id="buttonContainer">
                        <button className="btn btn-primary" onClick={prevImage}>&lt;-</button>
                        <button className="btn btn-primary" onClick={includeItem}>Incluir</button>
                        <button className="btn btn-primary" onClick={nextImage}>-&gt;</button>
                    </div>
                </div>
                <div id="itemInfoContainer">
                    <h3 id="itemDisplayed" className="text-white text-center">{itemList[currentIndex].nombre}</h3><br/>
                    <span className="fw-bold text-white">Ventajas: {itemList[currentIndex].ventajas}</span> <br/><br/>
                    <span className="fw-bold text-white">Desventajas: {itemList[currentIndex].desventajas}</span>
                </div>
            </div>
        </section>
    );
}

export default DesertBagGame;
