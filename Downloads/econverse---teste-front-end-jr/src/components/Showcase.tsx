import React, { useState } from 'react';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface ShowcaseProps {
  title?: string;
  showTabs?: boolean;
  showViewAllLink?: boolean;
  products: Product[];
  loading?: boolean;
  error?: string | null;
  onSelectProduct: (product: Product) => void;
  onQuickBuy?: (product: Product, e: React.MouseEvent) => void;
}

const TABS = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

export const Showcase: React.FC<ShowcaseProps> = ({
  title = 'Produtos relacionados',
  showTabs = false,
  showViewAllLink = false,
  products,
  loading = false,
  error = null,
  onSelectProduct,
  onQuickBuy,
}) => {
  const [activeTab, setActiveTab] = useState('CELULAR');
  const [startIndex, setStartIndex] = useState(0);

  // Determine items per page depending on viewport, default is 4
  const visibleCount = 4;
  const maxIndex = Math.max(0, products.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  if (loading) {
    return (
      <section className="showcase-section" aria-busy="true">
        <div className="showcase-container">
          <div className="loading-box">Carregando vitrine de produtos...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="showcase-section">
        <div className="showcase-container">
          <div className="error-box">{error}</div>
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return null;
  }

  // Calculate translate percentage
  const translatePercent = (startIndex * (100 / visibleCount));

  return (
    <section className="showcase-section" id="vitrine-produtos" aria-label={title}>
      <div className="showcase-container">
        {/* Title Header */}
        <div className="showcase-header">
          <div className="divider-line" />
          <h2>{title}</h2>
          <div className="divider-line" />
        </div>

        {/* View all subtitle if enabled */}
        {showViewAllLink && (
          <a href="#todos" className="view-all-link">
            Ver todos
          </a>
        )}

        {/* Filter Tabs if enabled */}
        {showTabs && (
          <div className="tabs-container" role="tablist" aria-label="Filtros de categoria">
            <div className="tabs-track">
              {TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`tab-item ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(tab);
                      setStartIndex(0);
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Carousel */}
        <div className="carousel-wrapper">
          <button
            type="button"
            className="carousel-button prev"
            onClick={handlePrev}
            disabled={startIndex === 0}
            aria-label="Produto anterior"
          >
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 15 3 9 9 3" />
            </svg>
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${translatePercent}%)`,
              }}
            >
              {products.map((product, idx) => (
                <ProductCard
                  key={`${product.productName}-${idx}`}
                  product={product}
                  onSelect={onSelectProduct}
                  onQuickBuy={onQuickBuy}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-button next"
            onClick={handleNext}
            disabled={startIndex >= maxIndex}
            aria-label="Próximo produto"
          >
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 3 9 9 3 15" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
