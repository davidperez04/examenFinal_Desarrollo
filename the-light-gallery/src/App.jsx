// src/App.jsx (VERSIÓN RESTAURADA Y CORREGIDA)

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 1. IMPORTACIONES DE TUS PÁGINAS
// 👇 AQUÍ ESTABA EL ERROR: Volvemos a poner tu archivo original
import Login from './login_temp.jsx'; 

import CrearCuenta from './CrearCuenta.jsx'; 
import PaginaUsuario from './PaginaUsuario.jsx';
import PerfilUsuario from './PerfilUsuario.jsx'; 
import MisReservas from './MisReservas.jsx';

// 👇 ESTA ES LA ÚNICA IMPORTACIÓN NUEVA QUE NECESITAMOS
import Cartelera from './Cartelera.jsx'; 

function App() {
  // GESTIÓN DEL ESTADO GLOBAL
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  return (
    <Routes>
      
      {/* RUTA 1: LOGIN (Usando tu archivo login_temp.jsx) */}
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
        
        {/* ======================================================= */}
        {/* AQUÍ ESTÁ EL CAMBIO (Quitamos el texto largo y ponemos la Cartelera) */}
        {/* ======================================================= */}
        
        <Route index element={<Cartelera />} />

        {/* ======================================================= */}
        
        {/* Rutas internas (Tus opciones del menú) */}
        <Route path="perfil" element={<PerfilUsuario />} /> 
        <Route path="reservas" element={<MisReservas />} /> 
        
      </Route>

      {/* RUTA POR DEFECTO: Si la ruta no existe, manda al Login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
      
    </Routes>
  );
}

export default App;