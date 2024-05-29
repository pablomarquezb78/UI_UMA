import React, {useState, useEffect}from 'react';

import './ForestInfoCard.css'

function ForestInfoCard({imgSrc, imgAlt, cardTitle, cardSubtitle, cardText}) {

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight <= 750) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        // Set the initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className="card" id='forestInfoCard'>
            <img tabIndex='0' src={imgSrc} className="card-img-top" alt={imgAlt} id='forestInfoCard'/>
            <div className="card-body justify-content-center align-items-center" id='forestInfoCard'>
                <h4 tabIndex='0' className="card-title" id='forestInfoCard'>{cardTitle}</h4> 
                <h6 tabIndex='0'  className='card-subtitle' id='forestInfoCard'>{cardSubtitle}</h6>
                {!isHidden && (
                    <div tabIndex='0' className="card-text d-flex justify-content-center align-items-center" id='forestInfoCard'>
                        {cardText}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ForestInfoCard
