import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componente/LoginAdmin.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const newUser = { email, password }; // Solo enviar email y password

    try {
      const response = await fetch('http://localhost:5000/auth/admon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setSuccess(true);
        setError('');
        //navigate('/login'); // Redirigir al login después del registro
      } else {
        const errorData = await response.json();
        console.error(errorData);
        setError('Error al registrar usuario: ' + (errorData.message || 'Error desconocido'));
      }
    } catch (error) {
      console.error('Error de conexión al servidor:', error);
      setError('Error de conexión al servidor');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Registro Administrador</h2>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">¡Registro exitoso!</p>}

        <button type="submit">Crear</button>
        <p>
                ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
