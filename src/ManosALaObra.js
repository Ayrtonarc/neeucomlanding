import React from 'react';
import './ManosALaObra.css';

function ManosALaObra() {
  return (
    <section className="ManosALaObra" id="manos">
      <div className="ManosALaObra-content">
        <h2>Manos a la Obra</h2>
        <p>
          ¿Alguien de la comunidad necesita ayuda urgente? Si se te quemó la casa, perdiste tus cosas o enfrentas una emergencia, <b>puedes publicar tu caso y la comunidad puede apoyarte</b> donando objetos, cobijas, ropa, alimentos o lo que les sobre y pueda servir.
        </p>
        <p>
          <b>Manos a la Obra</b> es un espacio para la solidaridad real: conecta a quienes necesitan ayuda con quienes pueden darla, de forma directa, transparente y humana.
        </p>
        <a href="#registro" className="ManosALaObra-cta">Publicar o ayudar ahora</a>
      </div>
    </section>
  );
}

export default ManosALaObra;
