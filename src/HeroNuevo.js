import React from 'react';
import './HeroNuevo.css';

function HeroNuevo() {
  return (
    <section className="HeroNuevo" id="inicio">
      <div className="HeroNuevo-grid">
        <div className="HeroNuevo-content">
          <h1>
            <span className="HeroNuevo-accent">Crea, inspira y monetiza</span> con <span className="HeroNuevo-brand">Neeucom</span>
          </h1>
          <p className="HeroNuevo-subtitle">
            La red social de videos donde tu talento se convierte en ingresos reales. Únete a la comunidad, comparte tu pasión y recibe pagos instantáneos en <b>Solana</b>.
          </p>
        </div>
        <div className="HeroNuevo-media">
          <div className="HeroNuevo-imgwrap">
            <img
              src={require('./Op 2/ui-ux.PNG')}
              width="420"
              height="240"
              className="HeroNuevo-img"
              alt="UI/UX Demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroNuevo;
