import './App.css'

function App() {
  // Las clases de Bootstrap "bg-dark" (fondo oscuro) y "text-white" (letra blanca)
  // min-vh-100 asegura que ocupe toda la altura de la pantalla.
  return (
    <div className="container-fluid bg-dark text-white min-vh-100">
      <h1 className="text-center p-3">The Light Gallery</h1>
      {/* Todo el contenido funcional de la aplicación irá aquí */}
    </div>
  )
}

export default App
