# Teste Front-End Jr - Econverse 🚀

> Desafio técnico de desenvolvimento de landing page e vitrine de e-commerce responsiva para a vaga de Front-End na **Econverse**.

---

## 📌 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Especificações Técnicas Atendidas](#-especificações-técnicas-atendidas)
- [Funcionalidades](#-funcionalidades)
- [Pontos Extras](#-pontos-extras)
- [Como Rodar o Projeto Localmente](#-como-rodar-o-projeto-localmente)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instruções para Entrega](#-instruções-para-entrega)

---

## 📖 Sobre o Projeto
Este projeto consiste na implementação pixel-perfect da Landing Page de e-commerce baseada no protótipo Figma da **Econverse**, desenvolvida em **React**, **TypeScript** e **Sass (SCSS)**, sem a utilização de bibliotecas prontas de UI como Bootstrap ou Foundation.

A aplicação consome a API/JSON de produtos disponibilizada no teste, renderiza as vitrines em carrossel e oferece interação completa de abertura de **Modal com os dados do produto** selecionado (foto, título, preço formatado, descrição, seletor de quantidade e botão de compra).

---

## 🛠 Tecnologias Utilizadas
- **React 19**
- **TypeScript**
- **Sass (SCSS)** - Pré-processador CSS com variáveis, mixins, nesting e modularização
- **Vite** - Bundler moderno e de alta performance
- **Sem Frameworks de UI** - CSS/SCSS 100% autoral e customizado

---

## ✅ Especificações Técnicas Atendidas
- [x] **React + TypeScript**: Código tipado com interfaces estritas (`Product`, `ProductsResponse`, etc.).
- [x] **Consumo de JSON**: Vitrine de produtos consumindo o endpoint da Econverse com fallback seguro para `public/produtos.json`.
- [x] **Interação com Modal**: Ao clicar em qualquer produto da vitrine ou no botão "COMPRAR", abre-se o modal contendo as informações completas do produto, seletor de quantidade `[-] 01 [+]` e confirmação de adição ao carrinho.
- [x] **Pré-processador Sass (SCSS)**: Estrutura modular (`_variables.scss`, `_mixins.scss`, `Header.scss`, `Produtos.scss`, `Modal.scss`, etc.).
- [x] **Fidelidade ao Layout (Pixel-Perfect)**: Tipografia Poppins, cores exatas (`#F71963`, `#271C47`, `#3F3F40`), proporções, botões e sombras conforme o protótipo Figma.
- [x] **Zero Bibliotecas UI**: Desenvolvido do zero sem Bootstrap, Tailwind pré-fabricado ou Material UI.

---

## 🌟 Pontos Extras Implementados
- [x] **HTML Semântico**: Utilização rigorosa das tags `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>` e acessibilidade com atributos ARIA (`role="dialog"`, `aria-modal`, `aria-label`).
- [x] **Boas Práticas de SEO**:
  - Tags `<meta name="description">` e `<meta name="keywords">` descritivas
  - Protocolo OpenGraph completo (`og:title`, `og:description`, `og:type`, `og:locale`)
  - Twitter Cards (`twitter:card`, `twitter:title`, `twitter:description`)
  - Dados Estruturados Schema.org (`WebSite` e `SearchAction` em JSON-LD)
- [x] **Mini-carrinho (Drawer) Interativo**: Contador em tempo real no cabeçalho, gerenciamento de quantidade e cálculo automático do valor total.
- [x] **Responsividade**: Layout adaptável para dispositivos móveis (Mobile), tablets e telas de alta resolução (Desktop).

---

## 🚀 Funcionalidades
1. **Header Completo**:
   - Barra superior de vantagens (Compra 100% segura, Frete grátis, Parcele suas compras)
   - Barra principal com logo oficial Econverse, input de busca e ícones de ações (pedidos, favoritos, perfil e carrinho com contador ativo)
   - Menu de categorias com destaque para Assinatura (com ícone de coroa)
2. **Hero Banner**:
   - Banner promocional "Venha conhecer nossas promoções - 50% Off nos produtos" com botão "Ver produto" de scroll suave.
3. **Seção de Categorias**:
   - 7 categorias interativas em formato de cards com sombras suaves e estados ativos.
4. **Vitrines de Produtos (Showcase)**:
   - Abas de navegação de tecnologia (`CELULAR`, `ACESSÓRIOS`, `TABLETS`, `NOTEBOOKS`, `TVS`, `VER TODOS`)
   - Carrossel com navegação por setas laterais
   - Cards com foto, descrição, preço original riscado, preço promocional em destaque, cálculo de parcelas e selo de frete grátis
5. **Modal de Detalhes do Produto**:
   - Layout com foto ampliada, título em caixa alta, valor formatado em Real (`R$`), descrição e links
   - Seletor funcional de quantidade (`[-] 01 [+]`)
   - Botão de compra que adiciona ao carrinho com feedback visual (Toast)
   - Fechamento com botão "X", tecla ESC ou clique fora (backdrop)
6. **Banners Duplos**:
   - Seções "Parceiros" e "Produtos" lado a lado com overlay gradiente e botões "CONFIRA".
7. **Navegue por Marcas**:
   - Cards circulares com sombra e logo da marca com botão de navegação.
8. **Newsletter**:
   - Formulário com validação de nome, e-mail e termos de uso com mensagem de sucesso.
9. **Footer Completo**:
   - Logo, texto institucional, redes sociais, links categorizados e certificados de segurança.

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** (versão 9 ou superior)

### 1. Clonar o Repositório
```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DA_PASTA>
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
O servidor estará disponível no navegador em:
```
http://localhost:3000
```

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento no Vite (porta 3000) |
| `npm run build` | Compila o projeto TypeScript e Sass otimizado para produção na pasta `dist/` |
| `npm run preview` | Executa localmente o build gerado de produção |
| `npm run lint` | Executa o TypeScript compiler (`tsc --noEmit`) para validar tipagem e sintaxe |

---

## 📁 Estrutura do Projeto

```
.
├── public/
│   ├── images/              # Ícones SVG e imagens oficiais do teste
│   │   ├── Logo.svg
│   │   ├── banner.svg
│   │   ├── apple.svg
│   │   ├── tech.svg, supermarket.svg, ...
│   │   └── foto-iphone.png
│   └── produtos.json        # Arquivo JSON com produtos da vitrine
├── src/
│   ├── components/          # Componentes React modularizados
│   │   ├── Header.tsx       # Topbar, Logo, Busca, Carrinho e Navegação
│   │   ├── Banner.tsx       # Banner principal
│   │   ├── Categories.tsx   # Grid de categorias com ícones
│   │   ├── Showcase.tsx     # Vitrine com abas e carrossel
│   │   ├── ProductCard.tsx  # Card individual de produto
│   │   ├── ProductModal.tsx # Modal interativo de quickview
│   │   ├── CartDrawer.tsx   # Gaveta lateral do carrinho
│   │   ├── Partners.tsx     # Banners de Parceiros e Produtos
│   │   ├── Brands.tsx       # Navegue por marcas
│   │   ├── Newsletter.tsx   # Formulário de newsletter
│   │   └── Footer.tsx       # Rodapé completo
│   ├── hooks/
│   │   └── useProducts.ts   # Hook para consumo do JSON de produtos
│   ├── styles/              # Arquivos SCSS modulares
│   │   ├── _variables.scss  # Cores, fontes, espaçamentos e breakpoints
│   │   ├── _mixins.scss     # Mixins responsivos e botões
│   │   ├── Header.scss
│   │   ├── Banner.scss
│   │   ├── Categories.scss
│   │   ├── Produtos.scss
│   │   ├── Parceiros.scss
│   │   ├── Marcas.scss
│   │   ├── Newsletter.scss
│   │   ├── Footer.scss
│   │   ├── Modal.scss
│   │   ├── CartDrawer.scss
│   │   └── main.scss        # Arquivo SCSS principal
│   ├── types/
│   │   └── product.ts       # Interfaces TypeScript
│   ├── App.tsx              # Componente principal integrando as seções
│   └── main.tsx             # Ponto de entrada React
├── index.html               # Entrypoint HTML com meta tags e dados estruturados
├── metadata.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ✉️ Instruções para Entrega

1. Faça o fork / push deste projeto para a sua conta pessoal do GitHub.
2. Certifique-se de que o repositório é público ou que concedeu acesso aos avaliadores.
3. Envie o link do repositório para o e-mail:
   - **Destinatário:** `gustavo.cipriano@econverse.com.br`
   - **Assunto:** `Teste Vaga FrontEnd`

---

*Desenvolvido com carinho e dedicação para o teste #Econverse.*
