import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';


const PaginaUsuario = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 Para saber en qué página estamos
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
      navigate('/login');
  };

  // Función para resaltar el botón activo
  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#141414', color: 'white' }}>
        
        {/* 1. BOTÓN MÓVIL (Mejorado visualmente) */}
        <button 
            className="btn btn-danger d-lg-none position-fixed m-3 shadow" 
            style={{ zIndex: 1100, top: 0, left: 0, borderRadius: '50%', width: '50px', height: '50px' }} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
            {isMenuOpen ? '✕' : '☰'}
        </button>
        
        {/* 2. BARRA LATERAL (SIDEBAR) DE LUJO */}
        <div 
            className={`text-white p-4 d-flex flex-column ${isMenuOpen ? 'd-block' : 'd-none d-lg-block'}`} 
            style={{ 
                width: '280px', 
                flexShrink: 0, 
                // Degradado oscuro estilo Netflix/Cine
                background: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)',
                position: isMenuOpen ? 'fixed' : 'relative',
                height: '100vh',
                zIndex: 1000,
                transition: 'all 0.3s',
                boxShadow: '4px 0 15px rgba(0,0,0,0.3)'
            }}
        >
            
            {/* LOGO CON ICONO */}
            {/* LOGO DESDE CARPETA PUBLIC */}
            <div 
                className="d-flex align-items-center mb-5"
                style={{ marginTop: isMenuOpen ? '60px' : '0' }}
            >
                <div className="me-3" style={{ width: '50px', height: '50px' }}>
                    
                    {/* Si tu archivo está en la carpeta public y se llama "logo.png",
                      la ruta es simplemente "/logo.png".
                      
                      Si lo tienes en una subcarpeta (ej: public/img/logo.png),
                      pondrías "/img/logo.png"
                    */}
                    <img 
                        src="/logo.png" 
                        alt="Logo Cine Leonelda" 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'contain' 
                        }} 
                    />
                    
                </div>
                
                <div>
                    <h5 className="m-0 fw-bold" style={{ letterSpacing: '1px' }}>CINE LEONELDA</h5>
                    <small className="text-white-50" style={{ fontSize: '0.8rem' }}>Panel de Usuario</small>
                </div>
            </div>
            
            {/* OPCIONES DEL MENÚ */}
            <ul className="nav nav-pills flex-column flex-grow-1 gap-2">
                
                {/* BOTÓN PERFIL */}
                <li className="nav-item">
                    <Link 
                        to="perfil" 
                        className={`nav-link d-flex align-items-center ${isActive('perfil') ? 'bg-danger text-white shadow' : 'text-white-50 hover-effect'}`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{ transition: '0.2s', padding: '12px 15px' }}
                    >
                        {/* Icono Usuario */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-3" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        Mi Perfil
                    </Link>
                </li>

                {/* BOTÓN RESERVAS */}
                <li className="nav-item">
                    <Link 
                        to="reservas" 
                        className={`nav-link d-flex align-items-center ${isActive('reservas') ? 'bg-danger text-white shadow' : 'text-white-50 hover-effect'}`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{ transition: '0.2s', padding: '12px 15px' }}
                    >
                        {/* Icono Ticket */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-3" viewBox="0 0 16 16">
                            <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5ZM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5h-13Z"/>
                        </svg>
                        Mis Reservas
                    </Link>
                </li>
            </ul>

            <div className="mt-auto border-top border-secondary pt-4">
                <button 
                    className="btn btn-outline-light w-100 py-2"
                    onClick={handleLogout}
                >
                    <i className="bi bi-box-arrow-left me-2"></i> Cerrar Sesión
                </button>
            </div>
        </div>

        {/* 3. CONTENIDO PRINCIPAL */}
        <main className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
            <Outlet /> 
        </main>
    </div>
  );
};

export default PaginaUsuario;