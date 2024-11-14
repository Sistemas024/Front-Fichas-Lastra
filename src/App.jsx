import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componente/Login';
import HomeAdmin from './componente/HomeAdmin'
import LoginAdmin from './componente/LoginAdmin'
import Consulta from './componente/Consulta'
import Register from './componente/Register';
import Home from './componente/Home'; // Asegúrate de importar el componente Home

function App() {
    return (
        <Router>
            <Routes>
                {/* Define tus rutas principales */}
                <Route path="/" element={<Home />} />
                <Route path="/home-admin" element={<HomeAdmin />} />
                <Route path="/admon" element={<LoginAdmin />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Consulta" element={<Consulta />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
