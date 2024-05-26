function TinderCard({ card}) {
    const urlImage = 'src/Selva/FotosAlimentos/' + card.foto;
    const nombre = card.nombre;

    return (
        <>
            <img src={urlImage} />

            <h2>{nombre}</h2>
        </>
    );
}

export default TinderCard;
