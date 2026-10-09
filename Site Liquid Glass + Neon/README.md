# Liquid Glass Theme

Um tema premium com **glassmorphism**, **gradientes fluidos** e **conforto visual**. Biblioteca completa de componentes UI modernos prontos para usar.

---

## Índice

- [Visão Geral](#visão-geral)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Personalização](#personalização)
- [Componentes](#componentes)
  - [Botões](#botões)
  - [Cards](#cards)
  - [Modais](#modais)
  - [Formulários](#formulários)
  - [Navbar](#navbar)
  - [Tabs](#tabs)
  - [Alertas](#alertas)
  - [Badges](#badges)
  - [Barras de Progresso](#barras-de-progresso)
  - [Acordeão](#acordeão)
  - [Tooltips](#tooltips)
  - [Toast Notifications](#toast-notifications)
  - [Tabelas](#tabelas)
  - [Breadcrumbs](#breadcrumbs)
  - [Paginação](#paginação)
  - [Estatísticas](#estatísticas)
  - [Depoimentos](#depoimentos)
  - [Features](#features)
  - [Spinners](#spinners)
  - [Avatares](#avatares)
  - [Sidebar](#sidebar)
  - [Dropdown](#dropdown)
  - [Footer](#footer)
- [Responsividade](#responsividade)
- [Licença](#licença)

---

## Visão Geral

O **Liquid Glass** é um tema CSS focado em:

- **Glassmorphism**: Efeitos de vidro com ackdrop-filter: blur() e bordas translúcidas
- **Gradientes Fluidas**: 8 paletas de gradientes pré-definidos
- **Conforto Visual**: Cores escuras profundas com contraste suave
- **Componentes Modulares**: Classes atômicas e reutilizáveis
- **Responsivo**: Adaptável a todos os dispositivos
- **Performance**: Leve e otimizado (~45KB CSS)

---

## Estrutura do Projeto

\\\
liquid-glass/
├── index.html          # Página de demonstração com todos os componentes
├── css/
│   └── style.css       # Folha de estilos completa do tema
├── js/
│   └── script.js       # JavaScript para componentes interativos
├── assets/             # Pasta para imagens e recursos
└── README.md           # Esta documentação
\\\

---

## Como Usar

1. Inclua o CSS no <head> do seu HTML:

\\\html
<link rel="stylesheet" href="css/style.css">
\\\

2. Inclua o JavaScript antes do </body>:

\\\html
<script src="js/script.js"></script>
\\\

3. Adicione as classes lg-* aos seus elementos HTML.

> **Nota**: O tema usa a fonte **Inter** (Google Fonts). Inclua o link no <head>:
> \\\html
> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
> \\\

---

## Personalização

O tema usa **variáveis CSS** para facilitar a customização. Sobrescreva as variáveis no seu CSS:

\\\css
:root {
  --lg-bg-primary: #0a0e1a;
  --lg-accent: #818cf8;
  --lg-glass-bg: rgba(255, 255, 255, 0.06);
  --lg-glass-blur: blur(20px);
  --lg-gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* veja style.css para todas as variáveis */
}
\\\

---

## Componentes

### Botões

| Classe | Descrição |
|--------|-----------|
| lg-btn lg-btn-primary | Botão primário com gradiente roxo |
| lg-btn lg-btn-secondary | Botão secundário com gradiente rosa |
| lg-btn lg-btn-outline | Botão outline com borda |
| lg-btn lg-btn-ghost | Botão ghost sem borda |
| lg-btn lg-btn-glass | Botão com efeito glass |
| lg-btn lg-btn-gradient-1 a 5 | Botões com gradientes variados |

**Modificadores de tamanho**: lg-btn-sm, lg-btn-lg, lg-btn-xl

**Modificadores especiais**: lg-btn-icon (botão circular), lg-btn-block (largura total), lg-btn-shimmer (efeito shimmer no hover)

\\\html
<button class="lg-btn lg-btn-primary">Primary</button>
<button class="lg-btn lg-btn-lg lg-btn-glass lg-btn-shimmer">Grande Glass</button>
\\\

### Cards

| Classe | Descrição |
|--------|-----------|
| lg-card | Card com efeito glass |
| lg-card lg-card-solid | Card com fundo sólido |
| lg-card lg-card-gradient-1 a 3 | Card com fundo gradiente |
| lg-card lg-card-pricing | Card de preços |

\\\html
<div class="lg-card">
  <div class="lg-card-body">
    <div class="lg-card-title">Título</div>
    <div class="lg-card-text">Descrição do card.</div>
  </div>
  <div class="lg-card-footer">
    <button class="lg-btn lg-btn-primary lg-btn-sm">Ação</button>
  </div>
</div>
\\\

### Modais

Estrutura do modal:

\\\html
<div class="lg-modal-overlay" id="meu-modal">
  <div class="lg-modal">
    <div class="lg-modal-header">
      <div class="lg-modal-title">Título</div>
      <button class="lg-modal-close">&times;</button>
    </div>
    <div class="lg-modal-body">Conteúdo...</div>
    <div class="lg-modal-footer">
      <button class="lg-btn lg-btn-ghost modal-close">Cancelar</button>
      <button class="lg-btn lg-btn-primary modal-close">Confirmar</button>
    </div>
  </div>
</div>

<button class="lg-btn lg-btn-primary" data-modal-target="meu-modal">Abrir Modal</button>
\\\

**Tamanhos**: lg-modal-sm, lg-modal-lg, lg-modal-xl

### Formulários

| Classe | Descrição |
|--------|-----------|
| lg-form-group | Grupo de formulário |
| lg-form-label | Label do campo |
| lg-form-input | Input de texto |
| lg-form-select | Select |
| lg-form-textarea | Textarea |
| lg-form-check | Checkbox/Radio wrapper |
| lg-form-toggle | Toggle switch |
| lg-input-wrapper | Wrapper para input com ícone |
| lg-input-icon | Ícone dentro do input |

### Navbar

\\\html
<nav class="lg-navbar" id="navbar">
  <div class="lg-navbar-inner">
    <a href="#" class="lg-navbar-brand">Logo</a>
    <ul class="lg-navbar-links">
      <li><a href="#">Link</a></li>
    </ul>
    <button class="lg-navbar-toggle">☰</button>
  </div>
</nav>
\\\

### Tabs

\\\html
<div class="lg-tabs">
  <button class="lg-tab active" data-tab="tab1">Aba 1</button>
  <button class="lg-tab" data-tab="tab2">Aba 2</button>
</div>
<div id="tab1" class="lg-tab-content active">Conteúdo 1</div>
<div id="tab2" class="lg-tab-content">Conteúdo 2</div>
\\\

### Toast Notifications

Use via JavaScript:

\\\js
lgToast('success', 'Mensagem de sucesso!');
lgToast('error', 'Mensagem de erro.');
lgToast('warning', 'Mensagem de aviso.');
lgToast('info', 'Mensagem informativa.');
\\\

### Sidebar

\\\html
<div class="lg-sidebar-overlay" data-sidebar="minha-sidebar"></div>
<div class="lg-sidebar" id="minha-sidebar">
  <button class="lg-sidebar-close">&times;</button>
  <!-- conteúdo -->
</div>
<button data-sidebar-target="minha-sidebar">Abrir</button>
\\\

### Dropdown

\\\html
<div class="lg-dropdown">
  <a href="#" class="lg-dropdown-trigger">Menu ▾</a>
  <div class="lg-dropdown-menu">
    <a href="#" class="lg-dropdown-item">Item 1</a>
    <a href="#" class="lg-dropdown-item">Item 2</a>
  </div>
</div>
\\\

---

## Responsividade

O tema é totalmente responsivo com breakpoints:

- **1024px**: Footer em 2 colunas
- **768px**: Navbar vira hamburger, cards em 1 coluna, fonte reduzida
- **480px**: Stats em 1 coluna, hero actions em coluna

---

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.
