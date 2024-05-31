import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//import { Carousel } from 'primereact/carousel' //ELIMINAR
import CarouselInfoCard from './CarouselInfoCard';

import './CarouselInfo.css'

function CarouselInfo({data, id, title}) {

    const small = 464;
    const mid = 1024;
    const large = 3000;

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: large },
          items: 5,
          slidesToSlide: 5
        },
        desktop: {
          breakpoint: { max: large, min: mid },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: mid, min: small },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: small, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };

    return(
        <React.Fragment>
        <section className={`background ${id}`}>
            <div className='container justify-content-center align-items-center h-75 w-100'>
                <div className='row justify-content-center align-items-center h-25 mb-2'>
                    <div tabIndex='0' className={`col-9 col-sm-6 col-lg-8 justify-content-center align-items-center z-1 tituloCarouselInfo ${id}`}>
                        {title}
                    </div>
                </div>
                <div className='row justify-content-center align-items-center h-75'>
                    <div className='col-10 col-lg-12'>
                        {/* Zona carousel */}
                        <Carousel 
                            tabIndex='0'
                            swipeable={true}
                            draggable={true}
                            infinite={true}
                            keyBoardControl={true}
                            //centerMode={true}
                            responsive={responsive}
                            className='z-1'
                        >
                            {data.map((item, index) => (
                                <CarouselInfoCard
                                    key={index}
                                    imgSrc={item.img} 
                                    imgAlt={item.imgAlt}
                                    cardTitle={item.cardTitle} 
                                    cardSubtitle={item.cardSubtitle}
                                    cardText={item.cardText}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
       </section>
       </React.Fragment>
    )
}

export default CarouselInfo
