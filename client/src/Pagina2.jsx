import React from 'react';
import Nav from './componentes/Nav.jsx';
import Perfil from './componentes/Perfil.jsx'; 

import './App.css'; 


const Pagina2 = () => (
  
  <div className="App"> 
    <Nav/>
    <Perfil  
      nombre="Arnold Schwarzenegger" 
      nick="terminator" 
      descripcion="He Derrotado a Skynet" 
      ubicacion="Los Angeles, CA" 
      enlace="https://www.imdb.com/name/nm0000216/" 
      fechaNacimiento="30/07/1947" 
      fechaUnion="01/01/2010" 
      siguiendo={10} 
      seguidores={1000000} 
    />
      
  </div>
);

export default Pagina2;