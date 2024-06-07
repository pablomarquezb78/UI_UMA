import React from 'react';
import './Coast.css';
import useFitText from "use-fit-text";

function HelpHOL({helpHandler}){
    const { fontSize: fontSize1, ref: ref1 } = useFitText({
        maxFontSize: 180,
        minFontSize: 5,
    });

    return(
        <div className="position-absolute z-2 bg-white rounded p-1 border border-black appear-animation w-75 d-flex flex-column justify-content-center align-items-center top-50 start-50 translate-middle" style={{maxWidth: '600px', height: '90%'}}>
            <span tabIndex='0' ref={ref1} style={{ fontSize: fontSize1, height: '10%', width: '100%', letterSpacing: '1px', lineHeight: '1.2', fontWeight: 'bold'}}>
                Higher or Lower   
            </span>
            <span tabIndex='0' ref={ref1} style={{ fontSize: fontSize1, height: '60%', width: '100%', letterSpacing: '1px', lineHeight: '1.2'}}>
                El juego está basado en el típico juego de Higher Or Lower pero con una pequeña modificación.<br /><br />
                Tienes que seleccionar si el ser vivo de la imagen de la derecha (o abajo) mata más o menos personas al año que el ser vivo de la izquierda.
            </span>
            <button tabIndex='0' className='custom-button m-2' onClick={helpHandler}>Cancelar</button>         
        </div>
        // border: "1px solid red"
    );
}

export default HelpHOL;