import React, { useState } from 'react';

const PerfilUsuario = () => {
    // 1. ESTADOS (Mantenemos tu misma lógica)
    const [datos, setDatos] = useState({
        nombre: 'Juan Pérez (Ejemplo)',
        email: 'admin@cine.com (Ejemplo)'
    });

    const [editando, setEditando] = useState(false);

    // 2. FUNCIONES
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({
            ...datos,
            [name]: value
        });
    };

    const toggleEdicion = () => {
        if (editando) {
            alert("¡Información actualizada correctamente!");
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
            className="card p-5 shadow-lg border-0" 
            style={{ 
                backgroundColor: '#1f1f1f', // Gris oscuro elegante
                color: 'white',
                borderRadius: '15px'
            }}
        >
            {/* ENCABEZADO */}
            <h2 className="mb-4 fw-bold text-white border-bottom border-secondary pb-3">
                <i className="bi bi-person-circle me-3 text-danger"></i>
                Mi Perfil de Usuario
            </h2>
            
            <p className="lead text-white-50 mb-5">
                Aquí puedes gestionar tu información personal y contraseña.
            </p>

            <div className="row">
                
                {/* CAMPO NOMBRE */}
                <div className="col-md-6 mb-4">
                    <label className="form-label fw-bold text-danger">Nombre</label>
                    {editando ? (
                        <input 
                            type="text" 
                            className="form-control" 
                            name="nombre"
                            value={datos.nombre} 
                            onChange={handleChange}
                            // Estilo input oscuro
                            style={{ backgroundColor: '#333', color: 'white', border: '1px solid #555' }}
                        />
                    ) : (
                        <p className="fs-5 border-bottom border-secondary py-2">{datos.nombre}</p>
                    )}
                </div>
                
                {/* CAMPO CORREO */}
                <div className="col-md-6 mb-4">
                    <label className="form-label fw-bold text-danger">Correo Electrónico</label>
                    {editando ? (
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            value={datos.email} 
                            onChange={handleChange}
                            style={{ backgroundColor: '#333', color: 'white', border: '1px solid #555' }}
                        />
                    ) : (
                        <p className="fs-5 border-bottom border-secondary py-2">{datos.email}</p>
                    )}
                </div>
                
                {/* BOTONES DE ACCIÓN */}
                <div className="col-12 mt-4 d-flex gap-3">
                    <button 
                        className={`btn px-4 py-2 fw-bold ${editando ? 'btn-success' : 'btn-danger'}`}
                        onClick={toggleEdicion}
                    >
                        {editando ? (
                            <span><i className="bi bi-check-lg me-2"></i>Guardar Cambios</span>
                        ) : (
                            <span><i className="bi bi-pencil-square me-2"></i>Editar Información</span>
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

export default PerfilUsuario;