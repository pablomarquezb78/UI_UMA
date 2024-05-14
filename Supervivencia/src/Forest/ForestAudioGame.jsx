import react,{useEffect, useRef, useState} from 'react';

import '../Components/CSS/BackgroundVideoUsage.css'
import VideoBackground from '../Components/BackgroundVideoComponent';
import gameVideoBackground from '../assets/Forest/AudioGameAssets/SoundGameBackground.mp4'
import GameContent from './AudioGameContent';
import GamePresentation from './AudioGamePresentation';
import GameTutorial from './AudioGameTutorial';
import GameLost from './AudioGameLost';
import SwitchComponents from '../Components/ComponentSwitcher'; 

function ForestAudioGame() {

    const gameComponents = ['presentation','tutorial','game','lose'];
    const [panelCounter, setPanelCounter] = useState(0);
    const [activeComponent, setActiveComponent] = useState(gameComponents[panelCounter]);

    useEffect(() => {
        //console.log(panelCounter);
        setActiveComponent(gameComponents[panelCounter]);
    },[panelCounter])

    function counterPassPanel()
    {
        if(panelCounter < gameComponents.length - 1)
        {
            setPanelCounter(panelCounter + 1);
        }
    }

    function counterBackPanel()
    {
        if(panelCounter > 0)
        {
            setPanelCounter(panelCounter - 1);
        }
    }


   return(
        <section className='vw-100 vh-100'>
            <div className='zoneContainer'>
                <div className='zoneContent'>
                    <SwitchComponents active={activeComponent}>
                        <GamePresentation name="presentation" passFunction={counterPassPanel} />
                        <GameTutorial name="tutorial" backFunction={counterBackPanel} passFunction={counterPassPanel} />
                        <GameContent name="game" backFunction={counterBackPanel} passFunction={counterPassPanel}/>
                        <GameLost name="lose" backFunction={counterBackPanel}/>
                    </SwitchComponents>
                </div>
                <VideoBackground videoContent={gameVideoBackground}/>
            </div>
        </section>
    )
}

export default ForestAudioGame