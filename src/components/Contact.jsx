import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal.js';
import { budgets, projectTypes } from '../data/content.js';
import './Contact.css';

export default function Contact() {
  const scope = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="section contact" ref={scope}>
      <div className="contact-inner">
        <div className="contact-left" data-reveal>
          <span className="section-num">05 / CONTACTO</span>
          <h2 className="contact-big">
            Hablemos de tu
            <br />
            <span className="acc">proyecto.</span>
          </h2>
          <div className="accent-line" />
          <div className="contact-info">
            <p>Email directo</p>
            <p>
              <a href="mailto:hola@nortestudio.es">hola@nortestudio.es</a>
            </p>
            <br />
            <p>Estudio Barcelona</p>
            <p>
              C/ Riera Alta, 12
              <br />
              08001 Barcelona
            </p>
            <br />
            <p>Tiempo de respuesta medio</p>
            <p>&lt; 24 horas en días laborables</p>
          </div>
        </div>

        <div data-reveal>
          {submitted ? (
            <div className="form-done">
              <h3>Recibido.</h3>
              <p>Te respondemos antes de mañana. Mientras tanto, échale un ojo a nuestro Instagram para ver qué estamos cocinando.</p>
            </div>
          ) : (
            <form className="budget-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <Field label="Nombre" placeholder="Tu nombre" required />
                <Field label="Empresa" placeholder="Tu empresa o proyecto" />
              </div>
              <Field label="Email" type="email" placeholder="hola@tuempresa.com" required />

              <div className="form-field">
                <label className="form-lbl" htmlFor="project-type">
                  Tipo de proyecto
                </label>
                <select id="project-type" className="form-ctrl" required defaultValue="">
                  <option value="" disabled>
                    Selecciona el tipo
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>

              <fieldset className="form-field">
                <legend className="form-lbl">Presupuesto estimado</legend>
                <div className="budget-options">
                  {budgets.map((budget, index) => (
                    <div key={budget} className="budget-opt">
                      <input type="radio" name="budget" id={`budget-${index}`} value={budget} />
                      <label htmlFor={`budget-${index}`}>{budget}</label>
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="form-field">
                <label className="form-lbl" htmlFor="brief">
                  Cuéntanos
                </label>
                <textarea
                  id="brief"
                  className="form-ctrl form-textarea"
                  placeholder="¿Cuál es el reto? ¿Qué quieres conseguir? Cuanto más nos cuentes, mejor."
                />
              </div>

              <button type="submit" className="form-submit">
                Enviar propuesta <span>→</span>
              </button>
              <p className="form-submit-note">Respondemos en menos de 24h · Sin compromiso · Sin spam</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...inputProps }) {
  const id = `field-${label.toLowerCase()}`;
  return (
    <div className="form-field">
      <label className="form-lbl" htmlFor={id}>
        {label}
      </label>
      <input id={id} className="form-ctrl" {...inputProps} />
    </div>
  );
}
