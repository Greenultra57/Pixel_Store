import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './paginas/inicio.jsx'
import Registro from './paginas/Registro.jsx'
import Contacto from './paginas/Contacto.jsx'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
