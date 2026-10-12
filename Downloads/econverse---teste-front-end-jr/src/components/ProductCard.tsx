import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickBuy?: (product: Product, e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickBuy,
}) => {
  // Format prices
  // Note: in Econverse test, the price might be either integer cents or realistic unit prices
  // e.g. 15000 can be treated as R$ 15.000,00 or R$ 150,00.
  // In the original test layout, prices are shown as R$ 28,90 with old price R$ 30,90
  // or displayed according to JSON price. We provide smart formatting:
  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  // Simulated old price (10% higher)
  const oldPrice = product.price * 1.1;
  const installmentValue = product.price / 2;

  const handleCardClick = () => {
    onSelect(product);
  };

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onQuickBuy) {
      onQuickBuy(product, e);
    } else {
      onSelect(product);
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/foto-iphone.png';
  };

  return (
    <article
      className="product-card"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes de ${product.productName}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      <div className="product-image">
        <img
          src={product.photo || '/images/foto-iphone.png'}
          alt={product.productName}
          onError={handleImageError}
          loading="lazy"
        />
      </div>

      <p className="product-name" title={product.productName}>
        {product.descriptionShort || product.productName}
      </p>

      <div className="price-block">
        <p className="old-price">{formatPrice(oldPrice)}</p>
        <p className="current-price">{formatPrice(product.price)}</p>
        <p className="installments">
          ou 2x de {formatPrice(installmentValue)} sem juros
        </p>
        <span className="shipping-badge">Frete grátis</span>
      </div>

      <button
        type="button"
        className="btn-buy"
        onClick={handleBuyClick}
        aria-label={`Comprar ${product.productName}`}
      >
        Comprar
      </button>
    </article>
  );
};
