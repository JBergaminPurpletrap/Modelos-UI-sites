# 🧊 Nexus Design System — Padrão Neomórfico

> **Versão:** 1.0.0 · **Framework:** CSS Puro · **Tema:** Neumorfismo Premium

---

## Índice

1. [Sobre](#1-sobre)
2. [Estrutura do Projeto](#2-estrutura-do-projeto)
3. [Como Usar](#3-como-usar)
4. [Design Tokens](#4-design-tokens)
5. [Componentes](#5-componentes)
   - [Botões](#51-botões)
   - [Cards](#52-cards)
   - [Formulários](#53-formulários)
   - [Feedback](#54-feedback)
   - [Navegação](#55-navegação)
   - [Dados](#56-dados)
   - [Mídia](#57-mídia)
   - [Avançado](#58-avançado)
6. [Modo Escuro](#6-modo-escuro)
7. [Responsividade](#7-responsividade)
8. [Boas Práticas](#8-boas-práticas)
9. [Criando Novos Componentes](#9-criando-novos-componentes)

---

## 1. Sobre

O **Nexus Design System** é uma biblioteca de componentes baseada no estilo **neomórfico** (Soft UI). O neomorfismo combina sombras suaves e cores claras para criar interfaces que parecem extrudadas do fundo — um visual premium, tátil e confortável para os olhos.

### Princípios

| Princípio | Descrição |
|-----------|-----------|
| **Conforto Visual** | Cores suaves, contrastes equilibrados, sem cansar a visão |
| **Profundidade** | Sombras duplas (luz + escuro) criam a ilusão de relevo |
| **Premium** | Design refinado com atenção a cada detalhe |
| **Modular** | Componentes independentes, use só o que precisar |
| **Acessível** | Contraste adequado, suporte a teclado, labels semânticas |

---

## 2. Estrutura do Projeto

```
site-neomorfismo/
├── index.html          # Vitrine de componentes (showcase)
├── style.css           # Design system completo (CSS)
├── script.js           # Interatividade dos componentes
└── NEOMORPHISM.md      # Documentação e padrões (este arquivo)
```

Para criar um novo site baseado neste padrão:

1. Copie `style.css` e `script.js` para seu projeto
2. Crie seu `index.html` importando os dois arquivos
3. Consulte este `.md` para usar as classes corretas

---

## 3. Como Usar

### Importação básica

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

### Estrutura HTML mínima

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Site</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="noise"></div>
  <!-- seu conteúdo aqui -->
  <script src="script.js"></script>
</body>
</html>
```

### Atalho para tema escuro

Adicione `data-theme="dark"` na tag `<html>` para iniciar no modo escuro:

```html
<html lang="pt-BR" data-theme="dark">
```

---

## 4. Design Tokens

Todas as cores, sombras, espaçamentos e raios são controlados por **variáveis CSS**. Para customizar, altere as variáveis em `:root` no `style.css`.

### Cores Base

| Variável | Light | Dark |
|----------|-------|------|
| `--bg-primary` | `#e4e9f0` | `#1a1d2e` |
| `--bg-secondary` | `#dde2eb` | `#1e2235` |
| `--bg-card` | `#e4e9f0` | `#1a1d2e` |
| `--text-primary` | `#2d3349` | `#e8eaf0` |
| `--text-secondary` | `#5a6180` | `#a0a8c0` |
| `--text-muted` | `#8b92af` | `#6b7290` |

### Sombras Neomórficas

| Variável | Função |
|----------|--------|
| `--shadow-light` | Sombra clara (fonte de luz) |
| `--shadow-dark` | Sombra escura (fonte de luz oposta) |
| `--shadow-colored` | Sombra colorida (para gradientes) |

### Gradientes

| Variável | Cores |
|----------|-------|
| `--gradient-accent` | `#ff7e67` → `#ff6b8a` |
| `--gradient-secondary` | `#6c63ff` → `#a163ff` |
| `--gradient-success` | `#22c55e` → `#16a34a` |
| `--gradient-warning` | `#f59e0b` → `#d97706` |
| `--gradient-danger` | `#ef4444` → `#dc2626` |
| `--gradient-info` | `#3b82f6` → `#2563eb` |

### Espaçamentos (escala 8px)

`--space-1` (4px), `--space-2` (8px), `--space-3` (12px), `--space-4` (16px), `--space-5` (20px), `--space-6` (24px), `--space-8` (32px), `--space-10` (40px), `--space-12` (48px), `--space-16` (64px), `--space-20` (80px), `--space-24` (96px)

### Raios de Borda

| Variável | Valor | Uso |
|----------|-------|-----|
| `--radius-xs` | 6px | Inputs, badges pequenos |
| `--radius-sm` | 10px | Cards compactos, botões |
| `--radius-md` | 16px | Cards, botões padrão |
| `--radius-lg` | 20px | Cards grandes, modais |
| `--radius-xl` | 28px | Modais grandes |
| `--radius-full` | 9999px | Badges, pills, avatares |

---

## 5. Componentes

### 5.1 Botões

Classe base: `.btn`

#### Cores

| Classe | Descrição |
|--------|-----------|
| `.btn-primary` | Gradiente accent (laranja/rosa) |
| `.btn-secondary` | Gradiente roxo |
| `.btn-success` | Gradiente verde |
| `.btn-warning` | Gradiente amarelo |
| `.btn-danger` | Gradiente vermelho |
| `.btn-info` | Gradiente azul |
| `.btn-dark` | Gradiente escuro |
| `.btn-ghost` | Transparente, sem sombra |
| `.btn-outline` | Borda sutil |
| `.btn-link` | Apenas texto, como link |

#### Tamanhos

| Classe | Padding |
|--------|---------|
| `.btn-xs` | 8px 14px |
| `.btn-sm` | 10px 20px |
| (padrão) | 14px 28px |
| `.btn-lg` | 18px 36px |
| `.btn-xl` | 22px 44px |

#### Formatos

| Classe | Efeito |
|--------|--------|
| `.btn-pill` | Border-radius total (formato pílula) |
| `.btn-square` | Aspect ratio 1:1, ideal para ícones |
| `.btn-full` | Largura 100% |
| `.btn-icon` | Botão somente com ícone |

#### Estados

| Uso | Efeito |
|-----|--------|
| `disabled` | Opacidade reduzida, sem clique |
| `.disabled` | Mesmo efeito (classe) |
| `.btn-loading` | Texto oculto, spinner visível |

#### Button Group

```html
<div class="btn-group">
  <button class="btn active">Opção 1</button>
  <button class="btn">Opção 2</button>
</div>
```

---

### 5.2 Cards

Classe base: `.card`

| Classe | Efeito |
|--------|--------|
| `.card-neumorph` | Sombra externa (relevo) |
| `.card-inset` | Sombra interna (afundado) |
| `.card-elevated` | Sombra extra elevada |
| `.card-flat` | Sombra sutil |

#### Variantes de Layout

| Classe | Descrição |
|--------|-----------|
| `.card-horizontal` | Conteúdo lado a lado |
| `.card-image` | Imagem no topo + corpo |
| `.card-icon` | Ícone centralizado |
| `.card-pricing` | Tabela de preços |
| `.card-profile` | Perfil de usuário |
| `.card-stats` | Números/estatísticas |
| `.card-compact` | Padding reduzido |
| `.card-spacious` | Padding aumentado |

**Exemplo pricing com destaque:**

```html
<div class="card card-neumorph card-pricing featured">
  <span class="badge badge-primary card-badge">Popular</span>
  <h3>Profissional</h3>
  <div class="card-price">R$97 <small>/mês</small></div>
  <ul class="card-features">
    <li><i class="fas fa-check"></i> Recurso 1</li>
  </ul>
  <button class="btn btn-primary btn-full">Assinar</button>
</div>
```

---

### 5.3 Formulários

#### Inputs

| Classe | Descrição |
|--------|-----------|
| `.form-input` | Input padrão |
| `.form-input-sm` | Input pequeno |
| `.form-input-lg` | Input grande |
| `.error` | Estado de erro (borda vermelha) |
| `.success` | Estado de sucesso (borda verde) |

#### Floating Label

```html
<div class="form-float">
  <input type="text" class="form-input" id="nome" placeholder=" ">
  <label for="nome" class="form-label">Nome</label>
</div>
```

#### Input com Ícone

```html
<div class="form-input-wrap">
  <input type="text" class="form-input" placeholder="Buscar...">
  <i class="fas fa-search input-icon"></i>
</div>
```

#### Checkbox e Radio

```html
<label class="form-check">
  <input type="checkbox">
  <span class="checkmark"></span>
  <span>Opção</span>
</label>
```

#### Toggle Switch

```html
<label class="toggle">
  <input type="checkbox">
  <span class="toggle-track"></span>
  <span>Notificações</span>
</label>
```

#### Range Slider

```html
<input type="range" class="form-range" min="0" max="100" value="50">
```

---

### 5.4 Feedback

#### Alertas

| Classe | Cor |
|--------|-----|
| `.alert-success` | Verde |
| `.alert-warning` | Amarelo |
| `.alert-danger` | Vermelho |
| `.alert-info` | Azul |

**Estrutura:** `.alert` > `.alert-icon` + `.alert-content` (strong + p) + `.alert-close`

#### Badges

| Classe | Descrição |
|--------|-----------|
| `.badge` | Padrão (sem cor) |
| `.badge-primary` | Gradiente accent |
| `.badge-secondary` | Gradiente roxo |
| `.badge-success` | Verde |
| `.badge-warning` | Amarelo |
| `.badge-danger` | Vermelho |
| `.badge-info` | Azul |
| `.badge-dark` | Escuro |
| `.badge-inset` | Aparência afundada |
| `.badge-sm` | Pequeno |
| `.badge-lg` | Grande |

#### Tags/Chips

```html
<span class="chip">Tag <i class="fas fa-times"></i></span>
<span class="chip chip-primary">Frontend <i class="fas fa-times"></i></span>
```

#### Modais

**Ativar via JS:** `openModal('id-do-modal')` · `closeModal('id-do-modal')`

| Tamanho | Classe no `.modal` |
|---------|-------------------|
| Pequeno | `.modal-sm` |
| Padrão | (nenhuma) |
| Grande | `.modal-lg` |
| Extra | `.modal-xl` |

**Escape** fecha o modal automaticamente.

#### Toasts

**Ativar via JS:** `showToast('success', 'Título', 'Mensagem')`

Tipos: `success`, `warning`, `danger`, `info`

---

### 5.5 Navegação

#### Tabs

```html
<div class="tabs">
  <div class="tabs-header">
    <button class="tab-btn active" data-tab="tab1">Perfil</button>
    <button class="tab-btn" data-tab="tab2">Config</button>
  </div>
  <div class="tab-panel active" id="tab1">Conteúdo...</div>
  <div class="tab-panel" id="tab2">Conteúdo...</div>
</div>
```

#### Breadcrumbs

```html
<nav class="breadcrumbs">
  <a href="#">Home</a>
  <span class="separator">/</span>
  <a href="#">Categoria</a>
  <span class="separator">/</span>
  <span>Atual</span>
</nav>
```

#### Paginação

```html
<div class="pagination">
  <span class="page-item disabled"><i class="fas fa-chevron-left"></i></span>
  <span class="page-item active">1</span>
  <span class="page-item">2</span>
  <span class="page-item">3</span>
  <span class="page-item"><i class="fas fa-chevron-right"></i></span>
</div>
```

#### Dropdown

**Ativar via JS:** `toggleDropdown('id-do-dropdown')`

```html
<div class="dropdown" id="dropdown1">
  <button onclick="toggleDropdown('dropdown1')">Abrir</button>
  <div class="dropdown-menu">
    <div class="dropdown-item">Opção</div>
    <div class="dropdown-divider"></div>
    <div class="dropdown-item">Sair</div>
  </div>
</div>
```

---

### 5.6 Dados

#### Tabela

| Classe | Descrição |
|--------|-----------|
| `.table-wrap` | Container com scroll |
| `.table` | Tabela base |
| `.table-striped` | Linhas alternadas |
| `.table-hover` | Destaque ao passar mouse |

#### Progresso Linear

```html
<div class="progress">
  <div class="progress-bar" style="width:75%"></div>
</div>
```

Modificadores: `.progress-sm`, `.progress-lg`, `.striped`, `.animated`

#### Progresso Circular

```html
<div class="circular-progress">
  <svg viewBox="0 0 120 120">
    <circle class="track" cx="60" cy="60" r="50"/>
    <circle class="fill" cx="60" cy="60" r="50" id="circleProgress" style="stroke-dashoffset:94"/>
  </svg>
  <div class="cp-label text-gradient">70%</div>
</div>
```

#### Accordion

```html
<div class="accordion">
  <div class="accordion-item open">
    <button class="accordion-header">
      <span>Título</span>
      <i class="fas fa-chevron-down"></i>
    </button>
    <div class="accordion-body"><p>Conteúdo...</p></div>
  </div>
</div>
```

#### List Group

```html
<div class="list-group">
  <div class="list-group-item active"><i class="fas fa-inbox"></i> Inbox</div>
  <div class="list-group-item"><i class="fas fa-paper-plane"></i> Enviados</div>
</div>
```

---

### 5.7 Mídia

#### Avatares

| Classe | Tamanho |
|--------|---------|
| `.avatar-xs` | 28px |
| `.avatar-sm` | 36px |
| `.avatar` | 48px |
| `.avatar-lg` | 64px |
| `.avatar-xl` | 96px |
| `.avatar-2xl` | 128px |

**Com status:**

```html
<span class="avatar-status">
  <span class="avatar avatar-lg"><i class="fas fa-user"></i></span>
  <span class="status-dot online"></span>
</span>
```

Status: `online` (verde), `away` (amarelo), `busy` (vermelho)

#### Loaders

| Classe | Tipo |
|--------|------|
| `.spinner` | Spinning circle |
| `.spinner-sm` | Spinner pequeno |
| `.spinner-lg` | Spinner grande |
| `.dots-loader` | Três pontos pulsantes |
| `.pulse-loader` | Círculo pulsante |

#### Skeleton

| Classe | Uso |
|--------|-----|
| `.skeleton` | Base + shimmer animation |
| `.skeleton-text` | Linha de texto |
| `.skeleton-avatar` | Avatar circular |
| `.skeleton-thumb` | Thumbnail retangular |
| `.skeleton-btn` | Botão |

---

### 5.8 Avançado

#### Timeline

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="tl-content">
      <h4>Título</h4>
      <span>Data</span>
      <p>Descrição...</p>
    </div>
  </div>
</div>
```

#### Tooltip

```html
<div class="tooltip-wrap">
  <button>Elemento</button>
  <span class="tooltip">Texto do tooltip</span>
</div>
```

Direções: `.tooltip` (top), `.tooltip-bottom`, `.tooltip-left`, `.tooltip-right`

#### Divider

| Classe | Descrição |
|--------|-----------|
| `.divider` | Linha fina com sombra |
| `.divider-gradient` | Linha grossa com gradiente |
| `.divider-label` | Linha com texto no meio |

#### Neumorph Utilities

| Classe | Efeito |
|--------|--------|
| `.neumorph` | Sombra externa (relevo) |
| `.neumorph-inset` | Sombra interna (afundado) |
| `.neumorph-flat` | Sombra suave |
| `.neumorph-pressed` | Aparência pressionada |
| `.neumorph-elevated` | Sombra extra elevada |
| `.neumorph-none` | Sem sombra (transparente) |

---

## 6. Modo Escuro

O tema escuro é ativado pelo atributo `data-theme="dark"` na tag `<html>`.

### Alternância via JS

```javascript
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('nexus-theme', theme);
}
```

O botão de toggle já está implementado no `script.js` com persistência em `localStorage` e detecção de preferência do sistema.

### Personalização

Para criar seu próprio tema, adicione novas variáveis em `[data-theme="seu-tema"]`:

```css
[data-theme="matrix"] {
  --bg-primary: #0a0a0a;
  --text-primary: #00ff41;
  --shadow-light: #1a1a1a;
  --shadow-dark: #000000;
}
```

---

## 7. Responsividade

### Breakpoints

| Tamanho | Media Query | Comportamento |
|---------|-------------|---------------|
| Tablet | `max-width: 1024px` | Grid 4 vira 2 colunas |
| Mobile | `max-width: 768px` | Grid vira 1 coluna, menu hamburger, navbar menor |
| Mobile P | `max-width: 480px` | Padding reduzido, botões full-width |

### Classes utilitárias de grid

```html
<div class="grid grid-2">...</div>  <!-- 2 colunas -->
<div class="grid grid-3">...</div>  <!-- 3 colunas -->
<div class="grid grid-4">...</div>  <!-- 4 colunas -->
<div class="grid grid-auto">...</div> <!-- auto-fit, min 280px -->
```

---

## 8. Boas Práticas

### Neomorfismo

1. **Use cores suaves** — O neomorfismo funciona melhor com tons pastel/claros
2. **Evite contrastes extremos** — A diferença entre `--shadow-light` e `--shadow-dark` deve ser sutil
3. **Mantenha a consistência** — Use as variáveis CSS, nunca valores hardcoded
4. **Não exagere** — Use neumorfismo em elementos de destaque, não em tudo
5. **Acessibilidade** — Sempre tenha texto com contraste adequado (WCAG AA mínimo)

### Estrutura

1. **Sempre use o `.noise`** — A textura de ruído suave melhora a percepção visual
2. **Container** — Use `.container` para centralizar e limitar largura
3. **Fade-in** — Adicione `.fade-in` em elementos que devem aparecer com animação
4. **Ícones** — O sistema usa Font Awesome 6 (free). Mantenha a importação.

### Performance

1. O `style.css` é completo (~37KB), mas você pode remover seções não usadas
2. Para produção, considere minificar: `style.min.css`

---

## 9. Criando Novos Componentes

### Template para novo componente

```css
/* Componente: MeuComponente */
.meu-componente {
  background: var(--bg-card);
  border-radius: var(--radius-md);
  box-shadow:
    6px 6px 12px var(--shadow-dark),
    -6px -6px 12px var(--shadow-light);
  padding: var(--space-5);
  transition: all var(--transition-base);
}

.meu-componente:hover {
  box-shadow:
    10px 10px 20px var(--shadow-dark),
    -10px -10px 20px var(--shadow-light);
  transform: translateY(-2px);
}
```

### Regras de nomenclatura

- Classes em **inglês**
- Use **kebab-case** para classes CSS
- Use **camelCase** para IDs e funções JS
- Prefixo `js-` para classes usadas apenas em JavaScript
- Prefixo `is-` / `has-` para estados

### Checklist ao adicionar:

- [ ] Variáveis CSS para cores e medidas
- [ ] Estado normal, hover, active/focus
- [ ] Versão dark mode
- [ ] Responsivo (se aplicável)
- [ ] Exemplo no `index.html`
- [ ] Documentação neste `.md`

---

## Licença

Uso livre. Este design system é um modelo de referência para projetos pessoais e profissionais.

---

<p align="center">
  <strong>Nexus Design System</strong> · Feito com ❤️ e neomorfismo
</p>
