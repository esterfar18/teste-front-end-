import React, { useRef } from 'react';

const BRANDS = [
  { id: 1, name: 'Econverse', logo: '/images/Logo.svg' },
  { id: 2, name: 'Econverse', logo: '/images/Logo.svg' },
  { id: 3, name: 'Econverse', logo: '/images/Logo.svg' },
  { id: 4, name: 'Econverse', logo: '/images/Logo.svg' },
  { id: 5, name: 'Econverse', logo: '/images/Logo.svg' },
];

export const Brands: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };

  return (
    <section className="marcas-section" aria-label="Navegue por marcas">
      <div className="marcas-container">
        <h2>Navegue por marcas</h2>

        <div className="marcas-list-wrapper">
          <div className="marcas-list" ref={listRef}>
            {BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="marca-circle"
                role="button"
                tabIndex={0}
                aria-label={`Marca ${brand.name}`}
              >
                <img src={brand.logo} alt={brand.name} loading="lazy" />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="marcas-nav-button"
            onClick={handleScrollRight}
            aria-label="Ver mais marcas"
          >
            <svg
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="2 2 12 12 2 22" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
