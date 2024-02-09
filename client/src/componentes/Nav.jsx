import React from 'react';
import './css/nav.css';

import imagen1 from './img/inicio.png';
import imagen2 from './img/explorar.png';
import imagen3 from './img/notificacion.png';
import imagen4 from './img/mensaje.png';
import imagen5 from './img/listas.png';
import imagen6 from './img/guardados.png';
import imagen7 from './img/comunidad.png';
import imagen8 from './img/perfil.png';


const links = [
  { texto: 'Inicio', imagen: imagen1, url: '/' },
  { texto: 'Explorar', imagen: imagen2, url: '/pagina2' },
  { texto: 'Notificaciones', imagen: imagen3, url: '#' },
  { texto: 'Mensajes', imagen: imagen4, url: '#' },
  { texto: 'Listas', imagen: imagen5, url: '#' },
  { texto: 'Guardados', imagen: imagen6, url: '#' },
  { texto: 'Comunidades', imagen: imagen7, url: '#' },
  { texto: 'Perfil', imagen: imagen8, url: '#' }
  
];

const Nav = () => (
  <nav className='barra-nav'>
    {links.map((link, index) => (
      <a key={index} href={link.url} className="nav-link">
        <img src={link.imagen} alt={link.texto} />
        <span>{link.texto}</span>
      </a>
    ))}
  </nav>
);

export default Nav;