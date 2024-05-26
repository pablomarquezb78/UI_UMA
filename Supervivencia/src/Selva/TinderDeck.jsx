import { useState, useRef, useEffect } from "react";
import getRandom from './RandomFood';
import TinderCard from './TinderCard.jsx';

import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SosIcon from '@mui/icons-material/Sos';
import TinderHelpCard from "./TinderHelpCard.jsx";
import TinderCardResut from "./TinderCardResults.jsx";


function TinderDeck({ numberOfCard }) {
    const [showCard, setShowCard] = useState([1, 0]);
    const wiseChoice = useRef(0);
    const limit = 150;
    const isAnimated = useRef(false);
    const deltaPosition = useRef(0);
    const numberOfCardAux = useRef(numberOfCard);
    const [needHelp, setNeedHelp] = useState(false);
    
    const AnimatedIconButton = styled(IconButton)`
    color: black;

    &:focus {
        transform: scale(1.1);
        transition: transform 0.1s ease;
    }

    .MuiSvgIcon-root {
        width: calc(20px + (40 - 10) * ((100vmin - 350px) / (1080 - 350)));
        height: calc(20px + (40 - 10) * ((100vmin - 350px) / (1080 - 350)));
    }
    `;
   
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Verificar si el evento proviene de una interacción del usuario y no de una repetición
            if (!e.repeat && (e.key.toLowerCase() === '1' || e.key.toLowerCase() === '1')) {
                // Ejecutar acciones de atajos de teclado
                const tinderDeckDivs = document.querySelectorAll('.tinderDeck section');
                const actualCard = tinderDeckDivs[tinderDeckDivs.length - 1];
                deltaPosition.current = e.key.toLowerCase() === '1' ? -271 : 353;
                cardDecision(actualCard);
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    
    
    
    

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

        cardDecision(actualCard)
    }

    const cardDecision = (actualCard) => {

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

            {showCard[0] > getRandom.longData() && (
                <TinderCardResut resetAction={restartGame} wiseChoice={wiseChoice.current} totalCards={numberOfCard.length}></TinderCardResut>
            )}

            <div className="tinderHeader">
                <label className={showCard[0] > getRandom.longData() ? 'wiseChoiceCount' : ''}>
                    {wiseChoice.current} / {getRandom.longData()}
                </label>
                <AnimatedIconButton onClick={() => { helpHandler() }}>
                     <SosIcon fontSize="large"/>
                </AnimatedIconButton>
            </div>

            {showCard[0] < getRandom.longData() ? (
                <div className="tinderDeck">
                    {showCard.map((value, index) => {
                        let number = numberOfCardAux.current[value];
                        return (
                            <section
                                className="tinderCard"
                                key={value}
                                onMouseDown={index === 1 ? (event) => startDrag(event) : null}
                                onTouchStart={index === 1 ? (event) => startDrag(event) : null}
                                tabIndex={index === 1 ? '0' : '-1'}
                            >
                                <TinderCard card={getRandom.randomFood(number)}/>
                            </section>
                        );
                    })}
                    {needHelp && (
                        <TinderHelpCard tabIndex={'0'} dragEvent={startDrag}></TinderHelpCard>
                    )}
                </div>
            ) : (
                
                <div className="tinderDeck">
                    {showCard[0] === getRandom.longData() && (
                        <section tabIndex='0' className="tinderCard" key={showCard[1]} onMouseDown={(event) => startDrag(event)} onTouchStart={(event) => startDrag(event)}>
                            <TinderCard card={getRandom.randomFood(numberOfCardAux.current[showCard[1]])} />
                        </section>
                    )}
                </div>
            )}
            {showCard[0] <= getRandom.longData() &&
            <button id='restartTinder' onClick={() => { restartGame() }}>Reiniciar</button>
            }
        </div>
    );
}

export default TinderDeck;


