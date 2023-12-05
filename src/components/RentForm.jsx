import React from 'react';
import { Link } from 'react-router-dom';

const RentForm = ({ movieTitle, requestingSocio, returningSocio }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleGoBack = () => {
    history.goBack(); 
  };


  return (
    <div className="rent-form">
      <h2>Renta de Película</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="requestingSocio">Socio que la ha solicitado:</label>
          <input type="text" id="requestingSocio" value={requestingSocio}/>
        </div>
        <div>
          <label htmlFor="returningSocio">Socio que debe devolver la película:</label>
          <input type="text" id="returningSocio" value={returningSocio}/>
        </div>
        <button type="submit">Enviar Formulario</button>
        <Link to="/" className="back-button">
            Volver
        </Link>      
      </form>
    </div>
  );
};

export default RentForm;
