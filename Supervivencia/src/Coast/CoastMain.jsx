import React from 'react'
import CoastStart from './CoastStart.jsx';
import InfoSection from '../Info/InfoSection.jsx'
import HigherOrLowerGame from './HigherOrLower.jsx'
import CoastCarousel from '../Components/carouselPage/CarouselInfo.jsx';
import coastAnimals from '/public/Coast/animalesCosta.json';
import coastPlants from '/public/Coast/plantasCosta.json';


import {useRef} from 'react';
import '../CSS/main.css';
import '../CSS/Start.css';

function CoastMain(){

    const gridInfoRef = useRef(null);
    const startRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            <main className='sliderContainer'>
                
                <div className='sliderItem' ref={startRef}>
                    <CoastStart scrollToGridInfo={scrollToGridInfo} />
                </div>

                <div className='sliderItem sliderTips'>
                    <article className='tipsSupervivencia'>
                        <h1>Tips de supervivencia en la Costa:</h1>
                        <h2>Prepárate adecuadamente🎒:</h2>
                        <p>
                            Lleva equipo esencial como un botiquín de primeros auxilios, un cuchillo, linterna, mapas, brújula o GPS, protector solar, y ropa adecuada para el clima. 
                            Infórmate sobre las condiciones climáticas y mareas de la zona.
                        </p>

                        <h2>Mantente hidratado💧:</h2>
                        <p>
                            La exposición al sol y al viento en la costa puede deshidratarte rápidamente. 
                            Lleva suficiente agua potable y aprende a identificar fuentes de agua segura. 
                            Si debes utilizar agua de fuentes naturales, asegúrate de purificarla adecuadamente antes de beberla.
                        </p>

                        <h2>Usa ropa adecuada🧥:</h2>
                        <p>
                            Lleva ropa ligera, de manga larga y de colores claros para protegerte del sol y de posibles picaduras de insectos. 
                            Utiliza un sombrero de ala ancha y gafas de sol para proteger tu cabeza y tus ojos de los rayos UV.
                        </p>

                        <h2>Haz un refugio seguro🏕️:</h2>
                        <p>
                            Construye un refugio que te proteja del sol, del viento y de la lluvia. 
                            Usa materiales naturales como ramas, hojas grandes y arena para crear una estructura básica.
                             Busca áreas protegidas del viento y la lluvia.
                        </p>

                        <h2>Haz fuego🔥:</h2>
                        <p>
                            El fuego es esencial para mantenerte caliente, cocinar alimentos y ahuyentar a los animales. 
                            Lleva contigo un encendedor o fósforos a prueba de agua, y practica encender fuego antes de tu viaje. 
                            Recoge madera seca y aprende a mantener el fuego controlado.
                        </p>

                    </article>
                </div>

                <div className='sliderItem sliderTips'>
                    <article className='tipsSupervivencia tipsSupervivencia2'>
                        <h2>Conoce las plantas comestibles y medicinales🍃:</h2>
                        <p>
                            Aprende a identificar las plantas y frutos comestibles que puedes encontrar en la costa, así como aquellas con propiedades medicinales. 
                            Evita tocar o comer plantas desconocidas, ya que algunas pueden ser venenosas.
                        </p>

                        <h2>Protégete de los insectos🦟:</h2>
                        <p>
                            Los insectos pueden ser molestos y peligrosos. 
                            Usa repelente de insectos y lleva mosquiteros si planeas acampar. 
                            Cubre tu piel tanto como sea posible, especialmente durante el amanecer y el atardecer cuando los insectos están más activos.
                        </p>

                        <h2>Ten cuidado con la fauna🦈:</h2>
                        <p>
                            La costa alberga muchos animales peligrosos, como tiburones, medusas y cocodrilos de mar. 
                            Mantén tu distancia y nunca molestes a los animales. 
                            Aprende a identificar sus rastros y comportamientos para evitar encuentros peligrosos.
                        </p>

                        <h2>Protege tus pertenencias📱:</h2>
                        <p>
                            Mantén tus pertenencias secas y a salvo del agua salada y la arena. 
                            Usa bolsas impermeables para guardar tus objetos de valor, documentos importantes y dispositivos electrónicos. 
                            Esto también ayuda a prevenir daños causados por la humedad y la corrosión.
                        </p>

                        <h2>Reconoce la hipotermia e insolación❄️☀️:</h2>
                        <p>
                            Aprende a reconocer los síntomas de hipotermia (como escalofríos intensos, confusión y fatiga) e insolación (como piel enrojecida, dolor de cabeza y náuseas). 
                            Actúa rápidamente para calentar o enfriar el cuerpo según sea necesario y evita la exposición prolongada a condiciones extremas.
                        </p>
                    </article>
                </div>

                <div className='sliderItem'>
                    <CoastCarousel data={coastPlants} id='Coast' title={'PLANTAS DE LA COSTA'}/>
                </div>

                <div className='sliderItem'>
                    <CoastCarousel data={coastAnimals} id='Coast' title={'ANIMALES DE LA COSTA'}/>
                </div>

                <div className='sliderItem'>
                    <HigherOrLowerGame/>
                </div>

                <div className='sliderItem' ref={gridInfoRef}>
                    <InfoSection/>
                </div>

            </main>  
        </>
    );

}

export default CoastMain;