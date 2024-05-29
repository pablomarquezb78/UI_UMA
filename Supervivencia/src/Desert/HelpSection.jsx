import React from "react";
import './Desert.css';
import useFitText from "use-fit-text";

function HelpSection({ showHelp }) {
    const { fontSize: fontSize1, ref: ref1 } = useFitText({
        maxFontSize: 150,
        minFontSize: 5,
    });

    return (
        <div className="position-absolute z-1 bg-white border border-black rounded p-3 mb-5 appear-animation w-75 h-75 d-flex flex-column justify-content-center align-items-center top-50 start-50 translate-middle item-included " style={{ maxWidth: '600px' }}>
            <span id="bagTutoralTitle" tabIndex="0" className="text-center" ref={ref1} style={{ fontSize: fontSize1, height: '20%', width: '100%', letterSpacing: '1px', lineHeight: '1.2'}}>
                ¡Bienvenido al juego de la mochila!
            </span>
            <span id="bagTutorialText" tabIndex="0" className="text-center" ref={ref1} style={{ fontSize: fontSize1, height: '60%', width: '100%', letterSpacing: '1px', lineHeight: '1.2' }}>
                Este juego está basado en las típicas preguntas de ¿Qué te llevarías a una isla desierta? Pero con una pequeña modificación, de 14 objetos
                podrás elegir solo 8 de ellos para llevártelos al desierto. <br /><br />Cada uno tiene unos puntos de supervivencia asociados y unas ventajas y desventajas para que
                puedas analizar su utilidad. La máxima puntuación es de 100 ¡A por ello!
            </span>
            <button id="bagCloseHelp" className="btn btn-dark h-25 mt-1" style={{ maxHeight: '50px' }} onClick={showHelp}>Volver</button>
        </div>
    );
}

export default HelpSection;