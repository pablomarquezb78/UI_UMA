import { useRef } from "react";
import useFitText from "use-fit-text";
import veneno from './FotosAlimentos/veneno.png';
import comestible from './FotosAlimentos/saludable.png';

function TinderHelpCard({ dragEvent, tabIndex}) {
    const { fontSize: fontSize1, ref: ref1 } = useFitText({
        maxFontSize: 200,
        minFontSize: 5,
    });

    const { fontSize: fontSize2, ref: ref2 } = useFitText({
        maxFontSize: 200,
        minFontSize: 5,
    });

    const { fontSize: fontSize3, ref: ref3 } = useFitText({
        maxFontSize: 200,
        minFontSize: 5,
    });

    const { fontSize: fontSize4, ref: ref4 } = useFitText({
        maxFontSize: 200,
        minFontSize: 20,
    });

    return (
        <section 
            className="helpTinder" 
            onMouseDown={(event) => dragEvent(event)} 
            onTouchStart={(event) => dragEvent(event)}
            tabIndex={tabIndex} 
            role="document" 
            aria-live="off"
        >
            <h2 
                ref={ref1} 
                style={{ fontSize: fontSize1, height: '10%', width: '90%', letterSpacing: '1px', lineHeight: '1.2' }} 
                tabIndex="0"
            >
                ¿Necesitas ayuda?
            </h2>
            <p 
                ref={ref2} 
                style={{ fontSize: fontSize2, height: '30%', width: '90%', letterSpacing: '1px', lineHeight: '1.2' }} 
                tabIndex="0"
            >
                El juego consiste en arrastrar la tarjeta a la derecha si crees que el alimento no es venenoso o arrastrarlo a la izquierda si crees que lo es.
            </p>
            <h3 
                ref={ref3} 
                style={{ fontSize: fontSize3, height: '10%', width: '90%', letterSpacing: '1px', lineHeight: '1.2' }} 
                tabIndex="0"
            >
                Los indicadores son:
            </h3>
            <div>
                <div className='helpResultImage'>
                    <h3 
                        ref={ref4} 
                        style={{ fontSize: fontSize4, height: '15%', width: '90%', letterSpacing: '1px', lineHeight: '1.2' }} 
                        tabIndex="0"
                    >
                        VENENOSO
                    </h3>
                    <span>
                        <img src={veneno} alt="Veneno"></img>
                    </span>
                </div>
                <div className='helpResultImage'>
                    <h3 
                        ref={ref4} 
                        style={{ fontSize: fontSize4, height: '15%', width: '90%', letterSpacing: '1px', lineHeight: '1.2' }} 
                        tabIndex="0"
                    >
                        COMESTIBLE
                    </h3>
                    <span>
                        <img src={comestible} alt="Correcto"></img>
                    </span>
                </div>
            </div>
            <h3 
                ref={ref1} 
                style={{ fontSize: fontSize1, height: '10%' , width: '90%', letterSpacing: '1px', lineHeight: '1.2' }} 
                tabIndex="0"
            >
                Prueba a deslizarme!
            </h3>
        </section>
    );
}

export default TinderHelpCard;
