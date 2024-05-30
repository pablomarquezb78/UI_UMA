import React, {useState, useEffect}from 'react';
import './CoastInfoCard.css';

function CoastInfoCard({imgSrc, imgAlt, cardTitle, cardSubtitle, cardDescription, cardPeligrosity}) {

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
        <div className="card coastInfoCard">
            <img tabIndex='0' src={`src/assets/Coast/${imgSrc}`} className="card-img-top coastInfoCard" alt={imgAlt} />
            <div className="card-body justify-content-center align-items-center coastInfoCard">
                <h4 tabIndex='0' className="card-title coastInfoCard">{cardTitle}</h4>
                <h6 tabIndex='0'  className='card-subtitle coastInfoCard'>{cardSubtitle}</h6> 
                {!isHidden && (
                    <div tabIndex='0' className="card-text d-flex justify-content-center align-items-center coastInfoCard">
                        {cardDescription}
                        <br/> 
                        {cardPeligrosity}
                    </div>
                    
                )}
            </div>
        </div>
    )
}

export default CoastInfoCard