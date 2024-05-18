import { useState, useRef } from "react";
import getRandom from './RandomFood';
import TinderCard from './TinderCard.jsx';
import help from './FotosAlimentos/ayuda.png';
import veneno from './FotosAlimentos/veneno.png'
import correcto from './FotosAlimentos/correcto.png'


function TinderDeck({ numberOfCard }) {
    const [showCard, setShowCard] = useState([1, 0]);
    const wiseChoice = useRef(0);
    const limit = 150;
    const isAnimated = useRef(false);
    const deltaPosition = useRef(0);
    const numberOfCardAux = useRef(numberOfCard);
    const [needHelp, setNeedHelp] = useState(false);

    const restartGame = () => {
        setShowCard([1, 0]);
        wiseChoice.current = 0;
        numberOfCardAux.current = numberOfCardAux.current.sort(() => Math.random() - 0.5);
    }

    const helpHandler = () => {
        setNeedHelp(true);
    }

    const load = (positive) => {
        let numberAux = numberOfCardAux.current[showCard[1]];
        
        if (positive) {
            if (getRandom.isDangerous(numberAux) === 'No mortal') {
                wiseChoice.current = (wiseChoice.current + 1);
            }
        } else {
            if (getRandom.isDangerous(numberAux) === 'Mortal') {
                wiseChoice.current = (wiseChoice.current + 1);
            }
        }
        
        setShowCard([showCard[0] + 1, showCard[0]]);
    }

    const endDrag = (actualCard, upEvent) => {
        upEvent.preventDefault();
        isAnimated.current = false;

        actualCard.style.transform = 'none';
        actualCard.style.cursor = 'grab';

        document.removeEventListener('mousemove', moveDrag);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchmove', moveDrag);
        document.removeEventListener('touchend', endDrag);

        if (Math.abs(deltaPosition.current) > limit) {
            const positive = deltaPosition.current >= 0;
            actualCard.classList.add(positive ? 'right' : 'left');

            if (!needHelp) {
                actualCard.addEventListener('transitionend', () => {
                    load(positive);
                });
            } else {
                actualCard.addEventListener('transitionend', () => {
                    setNeedHelp(false);
                });
            }
        } else {
            actualCard.classList.add('restart');
            setTimeout(() => {
                actualCard.classList.remove('restart');
            }, 300);
        }
    }

    const moveDrag = (actualCard, startPosition, moveEvent) => {
        moveEvent.preventDefault();

        const currentPosition = moveEvent.pageX ?? moveEvent.touches[0].pageX;
        deltaPosition.current = currentPosition - startPosition;

        if (deltaPosition.current !== 0 && isAnimated.current) {
            const rotate = deltaPosition.current / 22;
            actualCard.style.transform = `translateX(${deltaPosition.current}px) rotate(${rotate}deg)`;
            actualCard.style.cursor = 'grabbing';
        }
    }

    const startDrag = (event) => {
        event.preventDefault();
        if (!isAnimated.current) {
            isAnimated.current = true;

            const actualCard = event.currentTarget;
            const startPosition = event.pageX ?? event.touches[0].pageX;
            actualCard.style.cursor = 'pointer';
            document.addEventListener('mousemove', (moveEvent) => moveDrag(actualCard, startPosition, moveEvent));
            document.addEventListener('mouseup', (upEvent) => endDrag(actualCard, upEvent));
            document.addEventListener('touchmove', (moveEvent) => moveDrag(actualCard, startPosition, moveEvent));
            document.addEventListener('touchend', (upEvent) => endDrag(actualCard, upEvent));
        }
    }

    return (
        <div className="allTinderCards">
            <div className="tinderHeader">
                <label className={showCard[0] > getRandom.longData() ? 'wiseChoiceCount' : ''}>
                    {wiseChoice.current} / {getRandom.longData()}
                </label>
                <span onClick={() => { helpHandler() }}>
                    <img src={help} alt="Help" />
                </span>
            </div>

            {showCard[0] < getRandom.longData() ? (
                <div className="tinderDeck">
                    {showCard.map((value, index) => {
                        let number = numberOfCardAux.current[value];
                        return (
                            <div
                                className="tinderCard"
                                key={value}
                                onMouseDown={index === 1 ? (event) => startDrag(event) : null}
                                onTouchStart={index === 1 ? (event) => startDrag(event) : null}
                            >
                                <TinderCard card={getRandom.randomFood(number)} />
                            </div>
                        );
                    })}
                    {needHelp && (
                        <div id="helpTinder" onMouseDown={(event) => startDrag(event)} onTouchStart={(event) => startDrag(event)}>
                            <h2>Veo que necesitas algo de ayuda</h2>
                            <p>El juego consiste en arrastrar la tarjeta a la derecha si crees que el alimento no es venenoso o arrastrarlo a la izquierda si crees que lo es.</p>
                            <h2>Los indicadores son:</h2>
                            <div>
                                <div className='helpResultImage'>
                                    <h3>VENENOSO</h3>
                                    <span>
                                        <img src={veneno}></img>
                                    </span>
                                </div>
                                <div className='helpResultImage'>
                                    <h3>NO VENENOSO</h3>
                                    <span>
                                        <img src={correcto}></img>
                                    </span>
                                </div>
                            
                            </div>
                            <h3>Prueba a deslizarme!</h3>
                        </div>
                    )}
                </div>
            ) : (
                
                <div className="tinderDeck">
                    {showCard[0] === getRandom.longData() && (
                        <div className="tinderCard" key={showCard[1]} onMouseDown={(event) => startDrag(event)} onTouchStart={(event) => startDrag(event)}>
                            <TinderCard card={getRandom.randomFood(numberOfCardAux.current[showCard[1]])} />
                        </div>
                    )}
                </div>
            )}
            <button onClick={() => { restartGame() }}>Reiniciar</button>
        </div>
    );
}

export default TinderDeck;
