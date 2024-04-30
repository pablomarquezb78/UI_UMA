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
import FaqPage from './Info/FaqPageMain.jsx';
import SelvaStart from './Selva/SelvaStart.jsx';

function App() {
    return (
            <Routes>
                <Route path="/UI_UMA/" element={<Index />} />
                <Route path="/UI_UMA/mountain" element={<MountainMain/>}/>
                <Route path="/UI_UMA/forest" element={<ForestMain/>}/>
                <Route path='/UI_UMA/desert' element={<DesertMain/>}/>
                <Route path='/UI_UMA/coast' element={<CoastMain/>}/>
                <Route path='/UI_UMA/selva' element={<SelvaStart/>}/>
                <Route path="/UI_UMA/prueba" element={<Prueba/>}/>
                <Route path="/UI_UMA/memory" element={<MemoryGame/>}/>
                <Route path="/UI_UMA/FAQ" element={<FaqPage/>}/>
                {/* <Route path="/:name" element={<Index/>}/> */}
            </Routes>
    );
};


export default App;