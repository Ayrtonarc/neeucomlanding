import React from 'react';
import './Footer.css';

import logoSecundario from './Op 2/Logo secundario.png';
import logoTipografico from './Op 2/Logo Tipográfico.png';

function Footer() {
  return (
    <footer className="Footer" id="footer">
      <div className="Footer-links">
        <a href="#terminos">Términos</a>
        <a href="#privacidad">Privacidad</a>
        <a href="#blog">Blog</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className="Footer-social">
        <a href="#" aria-label="Twitter" className="Footer-social-icon">🐦</a>
        <a href="#" aria-label="Discord" className="Footer-social-icon">💬</a>
        <a href="#" aria-label="YouTube" className="Footer-social-icon">▶️</a>
      </div>
      <div className="Footer-logos">
        <img src={logoSecundario} alt="Logo secundario" className="Footer-logo-img" />
        <img src={logoTipografico} alt="Logo tipográfico" className="Footer-logo-img" />
      </div>
      <div className="Footer-copy">
        © {new Date().getFullYear()} Neeucom. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
