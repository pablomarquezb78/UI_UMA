import veneno from '/Selva/FotosAlimentos/veneno.png';
import comestible from '/Selva/FotosAlimentos/saludable.png';

function TinderCard({card, index, tab}) {
    const urlImage = card.foto;
    const nombre = card.nombre;

    return (
        <>
            <img aria-label={index === 1 ? nombre : ''} draggable="false" className='fruta' alt={index === 1 ? nombre : ''} src={urlImage} tabIndex={tab}></img>
            <img draggable="false" src={veneno} className='venenoso'></img>
            <img draggable="false"  src={comestible} className='comestible'></img>
            <h2>{nombre}</h2>
        </>
    );
}

export default TinderCard;
