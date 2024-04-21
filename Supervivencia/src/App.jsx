import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/mountain" element={<MountainMain/>}/>
                <Route path="/forest" element={<ForestMain/>}/>
                <Route path='/desert' element={<DesertMain/>}/>
                <Route path='/coast' element={<CoastMain/>}/>
                <Route path='/city' element={<CityMain/>}/>
                <Route path="/prueba" element={<Prueba/>}/>
                <Route path="/memory" element={<MemoryGame/>}/>
                <Route path="/:name" element={<Prueba/>}/>
            </Routes>
        </Router>
    );
};


export default App;