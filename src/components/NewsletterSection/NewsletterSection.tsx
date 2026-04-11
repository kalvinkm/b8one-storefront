import { useState } from 'react';
import './NewsletterSection.css';

export function NewsletterSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors = {
      name: name.trim() === '',
      email: email.trim() === '',
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email) {
      setFormError('Preencha os campos obrigatórios');
      return;
    }

    setFormError('');
    console.log('Form enviado');
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setName('');
    setEmail('');
  }

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter__content">
          <h2 className="newsletter__title">Fique por dentro das ofertas</h2>

          <p className="newsletter__description">
            Receba novidades e promoções direto no seu e-mail.
          </p>
        </div>

        <div className="newsletter-form-section">
          {formError && (
            <p className="newsletter-error-message">
              <span className="newsletter__error-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.00049 15C11.8665 15 15.0005 11.866 15.0005 8C15.0005 4.13401 11.8665 1 8.00049 1C4.1345 1 1.00049 4.13401 1.00049 8C1.00049 11.866 4.1345 15 8.00049 15Z"
                    fill="#ff4d4f"
                  />
                  <path
                    d="M11.0005 5L5.00049 11M5.00049 5L11.0005 11L5.00049 5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              {formError}
            </p>
          )}

          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Seu nome"
              className={`newsletter__input ${errors.name ? 'error' : ''}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className={`newsletter__input ${errors.email ? 'error' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter__button">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
      {isModalOpen && (
        <div className="newsletter__modal-overlay">
          <div className="newsletter__modal">
            <div className="newsletter__modal-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z"
                  fill="#22c55e"
                  className="circle"
                />

                <path
                  d="M5 8L7 10L11 6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="check"
                />
              </svg>
            </div>

            <p className="newsletter__modal-text">
              Cadastro realizado com sucesso!
            </p>

            <button
              className="newsletter__modal-button"
              onClick={handleCloseModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
