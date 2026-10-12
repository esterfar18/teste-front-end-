import React, { useState } from 'react';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const CATEGORIES: Category[] = [
  { id: 'tecnologia', name: 'Tecnologia', icon: '/images/tech.svg' },
  { id: 'supermercado', name: 'Supermercado', icon: '/images/supermarket.svg' },
  { id: 'bebidas', name: 'Bebidas', icon: '/images/drinks.svg' },
  { id: 'ferramentas', name: 'Ferramentas', icon: '/images/tools.svg' },
  { id: 'saude', name: 'Saúde', icon: '/images/health.svg' },
  { id: 'esportes', name: 'Esportes e Fitness', icon: '/images/sports.svg' },
  { id: 'moda', name: 'Moda', icon: '/images/fashion.svg' },
];

interface CategoriesProps {
  activeCategory?: string;
  onSelectCategory?: (id: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  activeCategory = 'tecnologia',
  onSelectCategory,
}) => {
  const [selected, setSelected] = useState(activeCategory);

  const handleSelect = (id: string) => {
    setSelected(id);
    if (onSelectCategory) {
      onSelectCategory(id);
    }
  };

  return (
    <section className="categories-section" aria-label="Categorias de produtos">
      <div className="categories-container">
        {CATEGORIES.map((cat) => {
          const isActive = selected === cat.id;
          return (
            <div
              key={cat.id}
              className={`category-item ${isActive ? 'active' : ''}`}
              onClick={() => handleSelect(cat.id)}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelect(cat.id);
                }
              }}
            >
              <div className="icon-box">
                <img src={cat.icon} alt={cat.name} width="60" height="60" loading="lazy" />
              </div>
              <span>{cat.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
