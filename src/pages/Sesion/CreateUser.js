import React,{ useState } from 'react';
import './CreateUser.css';

function CreateUser() {
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
        <button className="login-button-logIn" type="submit">Iniciar Sesion</button>
        <a href="createAccount">Crea un nuevo usuario</a>
      </form>
      <a href="recoverPassword">Has olvidado la contraseña?</a>
    </div>
  );
}

export default CreateUser;
