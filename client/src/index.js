import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import Rutas from './Rutas';



const RootComponent = () => {
  return (
    <ModoProvider>
      <React.StrictMode>
        <Router>
          <Rutas />
        </Router>
      </React.StrictMode>
    </ModoProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<RootComponent />);