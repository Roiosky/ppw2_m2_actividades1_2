// Home.js
import React from "react";
import { Link } from "react-router-dom";
import './style/Home.css'; // Asegúrate de tener el CSS para el estilo

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>¡Bienvenido a Nuestra Tienda!</h1>
        <p>Explora nuestros productos y descubre lo que tenemos para ofrecerte.</p>
      </div>
      <div className="banner">
        <img src="https://ecoallpa.com/portal/wp-content/uploads/2023/09/banner-kraft.jpg" alt="Banner" className="banner-image" />
      </div>
      <Link to="/productos" className="products-button">Ver Productos</Link>
    </div>
  );
}

export default Home;
