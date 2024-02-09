import React from 'react';
import Nav from './componentes/Nav.jsx';
import Perfil from './componentes/Perfil.jsx'; 
import {TwitterFollowCard} from './componentes/TwitterFollowCard.jsx';
import Tendencia from './componentes/Tendencias.jsx';
import './App.css'; 

const format = (userName) =>`@${userName}`;
const App = () => (
  
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
      <section className="twitterFollowCard">
      <p>A Quién Seguir</p>
        <TwitterFollowCard formatUserName={format} initialIsFollowing name="Pedro Sánchez" userName="sanchezcastejon">
            Pedro Sánchez
        </TwitterFollowCard>
        
        
        <TwitterFollowCard formatUserName={format} initialIsFollowing={false} name="Mariano Rajoy" userName="marianorajoy">
            Mariano Rajoy
        </TwitterFollowCard>
    
        
          <h2>Tendencias</h2>
          <Tendencia numero={1} nombre="#RealMadrid" posts="50 mil" />
          <Tendencia numero={2} nombre="#BarcelonaFC" posts="45 mil" />
          <Tendencia numero={3} nombre="#CancerInvestigacion" posts="30 mil" />
          <Tendencia numero={4} nombre="#AtleticoMadrid" posts="40 mil" />
        </section>
  </div>
);

export default App;