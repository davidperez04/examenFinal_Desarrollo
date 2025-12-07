import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  
  // 1. ESTADOS DEL FORMULARIO
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  
  // 2. ESTADO PARA EL FONDO (CARRUSEL)
  const [indiceFondo, setIndiceFondo] = useState(0);

  // Lista de imágenes de alta calidad (Donnie Darko, Fight Club, Joker)
  const fondos = [
    "https://image.tmdb.org/t/p/original/bhyURcwJVlW0nnlGrUPQwckVGyI.jpg",                            // Donnie Darko
    "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg.jpg",                            // Fight Club
    "https://image.tmdb.org/t/p/original/syVKdpPl4lAwFRjcNtQ4PAPytVN.jpg"                                 // Pulp fiction
  ];

  // 3. EFECTO: CAMBIAR IMAGEN CADA 5 SEGUNDOS
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceFondo((indiceAnterior) => {
        // (0 + 1) % 3 = 1 ... luego 2 ... luego vuelve a 0
        return (indiceAnterior + 1) % fondos.length;
      });
    }, 5000); // 5000ms = 5 segundos

    // Limpieza al salir de la página
    return () => clearInterval(intervalo);
  }, [fondos.length]);

  // 4. LÓGICA DE LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === 'admin' && password === '123') {
      setIsLoggedIn(true);
      navigate('/usuario');
    } else {
      alert('Credenciales incorrectas. Intenta: admin / 123');
    }
  };

  return (
    <div 
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        // Fondo dinámico según el índice actual
        backgroundImage: `url('${fondos[indiceFondo]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Transición suave de 1 segundo
        transition: 'background-image 1s ease-in-out'
      }}
    >
      {/* TARJETA OSCURA (Glassmorphism Dark) */}
      <div 
        className="card p-4 shadow-lg text-center" 
        style={{ 
            width: '350px', 
            // Negro al 85% de opacidad para que se integre con el fondo
            backgroundColor: 'rgba(0, 0, 0, 0.85)', 
            border: '1px solid #444', 
            borderRadius: '15px',
            backdropFilter: 'blur(5px)' // Efecto borroso extra detrás de la tarjeta
        }}
      >
        
        <h2 className="fw-bold text-white mb-0">Cine Leonelda</h2>
        <small className="text-secondary mb-4">Bienvenido</small>
        
        <form onSubmit={handleLogin}>
          <div className="mb-3 text-start">
            <label className="form-label text-secondary ms-1">Usuario</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Ej. admin" 
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              // Estilo oscuro para inputs
              style={{ 
                  backgroundColor: '#222', 
                  color: 'white', 
                  border: '1px solid #555' 
              }}
            />
          </div>
          
          <div className="mb-4 text-start">
            <label className="form-label text-secondary ms-1">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                  backgroundColor: '#222', 
                  color: 'white', 
                  border: '1px solid #555' 
              }}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn btn-danger w-100 py-2 fw-bold"
            style={{ fontSize: '1.1rem', letterSpacing: '1px' }}
          >
            INGRESAR
          </button>
        </form>

        <div className="mt-4">
            <span className="text-secondary">¿No tienes cuenta? </span>
            <Link to="/crear-cuenta" className="text-danger fw-bold text-decoration-none">
                Crear Cuenta
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;