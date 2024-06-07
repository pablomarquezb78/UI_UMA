import React from 'react';
import { useRef } from 'react';
import GridInfo from '../Info/InfoSection.jsx';
import '../CSS/main.css';
import '../CSS/Start.css';
import '../Components/CSS/TipsSupervivencia.css';
import TinderGame from './TinderGame.jsx';
import SelvaStart from './SelvaStart.jsx';
import junglePlants from '../../public/Selva/alimentos-veneno.json';
import jungleAnimals from '../../public/Selva/animales-jungla.json';
import JungleCarrousel from '../Components/carouselPage/CarouselInfo.jsx';

function SelvaMain() {
    const gridInfoRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <main className='sliderContainer'>
                <div className='sliderItem'>
                    <SelvaStart scrollToGridInfo={scrollToGridInfo} />
                </div>

                <div className='sliderItem sliderTips'>
                    <article className='tipsSupervivencia'>
                        <h1>Tips de supervivencia en la Jungla:</h1>
                        <h2>Prepárate adecuadamente🎒:</h2>
                        <p>
                            Antes de adentrarte en la jungla, lleva equipo esencial 
                            como un machete, una brújula, un mapa, 
                            un botiquín de primeros auxilios, repelente 
                            de insectos y una buena cantidad de agua y alimentos no perecederos.
                        </p>

                        <h2>Mantente hidratado💧:</h2>
                        <p>
                            La jungla es un lugar muy húmedo y caluroso, lo que aumenta el riesgo de deshidratación. 
                            Bebe agua regularmente y aprende a identificar fuentes de agua potable, 
                            como ríos o arroyos. Si es necesario, hierve el agua para purificarla.
                        </p>

                        <h2>Usa ropa adecuada🧥:</h2>
                        <p>
                            Lleva ropa ligera y de manga larga para protegerte de los insectos y las plantas venenosas. 
                            Elige colores neutros para no llamar la atención de los animales.
                        </p>

                        <h2>Haz un refugio seguro🏕️:</h2>
                        <p>
                            Construye un refugio elevado para mantenerte seco y protegido de los insectos y animales. 
                            Usa hojas grandes, ramas y lianas para crear una estructura básica.
                        </p>

                        <h2>Haz fuego🔥:</h2>
                        <p>
                            El fuego es esencial para mantenerte caliente, cocinar alimentos y ahuyentar a los animales. 
                            Lleva contigo un encendedor o fósforos a prueba de agua, y practica encender fuego antes de ir a la jungla.
                        </p>

                    </article>
                </div>

                <div className='sliderItem sliderTips'>
                    <article className='tipsSupervivencia tipsSupervivencia2'>

                        <h2>Sigue un camino claro🧭:</h2>
                        <p>
                            Usa una brújula y un mapa para evitar perderte. Marca tu camino con cintas o marcas visibles en los árboles 
                            para poder regresar si es necesario.
                        </p>                        
                        
                        <h2>Conoce las plantas comestibles y medicinales🌿:</h2>
                        <p>
                            Aprende a identificar las plantas que puedes comer y aquellas que tienen propiedades medicinales. 
                            Evita tocar o comer plantas desconocidas, ya que muchas pueden ser venenosas.
                        </p>

                        <h2>Protégete de los insectos🦟:</h2>
                        <p>
                            Los insectos pueden ser molestos y peligrosos, especialmente los mosquitos que transmiten enfermedades 
                            como la malaria. Usa repelente de insectos, duerme con mosquiteros y cubre tu piel tanto como sea posible.
                        </p>

                        <h2>Ten cuidado con la fauna🐅:</h2>
                        <p>
                            La jungla alberga muchos animales peligrosos, como serpientes, jaguares y arañas. 
                            Mantén tu distancia y nunca molestes a los animales. Aprende a identificar sus rastros y comportamientos.
                        </p>

                        <h2>Mantén la calma y ten un plan de emergencia📢:</h2>
                        <p>
                            En situaciones de emergencia, es crucial mantener la calma y pensar con claridad. 
                            Ten un plan de emergencia y comunica tus planes a alguien antes de partir. 
                            Si te pierdes, quédate en un lugar seguro y trata de señalizar tu ubicación para que los rescatistas puedan encontrarte.
                        </p>
                    </article>
                </div>

                <div className='sliderItem'>
                    <JungleCarrousel data={junglePlants} id='Jungle' title={'PLANTAS DE LA JUNGLA'} />
                </div>

                <div className='sliderItem'>
                    <JungleCarrousel data={jungleAnimals} id='Jungle' title={'ANIMALES DE LA JUNGLA'} />
                </div>

                <div className='sliderItem'>
                    <TinderGame />
                </div>

                <div className='sliderItem helpSlider' ref={gridInfoRef}>
                    <GridInfo/>
                </div>
            </main>
        </>
    );
}

export default SelvaMain;
