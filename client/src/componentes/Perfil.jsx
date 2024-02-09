import React from 'react';
/*
import imagenGrande from './img/perfil-largo.webp';
import imagenRedonda from './img/perfil-corto.jpg';
*/
import './css/perfil.css';

const Perfil = ({ nombre, nick, descripcion, ubicacion, enlace, fechaNacimiento, fechaUnion, siguiendo, seguidores, imagenGrande,imagenRedonda }) => (
  <div className="contenedor-perfil">
    <img src={imagenGrande} alt="Imagen grande" className="imagen-grande" />
    <img src={imagenRedonda} alt="Imagen redonda" className="imagen-redonda" />
    <h1>{nombre}</h1>
    <h2>@{nick}</h2>
    <p>{descripcion}</p>
    <div className="fila">
      <p><i className="fas fa-map-marker-alt"></i> {ubicacion}</p>
      <p><i className="fas fa-link"></i> <a href={enlace} target="_blank" rel="noopener noreferrer">{enlace}</a></p>
    </div>
    <div className="fila">
      <p><i className="fas fa-birthday-cake"></i> Fecha de nacimiento: {fechaNacimiento}</p>
      <p><i className="fas fa-calendar-alt"></i> Se unió en {fechaUnion}</p>
    </div>
    <div className="fila">
      <p>{siguiendo} Siguiendo</p>
      <p>{seguidores} Seguidores</p>
    </div>
  </div>
);

export default Perfil;