/* ============================================================
   CLAYMORPHISM JS — Interactive Components
   Version: 1.0.0
   Description: JavaScript for interactive UI components
   including modals, dropdowns, tabs, accordions, toasts, etc.
   ============================================================ */

class Claymorphism {
  constructor() {
    this.initModals();
    this.initTabs();
    this.initAccordions();
    this.initDropdowns();
    this.initToasts();
    this.initMobileNav();
    this.initThemeToggle();
    this.initRatingStars();
    this.initTooltips();
    this.initSmoothScroll();
    this.initCopyCode();
  }

  /* --------------------------------------------------------
     MODALS
     -------------------------------------------------------- */
  initModals() {
    document.querySelectorAll('[data-modal-target]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.dataset.modalTarget;
        const modal = document.getElementById(modalId);
        if (modal) this.openModal(modal);
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeModal(overlay);
      });

      const closeBtn = overlay.querySelector('.modal-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeModal(overlay));
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
          this.closeModal(modal);
        });
      }
    });
  }

  openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* --------------------------------------------------------
     TABS
     -------------------------------------------------------- */
  initTabs() {
    document.querySelectorAll('.tab-list').forEach(tabList => {
      const tabs = tabList.querySelectorAll('.tab-item');
      const parent = tabList.closest('.tabs');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = tab.dataset.tab;
          
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');

          if (parent) {
            parent.querySelectorAll('.tab-content').forEach(content => {
              content.classList.remove('active');
            });
            const targetContent = parent.querySelector(`[data-tab-content="${target}"]`);
            if (targetContent) targetContent.classList.add('active');
          }
        });
      });
    });
  }

  /* --------------------------------------------------------
     ACCORDIONS
     -------------------------------------------------------- */
  initAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        const accordion = item.closest('.accordion');

        if (accordion && !accordion.classList.contains('accordion-multi')) {
          accordion.querySelectorAll('.accordion-item.active').forEach(activeItem => {
            if (activeItem !== item) activeItem.classList.remove('active');
          });
        }

        item.classList.toggle('active');
      });
    });
  }

  /* --------------------------------------------------------
     DROPDOWNS
     -------------------------------------------------------- */
  initDropdowns() {
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = toggle.closest('.dropdown');
        const isActive = dropdown.classList.contains('active');

        // Close all dropdowns
        document.querySelectorAll('.dropdown.active').forEach(d => {
          d.classList.remove('active');
        });

        if (!isActive) dropdown.classList.add('active');
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown.active').forEach(d => {
        d.classList.remove('active');
      });
    });
  }

  /* --------------------------------------------------------
     TOASTS
     -------------------------------------------------------- */
  initToasts() {
    document.querySelectorAll('[data-toast]').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const type = trigger.dataset.toast || 'info';
        const message = trigger.dataset.toastMessage || 'This is a notification message.';
        this.showToast(message, type);
      });
    });

    // Add close listeners for existing toasts
    document.querySelector('.toast-container')?.addEventListener('click', (e) => {
      if (e.target.closest('.toast-close')) {
        const toast = e.target.closest('.toast');
        toast.style.animation = 'none';
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(120%)';
        setTimeout(() => toast.remove(), 300);
      }
    });
  }

  showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || 'ℹ'}</span>
      <p class="toast-message">${message}</p>
      <button class="toast-close" aria-label="Close">&times;</button>
    `;

    container.appendChild(toast);

    // Auto-remove after 4 seconds
    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.animation = 'none';
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(120%)';
        setTimeout(() => toast.remove(), 300);
      }
    }, 4000);

    // Close button
    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.style.animation = 'none';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(120%)';
      setTimeout(() => toast.remove(), 300);
    });
  }

  /* --------------------------------------------------------
     MOBILE NAV
     -------------------------------------------------------- */
  initMobileNav() {
    const toggle = document.querySelector('.navbar-toggle');
    const nav = document.querySelector('.navbar-nav');

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
      });

      nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('open');
        });
      });
    }
  }

  /* --------------------------------------------------------
     THEME TOGGLE
     -------------------------------------------------------- */
  initThemeToggle() {
    const toggle = document.querySelector('[data-theme-toggle]');
    
    // Check saved theme
    const savedTheme = localStorage.getItem('clay-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    if (toggle) {
      toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('clay-theme', newTheme);
      });
    }
  }

  /* --------------------------------------------------------
     RATING STARS
     -------------------------------------------------------- */
  initRatingStars() {
    document.querySelectorAll('.rating').forEach(rating => {
      const stars = rating.querySelectorAll('.rating-star');

      stars.forEach(star => {
        star.addEventListener('click', () => {
          const value = parseInt(star.dataset.value);
          stars.forEach((s, i) => {
            s.classList.toggle('active', i < value);
          });
          rating.dataset.rating = value;
        });

        star.addEventListener('mouseenter', () => {
          const value = parseInt(star.dataset.value);
          stars.forEach((s, i) => {
            s.classList.toggle('hover', i < value);
          });
        });

        star.addEventListener('mouseleave', () => {
          stars.forEach(s => s.classList.remove('hover'));
        });
      });
    });
  }

  /* --------------------------------------------------------
     TOOLTIPS (dynamic tooltip initialization)
     -------------------------------------------------------- */
  initTooltips() {
    // Tooltips are CSS-based, but this ensures any dynamic elements get tooltips
    // No JS needed, but keeping this method for extensibility
  }

  /* --------------------------------------------------------
     SMOOTH SCROLL
     -------------------------------------------------------- */
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* --------------------------------------------------------
     COPY CODE BLOCKS
     -------------------------------------------------------- */
  initCopyCode() {
    document.querySelectorAll('.code-block').forEach(block => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-sm btn-ghost';
      btn.textContent = 'Copy';
      btn.style.position = 'absolute';
      btn.style.top = '8px';
      btn.style.right = '8px';

      block.style.position = 'relative';
      block.appendChild(btn);

      btn.addEventListener('click', async () => {
        const code = block.querySelector('code')?.textContent || block.textContent;
        try {
          await navigator.clipboard.writeText(code);
          btn.textContent = 'Copied!';
          setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        } catch {
          btn.textContent = 'Failed';
          setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        }
      });
    });
  }

  /* --------------------------------------------------------
     PAGINATION (demo handler)
     -------------------------------------------------------- */
  initPagination() {
    document.querySelectorAll('.pagination').forEach(pagination => {
      pagination.querySelectorAll('.page-item:not(.disabled)').forEach(item => {
        item.addEventListener('click', () => {
          if (item.classList.contains('active')) return;
          
          pagination.querySelectorAll('.page-item.active').forEach(a => {
            a.classList.remove('active');
          });
          item.classList.add('active');
        });
      });
    });
  }
}

/* ── Initialize on DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  window.clay = new Claymorphism();
});