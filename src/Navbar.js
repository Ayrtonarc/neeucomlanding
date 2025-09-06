import React from 'react';
import './Navbar.css';
import logoPrincipal from './Op 2/Logo principal.png';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">
        <img src={logoPrincipal} alt="Neeucom Logo" className="Navbar-img" />
        <span className="Navbar-brand">Neeucom</span>
      </div>
      <ul className="Navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#como-funciona">Cómo funciona</a></li>
        <li><a href="#precios">Precios</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#soporte">Soporte</a></li>
      </ul>
      <div className="Navbar-actions">
        <button className="Navbar-btn Navbar-btn--outline">Iniciar sesión</button>
        <button className="Navbar-btn Navbar-btn--primary">Registrarse</button>
      </div>
    </nav>
  );
}

export default Navbar;
