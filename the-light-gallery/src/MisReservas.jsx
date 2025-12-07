import React from 'react';
// Importamos el CSS (que actualizaremos en el siguiente paso)
import './MisReservas.css'; 

const MisReservas = () => {
    return (
        // 1. TARJETA OSCURA
        <div 
            className="card p-4 shadow-lg border-0"
            style={{ 
                backgroundColor: '#1f1f1f', // Gris oscuro
                color: 'white',
                borderRadius: '15px'
            }}
        >
            
            {/* ENCABEZADO CON ESTILO */}
            <h2 className="mb-4 fw-bold text-white border-bottom border-secondary pb-3">
                <i className="bi bi-ticket-perforated me-3 text-danger"></i>
                Historial de Mis Reservas
            </h2>
            
            <p className="lead text-white-50">
                Revisa el estado de tus reservas activas y pasadas.
            </p>

            <div className="table-responsive">
                
                {/* 2. TABLA OSCURA (table-dark) */}
                <table className="table table-dark table-hover table-mobile-card mt-4" 
                       style={{ backgroundColor: 'transparent' }}>
                    
                    {/* Encabezado con texto rojo o blanco según prefieras */}
                    <thead>
                        <tr style={{ borderBottom: '2px solid #444' }}>
                            <th className="text-danger" style={{ width: '20%' }}>Película</th>
                            <th style={{ width: '25%' }}>Fecha y Hora</th>
                            <th style={{ width: '15%' }}>Asientos</th>
                            <th style={{ width: '20%' }}>Total</th>
                            <th style={{ width: '20%' }}>Estado</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {/* FILA 1 */}
                        <tr style={{ borderBottom: '1px solid #333' }}>
                            <td data-label="Película" className="fw-bold text-white">Oppenheimer</td>
                            <td data-label="Fecha y Hora" className="text-white-50">2025-12-01 19:30</td>
                            <td data-label="Asientos">A5, A6</td>
                            <td data-label="Total" className="text-success fw-bold">$ 20.000</td>
                            <td data-label="Estado">
                                <span className="badge bg-success">Activa</span>
                            </td>
                        </tr>

                        {/* FILA 2 */}
                        <tr style={{ borderBottom: '1px solid #333' }}>
                            <td data-label="Película" className="fw-bold text-white">Barbie</td>
                            <td data-label="Fecha y Hora" className="text-white-50">2025-11-20 16:00</td>
                            <td data-label="Asientos">C1, C2, C3</td>
                            <td data-label="Total" className="text-success fw-bold">$ 30.000</td>
                            <td data-label="Estado">
                                <span className="badge bg-secondary">Finalizada</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default MisReservas;