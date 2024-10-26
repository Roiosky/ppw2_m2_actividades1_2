import React, { useState } from "react";
import Swal from "sweetalert2";
import '../src/style/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, correo, mensaje } = formData;

    if (!nombre || !correo || !mensaje) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios",
      });
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe ingresar un correo válido",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Enviado",
        text: "Formulario enviado correctamente",
      });
      // Aquí puedes manejar el envío del formulario
    }
  };

  return (
    <div className="contact-page">

      <main className="main-content">
        <div className="form-card">
          <h1>Contáctenos</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Correo:</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Mensaje:</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 biodegradable. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Contact;
