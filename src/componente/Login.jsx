import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://backend-fichas-lastra-8rzfkygai-sistemas-projects-de431368.vercel.app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Guardar el token y el rol en el localStorage
                localStorage.setItem('token', data.token);
                localStorage.setItem('role', data.role);

                // Redirigir al componente adecuado según el rol
                if (data.role === 'admin') {
                    navigate('/home-admin'); // Redirige a HomeAdmin para admins
                } else {
                    navigate('/home'); // Redirige a Home para usuarios
                }
            } else {
                setError(data.message); // Muestra el mensaje de error
            }
        } catch (err) {
            setError('Hubo un error en la conexión con el servidor.');
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
