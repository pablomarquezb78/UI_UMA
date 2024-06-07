import React from "react";
import './BiomeStart.css';
 

function BiomeStart ({video, title, subtitle}){

    return(

        <section className="w-100 h-100">

            <header className="w-100 biomeStartHeader">

            <div className="w-100 biomeStartDivHeader">

                <video className="w-100" control={"false"} muted alt={"Imagen inicio bioma "+title} autoPlay loop>
                    <source src={'/VideosGrid/' + video + '.mp4'} type="video/mp4"></source>
                </video>
                <div className="w-100 h-100 position-absolute top-0"></div>
                <div className="d-flex w-100 justify-content-center align-items-center position-absolute biomeStartTextHeader">
                    <article className="d-flex justify-content-center align-items-center flex-column">
                    <h1>{title}</h1>
                    <footer>{subtitle}</footer>
                    </article>
                </div>
            
            </div>

          
            </header>
    
        </section>
    )
}

export default BiomeStart;