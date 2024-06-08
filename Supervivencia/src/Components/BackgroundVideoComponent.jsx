import React from 'react';

import './CSS/BackgroundVideoUsage.css';



function VideoBackground({videoContent}) {
    return(
            <video className='startVideo' autoPlay loop muted src={videoContent} playsInline preload='auto' poster='/Forest/AudioGameAssets/SoundGameBackground.jpg'></video>
    )
}

export default VideoBackground
