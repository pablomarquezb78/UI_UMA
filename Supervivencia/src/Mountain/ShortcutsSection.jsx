import React from "react";
import './CSS/MemoryGame.css';

function ShortcutsSection({ showShortcuts }) {
    return (
        <div id="shortcutsContainer" className="position-absolute z-1 bg-white border border-black rounded p-3 mb-5 appear-animation d-flex flex-column justify-content-center align-items-center top-50 start-50 translate-middle"  style={{ maxWidth: '800px' }}>
            <h1 className="mb-3" style={{ fontSize: 'calc(12px + (60 - 12) * ((100vmin - 350px) / (1080 - 350)))'}}>Atajos de teclado</h1>
            <img src="/Mountain/atajosmont.png" alt="Atajos: Con los números 1-8 del teclado se eligen las cartas y con R puedes girarlas en el modo fácil."></img>
            <button id="bagCloseHelp" className="btn btn-dark h-25 mt-4" style={{ maxHeight: '50px' }} onClick={showShortcuts}>Volver al juego</button>
        </div>
    );
}

export default ShortcutsSection;