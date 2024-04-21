import react from 'react';

import '../CSS/GameContent.css';

function GameContent() {
    
    return(
        <div id='gameZoneCenter'>
            <div id='gameBox'>
                <div className='gridElement playElement' id='playerGrid'>
                    <button>Reproducir▶</button>
                </div>
                <div className='gridElement playElement' id='skipGrid'>
                    <button>Saltar</button>
                </div>
                <div className='gridElement responseElement'>
                    <button>Cabra🐐</button>
                </div>
                <div className='gridElement responseElement'>
                    <button>Cabra🐐</button>
                </div>
                <div className='gridElement responseElement'>
                    <button>Cabra🐐</button>
                </div>
                <div className='gridElement responseElement'>
                    <button>Cabra🐐</button>
                </div>
                <div className='gridElement scoreElement' id='scoreGrid'>
                    <p>Puntuacion: 5 (Este juego sigue en proceso de desarrollo)</p>
                </div>
            </div>
        </div>
    )
}

export default GameContent