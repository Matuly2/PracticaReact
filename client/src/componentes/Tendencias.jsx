import React from 'react';
import './css/tendencias.css';

const Tendencia = ({ numero, nombre, posts }) => {
  return (
    <div className="tendencia">
      <p><span className="numero">{numero}.-</span> Tendencia</p>
      <h3>{nombre}</h3>
      <p><span className="posts">{posts}</span> posts</p>
    </div>
  );
};

export default Tendencia;