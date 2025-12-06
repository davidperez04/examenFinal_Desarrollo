// src/PaginaUsuario.jsx (CORREGIDO PARA MÓVIL)

import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const PaginaUsuario = () => {
  const navigate = useNavigate();
  // Estado para controlar el menú lateral en móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
      navigate('/login');
  };

  return (
    <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f8f8f8' }}>
        
        {/* 1. BOTÓN DE MENÚ (Solo visible en Móvil) */}
        {/* Nota: zIndex alto para que siempre esté flotando encima de todo */}
        <button 
            className={`btn ${isMenuOpen ? 'btn-outline-light' : 'btn-dark'} d-lg-none position-fixed m-3`} 
            style={{ zIndex: 1100, top: 0, left: 0 }} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
            {/* Cambiamos el texto o icono según el estado */}
            {isMenuOpen ? '✕ Cerrar' : '☰ Menú'}
        </button>
        
        {/* 2. BARRA LATERAL (SIDEBAR) */}
        <div 
            className={`bg-dark text-white p-3 shadow-lg d-flex flex-column ${isMenuOpen ? 'd-block' : 'd-none d-lg-block'}`} 
            style={{ 
                width: '250px', 
                flexShrink: 0, 
                // En móvil es fixed (cubre pantalla), en escritorio es relative (ocupa espacio)
                position: isMenuOpen ? 'fixed' : 'relative',
                height: '100vh',
                zIndex: 1000,
                // Agregamos una transición suave opcional
                transition: 'all 0.3s'
            }}
        >
            
            {/* AQUÍ ESTÁ EL ARREGLO:
               Si isMenuOpen es true (estamos en móvil con menú abierto),
               agregamos marginTop de 60px para bajar el título y que no choque con el botón.
            */}
            <h4 
                className="mb-4 text-danger fw-bold"
                style={{ marginTop: isMenuOpen ? '60px' : '0' }}
            >
                Menú Cine Leonelda
            </h4>
            
            <ul className="nav nav-pills flex-column flex-grow-1">
                <li className="nav-item mb-2">
                    <Link to="perfil" className="nav-link text-white" onClick={() => setIsMenuOpen(false)}>
                        Mi Perfil
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="reservas" className="nav-link text-white" onClick={() => setIsMenuOpen(false)}>
                        Mis Reservas
                    </Link>
                </li>
            </ul>

            <div className="mt-auto">
                <button 
                    className="btn btn-danger w-100 mb-3"
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                </button>
            </div>
        </div>

        {/* 3. CONTENIDO PRINCIPAL */}
        <main className="flex-grow-1 p-4">
            <Outlet /> 
        </main>
    </div>
  );
};

export default PaginaUsuario;