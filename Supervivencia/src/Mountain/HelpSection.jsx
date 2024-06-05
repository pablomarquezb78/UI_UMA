import React from "react";
import './CSS/MemoryGame.css';
import useFitText from "use-fit-text";

function HelpSection({ cancelGame }) {
    const { fontSize: fontSize1, ref: ref1 } = useFitText({
        maxFontSize: 150,
        minFontSize: 5,
    });

    return (
        <div className="position-absolute z-1 bg-white border border-black rounded p-3 mb-5 appear-animation w-75 h-75 d-flex flex-column justify-content-center align-items-center top-50 start-50 translate-middle " style={{ maxWidth: '600px' }}>
            <span id="bagTutoralTitle" tabIndex="0" className="text-center fw-bold" ref={ref1} style={{ fontSize: fontSize1, height: '20%', width: '100%', letterSpacing: '1px', lineHeight: '1.2' }}>
                ¡Bienvenido al juego de Memoria!
            </span>
            <span id="bagTutorialText" tabIndex="0" className="text-center " ref={ref1} style={{ fontSize: fontSize1, height: '60%', width: '100%', letterSpacing: '1px', lineHeight: '1.2' }}>
            En este juego de memoria, empareja imágenes de seres vivos con sus huellas. El color del borde de cada huella coincide con el color del borde del animal asociado. Si eliges el modo fácil podrás voltear las cartas sin tiempo límite con el botón <span style={{ fontWeight: 'bold' }}>Volver a Intentar</span>.
            </span>
            <button id="bagCloseHelp" className="btn btn-dark h-25 mt-1" style={{ maxHeight: '50px' }} onClick={cancelGame}>Volver al juego</button>
        </div>
    );
}

export default HelpSection;