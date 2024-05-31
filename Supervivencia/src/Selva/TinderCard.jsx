import veneno from './FotosAlimentos/veneno.png';
import comestible from './FotosAlimentos/saludable.png';

function TinderCard({card, index}) {
    const urlImage = 'src/Selva/FotosAlimentos/' + card.foto;
    const nombre = card.nombre;

    return (
        <>
            <img draggable="false" className='fruta' alt={index === 1 ? nombre : ''} src={urlImage}></img>
            <img draggable="false" src={veneno} className='venenoso'></img>
            <img draggable="false"  src={comestible} className='comestible'></img>
            <h2>{nombre}</h2>
        </>
    );
}

export default TinderCard;
