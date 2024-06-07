import React, { useRef, useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import ShortcutsSection from '../Components/ShortcutsSection';

import shortcuts from '/Forest/controlesForestAudioGame.png'

import './AudioGameContent.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import KeyboardIcon from '@mui/icons-material/Keyboard';

function GameTutorial({backFunction, passFunction}) {

    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === '9') {
            passFunction();
          } else if (e.key === '8') {
            backFunction();
          }
          else if (e.key === '0') {
            showShortcuts();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        // Limpieza del event listener cuando el componente se desmonte
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // const navigate = useNavigate();

    // function redirectToShortcuts()
    // {
    //     let path = '/';
    //     navigate(path);
    // }

    const [shortcutsPressed, setShortcutsPressed] = useState(false);
    const infoShortcuts = "Imagen de atajos de teclado. 1 para responder la opción 1. 2 para responder la opción 2." + 
    "3 para responder la opción 3. 4 para responder la opción 4. 5 para controlar la reproduccion de audio. 6 para saltar el audio actual" +
    "8 para volver al panel anterior. 9 para pasar al siguiente panel";

    const showShortcuts = () => {
        setShortcutsPressed(prevState => !prevState);
    }

    return(
        <div id='gameZoneCenter'>  
            {shortcutsPressed ? (
                <ShortcutsSection  imagen={shortcuts} altText={infoShortcuts} showShortcuts={showShortcuts} propButton={"btn btn-dark h-25 mt-3"} />
            ) : (
                <div className='container-fluid h-75 w-75' id='gameBox'>
                    <div className='topElement row justify-content-center align-items-center h-25' id='textCenter'>
                        <h1 tabIndex='0'>Tutorial</h1>
                    </div>
                    <div className='row justify-content-center align-items-center h-50' id='textCenterTutorial'>
                        <div className='row justify-content-center align-items-center h-75' id='textCenterTutorial'>
                            <div className='col-sm-10'>
                                <p tabIndex='0' >
                                    Se trata de un minijuego de sonido, se seleccionará un audio
                                    y se mostrarán cuatro opciones de animales a los que pueden
                                    corresponder el audio, tendrás que identificar que animal de
                                    los propuestos hace ese sonido. <br/>
                                    Tienes la opcion de saltar el audio y pasar al siguiente. <br/>
                                    Mientras aciertes seguirás jugando, el juego termina cuando
                                    falles.
                                </p>
                            </div>
                        </div>
                        <div className='bottomElement row justify-content-center align-items-center h-25'>
                            <div className='col-4'>
                                <button tabIndex='0' onClick={showShortcuts}>
                                    <div className='bottomIconSVG'>
                                        <KeyboardIcon className='iconSVG'/>
                                        <br/>
                                        <p>Atajos de teclado</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='bottomElement row justify-content-evenly align-items-center h-25'>
                        <div className='col-6'>
                            <button tabIndex='0' onClick={backFunction}>
                                <div className='bottomIconSVG'>
                                    <NavigateBeforeIcon className='iconSVG'/>
                                    <br/>
                                    <p>Volver</p>
                                </div>
                            </button>
                        </div>
                        {/*<div className='col-sm-6 col-lg-9'></div>*/}
                        <div className='col-6'>
                            <button tabIndex='0' onClick={passFunction}>
                                <div className='bottomIconSVG'>
                                    <NavigateNextIcon className='iconSVG' />
                                    <br/>
                                    <p>Siguiente</p>
                                </div>
                            </button>
                        </div>  
                    </div>
            </div>  
            )}        
        </div>
    )
}

export default GameTutorial