import React from 'react';
import Nav from './componentes/Nav.jsx';
import Perfil from './componentes/Perfil.jsx'; 
import {TwitterFollowCard} from './componentes/TwitterFollowCard.jsx';
import Tendencia from './componentes/Tendencias.jsx';
import imagenGrande from './componentes/img/hasbullaAvatar.jpg';
import imagenRedonda from './componentes/img/hasbullaEncabezado.jpg';
import './App.css'; 


const Pagina2 = () => (
  
  <div className="App"> 
    <Nav/>
    <Perfil  
      nombre="Hasbulla" 
      nick="hasbulla" 
      descripcion="Soy el puto amo" 
      ubicacion="Dagestan, Rusia" 
      enlace="https://www.instagram.com/hasbulla.magomedov/" 
      fechaNacimiento="30/07/2003" 
      fechaUnion="01/01/2017" 
      siguiendo={33} 
      seguidores={9000000} 
      imagenGrande={imagenGrande}
      imagenRedonda={imagenRedonda}
    />
    <section className="twitterFollowCard">
      <p>A Quién Seguir</p>
        <TwitterFollowCard formatUserName={format} initialIsFollowing name="Vladimir Putin" userName="TheBigBossPutin">
          Vladimir Putin
        </TwitterFollowCard>
        
        
        <TwitterFollowCard formatUserName={format} initialIsFollowing={false} name="Volodimir Zelenski" userName="zelenskyyUa">
          Volodimir Zelenski
        </TwitterFollowCard>
    
        
          <h2>Tendencias</h2>
          <Tendencia numero={1} nombre="#Rusia" posts="20 mil" />
          <Tendencia numero={2} nombre="#Ucrania" posts="65 mil" />
          <Tendencia numero={3} nombre="#Bombas" posts="20 mil" />
          <Tendencia numero={4} nombre="#Horror" posts="10 mil" />
        </section>
      
  </div>
);

export default Pagina2;