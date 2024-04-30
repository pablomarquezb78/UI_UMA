import React from 'react';

import MemoryGame from '../Components/MemoryGame';
import './MountainInitGame.css';
 


function MountainInitGame() {

   return(
        <section className='vw-100 vh-100'>
            <div className='zoneContainer'>
                <div className='zoneContent'>
                    <MemoryGame/>
                </div>
            </div>
        </section>
    )
}

export default MountainInitGame