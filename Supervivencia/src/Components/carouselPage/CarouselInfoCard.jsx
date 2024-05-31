import React, {useState, useEffect}from 'react';

import './CarouselInfoCard.css'
import InfoIcon from '@mui/icons-material/Info'
import ImageIcon from '@mui/icons-material/Image';
import UTurnLeftIcon from '@mui/icons-material/UTurnLeft';

function CarouselInfoCard({imgSrc, imgAlt, cardTitle, cardSubtitle, cardText}) {

    const [isHidden, setIsHidden] = useState(false);
    const [iconHidden, setIconHidden] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showImageButton, setShowImageButton] = useState(false);
    const [showMidImage, setShowMidImage] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight <= 750) {
                setIsHidden(true);
                if(window.innerHeight > 500)
                {
                    setShowImageButton(false)
                } else {
                    if(window.innerWidth > 464 && window.innerWidth < 1024)
                    {
                        setShowImageButton(true);
                    } else {
                        setShowImageButton(false);
                    }
                }
            } else {
                setIsHidden(false);
                setShowInfo(false); //Quitar esta linea en caso de querer que no se quite la info activa cuando pase los 750px
                setShowImageButton(false);
            }
            if (window.innerHeight <= 345)
            {
                setIconHidden(true);
            } else {
                setIconHidden(false);
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

    function mostrarInfo()
    {
        if (window.innerHeight <= 750 && !showInfo) {
            setShowInfo(true);
        } else {
            setShowInfo(false);
        }
    }

    function mostrarImagen()
    {
        if (window.innerHeight <= 750 && !showMidImage) {
            setShowMidImage(true);
        } else {
            setShowMidImage(false);
        }
    }

    return(
        <div className="card forestInfoCard">
            {!showInfo && !showMidImage && (
                <React.Fragment>
                    {!showImageButton && (
                        <img src={imgSrc} className="card-img-top forestInfoCard" alt={imgAlt}/>
                    )}
                    <div className="card-body justify-content-center align-items-center forestInfoCard" >
                        <h4 className="card-title" id='forestInfoCard'>{cardTitle}</h4> 
                        <h6  className='card-subtitle' id='forestInfoCard'>{cardSubtitle}</h6>
                        {!isHidden && (
                            <div className="card-text d-flex justify-content-center align-items-center forestInfoCard">
                                {cardText}
                            </div>
                        )}
                        {isHidden && (
                            <React.Fragment>
                                <div className='row justify-content-center align-items-center'>
                                    {!showImageButton && (
                                        <div className="col-9 d-flex justify-content-center align-items-center forestInfoCard">
                                            <button tabIndex='0' onClick={mostrarInfo}>
                                                <div className='bottomIconSVG forestInfoCard'>
                                                    {!iconHidden && (
                                                        <React.Fragment>
                                                            <InfoIcon className='iconSVG' />
                                                            <br/>
                                                        </React.Fragment>
                                                    )}
                                                    <p>Información</p>
                                                </div>
                                            </button>
                                        </div>  
                                    )}
                                    {showImageButton && (
                                        <React.Fragment>
                                            <div className="col-8 d-flex justify-content-center align-items-center mb-2 forestInfoCard">
                                                <button tabIndex='0' onClick={mostrarInfo}>
                                                    <div className='bottomIconSVG' id='forestInfoCard'>
                                                        {!iconHidden && (
                                                            <React.Fragment>
                                                                <InfoIcon className='iconSVG' />
                                                                <br/>
                                                            </React.Fragment>
                                                        )}
                                                        <p>Información</p>
                                                    </div>
                                                </button>
                                            </div> 
                                            <div className="col-8 d-flex justify-content-center align-items-center forestInfoCard">
                                                <button tabIndex='0' onClick={mostrarImagen}>
                                                    <div className='bottomIconSVG forestInfoCard'>
                                                        {!iconHidden && (
                                                            <React.Fragment>
                                                                <ImageIcon className='iconSVG' />
                                                                <br/>
                                                            </React.Fragment>
                                                        )}
                                                        <p>Mostrar imagen</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                </React.Fragment>
            )}
            {showInfo && (
                <div className="card-body mini justify-content-center align-items-center forestInfoCard">
                    <div className="card-text mini d-flex justify-content-center align-items-center forestInfoCard">
                        {cardText}
                    </div>
                    <div className="d-flex justify-content-center align-items-center forestInfoCard">
                        <button tabIndex='0' onClick={mostrarInfo}>
                            <div className='bottomIconSVG forestInfoCard'>
                                {!iconHidden && (
                                    <React.Fragment>
                                        <UTurnLeftIcon className='iconSVG' />
                                        <br/>
                                    </React.Fragment>
                                )}
                                <p>Volver</p>
                            </div>
                        </button>
                    </div>
                </div>
            )}
            {showMidImage && (
                <div className="card-body mini justify-content-center align-items-center" id='forestInfoCard'>
                    <div className='row justify-content-center align-items-center'>
                        <img src={imgSrc} className="card-img-top r-top" alt={imgAlt} id='forestInfoCard'/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" id='forestInfoCard'>
                        <button tabIndex='0' onClick={mostrarImagen}>
                            <div className='bottomIconSVG' id='forestInfoCard'>
                                {!iconHidden && (
                                    <React.Fragment>
                                        <UTurnLeftIcon className='iconSVG' />
                                        <br/>
                                    </React.Fragment>
                                )}
                                <p>Volver</p>
                            </div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CarouselInfoCard