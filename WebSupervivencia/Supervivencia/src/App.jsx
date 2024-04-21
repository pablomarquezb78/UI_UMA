import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Index.jsx';
import Prueba from './Prueba.jsx';
import MemoryGame from './Components/MemoryGame.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/prueba" element={<Prueba/>}/>
                <Route path="/memory" element={<MemoryGame/>}/>
                <Route path="/:name" element={<Prueba/>}/>
            </Routes>
        </Router>
    );
};


export default App;