import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wallet, setWallet] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setMessage('¡Registro simulado! (Aquí iría la lógica real)');
  };

  const handleWalletLogin = () => {
    setWallet('PhantomWalletDemo123');
    setMessage('Login con wallet simulado.');
  };

  return (
    <section className="Register" id="registro">
      <h2 className="Register-title">Crea tu cuenta gratis</h2>
      <form className="Register-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="Register-btn">Registrarse</button>
      </form>
      <div className="Register-divider">o</div>
      <button className="Register-wallet" onClick={handleWalletLogin}>
        Iniciar sesión con wallet de Solana (Phantom)
      </button>
      {wallet && <div className="Register-wallet-demo">Wallet conectada: {wallet}</div>}
      {message && <div className="Register-message">{message}</div>}
    </section>
  );
}

export default Register;
