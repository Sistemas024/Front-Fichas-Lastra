import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para la navegación
import './Consulta.css';

const Home = () => {
  const navigate = useNavigate(); // Inicializamos el hook de navegación

  // Datos de los PDFs
  const pdfOptions = {
    vasos: [
      { name: 'Ref 10058', url: '/public/pdf/Carvajal/Vasos/REF 10058.pdf' },
      { name: 'Ref 10059', url: '/public/pdf/Carvajal/Vasos/REF 10059.pdf' },
      { name: 'Ref 10060', url: '/public/pdf/Carvajal/Vasos/REF 10060.pdf' },
      { name: 'Ref 10064', url: '/public/pdf/Carvajal/Vasos/REF 10064.pdf' },
      { name: 'Ref 10070', url: '/public/pdf/Carvajal/Vasos/REF 10070.pdf' },
      { name: 'Ref 10071', url: '/public/pdf/Carvajal/Vasos/REF 10071.pdf' },
      { name: 'Ref 10074', url: '/public/pdf/Carvajal/Vasos/REF 10074.pdf' },
      { name: 'Ref 10077', url: '/public/pdf/Carvajal/Vasos/REF 10077.pdf' },
      { name: 'Ref 10080', url: '/public/pdf/Carvajal/Vasos/REF 10080.pdf' },
      { name: 'Ref 10081', url: '/public/pdf/Carvajal/Vasos/REF 10081.pdf' },
      { name: 'Ref 10104', url: '/public/pdf/Carvajal/Vasos/REF 10104.pdf' },
      { name: 'Ref 10129', url: '/public/pdf/Carvajal/Vasos/REF 10129.pdf' },
      { name: 'Ref 10418', url: '/public/pdf/Carvajal/Vasos/REF 10418.pdf' },
      { name: 'Ref 10433', url: '/public/pdf/Carvajal/Vasos/REF 10433.pdf' },
      { name: 'Ref 10434', url: '/public/pdf/Carvajal/Vasos/REF 10434.pdf' },
      { name: 'Ref 10435', url: '/public/pdf/Carvajal/Vasos/REF 10435.pdf' },
      { name: 'Ref 10436', url: '/public/pdf/Carvajal/Vasos/REF 10436.pdf' },
    ],
    tapas: [
      { name: 'Ref 10038', url: '/public/pdf/Carvajal/Tapas/REF 10038.pdf' },
      { name: 'Ref 10407', url: '/public/pdf/Carvajal/Tapas/REF 10407.pdf' },
    ],
  };

  // Estados para controlar el PDF seleccionado
  const [selectedVaso, setSelectedVaso] = useState('');
  const [selectedTapa, setSelectedTapa] = useState('');

  // Función para cerrar sesión
  const handleLogout = () => {
    navigate('/login'); // Redirige a la página de login al cerrar sesión
  };

  return (
    <div className="home-container">
      <h1>BIENVENIDOS</h1>
      <p>Referencias</p>
      
      <div className="dropdown-container">
        {/* Desplegable para Vasos */}
        <div className="dropdown">
          <label htmlFor="vasos">Vasos:</label>
          <select 
            id="vasos" 
            value={selectedVaso} 
            onChange={(e) => setSelectedVaso(e.target.value)}
          >
            <option value="">Seleccione una referencia de vasos</option>
            {pdfOptions.vasos.map((vaso, index) => (
              <option key={index} value={vaso.url}>
                {vaso.name}
              </option>
            ))}
          </select>
          {selectedVaso && (
            <a href={selectedVaso} download className="download-link">
              Descargar
            </a>
          )}
        </div>

        {/* Desplegable para Tapas */}
        <div className="dropdown">
          <label htmlFor="tapas">Tapas:</label>
          <select 
            id="tapas" 
            value={selectedTapa} 
            onChange={(e) => setSelectedTapa(e.target.value)}
          >
            <option value="">Seleccione una referencia de tapas</option>
            {pdfOptions.tapas.map((tapa, index) => (
              <option key={index} value={tapa.url}>
                {tapa.name}
              </option>
            ))}
          </select>
          {selectedTapa && (
            <a href={selectedTapa} download className="download-link">
              Descargar
            </a>
          )}
        </div>
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
