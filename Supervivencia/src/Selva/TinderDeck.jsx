import { useState, useRef, useEffect } from "react";
import getRandom from './RandomFood';
import TinderCard from './TinderCard.jsx';

import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SosIcon from '@mui/icons-material/Sos';
import TinderHelpCard from "./TinderHelpCard.jsx";
import TinderCardResut from "./TinderCardResults.jsx";

import correcto from './FotosAlimentos/correcto.png';
import incorrecto from './FotosAlimentos/incorrecto.png';
import neutro from './FotosAlimentos/neutro.png'

function TinderDeck({ numberOfCard }) {
    const limit = 200;

    const wiseChoice = useRef(0);
    const isAnimated = useRef(false);
    const deltaPosition = useRef(0);
    const numberOfCardAux = useRef(numberOfCard);
    
    const [needHelp, setNeedHelp] = useState(false);
    const [isCorrect, setIsCorrect] = useState(neutro)
    const [isShake, setIsShake] = useState(undefined);
    const [showCard, setShowCard] = useState([1, 0]);
    const [decisionAccesbilityTool, setDecisionAccesbilityTool] = useState('');
    const [resultDecisionAccesibilityTool, setResultDecisionAccesibilityTool] = useState('');

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
            if (!e.repeat && (e.key.toLowerCase() === '4' || e.key.toLowerCase() === '6' || e.key.toLowerCase() === '5')) {
                const tinderDeckDivs = document.querySelectorAll('.tinderDeck section');
                const actualCard = tinderDeckDivs[tinderDeckDivs.length - 1];
                if(e.key.toLowerCase() === '4'){
                    deltaPosition.current = -271;
                    cardDecision(actualCard);

                }else if(e.key.toLowerCase() === '6'){
                    deltaPosition.current = 353;
                    cardDecision(actualCard);

                }else{
                    const tinderDeckDivs = document.querySelectorAll('.tinderDeck section');
                    if(tinderDeckDivs.length > 0){
                        const lastCard = tinderDeckDivs[tinderDeckDivs.length - 1];
                        lastCard.focus();
                    }
                }
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    },);
    
    const restartGame = () => {
        setShowCard([1, 0]);
        setIsCorrect(neutro);
        setDecisionAccesbilityTool('');
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
                setIsCorrect(correcto);
                resultDecisionCorrect()
                
            }else{
                setIsCorrect(incorrecto);
                resultDecisionIncorrect()
            }
        }else {
            if (getRandom.isDangerous(numberAux) === 'Mortal') {
                wiseChoice.current = (wiseChoice.current + 1);
                resultDecisionCorrect()
            
            }else{
                resultDecisionIncorrect()
            }
        }
        
        setIsShake('shake-animation');
        setShowCard([showCard[0] + 1, showCard[0]]);
    }

    const resultDecisionCorrect = () => {

        (resultDecisionAccesibilityTool === 'Acertaste' ? setResultDecisionAccesibilityTool('Acertaste.') : setResultDecisionAccesibilityTool('Acertaste'))
    }


    const resultDecisionIncorrect = () => {

        (resultDecisionAccesibilityTool === 'Fallaste' ? setResultDecisionAccesibilityTool('Fallaste.') : setResultDecisionAccesibilityTool('Fallaste'))
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

        let typeFoodImage;

        if(!actualCard.classList.contains('helpTinder')){
            typeFoodImage = actualCard.querySelector('img.comestible');
            typeFoodImage.style.opacity = '0'
    
            typeFoodImage = actualCard.querySelector('img.venenoso');
            typeFoodImage.style.opacity = '0'    
        }
       

        if (Math.abs(deltaPosition.current) > limit) {
            const positive = deltaPosition.current >= 0;
            
            let decision;

            actualCard.classList.add(positive ? decision = 'right' : decision = 'left');

            if (!needHelp) {
                
                if(decision == 'right'){
                    actualCard.querySelector('img.comestible').style.opacity = '1';
                    (decisionAccesbilityTool ===  'Has seleccionado comestible' ? setDecisionAccesbilityTool('Has seleccionado comestible.') : setDecisionAccesbilityTool('Has seleccionado comestible'));

                }else{
                    actualCard.querySelector('img.venenoso').style.opacity = '1';
                    (decisionAccesbilityTool ===  'Has seleccionado venenoso' ? setDecisionAccesbilityTool('Has seleccionado venenoso.') : setDecisionAccesbilityTool('Has seleccionado venenoso'));

                }
                
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
    
        let venenosaImage;
        let comestibleImage;

        if (actualCard && deltaPosition.current !== 0 && isAnimated.current) {
            
            if(!actualCard.classList.contains('helpTinder')){
                venenosaImage = actualCard.querySelector('img.venenoso');
                comestibleImage = actualCard.querySelector('img.comestible');
                if (deltaPosition.current > 100) {
                    comestibleImage.style.opacity = `${Math.abs(deltaPosition.current) / 200}`
                    venenosaImage.style.opacity = '0'
                } else if(deltaPosition.current < -100){
                    venenosaImage.style.opacity = `${Math.abs(deltaPosition.current) / 200}`
                    comestibleImage.style.opacity = '0'
                }
            }
            
            const rotate = deltaPosition.current / 22;
            actualCard.style.transform = `translateX(${deltaPosition.current}px) rotate(${rotate}deg)`;
            actualCard.style.cursor = 'grabbing';
        }
    }
    
    const startDrag = (event) => {
        if (!isAnimated.current) {
            isAnimated.current = true;
            setIsShake('');
            const actualCard = event.currentTarget;
            const startPosition = event.pageX ?? event.touches[0].pageX;
            actualCard.style.cursor = 'pointer';
            document.addEventListener('mousemove', (moveEvent) => moveDrag(actualCard, startPosition, moveEvent));
            document.addEventListener('mouseup', (upEvent) => endDrag(actualCard, upEvent));
            document.addEventListener('touchmove', (moveEvent) => moveDrag(actualCard, startPosition, moveEvent), { passive: false }); // Agregar { passive: false }
            document.addEventListener('touchend', (upEvent) => endDrag(actualCard, upEvent), { passive: false }); // Agregar { passive: false }
        }
    }
    

    return (

       
        <div className="allTinderCards">

      

            {showCard[0] > getRandom.longData() && (
                
                <TinderCardResut resetAction={restartGame} wiseChoice={wiseChoice.current} totalCards={numberOfCard.length}></TinderCardResut>
            )}

            <div className="tinderOverHeader">
                
                <div aria-live="assertive" aria-atomic="true">
                    <label>{decisionAccesbilityTool}</label>
                </div>
               
                <div className="tinderHeader">
                    <label className={showCard[0] > getRandom.longData() ? 'wiseChoiceCount' : ''}>
                        {wiseChoice.current} / {getRandom.longData()}
                    </label>
                    <span>
                            <img className={isShake} src={isCorrect} alt={resultDecisionAccesibilityTool}></img>
                            <label aria-live="assertive" aria-atomic="true" style={{ position: 'absolute', left: '-9999px' }}>{resultDecisionAccesibilityTool}</label>
                    </span>
                    <div className="sosTinderDiv">
                    <AnimatedIconButton onClick={() => { helpHandler() }}>
                        <SosIcon name='Botón de ayuda' fontSize="large"/>
                    </AnimatedIconButton>
                    </div>
                </div>
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
                                <TinderCard card={getRandom.randomFood(number)} index={index}/>
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


