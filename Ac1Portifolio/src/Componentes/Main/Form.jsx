import React from 'react';
import '../../index.css'; // ajuste o caminho conforme necessário

function Form() {
  return (
    <div className="contato">
      <h1>Entre em contato conosco</h1>
      <form className="form-container" id="contactForm">
        <div className="form-field">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Digite aqui..."
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Digite aqui..."
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            placeholder="Digite sua mensagem aqui..."
          />
        </div>
        <button
          type="submit"
          className="submit-button"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
