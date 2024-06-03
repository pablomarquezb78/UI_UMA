import React from "react";
import './Desert.css';
import useFitText from "use-fit-text";


function ItemInfoContainer({itemList,currentIndex,Bottom}){

    const idItemInfo = Bottom ? 'itemInfoBottom' : 'itemInfoTop';

    const { fontSize, ref } = useFitText({
        maxFontSize: Bottom ? 150 : 100,
        minFontSize: 10,
    });

    const heightTitle = Bottom ? '20%' : '5%';
    const widthTitle = '100%';

    const heightText = Bottom ?  '40%' : '100%';
    const widthText = Bottom ? '100%' : '45%';

    return(
        <>
            {!Bottom && (
                    <h1 id="itemDisplayedTop" ref={ref} style={{ fontSize, height: heightTitle , width: widthTitle, letterSpacing: '1px', lineHeight: '1.2' }} className="text-white text-center">
                    {itemList[currentIndex].nombre}
                    </h1>
            )}
            <div id={idItemInfo}>
                {Bottom && (
                    <h1 id="itemDisplayedBottom" ref={ref} style={{ fontSize, height: heightTitle , width: widthTitle, letterSpacing: '1px', lineHeight: '1.2' }} className="text-white text-center">
                    {itemList[currentIndex].nombre}
                    </h1>
                )}
                <p id='pros' ref={ref} style={{ fontSize, height: heightText, width: widthText, letterSpacing: '1px', lineHeight: '1.2'}} className="text-white">
                    Ventajas✅: {itemList[currentIndex].ventajas}
                </p>
                <p id='cons' ref={ref} style={{ fontSize, height: heightText, width: widthText, letterSpacing: '1px', lineHeight: '1.2' }} className="text-white">
                    Desventajas❌: {itemList[currentIndex].desventajas}
                </p>
                {/*PARA DEBUGEAR EL FITTEXT AÑADIR border: "1px solid red" AL STYLE*/}
            </div>
        </>
    );
}


export default ItemInfoContainer;