import React from 'react';
import './Features.css';

const features = [
  {
    icon: '💸',
    title: 'Monetización con Solana',
    desc: 'Recibe pagos instantáneos en SOL, sin comisiones ocultas.'
  },
  {
    icon: '🚀',
    title: 'Subida de videos fácil',
    desc: 'Carga y comparte tus videos en segundos, desde cualquier dispositivo.'
  },
  {
    icon: '🌎',
    title: 'Comunidad global y segura',
    desc: 'Conecta con creadores y usuarios de todo el mundo, con privacidad y seguridad.'
  },
  {
    icon: '📊',
    title: 'Estadísticas avanzadas',
    desc: 'Accede a analíticas detalladas para crecer y optimizar tu contenido.'
  }
];

function Features() {
  return (
    <section className="Features" id="features">
      <h2 className="Features-title">Ventajas de Neeucom</h2>
      <div className="Features-cards">
        {features.map((f, i) => (
          <div className="Features-card" key={i}>
            <span className="Features-icon" role="img" aria-label={f.title}>{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
