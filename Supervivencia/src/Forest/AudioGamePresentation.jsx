import React, { useRef, useState, useEffect } from 'react';

import './AudioGameContent.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

function GamePresentation({passFunction}) {

    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === '9') {
            passFunction();
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
                    <h1 tabIndex='0'>La noche oscura</h1>
                </div>
                <div className='row justify-content-center align-items-center h-50' id='textCenter'>
                    <div className='col-sm-10'>
                        <p tabIndex='0'>
                            Cae la noche y dejamos de ver con claridad, por tanto, la vista 
                            no nos será útil, sin embargo, si usamos nuestro oido y prestamos atención,
                            podremos distinguir los animales en nuestro entorno. <br/>
                            Tratamos de sobrevivir así que mientras aciertes seguiremos vivos.
                        </p>
                    </div>
                </div>
                <div className='bottomElement row justify-content-evenly align-items-center h-25'>
                    <div className='col-6'></div>
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

export default GamePresentation