import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Index.jsx';
import Prueba from './Prueba.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/prueba" element={<Prueba/>}/>
            </Routes>
        </Router>
    );
};


export default App;