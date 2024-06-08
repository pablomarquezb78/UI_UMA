import React from 'react';

import './CSS/BackgroundVideoUsage.css';



function VideoBackground({videoContent}) {
    return(
            <video className='startVideo' autoPlay loop muted src={videoContent} playsInline preload='auto' poster='/Forest/AudioGameAssets/SoundGameBackground.jpg' alt='Video del cielo estrellado en la noche con la luna'></video>
    )
}

export default VideoBackground
