function TinderCard({card, index}) {
    const urlImage = 'src/Selva/FotosAlimentos/' + card.foto;
    const nombre = card.nombre;

    return (
        <>
            <img alt={index === 1 ? 'el shokas' : ''}src={urlImage} />

            <h2>{nombre}</h2>
        </>
    );
}

export default TinderCard;
