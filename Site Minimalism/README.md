# ✦ Minimalism — Design System

> A premium, clean, and minimal design system built with CSS Custom Properties.  
> Complete collection of reusable UI components following minimal design principles.

---

## 📦 Project Structure

```
Site Minimalism/
├── index.html          # Style guide & component showcase
├── styles.css          # Complete design system stylesheet
└── README.md           # Documentation & usage guide
```

---

## 🚀 Quick Start

### 1. Include the stylesheet

```html
<link rel="stylesheet" href="styles.css" />
```

### 2. Add the Inter font (optional but recommended)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

### 3. Start using components

```html
<button class="btn btn-primary">Click Me</button>
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Hello World</h3>
    <p class="card-text">This is a card component.</p>
  </div>
</div>
```

---

## 🎨 Design Tokens

All design decisions are centralized in CSS custom properties. Customize the entire theme by overriding these variables.

### Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-primary` | `#2b2d42` | Primary actions, headings |
| `--color-primary-light` | `#3e405b` | Primary hover states |
| `--color-primary-dark` | `#1a1b2e` | Primary active states |
| `--color-secondary` | `#8d99ae` | Secondary elements |
| `--color-accent` | `#ef233c` | Highlights, errors, CTAs |
| `--color-success` | `#2d6a4f` | Success states |
| `--color-error` | `#9b2226` | Error states |
| `--color-warning` | `#e85d04` | Warning states |
| `--color-info` | `#0077b6` | Info states |

### Typography

| Variable | Value |
|----------|-------|
| `--font-sans` | `'Inter', -apple-system, ...` |
| `--font-serif` | `'Georgia', 'Times New Roman', serif` |
| `--font-mono` | `'JetBrains Mono', 'Fira Code', ...` |

**Type Scale:** `xs` (12px) → `sm` (14px) → `base` (16px) → `lg` (18px) → `xl` (20px) → `2xl` (24px) → `3xl` (30px) → `4xl` (36px) → `5xl` (48px) → `6xl` (60px) → `7xl` (72px)

### Spacing

Scale: `0` → `1` (4px) → `2` (8px) → `3` (12px) → `4` (16px) → `5` (20px) → `6` (24px) → `8` (32px) → `10` (40px) → `12` (48px) → `16` (64px) → `20` (80px) → `24` (96px)

### Shadows

`xs` → `sm` → `md` → `lg` → `xl` → `2xl` → `inner`

### Border Radius

`none` → `sm` (4px) → `md` (8px) → `lg` (12px) → `xl` (16px) → `2xl` (24px) → `full` (9999px)

---

## 🧩 Components

### 1. Buttons

**Variants:** `btn-primary`, `btn-secondary`, `btn-accent`, `btn-outline`, `btn-outline-secondary`, `btn-ghost`, `btn-link`

**Sizes:** `btn-xs`, `btn-sm`, (default), `btn-lg`, `btn-xl`

**Modifiers:** `btn-block`, `btn-icon`

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline btn-lg">Large Outline</button>
<button class="btn btn-icon btn-primary" aria-label="Settings">
  <svg>...</svg>
</button>
<div class="btn-group">
  <button class="btn btn-outline">Left</button>
  <button class="btn btn-outline">Right</button>
</div>
```

### 2. Cards

**Variants:** (default), `card-elevated`, `card-flat`, `card-bordered`, `card-accent`, `card-primary-border`

**Modifiers:** `card-hover`, `card-interactive`, `card-horizontal`

```html
<div class="card">
  <div class="card-header">Title</div>
  <div class="card-body">Content</div>
  <div class="card-footer">Actions</div>
</div>

<div class="card card-elevated card-hover">
  <div class="card-body">...</div>
</div>
```

### 3. Forms

**Elements:** `form-input`, `form-textarea`, `form-select`, `form-check`, `form-toggle`

**States:** `form-input-error`, `:disabled`

```html
<div class="form-group">
  <label class="form-label form-label-required">Email</label>
  <input class="form-input" type="email" placeholder="you@example.com" />
  <span class="form-help">Help text</span>
  <span class="form-error">Error message</span>
</div>

<label class="form-check">
  <input class="form-check-input" type="checkbox" />
  <span class="form-check-label">Remember me</span>
</label>

<label class="form-toggle">
  <input class="form-toggle-input" type="checkbox" />
  <span class="form-toggle-track"></span>
  <span class="form-check-label">Toggle me</span>
</label>
```

### 4. Alerts

**Variants:** `alert-info`, `alert-success`, `alert-warning`, `alert-error`

```html
<div class="alert alert-success">
  <svg class="alert-icon">...</svg>
  <div class="alert-content">
    <div class="alert-title">Success</div>
    Message here
  </div>
  <button class="alert-dismiss">&times;</button>
</div>
```

### 5. Badges & Tags

**Badge variants:** `badge-primary`, `badge-secondary`, `badge-accent`, `badge-success`, `badge-warning`, `badge-error`, `badge-outline`, `badge-ghost`

**Badge modifiers:** `badge-sm`, `badge-lg`, `badge-dot`

```html
<span class="badge badge-primary">New</span>
<span class="badge badge-dot badge-success">Online</span>
<span class="tag">Design <button class="tag-remove">&times;</button></span>
```

### 6. Navigation

**Components:** `navbar`, `sidebar`, `breadcrumb`, `pagination`

```html
<nav class="navbar">
  <a href="#" class="navbar-brand">Brand</a>
  <div class="navbar-nav">
    <a href="#" class="nav-link active">Home</a>
    <a href="#" class="nav-link">About</a>
  </div>
  <div class="navbar-actions">
    <button class="btn btn-primary btn-sm">Sign Up</button>
  </div>
</nav>
```

### 7. Modals

```html
<div class="modal-backdrop active">
  <div class="modal">
    <div class="modal-header">
      <h3 class="modal-title">Title</h3>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">Content</div>
    <div class="modal-footer">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

**Sizes:** `modal-sm`, (default), `modal-lg`, `modal-xl`, `modal-full`

### 8. Tooltips

```html
<span class="tooltip-wrapper">
  <button>Hover me</button>
  <span class="tooltip tooltip-top">Tooltip text</span>
</span>
```

**Positions:** `tooltip-top`, `tooltip-bottom`, `tooltip-left`, `tooltip-right`

### 9. Toasts

```html
<div class="toast">
  <svg class="toast-icon">...</svg>
  <div class="toast-content">
    <div class="toast-title">Title</div>
    Message
  </div>
  <button class="toast-close">&times;</button>
</div>
```

### 10. Avatars

**Sizes:** `avatar-xs`, `avatar-sm`, (default), `avatar-lg`, `avatar-xl`, `avatar-2xl`

```html
<div class="avatar" style="background: var(--color-primary); color: white;">JD</div>

<div class="avatar-group">
  <div class="avatar">A</div>
  <div class="avatar">B</div>
  <div class="avatar avatar-more">+2</div>
</div>
```

### 11. Progress Bars

**Sizes:** `progress-sm`, (default), `progress-lg`, `progress-xl`

**Modifiers:** `progress-bar-striped`, `progress-bar-animated`

```html
<div class="progress">
  <div class="progress-bar" style="width: 75%;"></div>
</div>
```

### 12. Tables

**Modifiers:** `table-hover`, `table-striped`, `table-bordered`

```html
<table class="table table-hover">
  <thead><tr><th>Name</th><th>Role</th></tr></thead>
  <tbody><tr><td>John</td><td>Designer</td></tr></tbody>
</table>
```

### 13. Tabs & Pills

```html
<div class="tabs">
  <button class="tab-item active">Tab 1</button>
  <button class="tab-item">Tab 2</button>
</div>

<div class="pills">
  <button class="pill active">All</button>
  <button class="pill">Design</button>
</div>
```

### 14. Accordion

```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header active">
      Title
      <svg class="accordion-icon">...</svg>
    </button>
    <div class="accordion-body active">Content</div>
  </div>
</div>
```

### 15. Dropdown

```html
<div class="dropdown">
  <button class="btn" onclick="this.parentElement.classList.toggle('active')">
    Menu
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-header">Section</div>
    <a href="#" class="dropdown-item">Item</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item">Delete</a>
  </div>
</div>
```

### 16. Lists

```html
<div class="list">
  <a href="#" class="list-item">
    <svg class="list-item-icon">...</svg>
    <div class="list-item-content">
      <div class="list-item-title">Title</div>
      <div class="list-item-subtitle">Subtitle</div>
    </div>
  </a>
</div>

<ul class="list-bullet">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol class="list-numbered">
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
```

### 17. Loaders

```html
<div class="spinner"></div>
<div class="spinner spinner-sm"></div>
<div class="spinner spinner-lg spinner-white"></div>

<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-title"></div>
<div class="skeleton skeleton-avatar"></div>
<div class="skeleton skeleton-card"></div>
```

### 18. Dividers

```html
<hr class="divider" />
<hr class="divider-sm" />
<hr class="divider-lg" />
<div class="divider-label">OR</div>
```

### 19. Page Sections

```html
<!-- Hero -->
<section class="hero">
  <h1 class="hero-title">Title</h1>
  <p class="hero-subtitle">Subtitle</p>
  <div class="hero-actions">
    <button class="btn btn-primary btn-lg">CTA</button>
  </div>
</section>

<!-- Features -->
<div class="features">
  <div class="feature">
    <div class="feature-icon">icon</div>
    <h3 class="feature-title">Feature</h3>
    <p class="feature-text">Description</p>
  </div>
</div>

<!-- Stats -->
<div class="stats">
  <div class="stat">
    <div class="stat-value">99%</div>
    <div class="stat-label">Uptime</div>
  </div>
</div>

<!-- Pricing -->
<div class="pricing-grid">
  <div class="pricing-card featured">
    <span class="pricing-badge">Popular</span>
    <div class="pricing-name">Pro</div>
    <div class="pricing-price">$29</div>
    <div class="pricing-period">/month</div>
    <div class="pricing-features">
      <div class="pricing-feature">
        <svg class="pricing-feature-icon">✓</svg>
        Feature text
      </div>
    </div>
    <button class="btn btn-primary btn-block">Subscribe</button>
  </div>
</div>

<!-- Testimonial -->
<div class="testimonial">
  <p class="testimonial-text">"Quote"</p>
  <div class="testimonial-author">
    <div class="avatar">JD</div>
    <div>
      <div class="testimonial-name">Name</div>
      <div class="testimonial-role">Role</div>
    </div>
  </div>
</div>

<!-- Empty State -->
<div class="empty-state">
  <svg class="empty-state-icon">...</svg>
  <h3 class="empty-state-title">No items</h3>
  <p class="empty-state-text">Description</p>
  <button class="btn btn-primary">Action</button>
</div>

<!-- Page Header -->
<div class="page-header">
  <h1 class="page-header-title">Title</h1>
  <p class="page-header-description">Description</p>
</div>

<!-- Footer -->
<footer class="footer">
  <div class="footer-grid">
    <div>
      <div class="footer-brand">Brand</div>
      <p class="footer-description">Description</p>
    </div>
    <div>
      <h4 class="footer-heading">Links</h4>
      <div class="footer-links">
        <a href="#" class="footer-link">Link</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2026 Company</span>
    <div class="footer-social">
      <a href="#" class="footer-social-link">icon</a>
    </div>
  </div>
</footer>
```

---

## 📐 Utility Classes

### Layout
- `.container`, `.container-narrow`, `.container-wide`
- `.section`, `.section-sm`, `.section-lg`
- `.flex`, `.flex-col`, `.flex-wrap`
- `.items-center`, `.items-start`, `.items-end`
- `.justify-center`, `.justify-between`, `.justify-end`
- `.grid`, `.grid-2`, `.grid-3`, `.grid-4`
- `.gap-1` through `.gap-12`

### Spacing
- `.m-0`, `.mt-1` through `.mt-12`, `.mb-1` through `.mb-12`
- `.mr-1` through `.mr-4`, `.ml-1` through `.ml-4`
- `.p-0`, `.p-2`, `.p-4`, `.p-6`, `.p-8`
- `.px-4`, `.px-6`, `.py-2`, `.py-4`, `.py-6`

### Typography
- `.heading-1` through `.heading-6`
- `.body-large`, `.body-small`, `.caption`
- `.text-muted`, `.text-center`, `.text-left`, `.text-right`

### Other
- `.w-full`, `.w-auto`, `.w-1\/2`
- `.rounded-sm` through `.rounded-full`
- `.hidden`, `.visible`, `.invisible`
- `.overflow-hidden`, `.overflow-auto`
- `.relative`, `.absolute`, `.fixed`, `.sticky`
- `.cursor-pointer`, `.select-none`, `.pointer-events-none`
- `.transition`, `.transition-fast`

### Animations
- `.animate-fadeIn`, `.animate-fadeInUp`, `.animate-fadeInDown`
- `.animate-scaleIn`, `.animate-slideInRight`, `.animate-slideInLeft`
- `.delay-100` through `.delay-500`

---

## 🌙 Dark Mode

The design system includes automatic dark mode support via `prefers-color-scheme: dark`. No additional configuration needed — it adapts automatically to the user's system preference.

To force dark mode, add a `data-theme="dark"` attribute or override the CSS variables manually.

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| 1024px | Tablets landscape |
| 768px | Tablets portrait / Mobile landscape |
| 480px | Mobile portrait |

---

## ♿ Accessibility

- All interactive elements have `:focus-visible` outlines
- Buttons support `:disabled` states with reduced opacity
- Form elements have proper focus styles
- Semantic HTML structure encouraged
- ARIA labels supported on icon buttons
- Color contrast ratios meet WCAG AA standards

---

## 🛠 Customization

Override any CSS variable to customize the theme:

```css
:root {
  --color-primary: #your-color;
  --font-sans: 'Your Font', sans-serif;
  --container-max: 1400px;
  --radius-md: 4px;
}
```

---

## 📄 License

MIT — Free for personal and commercial use.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

*Built with ❤️ for clean, minimal design.*