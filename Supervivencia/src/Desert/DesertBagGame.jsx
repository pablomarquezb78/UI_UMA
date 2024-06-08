import React, { useState, useEffect } from "react";
import Bag from '/Desert/DesertImages/Bag.png';
import './Desert.css';
import initialItemList from '/public/Desert/itemsBag.json';

import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SosIcon from '@mui/icons-material/Sos';
import AddIcon from '@mui/icons-material/Add';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import DoneIcon from '@mui/icons-material/Done';

import HelpSection from "./HelpSection";
import ItemInfoContainer from "./ItemInfoContainer";

import ShortcutsSection from '../Components/ShortcutsSection.jsx';

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

    const AnimatedIconButtonDone = styled(IconButton)(() => ({
        color: 'black',
        '&:hover': {
            color:'white',
        },
        '.MuiSvgIcon-root': {
            width: 'calc(14px + (50 - 14) * ((100vmin - 350px) / (1080 - 350)))',
            height: 'auto',
        }
    }));
    
    const imgPath = "/Desert/DesertImages/";
    const [suma, setSuma] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isItemIncluded, setIsItemIncluded] = useState(false);
    const [indexChanged, setIndexChanged] = useState(false);
    const [helpPressed, setHelPressed] = useState(false);
    const [shortcutsPressed, setShortcutsPressed] = useState(false);
    const [endGamePressed, setEndGamePressed] = useState(false);
    const [itemList, setItemList] = useState([...initialItemList]);
    const [cooldown, setCooldown] = useState(false);
    const [announcement, setAnnouncement] = useState('');

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
        const newIndex = (currentIndex + 1) % itemList.length;
        setCurrentIndex(newIndex);
        setAnnouncement(`Ahora se muestra el objeto ${itemList[newIndex].nombre}`);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + itemList.length) % itemList.length;
        setCurrentIndex(newIndex);
        setAnnouncement(`Ahora se muestra el objeto ${itemList[newIndex].nombre}`);
    };

    const includeItem = () => {
        if (itemList.length === 8) {
            return;
        }
        setSuma(suma + itemList[currentIndex].puntuacion);
        setIsAnimating(true);
        const includedItem = itemList[currentIndex].nombre;
        setAnnouncement(`Has añadido ${includedItem} a la mochila`);

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
        setEndGamePressed(false);
        setAnnouncement('El juego ha sido reiniciado');
    };

    const showHelp = () => {
        setHelPressed(prevState => !prevState);
    }

    const showShortcuts = () => {
        setShortcutsPressed(prevState => !prevState);
    }

    const endGame = () => {
        setEndGamePressed(true);
    }

    const handleButtonClick = (callback) => {
        if (cooldown) return;
        setCooldown(true);
        callback();
        setTimeout(() => setCooldown(false), 700);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '0') {
                restartGame();
            } else if (event.key === '9') {
                showHelp();
            } if (event.key === '1' && !cooldown) {
                handleButtonClick(prevImage);
            } else if (event.key === '2' && !cooldown) {
                handleButtonClick(includeItem);
            } else if (event.key === '3' && !cooldown) {
                handleButtonClick(nextImage);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [cooldown]);
 
    return (
        <section id="desertGameCompleteSection" className="position-relative vw-100 vh-100">
            <div id="completeGameSectionHelp" className="d-flex flex-column position-absolute start-50 translate-middle-x">
                <div id="resultDisplay" className="d-flex justify-content-around mt-2">
                    <h1 id="bagGameTitle" className="text-center text-white d-flex align-items-center letter-spacing-1 line-height-1-2">¡Prepara la mochila para sobrevivir!</h1>
                    <AnimatedIconButton disableRipple={true} title="Reiniciar juego" className={`${(helpPressed || itemList.length === 8 || shortcutsPressed || endGamePressed) ? "esconderBoton" : ""}`} onClick={restartGame}>
                        <RestartAltIcon />
                    </AnimatedIconButton>
                    <AnimatedIconButton disableRipple={true} title="Ayuda del juego" className={`${(helpPressed || itemList.length === 8 || shortcutsPressed || endGamePressed) ? "esconderBoton" : ""}`} onClick={showHelp}>
                        <SosIcon />
                    </AnimatedIconButton>
                    <AnimatedIconButton disableRipple={true} title="Atajos de teclado" className={`${(helpPressed || itemList.length === 8 || shortcutsPressed || endGamePressed) ? "esconderBoton" : ""}`} onClick={showShortcuts}>
                        <KeyboardIcon />
                    </AnimatedIconButton>
                </div>
                <ItemInfoContainer itemList={itemList} currentIndex={currentIndex} Bottom={false} />
                {(helpPressed) && (
                    <HelpSection showHelp={showHelp} />
                )}
                {(shortcutsPressed) && (
                    <ShortcutsSection showShortcuts={showShortcuts} imagen={"../../public/Desert/DesertImages/atajosdesert.png"} altText={"Atajos: con el 0 puedes reiniciar el juego, con el 4 puedes mostrar el objeto anterior, con el 5 puedes incluir el objeto en la mochila, con el 6 puedes mostrar el siguiente objeto y con el 9 puedes activar el menu de ayuda SOS"} propButton={"btn btn-dark h-25 mt-4"}/>
                )}
                {(itemList.length === 8 || endGamePressed) && (
                    <div className="position-absolute z-1 bg-white rounded p-3 mb-5 appear-animation w-50 h-50 d-flex flex-column justify-content-center align-items-center top-50 fw-bold
                            start-50 translate-middle" style={{ maxHeight: '200px' }}>
                        <h1 id="bagPuntuation" className="text-center h-50 letter-spacing-1 line-height-1-2">¡Fin del juego!<br /><br /> Has conseguido {suma} puntos de supervivencia</h1>
                        <button id="bagRestartPuntuation" className="btn btn-dark h-50 mt-1" onClick={restartGame}><span className="my-auto">Reiniciar</span></button>
                    </div>
                )}
                <div id="bagGameDisplay" className="d-flex justify-content-center align-items-center">
                    <div id="bagPlace" className={`d-flex flex-grow-0 h-100 flex-column justify-content-center`}>
                        {(itemList.length<=15 && !endGamePressed && itemList.length>8) && (                                                                                                                            
                            <AnimatedIconButtonDone title="Boton terminar" onClick={endGame} disableRipple={true} style={{fontSize:'calc(14px + (30 - 14) * ((100vmin - 350px) / (1080 - 350)))'}}><DoneIcon />Terminar</AnimatedIconButtonDone>
                        )}
                        <div id="BagContainer" className={`d-flex justify-content-center flex-grow-0 w-100 ${isItemIncluded ? "item-included" : ""}`}>
                            <img src={Bag} alt="Imagen de mochila de supervivencia" className="img-fluid"></img>
                        </div>
                        <div id="CapacityContainer" className={`${isItemIncluded ? "item-included" : ""}`}>
                            <span style={{fontSize:'calc(14px + (30 - 14) * ((100vmin - 350px) / (1080 - 350)))'}} aria-label={`La capacidad actual de la mochila es ${16 - itemList.length} de 8`} className="d-block text-center text-white letter-spacing-1 line-height-1-2">Capacidad: {16 - itemList.length}/8</span>
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
                            <AnimatedIconButton title="Objeto anterior"
                                onClick={() => handleButtonClick(prevImage)} disabled={cooldown}><NavigateBeforeIcon /></AnimatedIconButton>
                            <AnimatedIconButton title="Añadir objeto a la mochila"
                                onClick={() => handleButtonClick(includeItem)} disabled={cooldown}><AddIcon /></AnimatedIconButton>
                            <AnimatedIconButton title="Objeto siguiente"
                                onClick={() => handleButtonClick(nextImage)} disabled={cooldown}><NavigateNextIcon /></AnimatedIconButton>
                        </div>
                    </div>
                    <ItemInfoContainer itemList={itemList} currentIndex={currentIndex} Bottom={true} />
                </div> 
            </div>
            {/* Span for screen reader announcements */}
            <span aria-live="assertive" aria-atomic="true" className="visually-hidden">
                {announcement}
            </span>
        </section>
    );
}

export default DesertBagGame;
