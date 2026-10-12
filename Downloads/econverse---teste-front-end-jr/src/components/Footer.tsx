import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-main">
        {/* Brand column */}
        <div className="footer-brand">
          <img
            src="/images/Logo.svg"
            alt="Econverse"
            className="footer-logo"
            width="139"
            height="42"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="social-links" aria-label="Redes Sociais">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/images/instagram.svg" alt="" aria-hidden="true" width="18" height="18" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/images/facebook.svg" alt="" aria-hidden="true" width="18" height="18" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/images/linkedin.svg" alt="" aria-hidden="true" width="18" height="18" />
            </a>
          </div>
        </div>

        {/* Institucional column */}
        <div className="footer-column">
          <h4>Institucional</h4>
          <ul>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#movimento">Movimento</a></li>
            <li><a href="#trabalhe">Trabalhe conosco</a></li>
          </ul>
        </div>

        {/* Ajuda column */}
        <div className="footer-column">
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#suporte">Suporte</a></li>
            <li><a href="#contato">Fale Conosco</a></li>
            <li><a href="#faq">Perguntas Frequentes</a></li>
          </ul>
        </div>

        {/* Termos column */}
        <div className="footer-column">
          <h4>Termos</h4>
          <ul>
            <li><a href="#termos">Termos e Condições</a></li>
            <li><a href="#privacidade">Política de Privacidade</a></li>
            <li><a href="#trocas">Troca e Devolução</a></li>
          </ul>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="certificates">
            <span>Compra Segura</span>
            <span>·</span>
            <span>VTEX Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
