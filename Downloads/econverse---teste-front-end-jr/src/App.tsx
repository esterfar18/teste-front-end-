/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useProducts } from './hooks/useProducts';
import { Product, CartItem } from './types/product';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Categories } from './components/Categories';
import { Showcase } from './components/Showcase';
import { Partners } from './components/Partners';
import { Brands } from './components/Brands';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import './styles/main.scss';

export default function App() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart actions
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.product.productName === product.productName
      );
      if (existing) {
        return prevCart.map((item) =>
          item.product.productName === product.productName
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });

    // Show toast feedback
    setToastMessage(`${quantity}x ${product.productName} adicionado ao carrinho!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleUpdateCartQuantity = (productName: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.productName === productName) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productName: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.productName !== productName)
    );
  };

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Partners data
  const parceirosItems = [
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

  const produtosBannerItems = [
    {
      id: 3,
      title: 'Produtos',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      buttonText: 'CONFIRA',
      image: '/images/apple.svg',
    },
    {
      id: 4,
      title: 'Produtos',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      buttonText: 'CONFIRA',
      image: '/images/apple.svg',
    },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <Header
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main id="main-content">
        {/* Hero Banner */}
        <Banner />

        {/* Categories Grid */}
        <Categories />

        {/* Showcase 1: With Category Filter Tabs */}
        <Showcase
          title="Produtos relacionados"
          showTabs={true}
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onQuickBuy={(product) => handleAddToCart(product, 1)}
        />

        {/* Dual Banner 1: Parceiros */}
        <Partners items={parceirosItems} />

        {/* Showcase 2: With "Ver todos" link */}
        <Showcase
          title="Produtos relacionados"
          showTabs={false}
          showViewAllLink={true}
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onQuickBuy={(product) => handleAddToCart(product, 1)}
        />

        {/* Dual Banner 2: Produtos */}
        <Partners items={produtosBannerItems} />

        {/* Brand Badges: Navegue por marcas */}
        <Brands />

        {/* Showcase 3: With "Ver todos" link */}
        <Showcase
          title="Produtos relacionados"
          showTabs={false}
          showViewAllLink={true}
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onQuickBuy={(product) => handleAddToCart(product, 1)}
        />

        {/* Newsletter Signup */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quickview Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="toast-notification" role="status" aria-live="polite">
          <span className="toast-icon">✓</span>
          <span className="toast-text">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
