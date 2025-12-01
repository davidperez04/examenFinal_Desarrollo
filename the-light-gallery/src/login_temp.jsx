// Login.jsx (¡La versión final que debes usar!)

import React, { useState } from 'react';         // 👈 Para gestionar los inputs
import { useNavigate, Link } from 'react-router-dom'; // 👈 Para la redirección y el enlace
import './App.css'; 

// El componente AHORA recibe la función setIsLoggedIn de App.jsx
const Login = ({ setIsLoggedIn }) => {
  
  const navigate = useNavigate(); 
  
  // 1. ESTADO LOCAL PARA LOS INPUTS DEL FORMULARIO
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  // 2. FUNCIÓN PARA MANEJAR EL ENVÍO (handleLogin)
  const handleLogin = (e) => {
    e.preventDefault(); 

    // Lógica de validación de prueba (usa 'admin' y '123'):
    if (usuario === 'admin' && password === '123') {
      
      // 3. ÉXITO: Cambia el estado global y redirige
      setIsLoggedIn(true); 
      navigate('/usuario'); // Redirecciona a la ruta que creaste
    
    } else {
      alert('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  // 4. EL JSX: Todo el diseño y formulario que tenías en App.jsx
  return (
    <div className="container-fluid bg-black text-white min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'url(/fondo.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      {/* Tarjeta de Login */}
      <div className="card shadow p-4 text-center" style={{ width: '20rem', /* ...estilos... */ }}>
        
        {/* ... Título y texto ... */}
        
        {/* 5. VINCULAMOS LA FUNCIÓN handleLogin AL FORMULARIO */}
        <form onSubmit={handleLogin}> 
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Usuario" 
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)} // 👈 Captura el valor
            />
          </div>
          <div className="mb-3">
            <input 
              type="password" 
              className="form-control" 
              placeholder="Contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} // 👈 Captura el valor
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-danger mt-3 w-100">
            INGRESAR
          </button>
        </form>

        {/* 6. Enlace de Registro usando <Link> para el Router */}
        <p className="mt-3 mb-0 text-black">
          ¿No tienes cuenta? <Link to="/crear-cuenta" className="text-danger fw-bold">Crear Cuenta</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;