import React from 'react'
import Start from './Start/Start.jsx'
import GridBiomes from './GridZone/GridBiomes.jsx'
import GridInfo from './GridZone/GridInfo.jsx'
import './CSS/main.css'
import './CSS/Start.css'

function Index(){

    return(
        <>
            <main className='sliderContainer'>

                <div className='sliderItem'>
                <Start/>
                </div>
            
                <div className='sliderItem'>
                <GridBiomes/>
                </div>

                <div className='sliderItem'>
                <GridInfo/>
                </div>

            </main>  
        </>
    );

}

export default Index;