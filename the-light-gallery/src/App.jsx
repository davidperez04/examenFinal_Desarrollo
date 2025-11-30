// src/App.jsx
import './App.css'

function App() {
  // Las clases de Bootstrap ('d-flex', 'align-items-center', 'justify-content-center')
  // se usan para centrar el formulario de Login en la pantalla.
  return (
    <div className="container-fluid bg-black text-white min-vh-100 d-flex align-items-center justify-content-center"
      style={{
    backgroundImage: 'url(/fondo.png)', // Asegúrate de que el nombre de la imagen sea correcto
    backgroundSize: 'cover', // Cubrirá todo el espacio
    backgroundPosition: 'center', // Centra la imagen
  }}
    >
      {/* Tarjeta de Login (Card) */}
      <div className="card shadow p-4 text-center"
        style={{ 
        width: '20rem', 
        // CAMBIO AQUÍ: (R=255, G=255, B=255, Alpha=0.9 para 90% opacidad)
        backgroundColor: 'rgba(255, 255, 255, 0.3)', 
        // Asegura que los bordes de los inputs se vean
        border: '1px solid rgba(0, 0, 0, 0.2)' 
    }}
      >
       <h1 
        className="card-title text-black mb-4 fw-bold" 
        style={{ fontFamily: "'Cinzel', serif", fontSize: '2.5rem' }}
        >Cine Leonelda Ocaña
       </h1>
        <p className='text-start text-black'>El cine como nunca lo has vivido en Ocaña.</p>
        <p></p>
        <form>
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Usuario" 
            />
          </div>
          <div className="mb-3">
            <input 
              type="password" 
              className="form-control" 
              placeholder="Contraseña" 
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-danger mt-3 w-100">
            INGRESAR
          </button>
        </form>
{/* Enlace de Registro: Enlace de "Crear Cuenta" usando el color rojo */}
<p className="mt-3 mb-0 text-black">
  ¿No tienes cuenta? <a href="#" className="text-white fw-bold">Crear Cuenta</a>
</p>
        
      </div>
    </div>
  )
}

export default App