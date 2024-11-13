import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      const response = await fetch('https://backend-fichas-tecnica-7a4qhgwz9-sistemas-projects-de431368.vercel.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
    
      const data = await response.json();
    
      if (response.ok) {
        localStorage.setItem('token', data.token);  // Guardar el token en el localStorage
        localStorage.setItem('role', data.role);    // Guardar el rol del usuario
        navigate('/home');  // Redirigir al home si la respuesta es exitosa
      } else {
        alert(data.message);  // Si hay un error, mostrar el mensaje
      }
    };
    

    return (
        <div className="form-container">
            <h2>Iniciar sesión</h2>
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
                <button type="submit">Iniciar sesión</button>
            </form>
            <p>
                ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
            </p>
        </div>
    );
};

export default Login;
