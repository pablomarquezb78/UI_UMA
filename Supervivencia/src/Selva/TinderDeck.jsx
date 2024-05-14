import { useState } from "react";
import getRandom from './RandomFood';
import TinderCard from './TinderCard.jsx';

function TinderDeck({numberOfCard}) {
    
    const [showCard, setShowCard] = useState([1,0]); 
    
    const limit = 225;
    let isAnimated = false;
    let deltaPosition = 0;

    const load = () => {

        setShowCard([(showCard[0]+1),(showCard[0])]);

    }


    const endDrag = (actualCard, upEvent) => {
        
        upEvent.preventDefault();
        
        isAnimated = false;
        
        actualCard.style.transform = 'none';
        actualCard.style.cursor = 'grab';
        
        document.removeEventListener('mousemove', moveDrag);
        document.removeEventListener('mouseup', endDrag);
        
        if(Math.abs(deltaPosition) > limit) {
            
            const positive = deltaPosition >= 0;
            
            actualCard.classList.add(positive ? 'right' : 'left');
            
            actualCard.addEventListener('transitionend', () => {

                actualCard.remove();

                console.log(showCard[0])
                console.log(showCard[1])

                setShowCard([(showCard[0]+1),(showCard[0])]);
            });

        } else {
            console.log(12);
        }
    }

    const moveDrag = (actualCard, startPosition, moveEvent) => {
        
        moveEvent.preventDefault();
        
        const currentPosition = moveEvent.pageX ?? moveEvent.touches[0].pageX;
        deltaPosition  = currentPosition - startPosition;
        
        if(deltaPosition != 0 && isAnimated) {
        
            const rotate = deltaPosition / 22;
            console.log(actualCard);
            actualCard.style.transform = `translateX(${deltaPosition}px) rotate(${rotate}deg)`;
            actualCard.style.cursor = 'grabbing';
        }
    }

    const startDrag = (event) => {
        
        event.preventDefault();
        
        if(!isAnimated) {
            isAnimated = true;
        
            let actualCard = event.currentTarget;
            console.log(actualCard);

            let startPosition = event.pageX ?? event.touches[0].pageX;
            document.addEventListener('mousemove', (moveEvent) => moveDrag(actualCard, startPosition, moveEvent));
            document.addEventListener('mouseup', (upEvent) => endDrag(actualCard, upEvent));
        }
    }

    if(showCard[0] < getRandom.longData()) {
        return(
            showCard.map((value, index) => {
                let number = numberOfCard[value];
                return(
                    <div className="tinderCard" onClick={() => {load()}} key={index} onMouseDown={(event) => startDrag(event)}>
                        <TinderCard card={getRandom.randomFood(number)}></TinderCard>
                    </div>
                )
            })
        )
    }
}

export default TinderDeck;
