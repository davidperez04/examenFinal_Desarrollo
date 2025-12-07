import React, { useState } from 'react';
import './MisReservas.css'; 

const MisReservas = () => {
    // 1. ESTADO: Iniciamos mostrando 'todas' para que veas las 3 de una vez
    const [filtro, setFiltro] = useState('todas');

    const listaReservas = [
        {
            id: 1,
            pelicula: "Oppenheimer",
            // Enlace estable de Wikimedia
            poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
            fecha: "2025-12-01",
            hora: "19:30",
            sala: "IMAX 1",
            asientos: "A5, A6",
            precio: "$ 20.000",
            estado: "activa"
        },
        {
            id: 2,
            pelicula: "Joker: Folie à Deux",
            // Enlace estable de Wikimedia
            poster: "https://image.tmdb.org/t/p/original/mZuAPY4ETMQPHhCXIcJ90kd6RaS.jpg",
            fecha: "2025-12-05",
            hora: "21:00",
            sala: "Sala 3",
            asientos: "F10, F11",
            precio: "$ 18.000",
            estado: "activa"
        },
        {
            id: 3,
            pelicula: "Barbie",
            // Enlace estable de Wikimedia
            poster: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
            fecha: "2024-11-20",
            hora: "16:00",
            sala: "Sala 2",
            asientos: "C1, C2",
            precio: "$ 30.000",
            estado: "pasada"
        }
    ];

    // Función de seguridad por si una imagen falla
    const handleImageError = (e) => {
        e.target.src = "https://via.placeholder.com/150x220/333333/FFFFFF?text=Sin+Imagen";
    };

    // Lógica del filtro: Si es "todas" muestra todo, si no, filtra por estado
    const reservasVisibles = filtro === 'todas' 
        ? listaReservas 
        : listaReservas.filter(reserva => reserva.estado === filtro);

    return (
        <div 
            className="card p-4 shadow-lg border-0 fade-in-up"
            style={{ 
                backgroundColor: '#1f1f1f', 
                color: 'white',
                borderRadius: '15px',
                minHeight: '80vh'
            }}
        >
            <h2 className="mb-4 fw-bold text-white">
                <i className="bi bi-ticket-perforated me-3 text-danger"></i>
                Historial de Mis Reservas
            </h2>

            {/* 3. PESTAÑAS DE NAVEGACIÓN MEJORADAS */}
            <div className="d-flex mb-4 border-bottom border-secondary overflow-auto">
                <button 
                    className={`btn me-3 pb-3 fw-bold ${filtro === 'todas' ? 'text-danger border-bottom border-danger border-3' : 'text-secondary'}`}
                    onClick={() => setFiltro('todas')}
                    style={{ borderRadius: 0, whiteSpace: 'nowrap' }}
                >
                    Todas
                </button>
                <button 
                    className={`btn me-3 pb-3 fw-bold ${filtro === 'activa' ? 'text-danger border-bottom border-danger border-3' : 'text-secondary'}`}
                    onClick={() => setFiltro('activa')}
                    style={{ borderRadius: 0, whiteSpace: 'nowrap' }}
                >
                    Próximas
                </button>
                <button 
                    className={`btn pb-3 fw-bold ${filtro === 'pasada' ? 'text-danger border-bottom border-danger border-3' : 'text-secondary'}`}
                    onClick={() => setFiltro('pasada')}
                    style={{ borderRadius: 0, whiteSpace: 'nowrap' }}
                >
                    Historial
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-dark table-hover table-mobile-card align-middle" 
                       style={{ backgroundColor: 'transparent' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #444' }}>
                            <th style={{ width: '35%' }}>Película</th>
                            <th style={{ width: '20%' }}>Fecha y Sala</th>
                            <th style={{ width: '15%' }}>Asientos</th>
                            <th style={{ width: '15%' }}>Total</th>
                            <th style={{ width: '15%' }}>Acción</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {reservasVisibles.length > 0 ? (
                            reservasVisibles.map((item) => (
                                <tr key={item.id} style={{ borderBottom: '1px solid #333' }}>
                                    
                                    {/* COLUMNA PELÍCULA */}
                                    <td data-label="Película">
                                        <div className="d-flex align-items-center">
                                            <img 
                                                src={item.poster} 
                                                alt={item.pelicula}
                                                onError={handleImageError}
                                                className="rounded shadow-sm me-3"
                                                style={{ width: '50px', height: '75px', objectFit: 'cover' }}
                                            />
                                            <div>
                                                <h6 className="mb-0 fw-bold text-white">{item.pelicula}</h6>
                                                <small className="text-white-50 d-lg-none">{item.sala}</small>
                                            </div>
                                        </div>
                                    </td>

                                    <td data-label="Fecha">
                                        <div className="d-flex flex-column">
                                            <span className="fw-bold">{item.fecha}</span>
                                            <small className="text-white-50">{item.hora} • {item.sala}</small>
                                        </div>
                                    </td>

                                    <td data-label="Asientos" className="text-warning fw-bold">
                                        {item.asientos}
                                    </td>

                                    <td data-label="Total" className="fw-bold text-success">
                                        {item.precio}
                                    </td>

                                    <td data-label="Acción">
                                        {item.estado === 'activa' ? (
                                            <button 
                                                className="btn btn-sm btn-outline-danger w-100"
                                                onClick={() => alert(`Generando código QR para ${item.pelicula}...`)}
                                            >
                                                <i className="bi bi-qr-code"></i> Ver QR
                                            </button>
                                        ) : (
                                            <span className="badge bg-secondary w-100 py-2">Finalizada</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-5 text-white-50">
                                    No hay reservas en esta categoría.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MisReservas;