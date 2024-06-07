import React from "react";
import './Coast.css';
import atajos from '/public/Coast/CoastGame/atajosCosta.jpg'

function ShortcutsSection({ showShortcuts }) {
    return (
        <div id="shortcutsContainer" className="position-absolute z-2 bg-white border border-black rounded p-3 mb-5 appear-animation d-flex flex-column justify-content-center align-items-center top-50 start-50 translate-middle"  style={{ maxWidth: '800px' }}>
            <h1 className="mb-3" style={{ fontSize: 'calc(12px + (60 - 12) * ((100vmin - 350px) / (1080 - 350)))'}}>Atajos de teclado</h1>
            <img src={atajos} alt="Atajos: con el 0 puedes reiniciar el juego, con el 4 puedes mostrar el objeto anterior, con el 5 puedes incluir el objeto en la mochila, con el 6 puedes mostrar el siguiente objeto y con el 9 puedes activar el menu de ayuda SOS y "></img>
            <button className="custom-buttonHOL mt-4" style={{ maxHeight: '50px' }} onClick={showShortcuts}>Cancelar</button>
        </div>
    );
}

export default ShortcutsSection;