import React from 'react';

interface BannerProps {
  onCtaClick?: () => void;
}

export const Banner: React.FC<BannerProps> = ({ onCtaClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCtaClick) {
      onCtaClick();
    } else {
      const target = document.getElementById('vitrine-produtos');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className="hero-banner"
      aria-label="Destaque de promoções"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 60%), url('/images/banner.svg')`,
      }}
    >
      <div className="banner-container">
        <div className="banner-content">
          <h1>Venha conhecer nossas promoções</h1>
          <p>
            <strong>50% Off</strong> nos produtos
          </p>
          <a href="#vitrine-produtos" className="banner-cta" onClick={handleClick}>
            Ver produto
          </a>
        </div>
      </div>
    </section>
  );
};
