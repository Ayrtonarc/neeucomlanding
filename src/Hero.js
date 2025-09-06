


function Hero() {
  return (
    <section className="Hero" id="inicio">
      <div className="Hero-content">
        <h1>Crea, comparte y monetiza tus videos con <span className="Hero-brand">Neeucom</span></h1>
        <p>Recibe pagos instantáneos en Solana. Sin comisiones ocultas. Para creadores y usuarios.</p>
        <a href="#registro" className="Hero-cta">Únete ahora</a>
      </div>
      <div className="Hero-media">
        <img
          className="Hero-illustration"
          src="https://undraw.co/api/illustrations/website_builder.svg"
          alt="Ilustración UI/UX moderna"
          width="420"
          height="240"
          style={{maxWidth: '100%', borderRadius: '18px', boxShadow: '0 4px 32px rgba(0,0,0,0.18)'}}
        />
      </div>
    </section>
  );
}

export default Hero;
