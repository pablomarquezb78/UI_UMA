import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CoastInfoCard from './CoastInfoCard';
import coastAnimal from './imagenes.json';
import './CoastAnimalInfo.css';

function CoastAnimalInfo() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        
        <section className='background' id='CoastInfo'>
            <div className='container justify-content-center align-items-center h-75 w-100'>
                <div className='row justify-content-center align-items-center h-25 mb-2'>
                    <div tabIndex='0' className='col-4 col-sm-6 col-lg-8 justify-content-center align-items-center tituloCarouselInfo' id='Coast'>
                        FAUNA DE LA COSTA
                    </div>
                </div>
                <div className='row justify-content-center align-items-center h-75'>
                    <div className='col-10 col-lg-12'>
                        {/* Zona carousel */}
                        <Carousel 
                            swipeable={true}
                            draggable={true}
                            infinite={true}
                            keyBoardControl={true}
                            //centerMode={true}
                            responsive={responsive}
                        >
                            {coastAnimal.map((animal, index) => (
                                <CoastInfoCard
                                    key={index}
                                    imgSrc={animal.foto} 
                                    imgAlt={animal.nombre}
                                    cardTitle={animal.nombre}
                                    cardSubtitle={animal.nombre_cientifico} 
                                    cardDescription={animal.descripcion}
                                    cardPeligrosity={animal.peligrosidad}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
       </section>
 
    )
}

export default CoastAnimalInfo