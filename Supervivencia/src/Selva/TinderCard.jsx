

function TinderCard({card, index}){
    

    const urlImage = 'src/Selva/FotosAlimentos/'+card.foto
    const nombre = card.nombre

    return(
        
        <>
        <img alt={nombre} src={urlImage}></img>

        <h2>
            {nombre}
        </h2>
        </>
    )
    
    

}

export default TinderCard;
