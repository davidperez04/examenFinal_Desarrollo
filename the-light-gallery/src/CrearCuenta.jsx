import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CrearCuenta = () => {
  // 1. ESTADOS DEL FORMULARIO
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  // 2. ESTADO PARA EL FONDO (CARRUSEL - Igual que en Login)
  const [indiceFondo, setIndiceFondo] = useState(0);

  const fondos = [
    "https://image.tmdb.org/t/p/original/icmmSD4vTTDKOq2vvdulafOGw93.jpg",                       // Donnie Darko
      "https://image.tmdb.org/t/p/original/sGJfy0JcTiRSCpnqtmAJQbP7bFa.jpg",
      "https://image.tmdb.org/t/p/original/hI4ea9G5fNCKhlh6DcgpP9du9No.jpg",
      "https://image.tmdb.org/t/p/original/kzXww7ArcNNuyIC3m9q6cXLk6Mj.jpg",
      "https://image.tmdb.org/t/p/original/nqpabbCImaOmyASYKGVfD0xOZQR.jpg"
  ];

  // Cambio automático de fondo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceFondo((prev) => (prev + 1) % fondos.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, [fondos.length]);


  // 3. FUNCIÓN DE REGISTRO
  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("⚠️ Error: Las contraseñas no coinciden.");
      return;
    }

    // Aquí iría tu lógica de guardado real
    console.log("Registrando:", { nombre, correo, password });

    alert(`🎉 ¡Bienvenido a Cine Leonelda, ${nombre}!`);
    navigate('/login'); 
  };

  return (
    <div 
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        // Fondo dinámico
        backgroundImage: `url('${fondos[indiceFondo]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out'
      }}
    >
      {/* TARJETA OSCURA (Estilo Cine) */}
      <div 
        className="card p-4 shadow-lg" 
        style={{ 
            width: '28rem',
            backgroundColor: 'rgba(0, 0, 0, 0.85)', // Negro translúcido
            border: '1px solid #444', 
            borderRadius: '15px',
            color: 'white'
        }}
      >
        
        <h2 className="text-center mb-4 fw-bold text-white">
          Únete a Cine Leonelda
        </h2>
        
        <form onSubmit={handleRegister}>
          
          {/* CAMPO: Nombre */}
          <div className="mb-3 text-start">
            <label className="form-label text-secondary ms-1">Nombre Completo</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Ej: Juan Pérez" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required 
              style={{ backgroundColor: '#222', color: 'white', border: '1px solid #555' }}
            />
          </div>
          
          {/* CAMPO: Correo */}
          <div className="mb-3 text-start">
            <label className="form-label text-secondary ms-1">Correo Electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="ejemplo@correo.com" 
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required 
              style={{ backgroundColor: '#222', color: 'white', border: '1px solid #555' }}
            />
          </div>
          
          {/* CAMPO: Contraseña */}
          <div className="mb-3 text-start">
            <label className="form-label text-secondary ms-1">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              style={{ backgroundColor: '#222', color: 'white', border: '1px solid #555' }}
            />
          </div>

          {/* CAMPO: Confirmar */}
          <div className="mb-4 text-start">
            <label className="form-label text-secondary ms-1">Confirmar Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="••••••" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
              style={{ backgroundColor: '#222', color: 'white', border: '1px solid #555' }}
            />
          </div>
          
          {/* BOTÓN ROJO DE CINE */}
          <button 
            type="submit" 
            className="btn btn-danger w-100 py-2 fw-bold"
            style={{ fontSize: '1.1rem', letterSpacing: '1px' }}
          >
            REGISTRARME
          </button>
        </form>

        {/* LINK VOLVER */}
        <div className="mt-4 text-center">
            <span className="text-secondary">¿Ya tienes una cuenta? </span>
            <Link to="/login" className="text-danger fw-bold text-decoration-none">
                Iniciar Sesión
            </Link>
        </div>

      </div>
    </div>
  );
};

export default CrearCuenta;