import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeAdmin.css';

const HomeAdmin = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Recuperar los usuarios desde el LocalStorage
    const datosUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(datosUsuarios);
  }, []);

  const handleLogout = () => {
    navigate('/login'); // Redirigir al Login al cerrar sesión
  };

  return (
    <div className="home-container-admin">
      <h1>Bienvenido al Panel de Administrador</h1>
      <h2>Usuarios Registrados</h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>{usuario.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="logout-button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default HomeAdmin;
