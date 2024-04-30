import React from 'react';

import '../CSS/BackgroundVideoUsage.css'
import VideoBackground from '../Components/BackgroundVideoComponent';
import gameVideoBackground from '../assets/Forest/AudioGameAssets/SoundGameBackground.mp4'
import GameContent from './AudioGameContent';

function ForestAudioGame() {

   return(
        <section className='vw-100 vh-100'>
            <div className='zoneContainer'>
                <div className='zoneContent'>
                    <GameContent/>
                </div>
                <VideoBackground videoContent={gameVideoBackground}/>
            </div>
        </section>
    )
}

export default ForestAudioGame