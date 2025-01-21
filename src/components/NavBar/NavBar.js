import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className="left">Mi Empresa</div>
      <ul>
        <li><Link to="/"className="center">Portal</Link></li>
        <li><Link to="/about">Sobre Nosotros</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/login">Iniciar sesion</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;