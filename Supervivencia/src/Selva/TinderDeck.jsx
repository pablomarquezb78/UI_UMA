    import { useState, useEffect } from "react";
    import tinderCard from './RandomFood';
    import TinderCard from './TinderCard.jsx';

    function TinderDeck({numberOfCard}){
        
        const[showCard, setShowCard] = useState([1,0]);
        const[decision, setDecision] = useState(false);        

        const limit = 225;

        let isAnimated = false;
        let deltaPosition = 0;
        // useEffect (() => {

        //     document.addEventListener('mousedown',(event) => startDrag(event));

        // },[])

        useEffect ( () => {

            if(decision){

                setShowCard([(showCard[0]+1),(showCard[0])])

            }

            return () => {
                setDecision(false);
              };
        },[decision])


        const tinderHandler = () => {

            
        }

    
        const endDrag = (actualCard,upEvent) => {

            upEvent.preventDefault();

            isAnimated = false;
        
            actualCard.style.transform = 'none';
            actualCard.style.cursor = 'grab';
        
            document.removeEventListener('mousemove', moveDrag);
            document.removeEventListener('mouseup', endDrag);

            if(Math.abs(deltaPosition) > limit){
               
                const positive = deltaPosition >= 0;

                actualCard.classList.add(positive ? 'right' : 'left')

                setDecision(true);
            }else{
                actualCard.classList.add('restart')

            }


        }

        const moveDrag = (actualCard, startPosition, moveEvent) => {

            moveEvent.preventDefault();
           
            const currentPosition = moveEvent.pageX ?? moveEvent.touches[0].pageX;
            deltaPosition  = currentPosition - startPosition;

            
            if(deltaPosition != 0 && isAnimated){
                
                const rotate = deltaPosition / 22;
                
                actualCard.style.transform = `translateX(${deltaPosition}px) rotate(${rotate}deg)`;
                                
                actualCard.style.cursor = 'grabbing';
            }

        }


        const startDrag = (event) => {

            console.log(event);

            event.preventDefault();

            if(!isAnimated){

                isAnimated = true;
                const actualCard = event.target.closest('div');
                const startPosition = event.pageX ?? event.touches[0].pageX
                console.log(startPosition);

                document.addEventListener('mousemove',(moveEvent) => moveDrag(actualCard,startPosition,moveEvent));
                document.addEventListener('mouseup',(upEvent) => endDrag(actualCard,upEvent));
            }

        }

        if(showCard[0] < tinderCard.longData()){
        return(
        showCard.map((value,index) => {
            let number = numberOfCard[value];
        
                return(
                    <div className="tinderCard" key={index} onMouseDown={(event) => startDrag(event)}>
                        <TinderCard card={tinderCard.randomFood(number)}></TinderCard>
                    </div>
                )
            
                })
            )
        }
    }

    export default TinderDeck;
