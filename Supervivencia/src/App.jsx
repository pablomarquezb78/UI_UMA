import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './Index.jsx';
import Prueba from './Prueba.jsx';
import MemoryGame from './Components/MemoryGame.jsx';
import ForestMain from './Forest/ForestMain';
import MountainMain from './Mountain/MountainMain.jsx';
import DesertMain from './Desert/DesertMain.jsx';
import CoastMain from './Coast/CoastMain.jsx';
import CityMain from './City/CityMain.jsx';

function App() {
    return (
            <Routes>
                <Route path="/UI_UMA" element={<Index />} />
                <Route path="/mountain" element={<MountainMain/>}/>
                <Route path="/forest" element={<ForestMain/>}/>
                <Route path='/desert' element={<DesertMain/>}/>
                <Route path='/coast' element={<CoastMain/>}/>
                <Route path='/city' element={<CityMain/>}/>
                <Route path="/prueba" element={<Prueba/>}/>
                <Route path="/memory" element={<MemoryGame/>}/>
                {/* <Route path="/:name" element={<Prueba/>}/> */}
            </Routes>
    );
};


export default App;