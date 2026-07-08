# 🧱 Claymorphism Design System — Style Guide & Pattern Library

> **Version:** 1.0.0  
> **Category:** Modelo de Site — Claymorphism  
> **Propósito:** Template reutilizável com componentes, tokens de design e padrões visuais no estilo Claymorphism  
> **Stack:** HTML5 + CSS3 (Vanilla) + JavaScript (Vanilla)

---

## 📋 Índice

1. [O que é Claymorphism](#-o-que-é-claymorphism)
2. [Filosofia do Design](#-filosofia-do-design)
3. [Design Tokens (Custom Properties)](#-design-tokens-custom-properties)
4. [Sistema de Sombras](#-sistema-de-sombras)
5. [Paleta de Cores](#-paleta-de-cores)
6. [Tipografia](#-tipografia)
7. [Temas (Light / Dark)](#-temas-light--dark)
8. [Componentes](#-componentes)
9. [Boas Práticas](#-boas-práticas)
10. [Como Usar Este Template](#-como-usar-este-template)
11. [Responsividade](#-responsividade)
12. [Acessibilidade](#-acessibilidade)
13. [Exemplos de Uso](#-exemplos-de-uso)
14. [Extensões Recomendadas](#-extensões-recomendadas)

---

## 🧱 O que é Claymorphism

**Claymorphism** (ou "argilomorfismo") é uma tendência de design que simula a aparência tátil do barro/argila (clay). Suas características principais:

- **Sombras suaves e difusas** — tanto externas quanto internas
- **Cantos arredondados** — formas orgânicas e acolhedoras
- **Cores terrosas e suaves** — paletas quentes e naturais
- **Destaques sutis** — simulando iluminação vinda de cima
- **Sensação 3D "squishy"** — elementos parecem pressionáveis/extrusões suaves
- **Transições suaves** — micro-interações que imitam comportamento físico

---

## 🎨 Filosofia do Design

| Princípio | Descrição |
|-----------|-----------|
| **Tátil** | Elementos convidam ao toque, com respostas visuais que simulam pressão |
| **Orgânico** | Formas suaves, sem arestas vivas — curvas e cantos arredondados |
| **Acolhedor** | Paleta de cores quentes e neutras que transmitem conforto |
| **Premium** | Sombras sofisticadas, transições polidas, consistência milimétrica |
| **Atemporal** | Foco em qualidade visual que não depende de trends passageiras |

---

## 🎛️ Design Tokens (Custom Properties)

Todas as variáveis de design estão centralizadas em CSS Custom Properties no `:root`.  
Isso permite **temas dinâmicos** e **customização fácil** sem duplicar código.

### Cores

```css
--clay-primary:       #c4a882  /* Bege principal */
--clay-primary-dark:  #b0956d  /* Bege escuro (hover/states) */
--clay-primary-light: #d4bfa2  /* Bege claro (backgrounds) */

--clay-secondary:     #a8b5c4  /* Azul acinzentado */
--clay-accent:        #e8a87c  /* Laranja terroso (destaque) */
--clay-success:       #8db580  /* Verde suave */
--clay-warning:       #d4b87c  /* Amarelo terroso */
--clay-danger:        #c48a8a  /* Vermelho suave */
--clay-info:          #8ab0c4  /* Azul claro */

--clay-bg:            #f5f0e8  /* Fundo principal */
--clay-bg-alt:        #efe8dc  /* Fundo alternativo */
--clay-text:          #4a3f35  /* Texto principal */
--clay-text-light:    #7a6f65  /* Texto secundário */
--clay-surface:       #f0eae0  /* Superfície de cards/botões */
--clay-white:         #faf7f2  /* Branco adaptado ao tema */
--clay-border:        #e0d8cc  /* Bordas */
```

### Sombras

```css
--clay-shadow-sm      /* Cards pequenos, badges */
--clay-shadow-md      /* Navbar, alerts */
--clay-shadow-lg      /* Dropdowns, modals */
--clay-shadow-xl      /* Modals grandes */
--clay-shadow-inner   /* Inputs (inset) */
--clay-shadow-button  /* Botões padrão */
--clay-shadow-button-hover   /* Botões hover */
--clay-shadow-button-pressed /* Botões active */
--clay-shadow-card    /* Cards padrão */
--clay-shadow-card-hover     /* Cards hover */
--clay-shadow-modal   /* Modals */
```

> ⚠️ **IMPORTANTE:** A chave do Claymorphism está na combinação de `box-shadow` com sombras **externas** (difusas) e **internas** (highlight/sink). Cada sombra usa **4 camadas**:
> 1. Sombra externa grande (difusa)
> 2. Sombra externa média
> 3. Sombra interna inferior (profundidade)
> 4. Sombra interna superior (destaque de luz)

### Border Radius

```css
--clay-radius-sm:   8px   /* Badges small, inputs small */
--clay-radius-md:   14px  /* Botões, inputs, cards */
--clay-radius-lg:   20px  /* Cards grandes, modals */
--clay-radius-xl:   28px  /* Modals grandes */
--clay-radius-round: 9999px /* Pill/badge */
--clay-radius-circle: 50%  /* Avatars */
```

### Espaçamento

```css
--clay-space-xs:  4px
--clay-space-sm:  8px
--clay-space-md:  16px
--clay-space-lg:  24px
--clay-space-xl:  32px
--clay-space-2xl: 48px
--clay-space-3xl: 64px
```

### Tipografia

```css
--clay-font-family: 'Segoe UI', system-ui, sans-serif
--clay-font-mono:   'Cascadia Code', 'Fira Code', monospace
--clay-font-xs:   0.75rem
--clay-font-sm:   0.875rem
--clay-font-base: 1rem
--clay-font-lg:   1.125rem
--clay-font-xl:   1.25rem
--clay-font-2xl:  1.5rem
--clay-font-3xl:  2rem
--clay-font-4xl:  2.5rem
```

### Transições

```css
--clay-transition-fast:   150ms ease
--clay-transition-normal: 250ms ease
--clay-transition-slow:   400ms ease
```

---

## ☁️ Sistema de Sombras

A **assinatura visual** do Claymorphism. Use sempre **dupla sombra** (externa + interna).

### Anatomia de uma sombra Clay

```
box-shadow: 
  [sombra externa 1]  (profundidade geral)
  [sombra externa 2]  (difusão secundária)
  [sombra interna 1]  (afundamento)
  [sombra interna 2]  (destaque de luz)
```

### Shadow Scale

| Token | Uso | Intensidade |
|-------|-----|-------------|
| `shadow-sm` | Badges, toggles, pagination items | Leve |
| `shadow-md` | Navbar, alerts, accordion | Médio |
| `shadow-lg` | Dropdowns, toasts | Forte |
| `shadow-xl` | Modals | Muito Forte |
| `shadow-inner` | Inputs, textareas | Inset |
| `shadow-button` | Botões padrão | Médio-alto |
| `shadow-button-hover` | Botões hover | Alto |
| `shadow-button-pressed` | Botões active | Inset (pressionado) |
| `shadow-card` | Cards | Médio |
| `shadow-card-hover` | Cards hover | Alto |
| `shadow-modal` | Modals | Máximo |

---

## 🌈 Paleta de Cores

### Tema Claro (Padrão)

| Cor | Uso Principal | Hex |
|-----|--------------|-----|
| Primary | Botões principais, links | `#c4a882` |
| Primary Dark | Hover de primary | `#b0956d` |
| Primary Light | Backgrounds, alerts | `#d4bfa2` |
| Accent | Destaque, ratings | `#e8a87c` |
| Success | Confirmações | `#8db580` |
| Warning | Atenção | `#d4b87c` |
| Danger | Erros | `#c48a8a` |
| Info | Informações | `#8ab0c4` |
| Background | Fundo página | `#f5f0e8` |
| Surface | Cards, botões, inputs | `#f0eae0` |
| Text | Texto principal | `#4a3f35` |

### Tema Escuro

| Cor | Uso Principal | Hex |
|-----|--------------|-----|
| Background | Fundo página | `#2d2823` |
| Surface | Cards, botões | `#3d362e` |
| Text | Texto principal | `#e8ddd0` |
| Text Light | Texto secundário | `#b8ada0` |

> 💡 **Dica:** O tema escuro mantém os mesmos matizes, mas ajusta brilho e saturação para conforto visual em ambientes com pouca luz.

---

## 🔤 Tipografia

### Fontes

- **Principal:** `'Segoe UI', system-ui, -apple-system, sans-serif`
- **Mono:** `'Cascadia Code', 'Fira Code', 'JetBrains Mono', monospace`

### Hierarquia

| Elemento | Tamanho | Peso | Line-height |
|----------|---------|------|-------------|
| `h1` | 2.5rem (40px) | 600 | 1.2 |
| `h2` | 2rem (32px) | 600 | 1.2 |
| `h3` | 1.5rem (24px) | 600 | 1.2 |
| `h4` | 1.25rem (20px) | 600 | 1.2 |
| `h5` | 1.125rem | 600 | 1.2 |
| `h6` | 1rem | 600 | 1.2 |
| `p / body` | 1rem (16px) | 400 | 1.75 |
| `small` | 0.875rem | 400 | 1.5 |

---

## 🌙 Temas (Light / Dark)

O sistema suporta **temas dinâmicos** via atributo `data-theme` no `<html>`.

### Alternar tema

**HTML:**
```html
<html lang="pt-BR" data-theme="light">
```

**Botão de toggle:**
```html
<button data-theme-toggle>🌙</button>
```

**JS (automático via `claymorphism.js`):**
- Salva preferência no `localStorage` (`clay-theme`)
- Alterna `data-theme` entre `"light"` e `"dark"`
- Transições suaves entre temas via `transition: background-color ...`

### Forçar tema escuro
```html
<html data-theme="dark">
```

---

## 🧩 Componentes

### 1. Botões (`.btn`)

**Classes base:**
| Classe | Descrição |
|--------|-----------|
| `.btn` | Base — sombra, padding, border-radius |
| `.btn-primary` | Cor primária |
| `.btn-secondary` | Cor secundária |
| `.btn-accent` | Cor de destaque |
| `.btn-success` | Sucesso |
| `.btn-warning` | Aviso |
| `.btn-danger` | Perigo |
| `.btn-info` | Informação |
| `.btn-outline` | Borda apenas, sem fundo |
| `.btn-ghost` | Transparente, cor no hover |
| `.btn-sm` | Pequeno (8px 18px) |
| `.btn-lg` | Grande (16px 36px) |
| `.btn-xl` | Extra grande (20px 44px) |
| `.btn-block` | Largura total |
| `.btn-icon` | Formato circular para ícones |
| `.btn-loading` | Estado de carregamento |

**Grupo de botões:**
```html
<div class="btn-group">
  <button class="btn btn-primary">Left</button>
  <button class="btn btn-primary">Center</button>
  <button class="btn btn-primary">Right</button>
</div>
```

---

### 2. Cards (`.card`)

| Classe | Descrição |
|--------|-----------|
| `.card` | Base — surface, shadow, border-radius |
| `.card-header` | Cabeçalho com borda inferior |
| `.card-body` | Corpo flexível |
| `.card-footer` | Rodapé com borda superior |
| `.card-image` | Container de imagem com zoom hover |
| `.card-flat` | Sem sombra inicial, com borda |
| `.card-interactive` | Efeito de clique |

```html
<div class="card">
  <div class="card-header"><h4>Título</h4></div>
  <div class="card-body"><p>Conteúdo</p></div>
  <div class="card-footer"><button class="btn">Ação</button></div>
</div>
```

---

### 3. Formulários

| Classe | Descrição |
|--------|-----------|
| `.form-group` | Container de campo |
| `.form-label` | Label estilizada |
| `.form-input` | Input padrão |
| `.form-textarea` | Textarea |
| `.form-select` | Select customizado |
| `.form-input-sm` | Input pequeno |
| `.form-input-lg` | Input grande |
| `.input-group` | Grupo com addon |
| `.input-addon` | Texto/ícone ao lado do input |
| `.form-check` | Checkbox/radio label |
| `.form-error` | Mensagem de erro |
| `.form-success-text` | Mensagem de sucesso |

**Estados de validação:**
```html
<input class="form-input error" ...>
<span class="form-error">Erro!</span>

<input class="form-input success" ...>
<span class="form-success-text">OK!</span>
```

---

### 4. Modais

| Classe | Descrição |
|--------|-----------|
| `.modal-overlay` | Fundo escuro com backdrop blur |
| `.modal` | Container principal |
| `.modal-sm` / `.modal-lg` / `.modal-xl` | Tamanhos |
| `.modal-header` | Cabeçalho com título + close |
| `.modal-body` | Conteúdo |
| `.modal-footer` | Ações |
| `.modal-close` | Botão fechar |

**Atributos data:**
- `data-modal-target="id-do-modal"` — no trigger
- `id="meu-modal"` — no `.modal-overlay`

**JS:** O modal abre com classe `.active`, fecha com `Escape` ou clique no overlay.

---

### 5. Badges

| Classe | Descrição |
|--------|-----------|
| `.badge` | Base |
| `.badge-primary` / `.badge-secondary` / etc. | Cores |
| `.badge-sm` / `.badge-lg` | Tamanhos |
| `.badge-dot` | Indicador pontual |

---

### 6. Alerts & Toasts

**Alerts:**
```html
<div class="alert alert-success">
  <span class="alert-icon">✅</span>
  <div class="alert-content">
    <div class="alert-title">Sucesso</div>
    <p class="alert-message">Mensagem</p>
  </div>
  <button class="alert-close">&times;</button>
</div>
```

**Toasts:**
```html
<button data-toast="success" data-toast-message="OK!">Mostrar Toast</button>
```

**Atributos:** `data-toast` (tipo: success/error/warning/info), `data-toast-message` (texto)

---

### 7. Tabs

```html
<div class="tabs">
  <div class="tab-list">
    <button class="tab-item active" data-tab="tab1">Tab 1</button>
    <button class="tab-item" data-tab="tab2">Tab 2</button>
  </div>
  <div class="tab-content active" data-tab-content="tab1">Conteúdo 1</div>
  <div class="tab-content" data-tab-content="tab2">Conteúdo 2</div>
</div>
```

**Vertical:** Adicione `.tabs-vertical` à `.tabs`.

---

### 8. Accordion

```html
<div class="accordion">
  <div class="accordion-item active">
    <button class="accordion-header">
      <span>Título</span>
      <span class="accordion-icon">▼</span>
    </button>
    <div class="accordion-body">
      <div class="accordion-body-inner">Conteúdo</div>
    </div>
  </div>
</div>
```

Para **multi-select** (vários itens abertos): adicione `.accordion-multi` à `.accordion`.

---

### 9. Avatars

| Tamanho | Classe |
|---------|--------|
| 28px | `.avatar-xs` |
| 36px | `.avatar-sm` |
| 48px | `.avatar` (padrão) |
| 64px | `.avatar-lg` |
| 96px | `.avatar-xl` |

**Cores:** `.avatar-primary`, `.avatar-secondary`, `.avatar-accent`, `.avatar-success`, `.avatar-warning`, `.avatar-danger`, `.avatar-info`

**Grupo:**
```html
<div class="avatar-group">
  <div class="avatar avatar-primary">JD</div>
  <div class="avatar avatar-accent">MS</div>
</div>
```

---

### 10. Dropdowns

```html
<div class="dropdown">
  <button class="btn dropdown-toggle">Ações ▾</button>
  <div class="dropdown-menu">
    <button class="dropdown-item">Editar</button>
    <button class="dropdown-item">Excluir</button>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Link</a>
  </div>
</div>
```

---

### 11. Progress Bars

```html
<div class="progress-label">
  <span>Label</span>
  <span>75%</span>
</div>
<div class="progress progress-lg">
  <div class="progress-bar" style="width:75%;"></div>
</div>
```

**Variantes:** `.progress-bar-success`, `.progress-bar-warning`, `.progress-bar-danger`, `.progress-bar-info`, `.progress-bar-accent`  
**Tamanhos:** `.progress-sm`, `.progress`, `.progress-lg`

---

### 12. Toggles

```html
<label class="toggle">
  <span>Label</span>
  <input type="checkbox" checked>
  <span class="toggle-track"><span class="toggle-thumb"></span></span>
</label>
```

**Tamanhos:** `.toggle-sm`, `.toggle`, `.toggle-lg`

---

### 13. Pagination

```html
<div class="pagination">
  <button class="page-item disabled">‹</button>
  <button class="page-item active">1</button>
  <button class="page-item">2</button>
  <button class="page-item">3</button>
  <button class="page-item">›</button>
</div>
```

---

### 14. Breadcrumbs

```html
<nav class="breadcrumb">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-separator">›</span>
  <span class="breadcrumb-item active">Página Atual</span>
</nav>
```

---

### 15. Tooltips (CSS Puro)

```html
<span data-tooltip="Texto" data-tooltip-pos="top">Elemento</span>
```

**Posições:** `top` (padrão), `bottom`, `left`, `right`

---

### 16. Spinners & Skeleton

```html
<div class="spinner spinner-sm"></div>
<div class="spinner"></div>
<div class="spinner spinner-lg"></div>

<!-- Skeleton -->
<div class="skeleton skeleton-title"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-avatar"></div>
<div class="skeleton skeleton-thumbnail"></div>
```

---

### 17. Pricing Cards

```html
<div class="pricing-card featured">
  <span class="pricing-badge">Popular</span>
  <div class="pricing-name">Pro</div>
  <div class="pricing-price">$29</div>
  <div class="pricing-period">per month</div>
  <ul class="pricing-features">
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>
  <button class="btn btn-primary btn-block">Comprar</button>
</div>
```

---

### 18. Stats / Counters

```html
<div class="stat">
  <div class="stat-number">10K+</div>
  <div class="stat-label">Users</div>
</div>
```

---

### 19. Timeline

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <div class="timeline-date">Jan 2026</div>
      <div class="timeline-title">Evento</div>
      <p class="timeline-desc">Descrição</p>
    </div>
  </div>
</div>
```

---

### 20. Feature Grid

```html
<div class="feature">
  <div class="feature-icon">🚀</div>
  <div class="feature-title">Título</div>
  <p class="feature-desc">Descrição</p>
</div>
```

---

### 21. CTA Section

```html
<div class="cta-section">
  <div class="cta-title">Título</div>
  <p class="cta-text">Texto de call-to-action</p>
  <div class="cta-buttons">
    <button class="btn btn-primary btn-lg">Ação Principal</button>
    <button class="btn btn-outline btn-lg">Ação Secundária</button>
  </div>
</div>
```

---

### 22. Step Indicators

```html
<div class="steps">
  <div class="step completed">
    <div class="step-number">✓</div>
    <div class="step-label">Concluído</div>
  </div>
  <div class="step active">
    <div class="step-number">2</div>
    <div class="step-label">Atual</div>
  </div>
  <div class="step">
    <div class="step-number">3</div>
    <div class="step-label">Próximo</div>
  </div>
</div>
```

---

### 23. Rating Stars

```html
<div class="rating" data-rating="0">
  <span class="rating-star" data-value="1">★</span>
  <span class="rating-star" data-value="2">★</span>
  <span class="rating-star" data-value="3">★</span>
  <span class="rating-star" data-value="4">★</span>
  <span class="rating-star" data-value="5">★</span>
</div>
```

---

### 24. Sidebar Layout

```html
<aside class="sidebar">
  <div class="sidebar-title">Dashboard</div>
  <nav class="sidebar-menu">
    <a href="#" class="sidebar-link active">Link</a>
    <a href="#" class="sidebar-link">Link</a>
  </nav>
</aside>
```

---

### 25. Code Blocks

```html
<div class="code-block">
  <code>código aqui</code>
</div>
<span class="inline-code">código inline</span>
```

---

## ✅ Boas Práticas

### Padrões Obrigatórios

1. **Use as variáveis CSS** — nunca use valores hardcoded para cores, sombras, radius ou espaçamento
2. **Mantenha a hierarquia de sombras** — botão usa `shadow-button`, card usa `shadow-card`, etc.
3. **Prefira `rem` para fontes** e `px` para bordas finas
4. **Use os breakpoints definidos:** 1024px, 768px, 480px
5. **Elementos interativos** devem ter `cursor: pointer` e `transition`
6. **Todos os botões** devem ter `:hover`, `:active` e `:focus-visible`
7. **Ícones SVG** preferencialmente inline ou como caracteres Unicode

### O que EVITAR

❌ Sombras `box-shadow` soltas sem o padrão de 4 camadas  
❌ Cores saturadas demais (gritantes) — o Claymorphism pede tons suaves  
❌ Cantos retos sem `border-radius`  
❌ Margens/paddings sem usar as variáveis `--clay-space-*`  
❌ Backgrounds escuros com texto escuro (baixo contraste)

---

## 📦 Como Usar Este Template

### Estrutura de Arquivos

```
Site Claymorphism/
├── index.html              # Página principal com exemplos
├── css/
│   └── claymorphism.css    # Design system completo
├── js/
│   └── claymorphism.js     # Componentes interativos
├── docs/
│   └── style-guide.md      # Este guia de estilo
└── assets/                 # (opcional) imagens, ícones
```

### Como customizar para seu projeto

1. **Copie** `claymorphism.css` e `claymorphism.js` para seu projeto
2. **Link** no HTML: `<link rel="stylesheet" href="css/claymorphism.css">`
3. **Inicialize** o JS: `<script src="js/claymorphism.js"></script>`
4. **Customize** as cores no `:root` do CSS
5. **Use** as classes dos componentes conforme este guia

### Exemplo mínimo

```html
<!DOCTYPE html>
<html lang="pt-BR" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Site Claymorphism</title>
  <link rel="stylesheet" href="css/claymorphism.css">
</head>
<body>
  <div class="container" style="padding: 2rem 0;">
    <h1>Meu Projeto</h1>
    <button class="btn btn-primary">Clique Aqui</button>
    <div class="card" style="margin-top: 1rem;">
      <p>Bem-vindo ao Claymorphism!</p>
    </div>
  </div>
  <script src="js/claymorphism.js"></script>
</body>
</html>
```

---

## 📱 Responsividade

### Breakpoints

| Breakpoint | Largura | Impacto |
|-----------|---------|---------|
| Mobile | < 480px | Botões full-width, grupos em coluna |
| Tablet | < 768px | Grid 1 coluna, nav hamburger, sidebar quebra |
| Desktop | < 1024px | Grid 2 colunas, footer 2 colunas |
| Large | ≥ 1024px | Layout completo |

### Padrões Responsivos

- **Navbar:** Vira hamburger em < 768px
- **Grids:** `grid-4` → `grid-2` → `grid-1` progressivamente
- **Modals:** Largura adaptativa (90% → 95% em mobile)
- **Sidebar:** Fica estática (não sticky) em mobile
- **Pricing cards:** Planos lado a lado → empilhados

---

## ♿ Acessibilidade

| Prática | Implementação |
|---------|---------------|
| **Foco visível** | `:focus-visible` com outline + offset |
| **Contraste** | WCAG AA nas cores do tema claro e escuro |
| **ARIA** | `aria-label` em botões de ícone, `aria-expanded` em accordions |
| **Teclado** | Escape fecha modais, Tab navega dropdowns |
| **Reduced motion** | `@media (prefers-reduced-motion)` respeitado |
| **Semântica** | `<nav>`, `<main>`, `<footer>`, `<aside>`, `<button>` corretos |

---

## 📚 Exemplos de Uso

### Landing Page
```html
<!-- Hero -->
<section class="section">
  <div class="container" style="text-align:center;">
    <h1>Produto Incrível</h1>
    <p class="text-muted">Descrição envolvente</p>
    <div class="flex-center gap-md">
      <a href="#" class="btn btn-primary btn-lg">Começar</a>
      <a href="#" class="btn btn-outline btn-lg">Saiba Mais</a>
    </div>
  </div>
</section>

<!-- Features -->
<section class="section">
  <div class="container">
    <div class="grid grid-3">
      <div class="feature">...</div>
      <div class="feature">...</div>
      <div class="feature">...</div>
    </div>
  </div>
</section>

<!-- Pricing -->
<section class="section">
  <div class="container">
    <div class="grid grid-3">
      <div class="pricing-card">...</div>
      <div class="pricing-card featured">...</div>
      <div class="pricing-card">...</div>
    </div>
  </div>
</section>
```

### Dashboard
```html
<div class="flex" style="gap: var(--clay-space-xl);">
  <aside class="sidebar">...</aside>
  <main style="flex: 1;">
    <!-- stats -->
    <div class="grid grid-4">
      <div class="stat">...</div>
      <div class="stat">...</div>
      <div class="stat">...</div>
      <div class="stat">...</div>
    </div>
    <!-- chart area -->
    <div class="card" style="margin-top: var(--clay-space-lg);">...</div>
  </main>
</div>
```

### Blog / Conteúdo
```html
<div class="container">
  <nav class="breadcrumb">...</nav>
  <article class="card">
    <div class="card-image">...</div>
    <h2>Título do Post</h2>
    <p class="text-muted">Conteúdo...</p>
  </article>
  <!-- Comentários -->
  <div class="card">
    <div class="flex flex-col gap-md">
      <div class="flex gap-md">
        <div class="avatar avatar-primary">JD</div>
        <div>...</div>
      </div>
    </div>
  </div>
</div>
```

---

## 🔌 Extensões Recomendadas

### Para expandir este template

- **Formulários avançados:** Adicione validação JS e máscaras de input
- **Animações:** Use `IntersectionObserver` para animar elementos ao scroll
- **Gráficos:** Integre Chart.js com o tema clay (use as variáveis de cor)
- **Icones:** Prefira Lucide Icons ou Phosphor Icons (SVG inline)
- **Grid galeria:** Adicione Masonry layout para portfolios
- **Cookies:** Adicione banner LGPD com estilo `.alert`

### Stack compatível

O design system é **framework-agnostic** — funciona com:

- ✅ Vanilla HTML/CSS/JS
- ✅ React / Next.js
- ✅ Vue / Nuxt
- ✅ Angular
- ✅ WordPress (theme custom)
- ✅ Qualquer CMS

---

## 📝 Notas Finais

- **Mantenha a consistência:** Sempre use as variáveis CSS
- **A chave é a sombra:** Sem as 4 camadas de box-shadow, não é Claymorphism
- **Toque e sinta:** Cada elemento deve parecer que pode ser apertado como argila
- **Evolua:** Este guia é vivo — adicione novos componentes conforme necessário

---

> **Criado por:** João Bergamin  
> **Licença:** MIT — Use livremente em projetos pessoais e comerciais  
> **Versão:** 1.0.0 — Julho 2026

---

<p align="center">
  <strong>🧱 Feito com barro, código e café 🧱</strong>
</p>