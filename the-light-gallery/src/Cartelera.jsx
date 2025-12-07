import React, { useState } from 'react';

const Cartelera = () => {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  // BASE DE DATOS DE TUS 6 PELÍCULAS
  const peliculas = [
    {
      id: 1,
      titulo: "Wicked: For good",
      // Poster de fantasía vibrante
      poster: "https://image.tmdb.org/t/p/original/jdd0Qv6V8AJ3V7Dr8aMIMUWxZ2c.jpg", 
      sinopsis: "La conclusión épica de la saga de Oz. Elphaba y Glinda deben enfrentar las consecuencias de sus decisiones mientras el Mago de Oz desata su poder contra la Ciudad Esmeralda.",
      actores: "Cynthia Erivo, Ariana Grande, Jeff Goldblum",
      horarios: ["ESTRENO 2025"],
      // Trailer de Wicked
      trailer: "https://www.youtube.com/embed/vt98AlBDI9Y?si=fRaibuqZNiYXi89u",
      categoria: "estreno"
    },
    {
      id: 2,
      titulo: "Zootopia 2",
      // Poster de Zootopia
      poster: "https://image.tmdb.org/t/p/original/vAtyR5471YBzBb2FrCiCTrxwv3E.jpg", 
      sinopsis: "Los detectives Judy Hopps y Nick Wilde se embarcan en una nueva y peligrosa misión, viajando a partes inexploradas de la metrópolis animal para descubrir una conspiración reptiliana.",
      actores: "Ginnifer Goodwin, Jason Bateman",
      horarios: ["PRÓXIMAMENTE"],
      // Teaser conceptual
      trailer: "https://www.youtube.com/embed/5AwtptT8X8k?si=_dG1WMLacYsX-wBn",
      categoria: "estreno"
    },
    {
      id: 3,
      titulo: "The Smashing Machine",
      // Foto estilo A24 / Drama deportivo
      poster: "https://image.tmdb.org/t/p/original/s8YcFknDU9fp8jhSV1QKQa4BvSQ.jpg", 
      sinopsis: "La historia real y cruda del luchador de MMA Mark Kerr, explorando su ascenso meteórico en la UFC y su devastadora lucha contra la adicción y sus demonios personales.",
      actores: "Dwayne Johnson, Emily Blunt, Oleksandr Usyk",
      horarios: ["FESTIVALES 2025"],
      // Clip relacionado (ya que no hay trailer oficial aún)
      trailer: "https://www.youtube.com/embed/aRpnP3LZ99g?si=vzWZEXmzndLFBsha", 
      categoria: "cartelera"
    },
    {
      id: 4,
      titulo: "Frankenstein",
      // Arte Gótico Oscuro
      poster: "https://image.tmdb.org/t/p/original/uJyAGJWJjM63YnY7QNG9walreVX.jpg", 
      sinopsis: "La visión oscura de Guillermo del Toro sobre el clásico de Mary Shelley. Un doctor obsesionado desafía a Dios creando vida, solo para ser perseguido por su propia creación monstruosa.",
      actores: "Oscar Isaac, Jacob Elordi, Mia Goth",
      horarios: ["HALLOWEEN 2025"],
      // Teaser conceptual gótico
      trailer: "https://www.youtube.com/embed/8aulMPhE12g?si=p24ZZ7Loa5iENm8g",
      categoria: "estreno"
    },
    {
      id: 5,
      titulo: "Five Nights at Freddy's 2",
      // Poster de Freddy animatrónico
      poster: "https://image.tmdb.org/t/p/original/am6O7221qGtb5ba5uJKw7PfPZkJ.jpg", 
      sinopsis: "Mike Schmidt creyó haber sobrevivido, pero los horrores de Freddy Fazbear's Pizza no han terminado. Nuevos animatrónicos 'Toy' cobran vida con intenciones aún más siniestras.",
      actores: "Josh Hutcherson, Matthew Lillard",
      horarios: ["DICIEMBRE 2025"],
      // Trailer de FNAF
      trailer: "https://www.youtube.com/embed/E8M-iJ0p-Xk?si=7lLrJk3U9PIO0PEj",
      categoria: "cartelera"
    },
    {
      id: 6,
      titulo: "Bugonia",
      // Poster abstracto/Sci-Fi (Yorgos Lanthimos)
      poster: "https://image.tmdb.org/t/p/original/oxgsAQDAAxA92mFGYCZllgWkH9J.jpg", 
      sinopsis: "Dos jóvenes obsesionados con conspiraciones secuestran a la poderosa CEO de una compañía farmacéutica, convencidos de que ella es en realidad una alienígena enviada para destruir la Tierra.",
      actores: "Emma Stone, Jesse Plemons",
      horarios: ["CARTELERA: 18:00"],
      // Teaser estilo Lanthimos
      trailer: "https://www.youtube.com/embed/8J88rUXrZ2w?si=CvG647lPXwykGmqY", 
      categoria: "cartelera"
    }
  ];

  return (
    <div className="fade-in-up">
      {/* TÍTULO PRINCIPAL */}
      <h2 className="text-white mb-4 fw-bold">
        <i className="bi bi-fire text-danger me-2"></i> Próximos Grandes Estrenos
      </h2>
      
      {/* GRID DE PELÍCULAS (Muestra las 6 juntas) */}
      <div className="row g-4 mb-5">
        {peliculas.map((peli) => (
          <div className="col-6 col-md-4" key={peli.id}>
            <div 
              className="card h-100 shadow border-0 card-hover" 
              style={{ cursor: 'pointer', backgroundColor: 'transparent' }}
              onClick={() => setPeliculaSeleccionada(peli)}
            >
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px' }}>
                  <img 
                    src={peli.poster} 
                    className="card-img-top" 
                    alt={peli.titulo} 
                    // Si alguna imagen falla, pone una genérica negra
                    onError={(e) => e.target.src = "https://via.placeholder.com/300x450/000000/FFFFFF?text=Sin+Imagen"}
                    style={{ transition: 'transform 0.3s ease', aspectRatio: '2/3', objectFit: 'cover' }}
                  />
                  {/* Etiqueta flotante */}
                  <div 
                    className={`position-absolute top-0 end-0 m-2 badge ${peli.categoria === 'estreno' ? 'bg-primary' : 'bg-danger'} shadow`}
                  >
                    {peli.categoria === 'estreno' ? 'Próximamente' : 'En Venta'}
                  </div>
              </div>
              
              <div className="mt-3 text-center">
                <h6 className="text-white fw-bold mb-0 text-truncate">{peli.titulo}</h6>
                <small className="text-white-50">Ver Trailer</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL (VENTANA EMERGENTE CON INFO) */}
      {peliculaSeleccionada && (
        <div 
            className="modal fade show d-block" 
            style={{ backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1050 }}
            tabIndex="-1"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content border-secondary" style={{ backgroundColor: '#1f1f1f', color: 'white' }}>
              
              <div className="modal-header border-bottom border-secondary">
                <h3 className="modal-title fw-bold text-danger">{peliculaSeleccionada.titulo}</h3>
                <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    onClick={() => setPeliculaSeleccionada(null)}
                ></button>
              </div>

              <div className="modal-body">
                <div className="row">
                    {/* VIDEO YOUTUBE */}
                    <div className="col-lg-8 mb-3">
                        <div className="ratio ratio-16x9 rounded overflow-hidden shadow mb-3 border border-secondary">
                            <iframe 
                                src={peliculaSeleccionada.trailer} 
                                title="Trailer" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h5 className="text-warning fw-bold">Sinopsis</h5>
                        <p className="text-white-50" style={{ fontSize: '1.1rem' }}>{peliculaSeleccionada.sinopsis}</p>
                    </div>

                    {/* DETALLES LATERALES */}
                    <div className="col-lg-4">
                        <div className="p-4 rounded h-100" style={{ backgroundColor: '#2b2b2b' }}>
                            <h6 className="text-danger fw-bold mb-2">ELENCO PRINCIPAL</h6>
                            <p className="text-white mb-4">{peliculaSeleccionada.actores}</p>
                            
                            <hr className="border-secondary"/>
                            
                            <h6 className="text-danger fw-bold mb-3">FUNCIONES / ESTRENO</h6>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                {peliculaSeleccionada.horarios.map((h, i) => (
                                    <span key={i} className="badge bg-secondary fs-6 py-2 px-3">{h}</span>
                                ))}
                            </div>

                            {/* Botón condicional */}
                            {peliculaSeleccionada.categoria === 'cartelera' ? (
                                <button className="btn btn-danger w-100 fw-bold py-3 shadow-sm hover-effect">
                                    <i className="bi bi-ticket-fill me-2"></i> COMPRAR ENTRADA
                                </button>
                            ) : (
                                <button className="btn btn-outline-primary w-100 fw-bold py-3">
                                    <i className="bi bi-bell-fill me-2"></i> ACTIVAR NOTIFICACIÓN
                                </button>
                            )}
                        </div>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartelera;