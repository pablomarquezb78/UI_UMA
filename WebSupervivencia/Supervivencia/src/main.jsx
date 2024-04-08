import React from 'react'

import ReactDOM from 'react-dom/client'
import Start from './Start/Start.jsx'
import MainGrid from './MainGridZone/MainGridZone.jsx'
import './CSS/main.css'
import './CSS/Start.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <main className='sliderContainer'>

    <div className='sliderItem'>
    <Start/>
    </div>
   
    <div className='sliderItem'>
    <MainGrid/>
    </div>

    </main>  
  </React.StrictMode>,
)
