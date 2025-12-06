// src/MisReservas.jsx 

import React from 'react';
// 👈 IMPORTANTE: Aquí se importa el archivo de estilos CSS que crea la magia en móvil
import './MisReservas.css'; 

const MisReservas = () => {
    return (
        // Contenedor principal con estilo de tarjeta
        <div className="card shadow p-4">
            
            <h2 className="text-success mb-4 fw-bold">
                Historial de Mis Reservas
            </h2>
            
            <p className="lead text-secondary">
                Revisa el estado de tus reservas activas y pasadas.
            </p>

            {/* DIV table-responsive: permite el scroll horizontal en caso extremo */}
            <div className="table-responsive">
                
                {/* table-mobile-card: Clase para activar los estilos de tarjeta en móvil */}
                <table className="table table-hover table-mobile-card mt-4">
                    <thead className="table-light">
                        <tr>
                            {/* Los anchos son una guía de estilo, puedes ajustarlos si es necesario */}
                            <th style={{ width: '20%' }}>Película</th>
                            <th style={{ width: '25%' }}>Fecha y Hora</th>
                            <th style={{ width: '15%' }}>Asientos</th>
                            <th style={{ width: '20%' }}>Total</th>
                            <th style={{ width: '20%' }}>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* 👈 AÑADIR data-label A CADA CELDA (<td>) */}
                            <td data-label="Película">Oppenheimer</td>
                            <td data-label="Fecha y Hora">2025-12-01 19:30</td>
                            <td data-label="Asientos">A5, A6</td>
                            <td data-label="Total">$ 20.000</td>
                            <td data-label="Estado"><span className="badge bg-success">Activa</span></td>
                        </tr>
                        <tr>
                            <td data-label="Película">Barbie</td>
                            <td data-label="Fecha y Hora">2025-11-20 16:00</td>
                            <td data-label="Asientos">C1, C2, C3</td>
                            <td data-label="Total">$ 30.000</td>
                            <td data-label="Estado"><span className="badge bg-secondary">Finalizada</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default MisReservas;