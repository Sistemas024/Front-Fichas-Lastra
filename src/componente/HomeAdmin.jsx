// HomeAdmin.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeAdmin.css';

const HomeAdmin = () => {
  const navigate = useNavigate();
  const [ganadores, setGanadores] = useState([]);

  useEffect(() => {
    // Recuperar los ganadores desde el LocalStorage
    const datosGuardados = JSON.parse(localStorage.getItem('ganadores')) || [];
    setGanadores(datosGuardados);
  }, []);

  const handleLogout = () => {
    navigate('/'); // Redirigir al Login al cerrar sesión
  };

  return (
    <div className="home-container-admin">
      <h1>Bienvenido al Panel de Administrador</h1>
      <p>GANADORES!</p>

      <table className="data-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Teléfono</th>
            <th>Código</th>
            <th>Premio</th>
          </tr>
        </thead>
        <tbody>
          {ganadores.map((ganador, index) => (
            <tr key={index}>
              <td>{ganador.fecha}</td>
              <td>{ganador.nombre}</td>
              <td>{ganador.cedula}</td>
              <td>{ganador.telefono}</td>
              <td>{ganador.codigo}</td>
              <td>{ganador.premio}</td>
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
