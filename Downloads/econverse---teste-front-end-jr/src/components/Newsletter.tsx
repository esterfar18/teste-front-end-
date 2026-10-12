import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [terms, setTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor, informe seu nome.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Por favor, informe um e-mail válido.');
      return;
    }
    if (!terms) {
      setError('Você precisa aceitar os termos e condições.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  return (
    <section className="newsletter-section" aria-label="Assinatura de Newsletter">
      <div className="newsletter-container">
        <div className="newsletter-info">
          <h3>Inscreva-se na nossa newsletter</h3>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <div className="newsletter-form">
          {submitted ? (
            <div className="success-message" role="alert">
              Obrigado por se inscrever! Em breve você receberá novidades exclusivas em seu e-mail.
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="inputs-row">
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError(null);
                  }}
                  aria-label="Seu nome"
                  required
                />
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  aria-label="Seu e-mail"
                  required
                />
                <button type="submit">INSCREVER</button>
              </div>

              <label className="terms-label">
                <input
                  type="checkbox"
                  checked={terms}
                  onChange={(e) => {
                    setTerms(e.target.checked);
                    if (error) setError(null);
                  }}
                />
                Aceito os termos e condições
              </label>

              {error && (
                <div style={{ color: '#E53E3E', fontSize: '13px', marginTop: '8px' }}>
                  {error}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
