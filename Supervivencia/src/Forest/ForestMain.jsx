import React from 'react'
import ForestStart from './ForestStart.jsx'
import ForestAudioGame from './ForestAudioGame.jsx'
import GridInfo from '../Info/InfoSection.jsx'
import CarouselInfo from '../Components/carouselPage/CarouselInfo.jsx'
import {useRef} from 'react';
import '../CSS/main.css'
import '../CSS/Start.css'

import plantsData from '/public/Forest/PlantInfoAssets/ForestPlantInfo.json'
import animalsData from '../../public/Forest/AnimalInfoAssets/ForestAnimalInfo.json'

function ForestMain(){

    const gridInfoRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            <main className='sliderContainer'>

                <div className='sliderItem'>
                    <ForestStart scrollToGridInfo={scrollToGridInfo}/>
                </div>

                <div className='sliderItem sliderTips'>
                    <article className='tipsSupervivencia'>
                        <h1>Tips de supervivencia en el bosque:</h1>
                        <h2>Buscar agua y purificarla💧:</h2>
                        <p>
                            La hidratación es esencial. Busca fuentes de agua como ríos, arroyos o lagos. 
                            Utiliza métodos de purificación como hervir el agua, usar pastillas purificadoras o un filtro de agua portátil.
                        </p>

                        <h2>Construir un refugio🏕️:</h2>
                        <p>
                            Protegerte de los elementos (frío, lluvia, viento) es crucial. 
                            Utiliza ramas, hojas y otros materiales naturales para construir un refugio básico que te proporcione cobijo y aislamiento térmico.
                        </p>

                        <h2>Encender un fuego🔥:</h2>
                        <p>
                            El fuego te proporciona calor, luz, y un medio para cocinar y purificar agua. 
                            Aprende a encender un fuego utilizando diferentes métodos como encendedores, pedernal y acero, o técnicas primitivas como el arco de fuego.
                        </p>

                        <h2>Encontrar y preparar comida🍃:</h2>
                        <p>
                            Familiarízate con plantas comestibles locales y técnicas de caza o pesca. 
                            Evita consumir plantas o hongos que no puedas identificar con certeza como seguros.
                        </p>
                        <h2>Orientación y navegación🧭:</h2>
                        <p>
                            Saber orientarte es vital para salir del bosque. 
                            Aprende a usar una brújula y un mapa, y conoce técnicas de navegación natural, 
                            como seguir el curso de un río o usar el sol y las estrellas para orientarte.
                        </p>
                    </article>
                </div>

                <div className='sliderItem sliderTips'>
                    <article className='tipsSupervivencia'>
                        <h2>Primeros auxilios básicos🚑:</h2>
                        <p>
                            Lleva un kit de primeros auxilios y conoce cómo tratar cortes, quemaduras, picaduras y otras heridas menores. 
                            Saber realizar RCP y tratar choques térmicos también es importante.
                        </p>

                        <h2>Señalización para rescate📢:</h2>
                        <p>
                            Tener medios para llamar la atención de rescatistas es crucial. Utiliza espejos de señalización, silbatos, 
                            o haz señales de humo o fuego en ubicaciones visibles.
                        </p>

                        <h2>Vestimenta adecuada🧥:</h2>
                        <p>
                            Usa ropa adecuada para el clima del bosque. 
                            Las capas de ropa, un buen calzado y protección contra la lluvia y el sol son esenciales.
                        </p>
                        <h2>Planificación y preparación📋:</h2>
                        <p>
                            Antes de adentrarte en el bosque, informa a alguien de tu itinerario y el tiempo estimado de tu regreso. 
                            Lleva contigo un equipo básico de supervivencia y suficiente comida y agua.
                        </p>

                        <h2>Mantener la calma y la moral alta😊:</h2>
                        <p>
                            La actitud mental es crucial en situaciones de supervivencia. 
                            Mantén la calma, evita el pánico y mantén una actitud positiva para tomar decisiones racionales y conservar energía.
                        </p>

                        <h2>Manejo de animales salvajes🐻:</h2>
                        <p>
                            Conocer el comportamiento de los animales locales y cómo actuar ante un encuentro es vital. 
                            Si te encuentras con un animal, no corras; en lugar de eso, retrocede lentamente mientras mantienes contacto visual sin parecer amenazante.
                        </p>
                    </article>
                </div>

                <div className='sliderItem'>
                    <CarouselInfo data={plantsData} id='Forest' title='PLANTAS DEL BOSQUE'/>
                </div>

                <div className='sliderItem'>
                    <CarouselInfo data={animalsData} id='Forest' title='ANIMALES DEL BOSQUE'/>
                </div>
            
                <div className='sliderItem'>
                    <ForestAudioGame/>
                </div>

                <div className='sliderItem helpSlider' ref={gridInfoRef}>
                    <GridInfo scrollToStart={scrollToStart}/>
                </div>

            </main>  
        </>
    );

}

export default ForestMain;