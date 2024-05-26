import veneno from './FotosAlimentos/veneno.png';
import comestible from './FotosAlimentos/saludable.png';

function TinderCard({card, index}) {
    const urlImage = 'src/Selva/FotosAlimentos/' + card.foto;
    const nombre = card.nombre;

    return (
        <>
            <img className='fruta' alt={index === 1 ? 'el shokas' : ''}src={urlImage} />
            <img src={veneno} className='venenoso'></img>
            <img src={comestible} className='comestible'></img>
            <h2>{nombre}</h2>
        </>
    );
}

export default TinderCard;
