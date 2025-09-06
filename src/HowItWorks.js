import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    icon: '📝',
    title: 'Crea tu cuenta',
    desc: 'Regístrate gratis con email o wallet de Solana.'
  },
  {
    icon: '⬆️',
    title: 'Sube tu contenido',
    desc: 'Carga videos fácilmente y personaliza tu perfil.'
  },
  {
    icon: '💰',
    title: 'Monetiza con crypto',
    desc: 'Recibe pagos directos en Solana por tus videos.'
  },
  {
    icon: '📢',
    title: 'Comparte y crece',
    desc: 'Difunde tu canal y haz crecer tu comunidad.'
  }
];

function HowItWorks() {
  return (
    <section className="HowItWorks" id="como-funciona">
      <h2 className="HowItWorks-title">¿Cómo funciona Neeucom?</h2>
      <div className="HowItWorks-steps">
        {steps.map((s, i) => (
          <div className="HowItWorks-step" key={i}>
            <span className="HowItWorks-icon" role="img" aria-label={s.title}>{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
