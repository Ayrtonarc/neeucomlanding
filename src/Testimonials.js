import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Ana G.',
    text: 'Neeucom me permitió monetizar mis videos desde el primer día. ¡Pagos instantáneos y sin comisiones!'
  },
  {
    name: 'Carlos P.',
    text: 'La integración con Solana es increíblemente fácil. La comunidad es muy activa y el soporte excelente.'
  },
  {
    name: 'Beta User',
    text: 'Como creador, valoro mucho las analíticas y la transparencia en los pagos.'
  }
];

const partners = [
  'Solana News',
  'Crypto Creators',
  'Web3 Media',
  'BlockPress'
];

function Testimonials() {
  return (
    <section className="Testimonials" id="testimonios">
      <h2 className="Testimonials-title">Testimonios y confianza</h2>
      <div className="Testimonials-list">
        {testimonials.map((t, i) => (
          <div className="Testimonials-card" key={i}>
            <p className="Testimonials-card-text">“{t.text}”</p>
            <span className="Testimonials-card-name">{t.name}</span>
          </div>
        ))}
      </div>
      <div className="Testimonials-press">
        <span className="Testimonials-press-title">Mencionado en:</span>
        <div className="Testimonials-press-logos">
          {partners.map((p, i) => (
            <span className="Testimonials-press-logo" key={i}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
