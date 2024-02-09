import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Pagina2 from './Pagina2.jsx'; 
 
const AppRoutes = () => {
return (
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/pagina2" element={<Pagina2 />} />
    </Routes>
);
};

export default AppRoutes;