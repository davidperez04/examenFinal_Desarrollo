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
        <Route 
          index 
          element={
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-secondary">Selecciona una opción en el menú lateral.</h3>
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