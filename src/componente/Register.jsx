import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Registro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      const response = await fetch('https://backend-fichas-lastra-8rzfkygai-sistemas-projects-de431368.vercel.app/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          // Otros campos si es necesario yasta
        }),
      });
    
      const data = await response.json();
    
      if (response.ok) {
        alert('Usuario registrado exitosamente');
        navigate('/login');  // Redirigir a la página de login
      } else {
        alert(data.message);  // Mostrar error si hay un problema
      }
    };
    

    return (
        <div className="form-container">
            <h2>Crear cuenta</h2>
            {error && <div className="error">{error}</div>}
            {message && <div className="success">{message}</div>}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Correo Electrónico</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Confirmar Contraseña</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Registrar</button>
            </form>
            <p>
                ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
            </p>
        </div>
    );
};

export default Registro;
