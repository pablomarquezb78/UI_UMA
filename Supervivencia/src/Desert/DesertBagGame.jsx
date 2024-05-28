import React, { useState, useEffect } from "react";
import Bag from './DesertImages/Bag.png';
import './Desert.css';
import initialItemList from './itemsBag.json';

import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SosIcon from '@mui/icons-material/Sos';
import AddIcon from '@mui/icons-material/Add';

import HelpSection from "./HelpSection";
import ItemInfoContainer from "./ItemInfoContainer";

function DesertBagGame() {

    const AnimatedIconButton = styled(IconButton)(({ disabled }) => ({
        color: disabled ? 'gray' : 'black',
        pointerEvents: disabled ? 'none' : 'auto',
        '&:hover': {
            color: disabled ? 'gray' : 'white',
        },
        '.MuiSvgIcon-root': {
            width: 'calc(30px + (80 - 30) * ((100vmin - 350px) / (1080 - 350)))',
            height: 'auto',
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

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '1') {
                restartGame();
            } else if (event.key === '2') {
                showHelp();
            }if (event.key === '3' && !cooldown) {
                handleButtonClick(prevImage);
            } else if (event.key === '4' && !cooldown) {
                handleButtonClick(includeItem);
            } else if (event.key === '5' && !cooldown) {
                handleButtonClick(nextImage);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [cooldown]);

    /*esconderBoton*/

    return (
        <section id="desertGameCompleteSection" className="position-relative vw-100 vh-100">
            <div id="completeGameSectionHelp" className="d-flex flex-column position-absolute start-50 translate-middle-x">
                <div id="resultDisplay" className="d-flex justify-content-around mt-2">
                    <h2 id="bagGameTitle" tabIndex="0" className="text-center text-white d-flex align-items-center letter-spacing-1 line-height-1-2">¡Prepara la mochila para sobrevivir!</h2>
                    <AnimatedIconButton title="Reiniciar juego" className={`${(helpPressed || itemList.length === 8) ? "esconderBoton" : ""}`}  role="img" onClick={restartGame}>
                        <RestartAltIcon />
                    </AnimatedIconButton>
                    <AnimatedIconButton title="Ayuda del juego" className={`${(helpPressed || itemList.length === 8) ? "esconderBoton" : ""}`} role="img" onClick={showHelp}>
                        <SosIcon />
                    </AnimatedIconButton>
                </div>
                <ItemInfoContainer  itemList={itemList} currentIndex={currentIndex} Bottom={false}/>
                {(helpPressed && itemList.length !== 8) && (
                        <HelpSection  showHelp={showHelp} />
                )}
                {itemList.length === 8 && (
                            <div className="position-absolute z-1 bg-white rounded p-3 mb-5 appear-animation w-50 h-50 d-flex flex-column justify-content-center align-items-center top-50 
                            start-50 translate-middle" style={{ maxHeight: '200px' }} tabIndex="0">
                                <h2 id="bagPuntuation" className="text-center h-50 letter-spacing-1 line-height-1-2">¡Fin del juego!<br/><br/> Has conseguido {suma} puntos de supervivencia</h2>
                                <button id="bagRestartPuntuation" className="btn btn-dark h-50 mt-1" style={{ maxHeight: '50px' }} onClick={restartGame}><span className="my-auto">Reiniciar</span></button>
                            </div>
                )}
                <div id="bagGameDisplay" className="d-flex justify-content-center align-items-center">
                    <div id="bagPlace" className={`d-flex flex-grow-0 h-100 flex-column justify-content-center  ${isItemIncluded ? "item-included" : ""}`}>
                        <div id="BagContainer" className={`d-flex justify-content-center flex-grow-0 w-100`}>
                            <img tabIndex="0" src={Bag} alt="Imagen de mochila de supervivencia" className="img-fluid"></img>
                        </div>
                        <div id="CapacityContainer">
                            <h4 id="bagCapacityDisplay" tabIndex="0" aria-label={`La capacidad actual de la mochila es ${16 - itemList.length} de 8`} className="d-block text-center text-white letter-spacing-1 line-height-1-2">Capacidad: {16 - itemList.length}/8</h4>
                        </div>
                    </div>
                    <div id="itemsContainer" className="h-100 d-flex flex-column align-items-center justify-content-center">
                        <div id="itemImgContainer" className="d-flex justify-content-center w-100">
                            <img
                                src={imgPath + itemList[currentIndex].imagen}
                                alt={`Imagen de ${itemList[currentIndex].nombre}`}
                                className={`${isAnimating ? "move-left-scale-animation" : ""} ${(isItemIncluded || indexChanged) ? "appear-animation" : ""} `}
                                onAnimationEnd={() => {
                                    setIsAnimating(false); // Indica que la animación del objeto ha terminado
                                }}
                            />
                        </div>
                        <div id="bagButtonContainer" className="d-flex justify-content-center align-items-center">
                            <AnimatedIconButton title="Objeto anterior" tabIndex="0" role="img"
                            onClick={() => handleButtonClick(prevImage)} disabled={cooldown}><NavigateBeforeIcon /></AnimatedIconButton>
                            <AnimatedIconButton  title="Añadir objeto a la mochila" tabIndex="0" role="img"
                            onClick={() => handleButtonClick(includeItem)} disabled={cooldown}><AddIcon /></AnimatedIconButton>
                            <AnimatedIconButton title="Objeto siguiente" tabIndex="0" role="img"
                             onClick={() => handleButtonClick(nextImage)} disabled={cooldown}><NavigateNextIcon /></AnimatedIconButton>
                        </div>
                    </div>
                   <ItemInfoContainer itemList={itemList} currentIndex={currentIndex} Bottom={true}/>
                </div>
            </div>
        </section>
    );
}

export default DesertBagGame;