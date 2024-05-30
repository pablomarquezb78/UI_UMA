import React, { useRef, useState, useEffect } from 'react';

import './AudioGameContent.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

function GameTutorial({backFunction, passFunction}) {

    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === '9') {
            passFunction();
          } else if (e.key === '8') {
            backFunction();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        // Limpieza del event listener cuando el componente se desmonte
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return(
        <div id='gameZoneCenter'>
            <div className='container-fluid h-75 w-75' id='gameBox'>
                <div className='topElement row justify-content-center align-items-center h-25' id='textCenter'>
                    <h1 tabIndex='0'>Tutorial</h1>
                </div>
                <div className='row justify-content-center align-items-center h-50' id='textCenterTutorial'>
                    <div className='col-sm-10'>
                        <p tabIndex='0' >
                            Se trata de un minijuego de sonido, se seleccionara un audio
                            y se mostraran cuatro opciones de animales a los que pueden
                            corresponder el audio, tendras que identificar que animal de
                            los propuestos hace ese sonido. <br/>
                            Tienes la opcion de saltar el audio al siguiente. <br/>
                            Mientras aciertes seguiras jugando, el juego termina cuando
                            falles.
                        </p>
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
            
        </div>
    )
}

export default GameTutorial