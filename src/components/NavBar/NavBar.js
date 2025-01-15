import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Sobre Nosotros</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><a href="/login">Iniciar sesion</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;