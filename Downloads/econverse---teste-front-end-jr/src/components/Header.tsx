import React, { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <header className="site-header" role="banner">
      {/* Top utility bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-item">
            <img src="/images/icon_seguranca.svg" alt="Segurança" width="18" height="18" />
            <span>Compra <strong>100% segura</strong></span>
          </div>
          <div className="top-bar-item">
            <img src="/images/icon_truck.svg" alt="Frete" width="18" height="18" />
            <span><strong>Frete grátis</strong> acima de R$ 200</span>
          </div>
          <div className="top-bar-item">
            <img src="/images/icon_card.svg" alt="Parcelamento" width="18" height="18" />
            <span><strong>Parcele</strong> suas compras</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="main-header">
        <a href="/" className="logo-container" aria-label="Econverse Home">
          <img src="/images/Logo.svg" alt="Econverse" width="139" height="42" />
        </a>

        <form className="search-container" onSubmit={handleSearchSubmit} role="search">
          <input
            type="text"
            placeholder="O que você está buscando?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Campo de busca"
          />
          <button type="submit" className="search-button" aria-label="Buscar produtos">
            <img src="/images/icon_lupa.svg" alt="" aria-hidden="true" width="22" height="22" />
          </button>
        </form>

        <div className="actions-container">
          <button type="button" className="action-item" title="Meus Pedidos" aria-label="Meus Pedidos">
            <img src="/images/icon_caixa.svg" alt="" aria-hidden="true" width="24" height="24" />
          </button>
          <button type="button" className="action-item" title="Lista de Desejos" aria-label="Lista de Desejos">
            <img src="/images/icon_coracao.svg" alt="" aria-hidden="true" width="24" height="24" />
          </button>
          <button type="button" className="action-item" title="Minha Conta" aria-label="Minha Conta">
            <img src="/images/icon_perfil.svg" alt="" aria-hidden="true" width="24" height="24" />
          </button>
          <button
            type="button"
            className="action-item"
            title="Carrinho de Compras"
            aria-label={`Carrinho com ${cartCount} itens`}
            onClick={onOpenCart}
          >
            <img src="/images/icon_carrinho.svg" alt="" aria-hidden="true" width="24" height="24" />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="nav-bar" aria-label="Navegação por categorias">
        <div className="nav-content">
          <ul>
            <li><a href="#todas" className="active">Todas Categorias</a></li>
            <li><a href="#supermercado">Supermercado</a></li>
            <li><a href="#livros">Livros</a></li>
            <li><a href="#moda">Moda</a></li>
            <li><a href="#lancamentos">Lançamentos</a></li>
            <li><a href="#ofertas">Ofertas do Dia</a></li>
            <li>
              <a href="#assinatura" className="highlight">
                <img src="/images/icon_coroa.svg" alt="" aria-hidden="true" width="18" height="18" />
                Assinatura
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
