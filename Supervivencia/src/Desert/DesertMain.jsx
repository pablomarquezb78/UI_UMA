import React from 'react'
import DesertStart from './DesertStart.jsx'
import InfoSection from '../Info/InfoSection.jsx'
import DesertBagGame from './DesertBagGame.jsx';
import DesertCarrousel from '../Components/carouselPage/CarouselInfo.jsx';
import desertPlants from '/public/Desert/plantasDesierto.json';
import desertAnimals from '/public/Desert/animalesDesierto.json';
import {useRef} from 'react';
import '../CSS/main.css'
import '../CSS/Start.css'

function DesertMain(){

    const gridInfoRef = useRef(null);
    const startRef = useRef(null);

    const scrollToGridInfo = () => {
        gridInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            <main className='sliderContainer'>

                <div className='sliderItem' ref={startRef}>
                    <DesertStart scrollToGridInfo={scrollToGridInfo}/>
                </div>  

                <div className='sliderItem sliderTips'>
                    <article className='tipsSupervivencia'>
                        <h1>Tips de supervivencia en el Desierto:</h1>
                        <h2>Prepárate adecuadamente:</h2>
                        <p>
                            Antes de adentrarte en el desierto, lleva equipo esencial 
                            como un sombrero de ala ancha, gafas de sol, una brújula, un mapa, 
                            un botiquín de primeros auxilios, protector solar y una buena cantidad de agua y alimentos no perecederos.
                        </p>

                        <h2>Mantente hidratado:</h2>
                        <p>
                            El desierto es un lugar extremadamente seco y caluroso, lo que aumenta el riesgo de deshidratación. 
                            Bebe agua regularmente y evita la actividad física intensa durante las horas más calurosas del día.
                        </p>

                        <h2>Usa ropa adecuada:</h2>
                        <p>
                            Lleva ropa ligera y de manga larga para protegerte del sol y de la pérdida de humedad. 
                            Elige colores claros para reflejar la luz solar.
                        </p>

                        <h2>Haz un refugio seguro:</h2>
                        <p>
                            Construye un refugio para protegerte del sol durante el día y del frío durante la noche. 
                            Usa mantas, lonas o cualquier material disponible para crear sombra.
                        </p>

                        <h2>Haz fuego:</h2>
                        <p>
                            El fuego es esencial para mantenerte caliente durante las noches frías del desierto, cocinar alimentos y ahuyentar a los animales. 
                            Lleva contigo un encendedor o fósforos a prueba de agua, y practica encender fuego antes de ir al desierto.
                        </p>

                        <h2>Sigue un camino claro:</h2>
                        <p>
                            Usa una brújula y un mapa para evitar perderte. Marca tu camino con piedras o marcas visibles en el suelo 
                            para poder regresar si es necesario.
                        </p>
                    </article>
                </div>

                <div className='sliderItem sliderTips'>
                    <article className='tipsSupervivencia tipsSupervivencia2'>
                        <h2>Conoce las plantas comestibles y medicinales:</h2>
                        <p>
                            Aprende a identificar las plantas que puedes comer y aquellas que tienen propiedades medicinales. 
                            Evita tocar o comer plantas desconocidas, ya que muchas pueden ser venenosas.
                        </p>

                        <h2>Protégete del sol:</h2>
                        <p>
                            La exposición prolongada al sol puede causar quemaduras solares y golpe de calor. 
                            Usa protector solar de alto factor de protección, un sombrero y busca sombra durante las horas pico de radiación solar.
                        </p>

                        <h2>Ten cuidado con la fauna:</h2>
                        <p>
                            El desierto alberga muchos animales peligrosos, como serpientes, escorpiones y arañas. 
                            Mantén tu distancia y nunca molestes a los animales. Aprende a identificar sus rastros y comportamientos.
                        </p>

                        <h2>Mantén la calma y ten un plan de emergencia:</h2>
                        <p>
                            En situaciones de emergencia, es crucial mantener la calma y pensar con claridad. 
                            Ten un plan de emergencia y comunica tus planes a alguien antes de partir. 
                            Si te pierdes, quédate en un lugar seguro y trata de señalizar tu ubicación para que los rescatistas puedan encontrarte.
                        </p>

                        <h2>Aprende a encontrar agua:</h2>
                        <p>
                            El agua es esencial en el desierto. Aprende a identificar señales de agua subterránea, como la presencia de plantas específicas o depresiones en el terreno. 
                            Lleva contigo medios para purificar el agua que encuentres.
                        </p>

                        <h2>Conoce las técnicas de orientación:</h2>
                        <p>
                            La navegación en el desierto puede ser difícil debido a la falta de puntos de referencia claros. 
                            Aprende técnicas básicas de orientación utilizando el sol, las estrellas y las características del terreno.
                        </p>
                    </article>
                </div>

                <div className='sliderItem'>
                    <DesertCarrousel data={desertPlants} id='Desert' title={'PLANTAS DEL DESIERTO'}/>
                </div>

                <div className='sliderItem'>
                    <DesertCarrousel data={desertAnimals} id='Desert' title={'ANIMALES DEL DESIERTO'}/>
                </div>

                <div className='sliderItem'>
                    <DesertBagGame/>
                </div>

                <div className='sliderItem helpSlider' ref={gridInfoRef}>
                    <InfoSection/>
                </div>

            </main>  
        </>
    );

}

export default DesertMain;