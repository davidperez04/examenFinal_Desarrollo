// src/App.jsx (¡Totalmente reestructurado!)
import React, { useState } from 'react'; // 👈 Importamos useState
import { Routes, Route, Navigate } from 'react-router-dom'; // 👈 Herramientas de enrutamiento
import Login from './login_temp.jsx'; 
import PaginaUsuario from './PaginaUsuario.jsx';
import CrearCuenta from './CrearCuenta.jsx'; // Si lo implementas

function App() {
  // EL ESTADO GLOBAL DE AUTENTICACIÓN
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  return (
    // Routes define todas las rutas disponibles
    <Routes>
      
      {/* RUTA 1: LOGIN (Punto de entrada) */}
      {/* Le pasamos la función para que el Login pueda cambiar el estado */}
      <Route 
        path="/login" 
        element={<Login setIsLoggedIn={setIsLoggedIn} />} 
      />

      {/* RUTA 2: PÁGINA DE USUARIO (Ruta Protegida) */}
      {/* Si isLoggedIn es TRUE, muestra la página. Si es FALSE, navega (Navigate) al login. */}
      <Route 
        path="/usuario" 
        element={isLoggedIn ? <PaginaUsuario /> : <Navigate to="/login" replace />} 
      />
      
      {/* RUTA 3: CREAR CUENTA (Si lo implementas) */}
      <Route path="/crear-cuenta" element={<CrearCuenta />} />

      {/* RUTA POR DEFECTO: Redirige cualquier otra URL al login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Aquí añadirás las rutas de las Opciones del menú: /peliculas, /reservas, etc. */}
      
    </Routes>
  )
}

export default App