document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     1. THEME TOGGLE (Dark / Light)
     ============================================================ */
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('nexus-theme');

    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      localStorage.setItem('nexus-theme', theme);
    }

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark.matches) {
      setTheme('dark');
    }

    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ============================================================
     2. MOBILE MENU
     ============================================================ */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.querySelector('i').className = navLinks.classList.contains('open')
        ? 'fas fa-times'
        : 'fas fa-bars';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (menuToggle.querySelector('i')) {
          menuToggle.querySelector('i').className = 'fas fa-bars';
        }
      });
    });
  }

  /* ============================================================
     3. NAVBAR SCROLL EFFECT
     ============================================================ */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  /* ============================================================
     4. BACK TO TOP
     ============================================================ */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 400);
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================================
     5. FADE-IN ON SCROLL (Intersection Observer)
     ============================================================ */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeEls.forEach(el => observer.observe(el));
  }

  /* ============================================================
     6. MODAL SYSTEM
     ============================================================ */
  window.openModal = function (id) {
    const overlay = document.getElementById(id);
    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';

      overlay.addEventListener('click', function closeOnBackdrop(e) {
        if (e.target === overlay) {
          closeModal(id);
          overlay.removeEventListener('click', closeOnBackdrop);
        }
      });
    }
  };

  window.closeModal = function (id) {
    const overlay = document.getElementById(id);
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(el => {
        el.classList.remove('open');
      });
      document.body.style.overflow = '';
    }
  });

  /* ============================================================
     7. TOAST SYSTEM
     ============================================================ */
  const toastContainer = document.getElementById('toastContainer');

  window.showToast = function (type, title, message) {
    if (!toastContainer) return;

    const icons = {
      success: 'fa-check-circle',
      warning: 'fa-exclamation-triangle',
      danger: 'fa-times-circle',
      info: 'fa-info-circle'
    };

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon ${type}">
        <i class="fas ${icons[type] || icons.info}"></i>
      </div>
      <div class="toast-content">
        <strong>${title}</strong>
        <span>${message}</span>
      </div>
      <button class="toast-close">&times;</button>
    `;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    });

    setTimeout(() => {
      if (toast.parentNode) {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
      }
    }, 4000);
  };

  /* ============================================================
     8. TABS
     ============================================================ */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const parent = this.closest('.tabs');
      if (!parent) return;

      parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      parent.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

      this.classList.add('active');
      const panel = parent.querySelector(`#${this.dataset.tab}`);
      if (panel) panel.classList.add('active');
    });
  });

  /* ============================================================
     9. ACCORDION
     ============================================================ */
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
      const item = this.closest('.accordion-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');

      const parent = item.closest('.accordion');
      if (parent) {
        parent.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      }

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  /* ============================================================
     10. DROPDOWN
     ============================================================ */
  window.toggleDropdown = function (id) {
    const dropdown = document.getElementById(id);
    if (!dropdown) return;

    const isOpen = dropdown.classList.contains('open');

    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));

    if (!isOpen) {
      dropdown.classList.add('open');
    }
  };

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });

  /* ============================================================
     11. ALERT DISMISS
     ============================================================ */
  document.querySelectorAll('.alert-close').forEach(btn => {
    btn.addEventListener('click', function () {
      const alert = this.closest('.alert');
      if (alert) {
        alert.style.animation = 'shake 0.3s ease';
        setTimeout(() => {
          alert.style.transition = 'all 0.4s ease';
          alert.style.opacity = '0';
          alert.style.transform = 'translateX(40px)';
          setTimeout(() => alert.remove(), 400);
        }, 200);
      }
    });
  });

  /* ============================================================
     12. RIPPLE EFFECT ON BUTTONS
     ============================================================ */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      if (this.classList.contains('btn-ghost') || this.classList.contains('btn-link')) return;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  /* ============================================================
     13. ACTIVE NAV LINK (Scroll Spy)
     ============================================================ */
  const sections = document.querySelectorAll('.showcase-section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinkEls.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);

  /* ============================================================
     14. CIRCULAR PROGRESS ANIMATION
     ============================================================ */
  const circleProgress = document.getElementById('circleProgress');
  const cpLabel = document.getElementById('cpLabel');
  if (circleProgress && cpLabel) {
    const circumference = 2 * Math.PI * 50;
    circleProgress.style.strokeDasharray = `${circumference}`;

    let currentPercent = 0;
    const target = 70;

    function animateProgress() {
      if (currentPercent < target) {
        currentPercent++;
        const offset = circumference - (currentPercent / 100) * circumference;
        circleProgress.style.strokeDashoffset = offset;
        cpLabel.textContent = `${currentPercent}%`;
        requestAnimationFrame(animateProgress);
      }
    }

    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(animateProgress, 300);
          progressObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    progressObserver.observe(circleProgress.closest('.circular-progress'));
  }

  /* ============================================================
     15. INPUT PASSWORD TOGGLE
     ============================================================ */
  document.querySelectorAll('.input-right-icon').forEach(icon => {
    icon.addEventListener('click', function () {
      const input = this.closest('.form-input-wrap').querySelector('input');
      if (input) {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        this.className = this.className.includes('fa-eye-slash')
          ? this.className.replace('fa-eye-slash', 'fa-eye')
          : this.className.replace('fa-eye', 'fa-eye-slash');
      }
    });
  });

  /* ============================================================
     16. ACTIVE BUTTON GROUP
     ============================================================ */
  document.querySelectorAll('.btn-group .btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const group = this.closest('.btn-group');
      if (group) {
        group.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  console.log('%c Nexus Design System %c v1.0 ',
    'background:#ff7e67;color:#fff;padding:4px 8px;border-radius:4px 0 0 4px;font-weight:bold',
    'background:#2d3349;color:#fff;padding:4px 8px;border-radius:0 4px 4px 0'
  );
});
