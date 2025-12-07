import React, { useState } from 'react';

const PerfilUsuario = () => {
    // 1. ESTADO AMPLIADO: Ahora con más datos simulados
    const [datos, setDatos] = useState({
        nombre: 'Juan Pérez',
        email: 'admin@cine.com',
        telefono: '300 123 4567',
        ciudad: 'Ocaña',
        generoFavorito: 'Ciencia Ficción',
        fechaNacimiento: '1998-05-15'
    });

    const [editando, setEditando] = useState(false);

    // 2. FUNCIÓN GENÉRICA PARA TODOS LOS INPUTS
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({
            ...datos,
            [name]: value
        });
    };

    const toggleEdicion = () => {
        if (editando) {
            alert("¡Perfil actualizado correctamente!");
        }
        setEditando(!editando);
    };

    const cambiarPassword = () => {
        const nuevaPass = prompt("Ingresa tu nueva contraseña:");
        if (nuevaPass) {
            alert("Contraseña modificada con éxito.");
        }
    };

    return (
        // CONTENEDOR TARJETA OSCURA
        <div 
            className="card p-4 p-md-5 shadow-lg border-0 fade-in-up" 
            style={{ 
                backgroundColor: '#1f1f1f', 
                color: 'white',
                borderRadius: '15px'
            }}
        >
            {/* SECCIÓN SUPERIOR: AVATAR Y TÍTULO */}
            <div className="d-flex align-items-center mb-5 border-bottom border-secondary pb-4">
                {/* Avatar Simulado (Círculo con Inicial) */}
                <div 
                    className="rounded-circle bg-danger d-flex align-items-center justify-content-center me-4 shadow"
                    style={{ width: '80px', height: '80px', fontSize: '2.5rem', fontWeight: 'bold' }}
                >
                    {datos.nombre.charAt(0)}
                </div>
                
                <div>
                    <h2 className="mb-1 fw-bold text-white">Mi Perfil</h2>
                    <div className="d-flex align-items-center">
                        <span className="badge bg-warning text-dark me-2">★ Miembro GOLD</span>
                        <small className="text-white-50">Usuario desde 2023</small>
                    </div>
                </div>
            </div>

            {/* FORMULARIO DE DATOS (Grid de 2 columnas) */}
            <div className="row g-4">
                
                {/* 1. NOMBRE */}
                <div className="col-md-6">
                    <label className="form-label text-danger fw-bold small text-uppercase">Nombre Completo</label>
                    {editando ? (
                        <input 
                            type="text" className="form-control" name="nombre"
                            value={datos.nombre} onChange={handleChange}
                            style={inputStyle}
                        />
                    ) : (
                        <p className="fs-5 border-bottom border-secondary py-2 m-0">{datos.nombre}</p>
                    )}
                </div>

                {/* 2. CORREO */}
                <div className="col-md-6">
                    <label className="form-label text-danger fw-bold small text-uppercase">Correo Electrónico</label>
                    {editando ? (
                        <input 
                            type="email" className="form-control" name="email"
                            value={datos.email} onChange={handleChange}
                            style={inputStyle}
                        />
                    ) : (
                        <p className="fs-5 border-bottom border-secondary py-2 m-0">{datos.email}</p>
                    )}
                </div>

                {/* 3. TELÉFONO (Nuevo) */}
                <div className="col-md-6">
                    <label className="form-label text-danger fw-bold small text-uppercase">Teléfono / Celular</label>
                    {editando ? (
                        <input 
                            type="tel" className="form-control" name="telefono"
                            value={datos.telefono} onChange={handleChange}
                            style={inputStyle}
                        />
                    ) : (
                        <p className="fs-5 border-bottom border-secondary py-2 m-0">{datos.telefono}</p>
                    )}
                </div>

                {/* 4. CIUDAD (Nuevo) */}
                <div className="col-md-6">
                    <label className="form-label text-danger fw-bold small text-uppercase">Ciudad</label>
                    {editando ? (
                        <input 
                            type="text" className="form-control" name="ciudad"
                            value={datos.ciudad} onChange={handleChange}
                            style={inputStyle}
                        />
                    ) : (
                        <p className="fs-5 border-bottom border-secondary py-2 m-0">{datos.ciudad}</p>
                    )}
                </div>

                {/* 5. GÉNERO FAVORITO (Nuevo - Select) */}
                <div className="col-md-6">
                    <label className="form-label text-danger fw-bold small text-uppercase">Género Favorito</label>
                    {editando ? (
                        <select 
                            className="form-select" name="generoFavorito"
                            value={datos.generoFavorito} onChange={handleChange}
                            style={inputStyle}
                        >
                            <option>Acción</option>
                            <option>Comedia</option>
                            <option>Drama</option>
                            <option>Terror</option>
                            <option>Ciencia Ficción</option>
                        </select>
                    ) : (
                        <p className="fs-5 border-bottom border-secondary py-2 m-0">{datos.generoFavorito}</p>
                    )}
                </div>

                {/* 6. FECHA NACIMIENTO (Nuevo - Date) */}
                <div className="col-md-6">
                    <label className="form-label text-danger fw-bold small text-uppercase">Fecha de Nacimiento</label>
                    {editando ? (
                        <input 
                            type="date" className="form-control" name="fechaNacimiento"
                            value={datos.fechaNacimiento} onChange={handleChange}
                            style={inputStyle}
                        />
                    ) : (
                        <p className="fs-5 border-bottom border-secondary py-2 m-0">{datos.fechaNacimiento}</p>
                    )}
                </div>

                {/* BOTONES DE ACCIÓN */}
                <div className="col-12 mt-5 d-flex gap-3 flex-wrap">
                    <button 
                        className={`btn px-4 py-2 fw-bold shadow-sm ${editando ? 'btn-success' : 'btn-danger'}`}
                        onClick={toggleEdicion}
                        style={{ minWidth: '160px' }}
                    >
                        {editando ? (
                            <span><i className="bi bi-check-lg me-2"></i>Guardar</span>
                        ) : (
                            <span><i className="bi bi-pencil-square me-2"></i>Editar Perfil</span>
                        )}
                    </button>
                    
                    {!editando && (
                        <button 
                            className="btn btn-outline-light px-4 py-2"
                            onClick={cambiarPassword}
                        >
                            <i className="bi bi-key me-2"></i> Cambiar Contraseña
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

// Estilo reutilizable para los inputs oscuros
const inputStyle = {
    backgroundColor: '#333', 
    color: 'white', 
    border: '1px solid #555'
};

export default PerfilUsuario;