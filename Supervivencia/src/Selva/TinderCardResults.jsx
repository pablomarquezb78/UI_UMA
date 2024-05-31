
function TinderCardResut({resetAction, wiseChoice, totalCards}){

    return(
        <div className=" puntuacionTinder position-absolute z-1 bg-white rounded p-2 border border-black" >
            <h2>Has obtenido {wiseChoice} / {totalCards} de aciertos!</h2>
            <div className="resultstinderdiv">
                <button onClick={() => {resetAction()}} className="custom-button">Volver a jugar</button>  
            </div>    
        </div>
    )
}

export default TinderCardResut;