// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // 👈 1. IMPORTAR BrowserRouter
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. ENVOLVER App con BrowserRouter */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>,
)