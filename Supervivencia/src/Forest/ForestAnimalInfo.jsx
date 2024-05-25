import React from 'react';

import './ForestAnimalInfo.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//import { Carousel } from 'primereact/carousel' //ELIMINAR

import ForestInfoCard from './ForestInfoCard';
import animalsData from '../assets/Forest/AnimalInfoAssets/ForestAnimalInfo.json'

function ForestAnimalInfo() {

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
        
        <section className="background" id='ForestAnimalInfo'>
            <div className='container justify-content-center align-items-center h-75 w-100'>
                <div className='row justify-content-center align-items-center h-25 mb-2'>
                    <div className='col-4 col-sm-6 col-lg-8 justify-content-center align-items-center tituloAnimalInfo'>
                        ANIMALES DEL BOSQUE
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
                            {animalsData.animals.map((animal, index) => (
                                <ForestInfoCard
                                    key={index}
                                    imgSrc={animal.img} 
                                    cardTitle={animal.cardTitle} 
                                    cardSubtitle={animal.cardSubtitle}
                                    cardText={animal.cardText}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
       </section>
 
    )
}

export default ForestAnimalInfo
