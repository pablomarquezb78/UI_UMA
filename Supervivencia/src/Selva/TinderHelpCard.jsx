import { useRef } from "react";
import useFitText from "use-fit-text";
import veneno from './FotosAlimentos/veneno.png'
import correcto from './FotosAlimentos/correcto.png'

function TinderHelpCard({dragEvent}) {
    const { fontSize: fontSize1, ref: ref1 } = useFitText({
        maxFontSize: 90,
        minFontSize: 5,
    });

    const { fontSize: fontSize2, ref: ref2 } = useFitText({
        maxFontSize: 90,
        minFontSize: 5,
    });

    const { fontSize: fontSize3, ref: ref3 } = useFitText({
        maxFontSize: 90,
        minFontSize: 5,
    });

    const { fontSize: fontSize4, ref: ref4 } = useFitText({
        maxFontSize: 90,
        minFontSize: 20,
    });

    return(
        <div id="helpTinder" onMouseDown={(event) => dragEvent(event)} onTouchStart={(event) => dragEvent(event)}>
            <h2 ref={ref1} style={{ fontSize: fontSize1, height: '10%', width: '90%', letterSpacing: '1px', lineHeight: '1.2' }}>¿Necesitas ayuda?</h2>
            <p ref={ref2} style={{ fontSize: fontSize2, height: '30%', width: '90%', letterSpacing: '1px', lineHeight: '1.2'}}>El juego consiste en arrastrar la tarjeta a la derecha si crees que el alimento no es venenoso o arrastrarlo a la izquierda si crees que lo es.</p>
            <h2 ref={ref3} style={{ fontSize: fontSize3, height: '10%' , width: '90%', letterSpacing: '1px', lineHeight: '1.2'}}>Los indicadores son:</h2>
            <div>
                <div className='helpResultImage'>
                    <h3 ref={ref4} style={{ fontSize: fontSize4, height: '15%' , width: '90%', letterSpacing: '1px', lineHeight: '1.2' }}>VENENOSO</h3>
                    <span>
                        <img src={veneno} alt="Veneno"></img>
                    </span>
                </div>
                <div className='helpResultImage'>
                    <h3  ref={ref4} style={{ fontSize: fontSize4, height: '15%' , width: '90%', letterSpacing: '1px', lineHeight: '1.2' }}>COMESTIBLE</h3>
                    <span>
                        <img src={correcto} alt="Correcto"></img>
                    </span>
                </div>
            </div>
            <h3 ref={ref1} style={{ fontSize: fontSize1, height: '10%' , width: '90%', letterSpacing: '1px', lineHeight: '1.2' }}>Prueba a deslizarme!</h3>
        </div>
    )
}

export default TinderHelpCard;
