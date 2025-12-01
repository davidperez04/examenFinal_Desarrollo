// CrearCuenta.jsx
//import React from 'react';
// CrearCuenta.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Asegúrate de importar Link si lo usas en el footer de la página

const CrearCuenta = () => {
  
  // 1. ESTADOS LOCALES para capturar todos los inputs
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  // 2. FUNCIÓN PARA MANEJAR EL REGISTRO
  const handleRegister = (e) => {
    e.preventDefault();

    // Lógica básica de validación:
    if (password !== confirmPassword) {
      alert("⚠️ Error: Las contraseñas no coinciden.");
      return; // Detiene la función si hay error
    }

    // Aquí iría la lógica para enviar los datos a una base de datos/API
    console.log("Datos de registro:", { nombre, correo, password });

    // 3. ÉXITO: Simula el registro y redirige al Login
    alert(`🎉 ¡Registro exitoso para ${nombre}! Ahora puedes iniciar sesión.`);
    navigate('/login'); // Redirige de vuelta a la página de login
  };

  return (
// 1. 👈 CONTENEDOR PRINCIPAL CON ESTILOS DE FONDO Y CENTRADO
        <div 
          className="container-fluid bg-black text-white min-vh-100 d-flex align-items-center justify-content-center"
          style={{
            // 2. 👈 RUTA DE TU IMAGEN DE FONDO
            backgroundImage: 'url(/fondo.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
          }}
        >
        {/* 3. TARJETA DE REGISTRO */}
      <div className="card shadow p-4" style={{ width: '28rem',
         backgroundColor: 'rgba(124, 113, 113, 0.47)',
       }}>
        
        <h2 className="card-title text-center mb-4 fw-bold text-black">
          Crear Cuenta Cine Leonelda
        </h2>
        
        {/* 5. FORMULARIO VINCULADO A handleRegister */}
        <form onSubmit={handleRegister}>
          
          {/* CAMPO 1: Nombre Completo */}
          <div className="mb-3 text-black text-start">
            <label htmlFor="inputNombre" className="form-label">Nombre Completo</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputNombre" 
              placeholder="Ej: Juan Pérez" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required 
            />
          </div>
          
          {/* CAMPO 2: Correo Electrónico */}
          <div className="mb-3 text-black text-start">
            <label htmlFor="inputEmail" className="form-label">Correo Electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              id="inputEmail" 
              placeholder="ejemplo@correo.com" 
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required 
            />
          </div>
          
          {/* CAMPO 3: Contraseña */}
          <div className="mb-3 text-black text-start">
            <label htmlFor="inputPassword" className="form-label">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              id="inputPassword" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          {/* CAMPO 4: Confirmar Contraseña */}
          <div className="mb-3 text-black text-start">
            <label htmlFor="inputConfirmPassword" className="form-label">Confirmar Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              id="inputConfirmPassword" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>
          
          {/* Botón de Registro */}
          <button type="submit" className="btn btn-dark w-100 mt-3">
            Registrarme
          </button>
        </form>

        {/* Enlace para volver al Login */}
        <p className="mt-3 text-center text-black">
          ¿Ya tienes una cuenta? <a className= "text-success" href="/login" onClick={() => navigate('/login')}>Iniciar Sesión</a>
        </p>
      </div>
    </div>
  );
};

export default CrearCuenta;