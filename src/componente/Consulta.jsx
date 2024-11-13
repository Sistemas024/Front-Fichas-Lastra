import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para la navegación
import './Consulta.css';

const Home = () => {
  const navigate = useNavigate(); // Inicializamos el hook de navegación

  // Función para cerrar sesión
  const handleLogout = () => {
    navigate('/'); // Redirige a la página de login al cerrar sesión
  };

  return (
    <div className="home-container">
      <h1>BIENVENIDOS</h1>
      
      <div className="pdf-container">
        {/* Imagen del proveedor */}
        <img 
          src="/public/image/Carvajal.png" 
          alt="Proveedor" 
          className="proveedor-image" 
        />
        
        {/* Enlace para descargar el archivo PDF */}
        <a 
          href="/public/pdf/triggers.pdf" 
          download="triggers.pdf" 
          className="download-link"
        >
          Descargar
        </a>
      </div>

      {/* Botón para volver a la página de inicio */}
      <button 
        type="button" 
        className="back-button" 
        onClick={() => navigate('/home')}
      >
        Volver a Inicio
      </button>

      {/* Botón para cerrar sesión */}
      <button 
        type="button" 
        className="logout-button" 
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Home;
