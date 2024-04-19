import react from 'react';

import '../CSS/Grid.css';

function GridInfo() {

   return(
    
    <section id="sectionGrid" className="vw-100 vh-100">

    <div className='gridInfoSection'>
       
        <div id="leftCard" className="gridCard">
            <h1>FAQ</h1>
            <h5>¿Sobrevivir en ciudad?</h5>
            <p>
            Hemos planteado la supervivencia para un supuesto caso apocaliptico.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
        </div>

        <div id="rigthCard" className="gridCard">
            <h1>Sobre Nosotros</h1>
            <h2>Nos encantan las tetas gordas.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </h2>
        </div>

    </div>

    </section>

    )
}

export default GridInfo;