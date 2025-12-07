import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

// Si tienes el logo en public usa "/logo.png", si lo importaste úsalo aquí
// import logo from './logo.png'; 

const PaginaUsuario = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
      navigate('/login');
  };

  const isActive = (path) => location.pathname.includes(path);

  return (
    // 1. CONTENEDOR PRINCIPAL BLOQUEADO (NO SCROLL GENERAL)
    <div className="d-flex" style={{ height: '100vh', overflow: 'hidden', backgroundColor: '#141414', color: 'white' }}>
        
        {/* BOTÓN MÓVIL */}
        <button 
            className="btn btn-danger d-lg-none position-fixed m-3 shadow" 
            style={{ zIndex: 1100, top: 0, left: 0, borderRadius: '50%', width: '50px', height: '50px' }} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
            {isMenuOpen ? '✕' : '☰'}
        </button>
        
        {/* 2. BARRA LATERAL (SIDEBAR) */}
        <div 
            className={`text-white p-4 d-flex flex-column ${isMenuOpen ? 'd-block' : 'd-none d-lg-block'}`} 
            style={{ 
                width: '280px', 
                flexShrink: 0, 
                background: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)',
                // En móvil es fixed, en escritorio ocupa su espacio
                position: isMenuOpen ? 'fixed' : 'relative',
                height: '100%', // Ocupa todo el alto disponible
                zIndex: 1000,
                transition: 'all 0.3s',
                boxShadow: '4px 0 15px rgba(0,0,0,0.3)',
                // Si el menú es muy alto, permite scroll interno solo en el menú
                overflowY: 'auto' 
            }}
        >
            
            {/* LOGO */}
            <div className="d-flex align-items-center mb-5" style={{ marginTop: isMenuOpen ? '60px' : '0' }}>
                <div className="me-3" style={{ width: '50px', height: '50px' }}>
                     {/* Asegúrate de poner aquí tu logo correcto */}
                    <img 
                        src="/logo.png" 
                        alt="Cine Logo" 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                        onError={(e) => {
                            // Fallback por si no carga la imagen
                            e.target.onerror = null; 
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = '🎬'; 
                        }}
                    />
                </div>
                <div>
                    <h5 className="m-0 fw-bold" style={{ letterSpacing: '1px' }}>CINE LEONELDA</h5>
                    <small className="text-white-50" style={{ fontSize: '0.8rem' }}>Panel de Usuario</small>
                </div>
            </div>
            
            {/* OPCIONES */}
            <ul className="nav nav-pills flex-column flex-grow-1 gap-2">
                <li className="nav-item">
                    <Link 
                        to="perfil" 
                        className={`nav-link d-flex align-items-center ${isActive('perfil') ? 'bg-danger text-white shadow' : 'text-white-50 hover-effect'}`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{ transition: '0.2s', padding: '12px 15px' }}
                    >
                        <i className="bi bi-person-circle me-3 fs-5"></i> Mi Perfil
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="reservas" 
                        className={`nav-link d-flex align-items-center ${isActive('reservas') ? 'bg-danger text-white shadow' : 'text-white-50 hover-effect'}`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{ transition: '0.2s', padding: '12px 15px' }}
                    >
                        <i className="bi bi-ticket-perforated me-3 fs-5"></i> Mis Reservas
                    </Link>
                </li>
            </ul>

            <div className="mt-auto border-top border-secondary pt-4 pb-5 pb-lg-0">
                <button 
                    className="btn btn-outline-light w-100 py-2"
                    onClick={handleLogout}
                >
                    <i className="bi bi-box-arrow-left me-2"></i> Cerrar Sesión
                </button>
            </div>
        </div>

        {/* 3. CONTENIDO PRINCIPAL (SCROLL INDEPENDIENTE) */}
        <main 
            className="flex-grow-1 p-4 p-lg-5" 
            style={{ 
                height: '100%',       // Ocupa todo el alto
                overflowY: 'auto',    // 👈 AQUÍ ESTÁ LA CLAVE: Solo esto hace scroll
                position: 'relative'
            }}
        >
            <Outlet /> 
        </main>
    </div>
  );
};

export default PaginaUsuario;