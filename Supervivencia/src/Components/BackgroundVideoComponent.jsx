import React from 'react';

import '../CSS/BackgroundVideoUsage.css';



function VideoBackground({videoContent}) {
    
    return(
            <video className='startVideo' autoPlay loop muted src={videoContent}></video>
    )
}

export default VideoBackground
