import React, { useState, useEffect } from 'react';
import { Product } from '../types/product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  // Reset quantity whenever a new product is selected
  useEffect(() => {
    setQuantity(1);
  }, [product]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleBuy = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const formattedQuantity = quantity < 10 ? `0${quantity}` : `${quantity}`;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <div className="modal-body">
          {/* Left: Product Image */}
          <div className="modal-image-col">
            <img
              src={product.photo || '/images/foto-iphone.png'}
              alt={product.productName}
              onError={(e) => {
                e.currentTarget.src = '/images/foto-iphone.png';
              }}
            />
          </div>

          {/* Right: Info, Price, Quantity & Buy */}
          <div className="modal-info-col">
            <h3 id="modal-product-title">
              {product.productName.toUpperCase()}
            </h3>

            <p className="modal-price">
              {formattedPrice}
            </p>

            <p className="modal-description">
              Many desktop publishing packages and web page editors now use Lorem Ipsum
              as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many
              web sites still in their infancy.
            </p>

            <a href="#detalhes" className="modal-link-details">
              Veja mais detalhes do produto &gt;
            </a>

            <div className="modal-actions-row">
              <div className="quantity-selector" aria-label="Seletor de quantidade">
                <button
                  type="button"
                  onClick={handleDecrease}
                  disabled={quantity <= 1}
                  aria-label="Diminuir quantidade"
                >
                  -
                </button>
                <span>{formattedQuantity}</span>
                <button
                  type="button"
                  onClick={handleIncrease}
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="btn-modal-buy btn-yellow"
                onClick={handleBuy}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
