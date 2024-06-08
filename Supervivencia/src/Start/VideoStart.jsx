import React, { useRef, useEffect } from 'react';

import '../CSS/Start.css';
import videoStart from "../assets/Start/videoStart.mp4";

function VideoStart() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!('IntersectionObserver' in window)) {
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        videoRef.current.play();
                    } else {
                        videoRef.current.pause();
                    }
                });
            },
            {
                threshold: 0.7
            }
        );
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className='position-absolute w-100 h-100 top-0 bottom-0 z-0'>
            <video ref={videoRef} className='w-100 h-100 object-fit-cover' autoPlay loop muted>
                <source src={videoStart} type="video/mp4"></source>
            </video>
        </div>
    );
}

export default VideoStart;
