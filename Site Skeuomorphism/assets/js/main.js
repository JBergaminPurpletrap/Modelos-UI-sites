(function () {
  'use strict';

  /* ===============================
     Theme Toggle (Dark Mode)
  =============================== */
  const STORAGE_KEY = 'skeuo-theme';
  const htmlEl = document.documentElement;

  function getPreferredTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme, animate) {
    if (animate) {
      htmlEl.classList.add('theme-transitioning');
    }
    if (theme === 'dark') {
      htmlEl.setAttribute('data-theme', 'dark');
    } else {
      htmlEl.removeAttribute('data-theme');
    }
    var icon = document.getElementById('themeIcon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '\u263D' : '\u2600';
    }
    var toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.setAttribute('data-tooltip', theme === 'dark' ? 'Modo claro' : 'Modo escuro');
    }
    localStorage.setItem(STORAGE_KEY, theme);
    if (animate) {
      setTimeout(function () {
        htmlEl.classList.remove('theme-transitioning');
      }, 400);
    }
  }

  var currentTheme = getPreferredTheme();
  applyTheme(currentTheme, false);

  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var isDark = htmlEl.getAttribute('data-theme') === 'dark';
      applyTheme(isDark ? 'light' : 'dark', true);
    });
  }

  /* Escuta mudança no sistema */
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', function (e) {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light', true);
      }
    });
  }

  /* ===============================
     Modal
  =============================== */
  const modalOverlay = document.getElementById('demoModal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelModalBtn = document.getElementById('cancelModalBtn');
  const confirmModalBtn = document.getElementById('confirmModalBtn');

  function openModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);
  if (confirmModalBtn) confirmModalBtn.addEventListener('click', function () {
    closeModal();
  });
  if (modalOverlay) modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  /* ===============================
     Tabs
  =============================== */
  const tabGroup = document.getElementById('tabGroup');
  if (tabGroup) {
    const tabs = tabGroup.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        const targetId = this.getAttribute('data-tab');
        if (!targetId) return;

        tabs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');

        document.querySelectorAll('.tab-content').forEach(function (c) {
          c.classList.remove('active');
        });
        var target = document.getElementById(targetId);
        if (target) target.classList.add('active');
      });
    });
  }

  /* ===============================
     Accordion
  =============================== */
  const accordion = document.getElementById('accordionDemo');
  if (accordion) {
    accordion.querySelectorAll('.accordion-header').forEach(function (header) {
      header.addEventListener('click', function () {
        var item = this.closest('.accordion-item');
        if (!item) return;

        var body = item.querySelector('.accordion-body');
        var isActive = item.classList.contains('active');

        accordion.querySelectorAll('.accordion-item').forEach(function (other) {
          other.classList.remove('active');
          var otherBody = other.querySelector('.accordion-body');
          if (otherBody) otherBody.style.maxHeight = '0';
        });

        if (!isActive) {
          item.classList.add('active');
          if (body) body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }

  /* ===============================
     Dropdown
  =============================== */
  const dropdown = document.getElementById('dropdownDemo');
  const dropdownToggle = document.getElementById('dropdownToggle');
  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    document.addEventListener('click', function () {
      dropdown.classList.remove('active');
    });

    dropdown.querySelectorAll('.dropdown-item').forEach(function (item) {
      item.addEventListener('click', function () {
        dropdown.classList.remove('active');
      });
    });
  }

  /* ===============================
     Range Slider
  =============================== */
  const rangeSlider = document.getElementById('rangeSlider');
  const rangeValue = document.getElementById('rangeValue');
  if (rangeSlider && rangeValue) {
    function updateRange() {
      rangeValue.textContent = rangeSlider.value;
    }
    rangeSlider.addEventListener('input', updateRange);
  }

  /* ===============================
     Toast
  =============================== */
  const toastBtn = document.getElementById('showToastBtn');
  const toastContainer = document.getElementById('toastContainer');

  if (toastBtn && toastContainer) {
    toastBtn.addEventListener('click', function () {
      showToast('Sucesso', 'Ação realizada com sucesso!', 'success');
    });
  }

  function showToast(title, message, type) {
    if (!toastContainer) return;

    var icons = {
      success: '\u2713',
      error: '\u2717',
      warning: '\u26A0',
      info: '\u2139'
    };
    var icon = icons[type] || icons.info;

    var toast = document.createElement('div');
    toast.className = 'toast';

    toast.innerHTML =
      '<span class="toast-icon">' + icon + '</span>' +
      '<div class="toast-body">' +
        '<div class="toast-title">' + title + '</div>' +
        '<div class="toast-message">' + message + '</div>' +
      '</div>' +
      '<button class="toast-close">&times;</button>';

    toastContainer.appendChild(toast);

    var closeBtn = toast.querySelector('.toast-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        removeToast(toast);
      });
    }

    setTimeout(function () {
      removeToast(toast);
    }, 4000);
  }

  function removeToast(toast) {
    if (!toast || toast.classList.contains('toast-out')) return;
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    });
  }

  /* Expor showToast globalmente (para uso no console ou outros scripts) */
  window.showToast = showToast;

  /* ===============================
     Alert Dismiss
  =============================== */
  document.querySelectorAll('.alert-dismiss').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var alert = this.closest('.alert');
      if (alert) {
        alert.style.transition = 'all 0.2s ease';
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-4px)';
        setTimeout(function () {
          if (alert.parentNode) alert.parentNode.removeChild(alert);
        }, 200);
      }
    });
  });

  /* ===============================
     Tag Remove
  =============================== */
  document.querySelectorAll('.tag-remove').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tag = this.closest('.tag');
      if (tag) {
        tag.style.transition = 'all 0.15s ease';
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.9)';
        setTimeout(function () {
          if (tag.parentNode) tag.parentNode.removeChild(tag);
        }, 150);
      }
    });
  });

}());
