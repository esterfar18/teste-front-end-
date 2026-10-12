import React from 'react';

interface PartnerItem {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

interface PartnersProps {
  title?: string;
  items?: PartnerItem[];
}

const DEFAULT_ITEMS: PartnerItem[] = [
  {
    id: 1,
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    buttonText: 'CONFIRA',
    image: '/images/apple.svg',
  },
  {
    id: 2,
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    buttonText: 'CONFIRA',
    image: '/images/apple.svg',
  },
];

export const Partners: React.FC<PartnersProps> = ({ items = DEFAULT_ITEMS }) => {
  return (
    <section className="partners-section" aria-label="Banners promocionais">
      <div className="partners-container">
        {items.map((item) => (
          <article
            key={item.id}
            className="partner-card"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="card-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#confira" className="btn-confira">
                {item.buttonText}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
