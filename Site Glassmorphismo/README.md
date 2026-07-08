# 🧊 Glassmorphism UI Kit

![Version](https://img.shields.io/badge/version-1.0.0-6c5ce7?style=flat-square)
![Status](https://img.shields.io/badge/status-produção-00b894?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-fdcb6e?style=flat-square)

**Um modelo de site premium com design system glassmorphism.** Este kit contém dezenas de componentes prontos para uso, documentados e estilizados com o efeito glass (vidro fosco), ideal para portfolios, dashboards, landing pages e aplicações web modernas.

---

## 📋 Índice

1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Princípios do Glassmorphism](#-princípios-do-glassmorphism)
3. [Estrutura do Projeto](#-estrutura-do-projeto)
4. [Como Usar](#-como-usar)
5. [Guia de Estilos](#-guia-de-estilos)
   - [CSS Custom Properties](#css-custom-properties)
   - [Classes Glass](#classes-glass)
   - [Tipografia](#tipografia)
   - [Cores](#cores)
   - [Sombras e Blur](#sombras-e-blur)
6. [Componentes](#-componentes)
   - [Botões](#1-botões)
   - [Cards](#2-cards)
   - [Formulários](#3-formulários)
   - [Modais & Pop-ups](#4-modais--pop-ups)
   - [Navegação](#5-navegação)
   - [Alertas](#6-alertas)
   - [Badges & Tags](#7-badges--tags)
   - [Loaders](#8-loaders)
   - [Tabelas](#9-tabelas)
   - [Barras de Progresso](#10-barras-de-progresso)
   - [Abas & Accordion](#11-abas--accordion)
   - [Listas](#12-listas)
7. [Responsividade](#-responsividade)
8. [Personalização](#-personalização)
9. [Boas Práticas](#-boas-práticas)

---

## 🎯 Sobre o Projeto

Este projeto foi criado para servir como **modelo de referência** para sites com efeito glassmorphism. Ele inclui:

- **Mais de 50 componentes** estilizados com glassmorphism
- **12 categorias** de elementos de interface
- **Documentação completa** com exemplos de código
- **Design responsivo** adaptado para mobile, tablet e desktop
- **Background animado** com formas flutuantes
- **Modo noturno** (dark theme) premium

---

## 💎 Princípios do Glassmorphism

O glassmorphism é um estilo de design que simula o efeito de **vidro fosco** (frosted glass). Seus princípios fundamentais são:

| Princípio | Descrição | Implementação |
|-----------|-----------|---------------|
| **Transparência** | Fundo semi-transparente | `background: rgba(255, 255, 255, 0.05)` |
| **Blur** | Desfoque do background | `backdrop-filter: blur(12px)` |
| **Borda sutil** | Borda semi-transparente | `border: 1px solid rgba(255, 255, 255, 0.1)` |
| **Sombra** | Sombra suave | `box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37)` |
| **Fundo escuro** | Background escuro para contraste | Gradiente escuro com cores vibrantes |

### Dicas Visuais

- ✅ Use **cores vibrantes** no background para destacar o efeito glass
- ✅ Mantenha o **blur entre 8px e 20px** para um visual limpo
- ✅ Utilize **bordas com opacidade baixa** (0.05 a 0.15)
- ❌ Evite blur muito baixo (< 4px) que não cria o efeito desejado
- ❌ Evite blur muito alto (> 30px) que pode deixar o elemento ilegível

---

## 📁 Estrutura do Projeto

```
glassmorphism-ui-kit/
├── index.html          # Página principal com showcase de componentes
├── styles.css          # Design system completo com todos os estilos
├── README.md           # Documentação e guia de estilos (este arquivo)
└── .gitignore          # Arquivos ignorados pelo Git
```

---

## 🚀 Como Usar

### 1. HTML Básico

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site Glassmorphism</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Seu conteúdo aqui -->
</body>
</html>
```

### 2. Copie os Arquivos

Copie `styles.css` para seu projeto e importe no HTML. Opcionalmente, copie componentes específicos do `index.html`.

### 3. Use os Componentes

```html
<!-- Exemplo: Botão Primário -->
<button class="btn btn-primary">Clique aqui</button>

<!-- Exemplo: Card Glass -->
<div class="card glass">
    <div class="card-body">
        <h3>Meu Card</h3>
        <p>Conteúdo do card com efeito glass.</p>
    </div>
</div>

<!-- Exemplo: Input Glass -->
<div class="input-group">
    <i class="fas fa-user input-icon"></i>
    <input type="text" class="form-input" placeholder="Seu nome">
</div>
```

---

## 🎨 Guia de Estilos

### CSS Custom Properties

O design system utiliza **variáveis CSS** para facilitar a personalização. Todas as variáveis estão definidas na raiz (`:root`) do arquivo `styles.css`.

#### Cores

| Variável | Valor | Uso |
|----------|-------|-----|
| `--primary` | `#6c5ce7` | Cor principal (roxo) |
| `--primary-light` | `#a29bfe` | Variação clara do primário |
| `--secondary` | `#fd79a8` | Cor secundária (rosa) |
| `--accent` | `#00cec9` | Cor de destaque (teal) |
| `--success` | `#00b894` | Sucesso / Confirmação |
| `--warning` | `#fdcb6e` | Atenção / Alerta |
| `--error` | `#e17055` | Erro / Perigo |
| `--info` | `#74b9ff` | Informação |

#### Fundo e Vidro

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `--bg-primary` | `#0a0a1a` | Fundo escuro principal |
| `--bg-secondary` | `#141430` | Fundo secundário |
| `--glass-bg` | `rgba(255,255,255,0.05)` | Fundo do vidro |
| `--glass-border` | `rgba(255,255,255,0.1)` | Borda do vidro |
| `--glass-blur` | `12px` | Intensidade do blur |

#### Gradientes

| Variável | Gradiente | Uso |
|----------|-----------|-----|
| `--gradient-primary` | `135deg, #6c5ce7, #fd79a8` | Botões, badges |
| `--gradient-secondary` | `135deg, #00cec9, #81ecec` | Variação |
| `--gradient-bg` | `#0a0a1a → #1a1a3e → #0a0a1a` | Fundo da página |

#### Tipografia

| Variável | Valor |
|----------|-------|
| `--font-family` | `'Inter', sans-serif` |
| `--font-size-xs` | `0.75rem` (12px) |
| `--font-size-sm` | `0.875rem` (14px) |
| `--font-size-base` | `1rem` (16px) |
| `--font-size-lg` | `1.125rem` (18px) |
| `--font-size-xl` | `1.25rem` (20px) |
| `--font-size-2xl` | `1.5rem` (24px) |
| `--font-size-3xl` | `2rem` (32px) |
| `--font-size-4xl` | `2.5rem` (40px) |
| `--font-size-5xl` | `3.5rem` (56px) |

#### Espaçamento

| Variável | Valor | Nome |
|----------|-------|------|
| `--spacing-xs` | `0.25rem` (4px) | Extra pequeno |
| `--spacing-sm` | `0.5rem` (8px) | Pequeno |
| `--spacing-md` | `1rem` (16px) | Médio |
| `--spacing-lg` | `1.5rem` (24px) | Grande |
| `--spacing-xl` | `2rem` (32px) | Extra grande |
| `--spacing-2xl` | `3rem` (48px) | 2x grande |
| `--spacing-3xl` | `4rem` (64px) | 3x grande |
| `--spacing-4xl` | `6rem` (96px) | 4x grande |

### Classes Glass

Três níveis de intensidade do efeito glass:

| Classe | Blur | Opacidade | Uso |
|--------|------|-----------|-----|
| `.glass` | 12px | 5% | Cards, modals, navbars |
| `.glass-sm` | 8px | 3% | Badges, mini-cards |
| `.glass-xs` | 4px | 2% | Ícones, elementos pequenos |

---

## 🧩 Componentes

### 1. Botões

**Classes:** `.btn` + variante

| Variante | Classe | Descrição |
|----------|--------|-----------|
| Primário | `btn-primary` | Gradiente roxo-rosa com sombra |
| Secundário | `btn-secondary` | Rosa translúcido |
| Outline | `btn-outline` | Borda sutil, fundo transparente |
| Ghost | `btn-ghost` | Apenas texto, sem borda |
| Gradiente | `btn-gradient` | Gradiente animado |

**Tamanhos:**

| Tamanho | Classe |
|---------|--------|
| Pequeno | `btn-sm` |
| Médio | (padrão) |
| Grande | `btn-lg` |
| Extra | `btn-xl` |
| Largura total | `btn-full` |

**Botões de Ícone:**
```html
<button class="btn-icon glass" aria-label="Favoritar">
    <i class="fas fa-heart"></i>
</button>
```
Disponível em: `.btn-icon`, `.btn-icon.glass`, `.btn-icon.glass-sm`, `.btn-icon.glass-xs`

**Grupo de Botões:**
```html
<div class="btn-group">
    <button class="btn btn-outline active">Opção 1</button>
    <button class="btn btn-outline">Opção 2</button>
    <button class="btn btn-outline">Opção 3</button>
</div>
```

---

### 2. Cards

**Classe base:** `.card.glass`

**Variações:**

| Tipo | Descrição |
|------|-----------|
| `.card` + `.glass` | Card padrão com imagem |
| `.card-horizontal` | Layout horizontal (imagem à esquerda) |
| `.card-price` | Card de plano/preço |
| `.card-price.featured` | Card de preço em destaque |
| `.card-profile` | Card de perfil de usuário |
| `.card-stats` | Card de estatística/KPI |

**Estrutura do Card:**

```html
<div class="card glass">
    <div class="card-img">
        <img src="imagem.jpg" alt="Descrição">
        <span class="card-badge">Badge</span>
    </div>
    <div class="card-body">
        <span class="card-category">Categoria</span>
        <h3>Título do Card</h3>
        <p>Descrição do card...</p>
        <div class="card-meta">
            <span><i class="far fa-clock"></i> 2 min</span>
            <span><i class="far fa-eye"></i> 1.2k</span>
        </div>
        <div class="card-actions">
            <button class="btn btn-primary btn-sm">Ação</button>
        </div>
    </div>
</div>
```

---

### 3. Formulários

**Input de Texto:**
```html
<div class="form-group">
    <label class="form-label">Nome</label>
    <div class="input-group">
        <i class="fas fa-user input-icon"></i>
        <input type="text" class="form-input" placeholder="Seu nome">
    </div>
</div>
```

**Estados do Input:**
- Normal: `.input-group`
- Com erro: `.input-group.error`
- Desabilitado: `input[disabled]`

**Elementos de Formulário:**

| Elemento | Classe | Descrição |
|----------|--------|-----------|
| Textarea | `.form-input.form-textarea` | Área de texto redimensionável |
| Select | `.form-input.form-select` | Select com seta customizada |
| Range | `.form-range` | Slider range |
| Checkbox | `.form-checkbox` | Checkbox customizado |
| Radio | `.form-radio` | Radio button customizado |
| Toggle | `.form-toggle` | Toggle switch |
| Upload | `.form-upload` | Área de upload |

**Checkbox:**
```html
<label class="form-checkbox">
    <input type="checkbox" checked>
    <span class="checkmark"></span>
    Opção
</label>
```

**Toggle:**
```html
<label class="form-toggle">
    <input type="checkbox" checked>
    <span class="toggle-slider"></span>
    Ativar notificações
</label>
```

---

### 4. Modais & Pop-ups

**Modal Padrão:**
```html
<div class="modal-overlay" id="modalOverlay">
    <div class="modal glass">
        <div class="modal-header">
            <h3>Título</h3>
            <button class="modal-close"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
            <p>Conteúdo do modal...</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-ghost">Cancelar</button>
            <button class="btn btn-primary">Confirmar</button>
        </div>
    </div>
</div>
```

**Tooltip:**
```html
<span class="tooltip-container">
    <button class="btn btn-ghost">Hover me</button>
    <span class="tooltip tooltip-top">Tooltip no topo</span>
</span>
```
Posições: `tooltip-top`, `tooltip-right`, `tooltip-bottom`, `tooltip-left`

**Dropdown:**
```html
<div class="dropdown" id="dropdown">
    <button class="btn btn-outline dropdown-toggle">
        <span>Selecione</span>
        <i class="fas fa-chevron-down"></i>
    </button>
    <div class="dropdown-menu glass">
        <a href="#" class="dropdown-item">Opção 1</a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">Opção 2</a>
    </div>
</div>
```

**Toast / Notificação:**
```javascript
// Função global disponível
showToast('success', 'Operação realizada com sucesso!');
showToast('error', 'Erro ao processar solicitação.');
showToast('info', 'Nova atualização disponível.');
```

---

### 5. Navegação

**Breadcrumbs:**
```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol>
        <li><a href="#"><i class="fas fa-home"></i></a></li>
        <li><a href="#">Categoria</a></li>
        <li aria-current="page">Página atual</li>
    </ol>
</nav>
```

**Paginação:**
```html
<nav class="pagination" aria-label="Paginação">
    <a href="#" class="page-link glass-xs"><i class="fas fa-chevron-left"></i></a>
    <a href="#" class="page-link glass-xs active">1</a>
    <a href="#" class="page-link glass-xs">2</a>
    <span class="page-link glass-xs page-dots">...</span>
    <a href="#" class="page-link glass-xs">10</a>
    <a href="#" class="page-link glass-xs"><i class="fas fa-chevron-right"></i></a>
</nav>
```

**Sidebar:**
```html
<div class="sidebar-mock">
    <a href="#" class="sidebar-item active">
        <i class="fas fa-chart-pie"></i>
        <span>Dashboard</span>
    </a>
    <a href="#" class="sidebar-item">
        <i class="fas fa-users"></i>
        <span>Usuários</span>
        <span class="badge badge-primary">3</span>
    </a>
</div>
```

**Stepper:**
```html
<div class="stepper">
    <div class="step completed">
        <div class="step-number"><i class="fas fa-check"></i></div>
        <div class="step-label">
            <span>Etapa 1</span>
            <small>Concluído</small>
        </div>
    </div>
    <div class="step active">
        <div class="step-number">2</div>
        <div class="step-label">
            <span>Etapa 2</span>
            <small>Em andamento</small>
        </div>
    </div>
    <div class="step">
        <div class="step-number">3</div>
        <div class="step-label">
            <span>Etapa 3</span>
            <small>Pendente</small>
        </div>
    </div>
</div>
```

---

### 6. Alertas

**Tipos de Alerta:**

| Tipo | Classe |
|------|--------|
| Sucesso | `alert-success` |
| Erro | `alert-error` |
| Atenção | `alert-warning` |
| Informação | `alert-info` |
| Neutro | (padrão) |

```html
<div class="alert alert-success glass">
    <i class="fas fa-check-circle"></i>
    <div class="alert-content">
        <strong>Sucesso!</strong>
        <p>Operação realizada com sucesso.</p>
    </div>
    <button class="alert-close"><i class="fas fa-times"></i></button>
</div>
```

---

### 7. Badges & Tags

**Badges de Cor:**

| Classe | Cor |
|--------|-----|
| `badge-primary` | Roxo |
| `badge-secondary` | Rosa |
| `badge-success` | Verde |
| `badge-warning` | Amarelo |
| `badge-error` | Vermelho |
| `badge-info` | Azul |

**Badges Outline:** Adicione `.badge-outline` para versão com borda.

**Badges de Tamanho:** `.badge-sm`, `.badge-lg`

**Status Online:**
```html
<span class="status-indicator online"></span> <!-- online, idle, dnd, offline -->
```

---

### 8. Loaders

**Spinners:**
```html
<div class="spinner"></div>       <!-- Padrão -->
<div class="spinner spinner-sm"></div>  <!-- Pequeno -->
<div class="spinner spinner-lg"></div>  <!-- Grande -->
```

**Skeleton:**
```html
<div class="skeleton-card">
    <div class="skeleton-img"></div>
    <div class="skeleton-line w-75"></div>
    <div class="skeleton-line w-50"></div>
</div>
```

**Dots Loader:**
```html
<div class="dots-loader">
    <span></span><span></span><span></span>
</div>
```

**Bar Loader:**
```html
<div class="bar-loader">
    <div class="bar-loader-fill"></div>
</div>
```

---

### 9. Tabelas

```html
<div class="table-wrapper">
    <table class="table">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Status</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="table-user">
                    <img src="avatar.jpg" alt="User">
                    <span>João Silva</span>
                </td>
                <td><span class="badge badge-success badge-sm">Ativo</span></td>
                <td><button class="btn-icon glass-xs"><i class="fas fa-ellipsis-v"></i></button></td>
            </tr>
        </tbody>
    </table>
</div>
```

---

### 10. Barras de Progresso

**Progresso Linear:**
```html
<div class="progress-bar">
    <div class="progress-fill" style="width: 75%;">
        <span class="progress-label">75%</span>
    </div>
</div>
```
Variações: `.progress-success`, `.progress-warning`, `.progress-error`, `.progress-gradient`

**Progresso Circular:**
```html
<div class="circular-progress" data-progress="75">
    <svg viewBox="0 0 36 36">
        <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
        <path class="circle-fill" stroke-dasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
        <text x="18" y="20.35" class="circle-text">75%</text>
    </svg>
</div>
```

---

### 11. Abas & Accordion

**Abas (Tabs):**
```html
<div class="tabs">
    <div class="tabs-header">
        <button class="tab-btn active" data-tab="tab1">Aba 1</button>
        <button class="tab-btn" data-tab="tab2">Aba 2</button>
        <button class="tab-btn" data-tab="tab3">Aba 3</button>
    </div>
    <div class="tabs-content">
        <div class="tab-panel active" id="tab1">
            <p>Conteúdo da aba 1</p>
        </div>
        <div class="tab-panel" id="tab2">
            <p>Conteúdo da aba 2</p>
        </div>
        <div class="tab-panel" id="tab3">
            <p>Conteúdo da aba 3</p>
        </div>
    </div>
</div>
```

**Accordion:**
```html
<div class="accordion">
    <div class="accordion-item active">
        <button class="accordion-header">
            <span>Título</span>
            <i class="fas fa-chevron-down"></i>
        </button>
        <div class="accordion-body">
            <p>Conteúdo expansível...</p>
        </div>
    </div>
</div>
```

---

### 12. Listas

**Lista com Ícones:**
```html
<ul class="list list-icons">
    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Item 1</li>
    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Item 2</li>
</ul>
```

**Lista com Avatar:**
```html
<ul class="list list-avatar">
    <li>
        <img src="avatar.jpg" alt="User">
        <div>
            <strong>Nome</strong>
            <span>Descrição</span>
        </div>
        <small>5 min</small>
    </li>
</ul>
```

**Lista Ordenada:**
```html
<ol class="list list-ordered">
    <li><span class="list-number">1</span> Passo 1</li>
    <li><span class="list-number">2</span> Passo 2</li>
</ol>
```

**Lista de Arquivos:**
```html
<ul class="list list-files">
    <li>
        <i class="fas fa-file-pdf" style="color: #e74c3c;"></i>
        <div>
            <strong>documento.pdf</strong>
            <span>2.4 MB</span>
        </div>
        <button class="btn-icon glass-xs"><i class="fas fa-download"></i></button>
    </li>
</ul>
```

---

## 📱 Responsividade

O design system é totalmente responsivo com breakpoints:

| Dispositivo | Largura | Ajustes |
|-------------|---------|---------|
| Desktop | > 1024px | Layout completo, grid 3-4 colunas |
| Tablet | 768px - 1024px | Grid 2 colunas, fonte reduzida |
| Mobile | < 768px | Grid 1 coluna, menu hamburger, fonte menor |
| Mobile pequeno | < 480px | Botões full width, toasts responsivos |

---

## 🔧 Personalização

### Alterar Cores do Tema

Edite as variáveis CSS no início do `styles.css`:

```css
:root {
    --primary: #seu-valor;        /* Cor principal */
    --secondary: #seu-valor;      /* Cor secundária */
    --gradient-primary: linear-gradient(135deg, #cor1, #cor2);
    --glass-blur: 15px;           /* Intensidade do blur */
}
```

### Adicionar Novo Componente

1. Use as variáveis CSS para consistência
2. Aplique a classe `.glass` para o efeito glass
3. Siga o padrão de nomenclatura existente

---

## 📝 Boas Práticas

### Acessibilidade

- Use `aria-label` em botões de ícone sem texto
- Mantenha contraste de cores suficiente (WCAG AA)
- Utilize elementos semânticos (`<nav>`, `<header>`, `<main>`, `<footer>`)
- Inclua `alt` text em todas as imagens

### Performance

- O efeito `backdrop-filter` pode ser pesado em dispositivos móveis
- Prefira `.glass-sm` ou `.glass-xs` em elementos pequenos
- Evite aplicar `.glass` em muitos elementos simultaneamente

### Consistência

- Use as variáveis CSS para manter consistência de cores e espaçamentos
- Siga a hierarquia de componentes apresentada neste guia
- Mantenha a mesma intensidade de glass para componentes similares

### Customização

Para criar seu próprio tema glassmorphism:
1. Altere as cores primárias nas variáveis CSS
2. Ajuste a opacidade do glass (`--glass-bg`)
3. Modifique a intensidade do blur (`--glass-blur`)
4. Personalize os gradientes

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

---

<p align="center">Feito com 💜 para a comunidade de desenvolvimento web</p>