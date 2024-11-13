import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Inicializamos el hook de navegación

  useEffect(() => {
    // Verificar si el token existe en el localStorage
    if (!localStorage.getItem('token')) {
      navigate('/login'); // Redirigir al login si no está autenticado
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar el token del localStorage
    navigate('/login'); // Redirigir al login
  };

  return (
    <div className="home-container">
      <h1>FICHAS TÉCNICAS PROVEEDORES</h1>
      <p>Esta es la página principal después del inicio de sesión exitoso.</p>
      
      <div className="pdf-container">
        <img 
          src="/image/Carvajal.png" // Asegúrate de usar la ruta correcta
          alt="Proveedor Carvajal" 
          className="proveedor-image" 
        />
        <a
          type="button"
          onClick={() => navigate('/Consulta')}
        >
          Consultar
        </a>
      </div>

      <button className="logout-button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Home;
