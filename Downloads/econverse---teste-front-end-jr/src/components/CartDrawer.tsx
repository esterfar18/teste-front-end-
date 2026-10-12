import React from 'react';
import { CartItem } from '../types/product';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productName: string, delta: number) => void;
  onRemoveItem: (productName: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  if (!isOpen) return null;

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const formattedTotal = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className="cart-drawer-backdrop" onClick={onClose}>
      <aside
        className="cart-drawer"
        onClick={(e) => e.stopPropagation()}
        aria-label="Carrinho de compras"
      >
        <div className="drawer-header">
          <h3>Meu Carrinho ({cart.reduce((c, i) => c + i.quantity, 0)})</h3>
          <button type="button" onClick={onClose} aria-label="Fechar carrinho">
            &times;
          </button>
        </div>

        <div className="drawer-content">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                style={{ margin: '0 auto' }}
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <p>Seu carrinho está vazio.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.productName} className="cart-item">
                <img
                  src={item.product.photo || '/images/foto-iphone.png'}
                  alt={item.product.productName}
                  onError={(e) => {
                    e.currentTarget.src = '/images/foto-iphone.png';
                  }}
                />
                <div className="item-info">
                  <h4>{item.product.productName}</h4>
                  <p className="item-price">
                    {(item.product.price * item.quantity).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                  <div className="item-qty-row">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.product.productName, -1)}
                      aria-label="Diminuir quantidade"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.product.productName, 1)}
                      aria-label="Aumentar quantidade"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() => onRemoveItem(item.product.productName)}
                  title="Remover item"
                  aria-label={`Remover ${item.product.productName}`}
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="drawer-footer">
            <div className="subtotal-row">
              <span>Total:</span>
              <span>{formattedTotal}</span>
            </div>
            <button
              type="button"
              className="btn-checkout"
              onClick={() => {
                alert('Pedido finalizado com sucesso! Obrigado por comprar na Econverse.');
                onClose();
              }}
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};
