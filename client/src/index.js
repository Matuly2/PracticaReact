import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import Rutas from './Rutas.jsx';



const RootComponent = () => {
  return (
    
      <React.StrictMode>
        <Router>
          <Rutas />
        </Router>
      </React.StrictMode>
    
  );
}; 

ReactDOM.createRoot(document.getElementById('root')).render(<RootComponent />);