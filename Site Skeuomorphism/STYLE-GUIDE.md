# Skeuomorphic UI — Style Guide & Design System

> **Versão:** 1.0  
> **Tema:** Skeuomorphism Premium  
> **Propósito:** Padronização de estilos e componentes para sites com conforto visual e estética premium.

---

## Índice

1. [Introdução](#1-introdução)
2. [Princípios de Design](#2-princípios-de-design)
3. [Design Tokens](#3-design-tokens)
4. [Tipografia](#4-tipografia)
5. [Espaçamento & Grid](#5-espaçamento--grid)
6. [Componentes](#6-componentes)
7. [Boas Práticas](#7-boas-práticas)
8. [Personalização](#8-personalização)
9. [Exemplos de Uso](#9-exemplos-de-uso)

---

## 1. Introdução

Este design system implementa o estilo **skeuomorphism moderno** (também chamado de *neoskeuomorphism*), que utiliza sombras realistas, gradientes sutis e texturas que evocam materiais físicos para criar interfaces digitais com profundidade, conforto visual e sensação tátil.

O objetivo é fornecer um conjunto coerente de componentes e regras de estilo que possam ser reutilizados em diferentes projetos, mantendo consistência visual e qualidade premium.

### O que é Skeuomorphism?

Skeuomorphism é uma abordagem de design onde elementos da interface imitam seus equivalentes do mundo real:

- **Sombras** que indicam elevação e profundidade
- **Gradientes** que simulam iluminação natural
- **Texturas** que lembram materiais como papel, couro, tecido ou metal
- **Interações** que reproduzem feedback físico (pressão, clique, elevação)

---

## 2. Princípios de Design

### 2.1 Hierarquia Visual
Use sombras, tamanhos e peso tipográfico para estabelecer clara hierarquia entre elementos. Elementos mais importantes devem ter mais elevação (sombras maiores) e destaque visual.

### 2.2 Profundidade Controlada
Cada elemento deve existir em um plano de profundidade específico. Use as sombras predefinidas para manter consistência:

| Plano | Shadow Token | Uso |
|-------|-------------|-----|
| Fundo | — | bg-primary, bg-secondary |
| Superfície | `--shadow-card` | Cards, alertas, accordions |
| Elevado | `--shadow-elevated` | Cards em hover, dropdowns |
| Flutuante | `--shadow-float` | Modais, toasts, tooltips |
| Interno | `--shadow-inner` | Inputs, campos, cards flat |

### 2.3 Feedback Físico
Interações devem simular o comportamento de objetos físicos:
- **Hover:** elemento se eleva (sombra aumenta, translateY negativo)
- **Active/Press:** elemento é pressionado (sombra inset, translateY positivo)
- **Disabled:** elemento perde profundidade (opacidade reduzida)

### 2.4 Conforto Visual
- Use a paleta quente e neutra como base
- Evite contrastes muito agressivos
- Prefira ângulos suaves (border-radius generosos)
- Textura de fundo sutil para reduzir cansaço visual

---

## 3. Design Tokens

### 3.1 Cores

#### Cores Base (Neutras Quentes)

| Token | Hex | Uso |
|-------|-----|-----|
| `--bg-primary` | `#F5F0EB` | Fundo principal da página |
| `--bg-secondary` | `#EDE7DD` | Fundo secundário, hover, tabelas |
| `--bg-tertiary` | `#E5DDD2` | Fundo terciário, progress bg, range |
| `--surface` | `#FFFBF5` | Cards, inputs, modais, dropdowns |
| `--surface-hover` | `#FDF7EF` | Hover em superfícies |
| `--text-primary` | `#2C1810` | Títulos, texto principal |
| `--text-secondary` | `#6B4C3B` | Texto de corpo, parágrafos |
| `--text-tertiary` | `#9B7B6A` | Texto auxiliar, placeholders |
| `--text-inverse` | `#FFFBF5` | Texto em fundos escuros |
| `--border-light` | `#E8E0D6` | Bordas sutis |
| `--border-medium` | `#D4C9BC` | Bordas médias, inputs |

#### Cores de Destaque (Accents)

| Token | Hex | Uso |
|-------|-----|-----|
| `--accent-primary` | `#1A6B5A` | Botão primary, links, foco |
| `--accent-primary-hover` | `#155A4B` | Hover primary |
| `--accent-primary-active` | `#0D4F3C` | Active primary |
| `--accent-primary-light` | `#E8F5F0` | Badge/bg primary claro |
| `--accent-secondary` | `#C4923A` | Botão secondary |
| `--accent-secondary-hover` | `#B08230` | Hover secondary |
| `--accent-secondary-active` | `#9A7028` | Active secondary |
| `--accent-secondary-light` | `#FDF5E6` | Badge/bg secondary claro |

#### Cores Funcionais

| Token | Hex | Uso |
|-------|-----|-----|
| `--success` | `#3A7B4C` | Sucesso, confirmado |
| `--success-light` | `#EDF7F0` | Badge/bg success |
| `--danger` | `#8B2C3A` | Erro, perigo, exclusão |
| `--danger-light` | `#FDF0F2` | Badge/bg danger |
| `--warning` | `#C4923A` | Atenção, alerta |
| `--warning-light` | `#FDF5E6` | Badge/bg warning |
| `--info` | `#2C5F8B` | Informação, dica |
| `--info-light` | `#EDF3F8` | Badge/bg info |

### 3.2 Sombras

```css
--shadow-raised:    /* Elevação sutil — navbar, elementos comuns */
--shadow-elevated:  /* Elevação média — cards em hover */
--shadow-float:     /* Elevação alta — modais, dropdowns */
--shadow-inner:     /* Sombra interna — inputs, campos */
--shadow-button:    /* Botão padrão — elevado, pronto para clique */
--shadow-button-pressed: /* Botão pressionado — inset */
--shadow-field:     /* Campo de formulário — levemente rebaixado */
--shadow-field-focus: /* Campo em foco — com anel de foco */
--shadow-card:      /* Card padrão */
--shadow-modal:     /* Modal */
--shadow-pressed:   /* Pressão genérica */
```

### 3.3 Bordas

| Token | Value | Uso |
|-------|-------|-----|
| `--radius-sm` | `6px` | Badges, paginação, inputs |
| `--radius-md` | `10px` | Botões, cards, alertas |
| `--radius-lg` | `16px` | Cards, modais, containers |
| `--radius-xl` | `24px` | Hero, seções especiais |
| `--radius-full` | `50%` | Avatares, badges de contagem |

### 3.4 Transições

```css
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);   /* Suave natural */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1); /* Elástico sutil */
--duration-fast: 150ms;  /* Hover, active */
--duration-normal: 250ms; /* Transições padrão */
--duration-slow: 350ms;  /* Modal, accordion */
```

---

## 4. Tipografia

### 4.1 Font Families

```css
--font-heading: 'Georgia', 'Times New Roman', serif;
--font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Fira Code', 'Consolas', monospace;
```

### 4.2 Hierarquia

| Elemento | Tamanho | Weight | Uso |
|----------|---------|--------|-----|
| `h1` | `2.5rem` | `700` | Título principal da página |
| `h2` | `2rem` | `700` | Título de seção |
| `h3` | `1.5rem` | `700` | Título de subseção |
| `h4` | `1.25rem` | `700` | Título de card/grupo |
| `h5` | `1.1rem` | `700` | Título menor |
| `h6` | `1rem` | `700` | Legenda (uppercase) |
| `p` | `1rem` | `400` | Texto de corpo |
| `.lead` | `1.125rem` | `400` | Texto de introdução |
| `small` | `0.875rem` | `400` | Notas auxiliares |

### 4.3 Regras

- Títulos usam serifa (Georgia) para elegância e personalidade
- Corpo usa sans-serif para legibilidade prolongada
- Text-shadow sutil em títulos (`0 1px 0 rgba(255,255,255,0.6)`) para relevo
- Line-height de 1.6–1.7 para conforto de leitura

---

## 5. Espaçamento & Grid

### 5.1 Sistema de Espaçamento

Use múltiplos de `0.25rem` (4px):

| Classe | Rem | Px aproximado |
|--------|-----|---------------|
| `gap-1`, `p-1`, `m-1` | `0.25rem` | 4px |
| `gap-2`, `p-2`, `m-2` | `0.5rem` | 8px |
| `gap-3`, `p-3`, `m-3` | `0.75rem` | 12px |
| `gap-4`, `p-4`, `m-4` | `1rem` | 16px |
| `gap-6`, `p-6`, `m-6` | `1.5rem` | 24px |
| `gap-8`, `p-8`, `m-8` | `2rem` | 32px |

### 5.2 Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

### 5.3 Card Grid

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

---

## 6. Componentes

### 6.1 Botões (`.btn`)

**Variantes:**
- `.btn` — Default neutro
- `.btn-primary` — Ação principal (verde escuro)
- `.btn-secondary` — Ação secundária (dourado)
- `.btn-success` — Sucesso
- `.btn-danger` — Perigo/exclusão
- `.btn-ghost` — Transparente, sutil
- `.btn-link` — Estilo de link

**Tamanhos:**
- `.btn-sm` — Pequeno (`0.5rem 1rem`, `0.8125rem`)
- (padrão) — Médio (`0.75rem 1.5rem`, `0.9375rem`)
- `.btn-lg` — Grande (`1rem 2rem`, `1.0625rem`)

**Estados:**
- `:hover` — Eleva, sombra aumenta
- `:active` — Pressão, sombra inset
- `:disabled` — Opacidade 0.5, sem interação
- `.btn-icon` — Botão circular com padding igual

**Regras:**
- Sempre use gradiente vertical (180deg) para simular iluminação de cima
- Text-shadow em botões com cor sólida para contraste
- Borda um tom mais escuro que o fundo

### 6.2 Cards (`.card`)

**Variantes:**
- `.card` — Padrão com sombra elevada
- `.card-elevated` — Sombra mais pronunciada
- `.card-flat` — Sombra interna (rebaixado)
- `.card-interactive` — Com feedback de clique

**Subelementos:**
- `.card-header` — Topo com borda inferior
- `.card-body` — Corpo flexível
- `.card-footer` — Rodapé com borda superior
- `.card-image` — Imagem no topo (margens negativas)

**Horizontal:**
- `.card-horizontal` — Layout flex row
- `.card-horizontal-image` — Imagem lateral (200px)
- `.card-horizontal-body` — Conteúdo ao lado

**Regras:**
- Cards devem ter `border: 1px solid rgba(255,255,255,0.6)` para highlight
- Transição suave em hover: sombra + translateY
- Padding interno de `1.5rem`

### 6.3 Formulários

**Inputs:**
- `.form-input` — Texto, email, password
- `.form-select` — Select com seta customizada
- `.form-textarea` — Área de texto

**Estados:**
- `:hover` — Borda escurece
- `:focus` — Borda primary + anel de foco
- `:disabled` — Opacidade 0.6, bg secundário
- `.form-input-error` — Estado de erro com borda danger

**Checkbox & Radio:**
- Checkbox nativo escondido, `.checkmark` estilizado
- Ícone de check via borda em `::after` (checkbox) ou círculo (radio)
- Feedback visual com cor primary quando checado

**Toggle:**
- `.toggle` — Container
- `.toggle-track` — Fundo com sombra inset
- `.toggle-thumb` — Círculo com sombra elevada
- Animação com `ease-bounce` para efeito elástico

### 6.4 Badges (`.badge`)

**Variantes:**
- `.badge` — Default neutro
- `.badge-primary` — Primary
- `.badge-success` — Sucesso
- `.badge-danger` — Perigo
- `.badge-warning` — Atenção
- `.badge-info` — Informação
- `.badge-count` — Formato circular para contagem

### 6.5 Alertas (`.alert`)

**Variantes:**
- `.alert` — Padrão
- `.alert-success` — Sucesso
- `.alert-danger` — Erro
- `.alert-warning` — Atenção
- `.alert-info` — Informação

**Estrutura:**
- `.alert-icon` — ícone
- `.alert-content` — título + mensagem
- `.alert-dismiss` — botão de fechar

### 6.6 Modal

**Estrutura:**
- `.modal-overlay` — Fundo escuro com backdrop-filter
- `.modal` — Container centralizado com animação
- `.modal-header` — Título + botão fechar
- `.modal-body` — Conteúdo
- `.modal-footer` — Ações (botões)

**Comportamento:**
- Ativar com classe `.active` no overlay
- Fechar com botão, clique no overlay ou tecla Escape
- Animação de entrada: scale + translateY

### 6.7 Accordion

**Estrutura:**
- `.accordion` — Container
- `.accordion-item` — Item individual
- `.accordion-header` — Cabeçalho clicável
- `.accordion-body` — Corpo com max-height animado
- `.accordion-icon` — Seta que rotaciona

**Comportamento:**
- Clique no header alterna `.active` no item
- Apenas um item pode estar aberto por vez (accordion exclusivo)
- Animação via `max-height` com transition

### 6.8 Dropdown

**Estrutura:**
- `.dropdown` — Container relativo
- `.dropdown-menu` — Menu absoluto com sombra float
- `.dropdown-item` — Item do menu
- `.dropdown-divider` — Divisor

**Comportamento:**
- Clique no toggle alterna classe `.active`
- Fecha ao clicar fora
- Transição de opacity + transform

### 6.9 Tags / Chips (`.tag`)

**Variantes:**
- `.tag` — Tag padrão
- `.tag-removable` — Tag com botão de remover
- `.tag-remove` — Botão para remover

### 6.10 Tabelas

**Estrutura:**
- `.table-wrapper` — Wrapper com scroll e borda
- `table` — Tabela completa
- `thead` com `th` — Cabeçalho escuro
- `tbody` com `td` — Corpo

### 6.11 Progress Bar

**Estrutura:**
- `.progress` — Fundo com sombra inset
- `.progress-bar` — Barra com gradiente e brilho `::after`

### 6.12 Stepper

**Estrutura:**
- `.steps` — Container flex
- `.step` — Passo individual
- `.step-number` — Círculo numerado
- `.step-label` — Rótulo
- Estados: `(padrão)`, `.active`, `.completed`

### 6.13 Toast / Notificação

**Estrutura:**
- `.toast-container` — Fixed bottom-right
- `.toast` — Toast individual
- `.toast-icon` — Ícone
- `.toast-body` — Título + mensagem
- `.toast-close` — Fechar

**Comportamento:**
- Animação de entrada: slide da direita
- Animação de saída: slide para direita
- Auto-dismissível em 4 segundos

### 6.14 Spinner / Loader

**Variantes:**
- `.spinner` — Padrão (1.5rem)
- `.spinner-sm` — Pequeno (1rem)
- `.spinner-lg` — Grande (2.5rem)

### 6.15 Skeleton

**Variantes:**
- `.skeleton` — Base com animação shimmer
- `.skeleton-text` — Linha de texto
- `.skeleton-heading` — Título
- `.skeleton-avatar` — Avatar circular
- `.skeleton-card` — Card retangular

### 6.16 Tooltips

Use o atributo `data-tooltip="texto"` em qualquer elemento. O tooltip aparece no hover com animação de escala.

### 6.17 Avatares

**Variantes:**
- `.avatar` — Padrão (2.75rem)
- `.avatar-sm` — Pequeno (2rem)
- `.avatar-lg` — Grande (4rem)
- `.avatar-group` — Grupo com sobreposição

### 6.18 Breadcrumbs

- Lista `ul.breadcrumbs` com `li`
- Separador `/` via CSS `::before`
- Classe `.current` no item ativo

### 6.19 Paginação

- `ul.pagination` com `li.page-item` + `a.page-link`
- Estados: `.active`, `.disabled`

### 6.20 Navegação

- `.navbar` — Barra fixa no topo com sombra
- `.navbar-brand` — Logo/marca
- `.navbar-nav` — Lista de links
- `.nav-link` — Link individual com estado `.active`
- `.tabs` — Navegação por abas
- `.tab` — Aba individual com `.active`

### 6.21 Lista

- `.list` — Container
- `.list-item` — Item com hover e borda inferior

### 6.22 Sidebar

- `.sidebar` — Container com 260px
- `.sidebar-item` — Item com estados e ícone
- `.sidebar-divider` — Divisor

### 6.23 Dark Mode

O design system possui suporte completo a **modo escuro** ativado via atributo `data-theme="dark"` no elemento `<html>`.

**Ativação:**
```html
<html data-theme="dark">
```

**Toggle via JavaScript:**
```javascript
// Ativar modo escuro
document.documentElement.setAttribute('data-theme', 'dark');

// Ativar modo claro
document.documentElement.removeAttribute('data-theme');

// Alternar
var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
```

**Comportamento programático (já incluso no main.js):**
- Botão `#themeToggle` na navbar alterna entre os temas
- A preferência é salva no `localStorage` (chave: `skeuo-theme`)
- Detecta automaticamente `prefers-color-scheme` do sistema operacional
- Transição suave entre temas com classe `.theme-transitioning`

**Design Tokens do Dark Mode:**

| Token | Claro | Escuro |
|-------|-------|--------|
| `--bg-primary` | `#F5F0EB` | `#1A1513` |
| `--surface` | `#FFFBF5` | `#2D2521` |
| `--text-primary` | `#2C1810` | `#EDE0D8` |
| `--accent-primary` | `#1A6B5A` | `#2A9B85` |
| `--accent-secondary` | `#C4923A` | `#D4A84A` |

**Princípios do Dark Mode Skeuomorphic:**
- Fundo não é preto puro, mas sim um marrom escuro e quente (`#1A1513`) para manter o conforto visual
- Sombras usam preto com opacidade maior (já que não há luz para criar contraste)
- O highlight inset (`rgba(255,255,255,...)`) é reduzido para `0.04–0.08`
- Cores de destaque ficam mais brilhantes para manter contraste contra o fundo escuro
- A textura do fundo usa os mesmos accent colors mas com opacidade muito baixa

---

## 7. Boas Práticas

### 7.1 Acessibilidade
- Mantenha contraste suficiente entre texto e fundo
- Use `:focus-visible` para foco visível em botões
- Botões desabilitados devem ter `cursor: not-allowed`
- Formulários devem ter label associado

### 7.2 Performance
- Prefira transitions a animations para interações
- Use `will-change: transform` apenas em elementos animados
- Evite box-shadow excessivos (máximo 3 camadas)

### 7.3 Responsividade
- O design é mobile-first com media queries em 768px
- Cards em grid usam `auto-fill, minmax(280px, 1fr)`
- Navbar empilha em mobile
- Cards horizontais viram verticais em mobile

### 7.4 Consistência
- Sempre use os tokens de design em vez de valores hardcoded
- Mantenha a mesma hierarquia de sombras
- Prefira os componentes existentes a criar novos do zero
- Siga o padrão de nomenclatura já estabelecido

---

## 8. Personalização

### 8.1 Cores
Edite as variáveis CSS no seletor `:root` em `style.css`:

```css
:root {
  --accent-primary: #SEU-TOKE-AQUI;
  --accent-primary-hover: #SEU-HOVER;
  /* ... */
}
```

### 8.2 Tipografia
Troque as font families nas variáveis `--font-heading` e `--font-body`.

### 8.3 Sombras
Ajuste as camadas de sombra para mais ou menos profundidade. Mantenha a estrutura de múltiplas camadas para realismo.

### 8.4 Dark Mode
Para personalizar o modo escuro, edite as variáveis dentro de `[data-theme="dark"]` no `style.css`:

```css
[data-theme="dark"] {
  --bg-primary: #SUA-COR;
  --surface: #SUA-COR;
  --text-primary: #SUA-COR;
  /* ... */
}
```

Lembre-se de sempre ajustar as sombras no dark mode — use opacidades mais altas de `rgba(0,0,0,...)` para compensar o fundo escuro.

### 8.5 Adicionar Novos Componentes
1. Siga o padrão de nomenclatura: `.componente-variante`
2. Use os design tokens existentes
3. Inclua estados (hover, active, disabled, focus)
4. Adicione transições suaves
5. Documente no style guide

---

## 9. Exemplos de Uso

### 9.1 Página de Login

```html
<div class="card" style="max-width: 400px; margin: 4rem auto;">
  <div class="card-header">
    <h3>Entrar</h3>
  </div>
  <div class="card-body">
    <div class="form-group">
      <label class="form-label">Email</label>
      <input type="email" class="form-input" placeholder="seu@email.com">
    </div>
    <div class="form-group">
      <label class="form-label">Senha</label>
      <input type="password" class="form-input" placeholder="••••••••">
    </div>
    <label class="form-check mb-4">
      <input type="checkbox" checked>
      <span class="checkmark"></span>
      Lembrar-me
    </label>
    <button class="btn btn-primary w-full">Entrar</button>
  </div>
</div>
```

### 9.2 Card de Produto

```html
<div class="card" style="max-width: 300px;">
  <div class="card-image">
    <img src="produto.jpg" alt="Produto">
  </div>
  <div class="card-body">
    <span class="badge badge-primary">Novo</span>
    <h4 class="mt-2">Nome do Produto</h4>
    <p>Descrição breve do produto com detalhes premium.</p>
    <div class="flex items-center justify-between mt-3">
      <span style="font-size:1.25rem;font-weight:700;color:var(--text-primary);">R$ 99,90</span>
      <button class="btn btn-primary btn-sm">Comprar</button>
    </div>
  </div>
</div>
```

### 9.3 Notificação Toast

```javascript
// Usando a função global exposta
showToast('Título', 'Mensagem da notificação', 'success');
showToast('Erro', 'Descrição do erro', 'error');
showToast('Atenção', 'Mensagem de alerta', 'warning');
showToast('Dica', 'Informação útil', 'info');
```

---

## Licença

Este design system é livre para uso em projetos pessoais e comerciais.
