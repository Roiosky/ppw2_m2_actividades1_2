import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contáctenos</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
