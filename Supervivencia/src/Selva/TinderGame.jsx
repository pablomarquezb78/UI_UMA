import React from 'react';

import '../CSS/Start.css';
import './CSS/Tinder.css'
import NavBar from '../Start/NavBar.jsx';
import UnderConstruction from '../Components/UnderConstructionScreen.jsx'
import downScroll from '../assets/Start/Logos/down_scroll.png'
import getRandom from './RandomFood.jsx';
import {useState, useEffect} from 'react';
import TinderDeck from './TinderDeck.jsx'

function TinderGame() {
    
    const[numberOfCard, setNumberOfCard] = useState()

        
    useEffect(() => {
     
        const numberOfCardAux = new Array(getRandom.longData()).fill().map((_, index) => index + 1);
        const shuffleCard = numberOfCardAux.sort(() => Math.random() - 0.5);
        setNumberOfCard(shuffleCard);
    },[])


    return(
      
    <section id="landingSectionSelva" className="bg-white vw-100 vh-100">
    
    <h1>Tinder alimentos!</h1>

        <section id="tinderZone">
    
            
           {numberOfCard && <TinderDeck numberOfCard={numberOfCard}></TinderDeck>}


        </section>    

    </section>
    
    )
}

export default TinderGame
