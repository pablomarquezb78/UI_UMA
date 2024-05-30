import React, { useRef, useState, useEffect } from 'react';

import './AudioGameContent.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

function GameLost({backFunction}) {

    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === '8') {
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
                        <h1 tabIndex='0'>Oh no...</h1>
                </div>
                <div className='midElement row justify-content-center align-items-center h-50' id='textCenter'>
                        <h2 tabIndex='0'>Has muerto en la noche</h2>
                </div>
                <div className='bottomElement row justify-content-center align-items-center h-25'>
                    <div className='col-6'>
                        <button tabIndex='0' onClick={backFunction}>
                            <div className='bottomIconSVG'>
                                <NavigateBeforeIcon className='iconSVG' />
                                <br/>
                                <p>Volver a jugar</p>
                            </div>
                        </button>
                    </div>
                    <div className='col-6'></div>
                </div>  
            </div>
        </div>
    )
}

export default GameLost