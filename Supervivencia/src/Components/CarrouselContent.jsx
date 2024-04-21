import React from "react";

function CarrouselContent (props){
    return(
        <>
            <h3>
                {props.texto}
            </h3>
            <img src={props.imagen}></img>
        </>
    );
}

export default CarrouselContent;