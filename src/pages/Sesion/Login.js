import React,{ useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí realizarías la lógica para enviar los datos del formulario al servidor
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container"> {/* Apply the "login-container" class */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Iniciar Sesion</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electronico"
          required // Add required attribute for validation
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contrasena"
          required // Add required attribute for validation
        />
        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
}

export default Login;
