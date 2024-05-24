import React, { useState, useEffect } from "react";
import Bag from './DesertImages/Bag.png';
import './Desert.css';
import initialItemList from './itemsBag.json';
import useFitText from "use-fit-text";

import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SosIcon from '@mui/icons-material/Sos';
import AddIcon from '@mui/icons-material/Add';

function HelpSection({ showHelp }) {
    const { fontSize: fontSize1, ref: ref1 } = useFitText({
        maxFontSize: 150,
        minFontSize: 10,
    });

    return (
        <div className="position-absolute z-1 bg-white rounded p-3 mb-5 puntuacionHOL w-75 h-75 d-flex flex-column justify-content-center align-items-center top-50 start-50 translate-middle item-included " style={{ maxWidth: '600px' }}>
            <span id="bagTutoralTitle" className="text-center" ref={ref1} style={{ fontSize: fontSize1, height: '20%', width: '100%', letterSpacing: '1px', lineHeight: '1.2' }}>
                ¡Bienvenido al juego de la mochila!
            </span>
            <span id="bagTutorialText" className="text-center" ref={ref1} style={{ fontSize: fontSize1, height: '60%', width: '100%', letterSpacing: '1px', lineHeight: '1.2' }}>
                Este juego está basado en las típicas preguntas de ¿Qué te llevarías a una isla desierta? Pero con una pequeña modificación, de 14 objetos
                podrás elegir solo 8 de ellos para llevártelos al desierto. <br /><br />Cada uno tiene unos puntos de supervivencia asociados y unas ventajas y desventajas para que
                puedas analizar su utilidad. La máxima puntuación es de 100 ¡A por ello!
            </span>
            <button className="btn btn-dark mt-3" onClick={showHelp}>Volver</button>
        </div>
    );
}

function ItemInfoContainerBottom({itemList,currentIndex,}){
    const { fontSize, ref } = useFitText({
        maxFontSize: 200,
        minFontSize: 10,
    });

    const heightTitle = '20%';
    const widthTitle = '100%';

    const heightText =  '40%';
    const widthText = '100%';

    return(
        <>
            <div id="itemInfoBottom">
                <h1 id="itemDisplayedBottom" ref={ref} style={{ fontSize, height: heightTitle , width: widthTitle, letterSpacing: '1px', lineHeight: '1.2' }} className="text-white text-center">
                    {itemList[currentIndex].nombre}
                </h1>
                <span id='pros' ref={ref} style={{ fontSize, height: heightText, width: widthText, letterSpacing: '1px', lineHeight: '1.2'}} className="text-white">
                    Ventajas: {itemList[currentIndex].ventajas}
                </span><br/>
                <span id='cons' ref={ref} style={{ fontSize, height: heightText, width: widthText, letterSpacing: '1px', lineHeight: '1.2' }} className="text-white">
                    Desventajas: {itemList[currentIndex].desventajas}
                </span>
                {/*PARA DEBUGEAR EL FITTEXT AÑADIR border: "1px solid red" AL STYLE*/}
            </div>
        </>
    );
}

function ItemInfoContainerTop({itemList,currentIndex}){
    const { fontSize, ref } = useFitText({
        maxFontSize: 100,
        minFontSize: 10,
    });

    const heightTitle = '5%';
    const widthTitle = '100%';

    const heightText = '100%';
    const widthText = '45%';

    return(
        <>
            <h1 id="itemDisplayedTop" ref={ref} style={{ fontSize, height: heightTitle , width: widthTitle, letterSpacing: '1px', lineHeight: '1.2' }} className="text-white text-center">
                {itemList[currentIndex].nombre}
            </h1>
            <div id="itemInfoTop"> 
                <span id='pros' ref={ref} style={{ fontSize, height: heightText, width: widthText, letterSpacing: '1px', lineHeight: '1.2'}} className="text-white">
                    Ventajas: {itemList[currentIndex].ventajas}
                </span>
                <span id='cons' ref={ref} style={{ fontSize, height: heightText, width: widthText, letterSpacing: '1px', lineHeight: '1.2'}} className="text-white">
                    Desventajas: {itemList[currentIndex].desventajas}
                </span>
                {/*PARA DEBUGEAR EL FITTEXT AÑADIR border: "1px solid red" AL STYLE*/}
            </div>
        </>
    );
}

function DesertBagGame() {

    const AnimatedIconButton = styled(IconButton)(({ disabled }) => ({
        color: disabled ? 'gray' : 'black',
        pointerEvents: disabled ? 'none' : 'auto',
        '&:hover': {
            color: disabled ? 'gray' : 'white',
        },
        '.MuiSvgIcon-root': {
            width: 'calc(30px + (80 - 30) * ((100vmin - 350px) / (1080 - 350)))',
            height: 'calc(30px + (80 - 30) * ((100vmin - 350px) / (1080 - 350)))',
        }
    }));
    

    const imgPath = "src/Desert/DesertImages/";
    const [suma, setSuma] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isItemIncluded, setIsItemIncluded] = useState(false);
    const [indexChanged, setIndexChanged] = useState(false);
    const [helpPressed, setHelPressed] = useState(false);
    const [itemList, setItemList] = useState([...initialItemList]);
    const [cooldown, setCooldown] = useState(false);

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

            itemList.splice(currentIndex, 1);
            setCurrentIndex((currentIndex) % itemList.length);
        }, 500); 
    };

    const restartGame = () => {
        setSuma(0);
        setCurrentIndex(0);
        setItemList([...initialItemList]);
    };

    const showHelp = () => {
        setHelPressed(prevState => !prevState);
    }

    const handleButtonClick = (callback) => {
        if (cooldown) return;
        setCooldown(true);
        callback();
        setTimeout(() => setCooldown(false), 500);
    };

    return (
        <section id="desertGameCompleteSection" className="position-relative vw-100 vh-100">
            <div id="completeGameSectionHelp" className="d-flex flex-column position-absolute start-50 translate-middle-x">
                <div id="resultDisplay" className="d-flex justify-content-around mt-2">
                    <h2 id="bagGameTitle" className="text-center text-white d-flex align-items-center letter-spacing-1 line-height-1-2">¡Prepara la mochila para sobrevivir!</h2>
                    <AnimatedIconButton disableRipple={true} onClick={restartGame}><RestartAltIcon /></AnimatedIconButton>
                    <AnimatedIconButton disableRipple={true} onClick={showHelp}><SosIcon /></AnimatedIconButton>
                </div>
                <ItemInfoContainerTop  itemList={itemList} currentIndex={currentIndex}/>
                {(helpPressed && itemList.length !== 8) && (
                            <HelpSection showHelp={showHelp} />
                )}
                {itemList.length === 8 && (
                            <div className="position-absolute z-1 bg-white rounded p-3 mb-5 item-included
                             w-50 h-50 d-flex flex-column justify-content-center align-items-center top-50 start-50 translate-middle" style={{ maxHeight: '200px' }}>
                                <h2 id="bagPuntuation" className="text-center h-75 letter-spacing-1 line-height-1-2">¡Fin del juego!<br/><br/> Has conseguido {suma} puntos de supervivencia</h2>
                                <button id="bagRestartPuntuation" className="btn btn-dark mt-3 h-25" onClick={restartGame}>Reiniciar</button>
                            </div>
                )}
                <div id="bagGameDisplay" className="d-flex justify-content-center align-items-center">
                    <div id="bagPlace" className="d-flex flex-grow-0 h-100 flex-column justify-content-center">
                        <div id="CapacityContainer">
                            <h4 className="d-block text-center text-white f-size-4 letter-spacing-1 line-height-1-2">Capacidad: {16 - itemList.length}/8</h4>
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
                        <div id="bagButtonContainer" className="d-flex justify-content-center align-items-center">
                            <AnimatedIconButton onClick={() => handleButtonClick(prevImage)} disabled={cooldown}><NavigateBeforeIcon /></AnimatedIconButton>
                            <AnimatedIconButton onClick={() => handleButtonClick(includeItem)} disabled={cooldown}><AddIcon /></AnimatedIconButton>
                            <AnimatedIconButton onClick={() => handleButtonClick(nextImage)} disabled={cooldown}><NavigateNextIcon /></AnimatedIconButton>
                        </div>
                    </div>
                   <ItemInfoContainerBottom itemList={itemList} currentIndex={currentIndex}/>
                </div>
            </div>
        </section>
    );
}

export default DesertBagGame;