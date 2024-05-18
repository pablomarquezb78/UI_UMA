import React, { useState, useEffect, useCallback } from "react";
import Bag from './DesertImages/Bag.png';
import './Desert.css';
<<<<<<< HEAD
import initialItemList from './itemsBag.json';
import useFitText from "use-fit-text";
import rightButton from './DesertImages/rightButton.png';
import leftButton from './DesertImages/leftButton.png';
import addButton from './DesertImages/add.png';

function DesertBagGame() {
    const imgPath = "src/Desert/DesertImages/";
    const [suma, setSuma] = useState(0);
=======
import itemList from './itemsBag.json';
import useFitText from "use-fit-text";

function DesertBagGame() {
    const imgPath = "src/Desert/DesertImages/";
    //Control de puntos de supervivencia conseguidos
    const [suma,setSuma] = useState(0);
    //Indice de la lista actual
>>>>>>> parent of f63b3ba (TINDER = PASIÓN)
    const [currentIndex, setCurrentIndex] = useState(0);
    //Animacion de objeto a mochila
    const [isAnimating, setIsAnimating] = useState(false);
    //animacion mochila
    const [isItemIncluded, setIsItemIncluded] = useState(false);
<<<<<<< HEAD
    const [indexChanged, setIndexChanged] = useState(false);
    const [itemList, setItemList] = useState([...initialItemList]);

    const { fontSize, ref } = useFitText({
        maxFontSize: 200,
        minFontSize: 10,
    });

    useEffect(() => {
=======
    //control cambio indice
    const [indexChanged,setIndexChanged] = useState(false);

    const { fontSize, ref } = useFitText();

    useEffect(() =>{
>>>>>>> parent of f63b3ba (TINDER = PASIÓN)
        setIndexChanged(true);
        setTimeout(() => {
            setIndexChanged(false);
        }, 500);
<<<<<<< HEAD
    }, [currentIndex]);
=======
    },[currentIndex])
>>>>>>> parent of f63b3ba (TINDER = PASIÓN)

    useEffect(() => {
        if (!isAnimating && isItemIncluded) {
            setTimeout(() => {
                setIsItemIncluded(false);
            }, 500);
        }
    }, [isAnimating, isItemIncluded]);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % itemList.length); // Actualiza el índice actual
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + itemList.length) % itemList.length); // Actualiza el índice actual
    };

    const includeItem = () => {
        if (itemList.length === 8) {
<<<<<<< HEAD
=======
            //Control Fin del Juego
>>>>>>> parent of f63b3ba (TINDER = PASIÓN)
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
                <h2 className={`text-center text-white ${itemList.length === 8 ? "" : "d-none"}`}>¡Fin del juego! Has conseguido {suma} puntos de supervivencia</h2>
            </div>
            <div id="bagGameDisplay" className="position-absolute d-flex justify-content-center start-50 translate-middle-x align-items-center">
                <div className="d-flex flex-grow-0 h-100 flex-column justify-content-center">
                    <div id="CapacityContainer">
                        <h5 className="d-block text-center text-white f-size-4">{16-itemList.length}/8</h5>
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
                    <div id="buttonContainer" className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-primary h-50" onClick={prevImage}>&lt;</button>
                        <button className="btn btn-primary h-50" onClick={includeItem}>Incluir</button>
                        <button className="btn btn-primary h-50" onClick={nextImage}>&gt;</button>
                    </div>
                </div>
                <div id="itemInfoContainer" ref={ref} style={{ fontSize, height: 250, width: 250 }}>
                        <h3 id="itemDisplayed" className="text-white text-center">{itemList[currentIndex].nombre}</h3><br/>
                        <span className="text-white">Ventajas: {itemList[currentIndex].ventajas}</span> <br/><br/>
                        <span className="text-white">Desventajas: {itemList[currentIndex].desventajas}</span>
                </div>
            </div>
        </section>
    );
}

export default DesertBagGame;
