import React from 'react';
import './Collaborate.css';

function Collaborate() {
  return (
    <section className="Collaborate" id="colabora">
      <div className="Collaborate-content">
        <h2>Colabora con Neeucom</h2>
        <p>
          ¿Te apasiona la tecnología, el video o el mundo cripto? <b>Únete a nuestro equipo, apóyanos como partner o ayúdanos a crecer.</b>
        </p>
        <ul className="Collaborate-list">
          <li>Hazte embajador y difunde Neeucom en tu comunidad.</li>
          <li>Colabora como desarrollador, diseñador o creador de contenido.</li>
          <li>Apóyanos con donaciones en Solana o fondos para acelerar el proyecto.</li>
          <li>Conéctanos con inversores, incubadoras o medios.</li>
        </ul>
        <a href="#registro" className="Collaborate-cta">Quiero colaborar</a>
      </div>
      <div className="Collaborate-demo">
        <div className="Collaborate-card">
          <span role="img" aria-label="solana">⚡</span>
          <h3>Apoya con Solana</h3>
          <p>Wallet demo: <b>neewallet.sol</b></p>
        </div>
        <div className="Collaborate-card">
          <span role="img" aria-label="team">🤝</span>
          <h3>Únete al equipo</h3>
          <p>Buscamos talento en desarrollo, marketing y comunidad.</p>
        </div>
      </div>
    </section>
  );
}

export default Collaborate;
