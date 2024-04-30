import React from "react";
import { Navigation, A11y, Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarrouselContent from "./CarrouselContent";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './CSS/Slider.css'

//Import Images
import grizzlyBear from "../assets/Tips/grizzlyBear.jpg"
import mushroom from "../assets/Tips/mushroom.jpg"
import wolfFingerprint from "../assets/Tips/wolfFingerprint.jpg"

function Carrousel (){
    return (
        <>
            <h1>¿Sabias Que...?</h1>
            <Swiper
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000 }} //ms
            loop={true}
            className="sliderTips"
            >
            <SwiperSlide>
                <CarrouselContent texto="'Cuando te ataca un oso lo mejor es quedarte quieto en un lugar neutral'"
                 imagen={grizzlyBear}/>
            </SwiperSlide>
            <SwiperSlide>
                <CarrouselContent texto="'Para identificar una seta es decisivo darle la vuelta y observar su himenio'" 
                imagen={mushroom}/>
            </SwiperSlide>
            <SwiperSlide>
                <CarrouselContent texto="'En las huellas de zorro es característica la separación entre las
                 almohadillas delanteras y las posteriores, de tal manera que si trazamos una línea 
                 inmediatamente detrás de las delanteras, no tocará a las posteriores laterales.'" 
                imagen={wolfFingerprint}/>
            </SwiperSlide>
          </Swiper>
        </>
    );
}

export default Carrousel;