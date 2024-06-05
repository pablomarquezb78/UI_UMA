import React, { useState } from 'react';
import hogueraSeca from '/VideosGrid/hoguera_seca.png';
import hogueraPrendida from '/VideosGrid/hoguera_prendida.gif';
import Smoke from '/VideosGrid/smoke.gif';

import './Grid.css';
import GridCard from './GridCard';

function GridZone() {
    const [isFire, setIsFire] = useState(1); // 0 (no fuego), 1 (fuego) y 2 (smoke)
    const [startFire, setStartFire] = useState();
    const [isShake, setIsShake] = useState(false);

    const fireHandler = () => {
        if (startFire - 1 === 0) {
            setIsFire(1);
        }
        setIsShake(true);

        setTimeout(() => {
            setIsShake(false);
        }, 650);

        setStartFire(startFire - 1);
    };

    const overFireHandler = () => {
        setStartFire(Math.floor(Math.random() * (7 - 1 + 1)) + 1);
        setIsFire(2);

        setTimeout(() => {
            setIsFire(0);
        }, 500);
    };

    return (
        <section>
            <div className='gridSection'>
                <GridCard nameVideo='desierto' texto='DESIERTO' linkTo='desert' />
                <article className='gridCard sobrevive'>
                    <h1 id='sobrevive'>sobrevive.</h1>
                    <div className='fogata'>
                        <img hidden={isFire !== 2} src={Smoke} alt="Smoke" />
                        <img hidden={isFire !== 1} onClick={overFireHandler} src={hogueraPrendida} alt="Hoguera Prendida" />
                        <img className={isShake ? 'shake-animation' : ''} hidden={isFire !== 0} onClick={fireHandler} src={hogueraSeca} alt="Hoguera Seca" />
                    </div>
                </article>
                <GridCard nameVideo='montana' texto='MONTAÑA' linkTo='mountain' />
                <GridCard nameVideo='jungla' texto='JUNGLA' linkTo='jungle' />
                <GridCard nameVideo='costa' texto='COSTA' linkTo='coast' />
                <GridCard nameVideo='bosque' texto='BOSQUE' linkTo='forest' />
            </div>
        </section>
    );
}

export default GridZone;
