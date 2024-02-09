import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './Rutas.jsx';

import './index.css';



 
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