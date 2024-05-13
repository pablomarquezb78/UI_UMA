import React, { useState, useEffect } from "react";
import Bag from './DesertImages/Bag.png';
import './Desert.css';
import itemList from './itemsBag.json';

function DesertBagGame() {
    const imgPath = "src/Desert/DesertImages/";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isItemIncluded, setIsItemIncluded] = useState(false);

    useEffect(() => {
        //Si termina la animacion y se ha introducido item animamos la mochila
        if (!isAnimating && isItemIncluded) {
            setTimeout(() => {
                //Acabamos la animacion de la mochila
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
            //Control Fin del Juego
            return;
        }

        setIsAnimating(true);

        setTimeout(() => {
            //Termina la animacion del item
            setIsAnimating(false);
            //Iniciamos animacion de la mochila
            setIsItemIncluded(true);

            //Elimino el elemento y avanzo el índice
            itemList.splice(currentIndex, 1);
            setCurrentIndex((currentIndex + 1) % itemList.length);
        }, 500);
    };

    return (
        <section className="bg-white vw-100 vh-100">
            <h1>¡Prepara la mochila para sobrevivir!</h1>
            <h3>{itemList[currentIndex].nombre}</h3>
            <p>{itemList[currentIndex].descripcion}</p>
            <div id="bagGameDisplay">
                <div id="bagContainer" className={isItemIncluded ? "item-included" : ""}>
                    <img src={Bag} alt="Bag" className="img-fluid"></img>
                </div>
                <div id="itemsContainer">
                    <div id="imgContainer">
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
            </div>
        </section>
    );
}

export default DesertBagGame;
