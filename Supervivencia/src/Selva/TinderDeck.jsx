import { useState, useEffect } from "react";
import tinderCard from './RandomFood';
import TinderCard from './TinderCard.jsx';

function TinderDeck({numberOfCard}){
    
    const[showCard, setShowCard] = useState([1,0]);
    
    const[isAnimated, setAnimated] = useState(false);
    
    const[actualCard, setActualCard] = useState();

    const[positionStart, setPositionStart] = useState(0);
    const[currentPosition, setCurrentPosition] = useState(0);
    const[deltaPosition, setDeltaPosition] = useState(0);

    const tinderHandler = () => {

            setShowCard([(showCard[0]+1),(showCard[0])])
        
    }

   
    const endDrag = (event) => {

        setAnimated(false);
        console.log("fin");



    }

    const mouveDrag = (event) => {

        setCurrentPosition(event.pageX ?? event.touches[0].pageX);
        
        setDeltaPosition(currentPosition - positionStart)
        
        console.log(deltaPosition);
        console.log(currentPosition);
        console.log(positionStart);

        if(deltaPosition == 0) return;

            setAnimated(true);
            const rotate = deltaPosition / 12;
            console.log(12);
            
            actualCard.style.transform = `translateX(${deltaPosition}px) rotate (${rotate}deg)`;
            actualCard.style.cursor = 'grabbing';
    
        
        console.log(positionStart);

    }


    const startDrag = (event) => {

        console.log(isAnimated)
        if(isAnimated) return

            setActualCard(event.target.closest('div'));
            console.log(actualCard);
            console.log(event)
            setPositionStart(event.pageX ?? event.touches[0].pageX);
            
            document.addEventListener('mousemove',mouveDrag);
            document.addEventListener('mouseup',endDrag);

            document.addEventListener('touchmove',mouveDrag, {passive: true})
            document.addEventListener('touchend',endDrag, {passive: true})

        
    }

    if(showCard[0] < tinderCard.longData()){
    return(
    showCard.map((value,index) => {
        let number = numberOfCard[value];
       
            return(
                <div className="tinderCard" key={index} onMouseDown={(event) => startDrag(event)} onTouchStart={(event) => startDrag(event)}>
                <TinderCard  card={tinderCard.randomFood(number)}></TinderCard>
                </div>
            )
        
            })
        )
    }
}

export default TinderDeck;
