import React from "react";
import './Desert.css';
import atajos from '../../public/Desert/DesertImages/atajosdesert.png'

function ShortcutsSection({ showShortcuts }) {
    return (
        <div id="shortcutsContainer" className="position-absolute z-1 bg-white border border-black rounded p-3 mb-5 appear-animation w-75 d-flex flex-column justify-content-center align-items-center top-50 start-50 translate-middle ">
            <h1 style={{ fontSize: 'calc(12px + (60 - 12) * ((100vmin - 350px) / (1080 - 350)))'}}>Atajos de teclado</h1>
            <img src={atajos} alt="Atajos: con el 0 puedes reiniciar el juego, con el 4 puedes mostrar el objeto anterior, con el 5 puedes incluir el objeto en la mochila, con el 6 puedes mostrar el siguiente objeto y con el 9 puedes activar el menu de ayuda SOS y "></img>
            <button id="bagCloseHelp" className="btn btn-dark h-25 mt-1" style={{ maxHeight: '50px' }} onClick={showShortcuts}>Volver</button>
        </div>
    );
}

export default ShortcutsSection;