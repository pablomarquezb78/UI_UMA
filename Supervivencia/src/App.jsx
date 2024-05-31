import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './Index.jsx';
import Prueba from './Prueba.jsx';
import MemoryGame from './Mountain/MemoryGame.jsx';
import ForestMain from './Forest/ForestMain';
import MountainMain from './Mountain/MountainMain.jsx';
import DesertMain from './Desert/DesertMain.jsx';
import CoastMain from './Coast/CoastMain.jsx';
import FaqPage from './Info/FaqPageMain.jsx';
import AboutUs from './Info/AboutUsMain.jsx';
import SelvaMain from './Selva/SelvaMain.jsx';
import UnderConstruction from './UnderCronstuction/UnderConstructionMain.jsx';

function App() {
    return (
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="mountain" element={<MountainMain/>}/>
                <Route path="/forest" element={<ForestMain/>}/>
                <Route path='/desert' element={<DesertMain/>}/>
                <Route path='/coast' element={<CoastMain/>}/>
                <Route path='/jungle' element={<SelvaMain/>}/>
                <Route path="/prueba" element={<Prueba/>}/>
                <Route path="/memory" element={<MemoryGame/>}/>
                <Route path="/FAQ" element={<FaqPage/>}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path='/UnderConstruction' element={<UnderConstruction/>}/>
            </Routes>
    );
};


export default App;