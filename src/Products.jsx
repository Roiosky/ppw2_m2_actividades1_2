import React from "react";
import '../src/style/Products.css';

const Products = () => {
  return (
    <div className="products-page">


      <main className="main-content">
        <div className="products-container">
          <div className="product-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpyn_k7SHvOfExfE035yFTR64LovqbIOQqQ&s" alt="Producto 1" />
            <h2>Producto 1</h2>
            
          </div>
          <div className="product-item">
            <img src="https://bolsasdepapel.co/wp-content/uploads/2024/01/Sostenibilidad_bolsas_de_papel.png" alt="Producto 2" />
            <h2>Producto 2</h2>
          
          </div>
          <div className="product-item">
            <img src="https://static.wixstatic.com/media/be3b96_08e9b4daf2ae4c7e9f8289a58813be81~mv2.jpg/v1/fill/w_256,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/be3b96_08e9b4daf2ae4c7e9f8289a58813be81~mv2.jpg" alt="Producto 3" />
            <h2>Producto 3</h2>
          
          </div>
          <div className="product-item">
            <img src="https://infonegocios.info/content/images/2022/07/21/124456/conversions/Pukavy-cepillos-bambu-biodegradables-01-py-medium-size.jpg" alt="Producto 4" />
            <h2>Producto 4</h2>
            
          </div>
          <div className="product-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3qrxDain7yVMaaea9KXFunCnHoI6ewpL7w&s" alt="Producto 5" />
            <h2>Producto 5</h2>
            
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 biodegradables. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Products;
