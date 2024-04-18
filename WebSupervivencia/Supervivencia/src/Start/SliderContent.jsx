import React from "react";

function SliderContent (props){
    return(
        <>
            <h3>
                {props.texto}
            </h3>
            <img src={props.imagen}></img>
        </>
    );
}

export default SliderContent;