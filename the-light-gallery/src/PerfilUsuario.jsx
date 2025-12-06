import React, { useState } from 'react';
// Asegúrate de importar tu CSS si es necesario, o usa Bootstrap nativo

const PerfilUsuario = () => {
    // 1. ESTADOS: Guardamos la info en variables modificables
    const [datos, setDatos] = useState({
        nombre: 'Juan Pérez (Ejemplo)',
        email: 'admin@cine.com (Ejemplo)'
    });

    // Estado para saber si estamos en "Modo Edición" o "Modo Ver"
    const [editando, setEditando] = useState(false);

    // 2. FUNCIONES
    // Captura lo que escribes en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({
            ...datos,
            [name]: value
        });
    };

    // Alterna entre editar y guardar
    const toggleEdicion = () => {
        if (editando) {
            // Aquí iría la lógica para guardar en Base de Datos real
            alert("¡Información actualizada correctamente!");
        }
        setEditando(!editando);
    };

    // Simulación de cambio de contraseña
    const cambiarPassword = () => {
        // Para el examen, una alerta es suficiente para mostrar interactividad
        // sin complicarnos creando otro formulario complejo.
        const nuevaPass = prompt("Ingresa tu nueva contraseña:");
        if (nuevaPass) {
            alert("Contraseña modificada con éxito.");
        }
    };

    return (
        <div className="card shadow p-4">
            
            <h2 className="text-primary mb-4 fw-bold">
                Mi Perfil de Usuario
            </h2>
            
            <p className="lead text-secondary">
                Aquí puedes gestionar tu información personal y contraseña.
            </p>

            <div className="row mt-4">
                {/* CAMPO NOMBRE */}
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Nombre</label>
                    {editando ? (
                        <input 
                            type="text" 
                            className="form-control" 
                            name="nombre"
                            value={datos.nombre} 
                            onChange={handleChange}
                        />
                    ) : (
                        <p className="form-control-plaintext border-bottom">{datos.nombre}</p>
                    )}
                </div>
                
                {/* CAMPO CORREO */}
                <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Correo Electrónico</label>
                    {editando ? (
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            value={datos.email} 
                            onChange={handleChange}
                        />
                    ) : (
                        <p className="form-control-plaintext border-bottom">{datos.email}</p>
                    )}
                </div>
                
                {/* BOTONES DE ACCIÓN */}
                <div className="col-12 mt-4">
                    <button 
                        className={`btn ${editando ? 'btn-success' : 'btn-warning'}`}
                        onClick={toggleEdicion}
                    >
                        {editando ? 'Guardar Cambios' : 'Editar Información'}
                    </button>
                    
                    {/* Botón cambiar contraseña: solo visible si NO estamos editando info */}
                    {!editando && (
                        <button 
                            className="btn btn-outline-danger ms-3"
                            onClick={cambiarPassword}
                        >
                            Cambiar Contraseña
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PerfilUsuario;