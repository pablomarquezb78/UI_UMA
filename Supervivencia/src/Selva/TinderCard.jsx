

function TinderCard({card, index}){
    

    let urlImage = 'src/Selva/FotosAlimentos/'+card.foto
    
    return(
        
        <>
        <img src={urlImage}></img>

        <h2>
            {card.nombre}
        </h2>
        </>
    )
    
    

}

export default TinderCard;
