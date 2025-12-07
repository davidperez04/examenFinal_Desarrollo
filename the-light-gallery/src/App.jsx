// src/App.jsx (VERSIÓN FINAL CON RUTAS ANIDADAS)

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 1. IMPORTACIONES DE COMPONENTES DE PÁGINA
import Login from './login_temp.jsx'; // Usamos el nombre temporal que te funciona
import CrearCuenta from './CrearCuenta.jsx'; 
import PaginaUsuario from './PaginaUsuario.jsx';
import PerfilUsuario from './PerfilUsuario.jsx'; // 👈 NUEVA IMPORTACIÓN
import MisReservas from './MisReservas.jsx';     // 👈 NUEVA IMPORTACIÓN


function App() {
  // GESTIÓN DEL ESTADO GLOBAL
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  return (
    <Routes>
      
      {/* RUTA 1: LOGIN (Punto de entrada) */}
      <Route 
        path="/login" 
        element={<Login setIsLoggedIn={setIsLoggedIn} />} 
      />

      {/* RUTA 2: CREAR CUENTA */}
      <Route path="/crear-cuenta" element={<CrearCuenta />} />

      
      {/* RUTA 3: PÁGINA DE USUARIO (Ruta Protegida y Layout) */}
      <Route 
        path="/usuario" 
        // Si estás logueado, carga PaginaUsuario (el marco con el menú)
        element={isLoggedIn ? <PaginaUsuario /> : <Navigate to="/login" replace />} 
      >
        {/* RUTAS ANIDADAS (Las Opciones del Menú) */}
        
        {/* RUTA INDEX: /usuario (Muestra un mensaje de bienvenida por defecto) */}
       /* EN TU ARCHIVO App.jsx */

      <Route 
        index 
        element={
          <div className="text-center p-5 mt-5 fade-in-up">
            {/* Título grande en blanco */}
            <h1 className="display-4 fw-bold text-white">
              ¡Hola! <span style={{ color: '#e50914' }}></span>
            </h1>
            
            {/* Subtítulo en gris claro */}
            <p className="lead text-white-50">
              Bienvenido a tu panel de Cine Leonelda.
            </p>
            
            {/* Texto secundario */}
            <p className="text-secondary">
              Selecciona una opción a la izquierda para comenzar.
            </p>

            {/* Decoración visual opcional: Un icono grande de fondo muy sutil */}
            <div style={{ opacity: 0.1, marginTop: '50px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" viewBox="0 0 16 16">
                  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
              </svg>
            </div>
          </div>
        } 
      />
        
        {/* OPCIÓN 1: /usuario/perfil */}
        <Route path="perfil" element={<PerfilUsuario />} /> 
        
        {/* OPCIÓN 2: /usuario/reservas */}
        <Route path="reservas" element={<MisReservas />} /> 
        
        {/* Aquí puedes añadir las otras 2 rutas si tu proyecto es grupal [cite: 23] */}
        
      </Route>

      {/* RUTA POR DEFECTO: REDIRECCIÓN */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
    </Routes>
  );
}

export default App;