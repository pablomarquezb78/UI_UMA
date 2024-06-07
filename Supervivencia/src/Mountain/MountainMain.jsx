import React from 'react';
import MountainStart from './MountainStart.jsx';
import GridInfo from '../Info/InfoSection.jsx';
import {useRef} from 'react';
import '../CSS/main.css';
import '../CSS/Start.css';
import MemoryGame from './MemoryGame.jsx';
import MountainInitGame from './MountainInitGame.jsx';


import MountainCarousel from '../Components/carouselPage/CarouselInfo.jsx';
import MountainPlants from '/public/Mountain/1plantasMountain.json';
import MountainAnimals from '/public/Mountain/2animalesMountain.json';


function MountainMain(){

    const gridInfoRef = useRef(null);
    const startRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToStart = () => {
        startRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            <main className='sliderContainer'>

                <div className='sliderItem' ref={startRef}>
                    <MountainStart scrollToGridInfo={scrollToGridInfo}/>
                </div>

                <div className='sliderItem sliderTips'>
                    <article className='tipsSupervivencia'>
                        <h1>Tips de supervivencia en la Montaña:</h1>
                        <h2>Prepárate adecuadamente🎒:</h2>
                        <p>
                            Antes de adentrarte en la montaña, lleva equipo esencial como ropa térmica, un botiquín de primeros auxilios, una brújula, un mapa, un silbato, una linterna y suficiente agua y alimentos energéticos.
                        </p>

                        <h2>Conoce el clima🌥️:</h2>
                        <p>
                            El clima en la montaña puede cambiar rápidamente. Infórmate sobre las condiciones climáticas antes de salir y prepárate para posibles cambios bruscos de temperatura y condiciones meteorológicas.
                        </p>

                        <h2>Usa ropa en capas🧥:</h2>
                        <p>
                            Viste en capas para poder ajustar tu temperatura corporal. Usa una capa base que absorba la humedad, una capa intermedia para aislamiento y una capa exterior impermeable y cortaviento.
                        </p>

                        <h2>Haz un refugio seguro🏕️:</h2>
                        <p>
                            Si te encuentras en una situación de emergencia, construye un refugio para protegerte del viento, la lluvia y el frío. Usa ramas, hojas y cualquier material disponible para crear una estructura que te mantenga seco y abrigado.
                        </p>

                        <h2>Ten un plan de emergencia📢:</h2>
                        <p>
                            Comunica tus planes a alguien antes de partir y establece puntos de referencia claros en tu ruta. En caso de emergencia, mantén la calma, evalúa la situación y sigue tu plan de emergencia.
                        </p>
                    </article>
                </div>

                <div className='sliderItem sliderTips'>
                    <article className='tipsSupervivencia tipsSupervivencia2'>
                        <h2>Mantén la hidratación y la energía💧:</h2>
                        <p>
                            Bebe agua regularmente y consume alimentos energéticos para mantener tus niveles de energía. En la montaña, el esfuerzo físico y la altitud pueden aumentar la deshidratación y el agotamiento.
                        </p>

                        <h2>Aprende a orientarte🧭:</h2>
                        <p>
                            Usa un mapa y una brújula para mantenerte en el camino correcto. Familiarízate con las técnicas de orientación y lee el terreno para evitar perderte.
                        </p>

                        <h2>Protégete del sol🏖️:</h2>
                        <p>
                            A mayor altitud, la radiación solar es más intensa. Usa protector solar, gafas de sol y un sombrero para protegerte de los rayos UV.
                        </p>

                        <h2>Ten cuidado con la fauna⚠️:</h2>
                        <p>
                            La montaña alberga diversos animales, algunos de los cuales pueden ser peligrosos. Mantén una distancia segura, no alimentes a los animales y guarda tu comida de manera adecuada.
                        </p>

                        <h2>Conoce las técnicas de primeros auxilios🚑:</h2>
                        <p>
                            Aprende las técnicas básicas de primeros auxilios para poder actuar en caso de una emergencia médica. Saber cómo tratar lesiones, hipotermia y otros problemas comunes en la montaña puede salvar vidas.
                        </p>
                    </article>
                </div>

                <div className='sliderItem'>
                    <MountainCarousel data={MountainPlants} id='Mountain' title={'PLANTAS DE MONTAÑA'}/>
                </div>

                <div className='sliderItem'>
                    <MountainCarousel data={MountainAnimals} id='Mountain' title={'FAUNA DE MONTAÑA'}/>
                </div>

                <div className='sliderItem'>
                    <MountainInitGame/>
                </div>

                <div className='sliderItem helpSlider' ref={gridInfoRef}>
                    <GridInfo scrollToStart={scrollToStart}/>
                </div>

            </main>  
        </>
    );

}

export default MountainMain;
