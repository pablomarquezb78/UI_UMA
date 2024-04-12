import React from 'react'
import Start from './Start/Start.jsx'
import MainGrid from './GridZone/GridZone.jsx'
import { Outlet, Link } from "react-router-dom";
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
                <MainGrid/>
                </div>

            </main>  
            <Outlet/>
        </>
    );

}

export default Index;