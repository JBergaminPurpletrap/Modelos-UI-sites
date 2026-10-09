/* ============================================================
   LIQUID GLASS THEME - JavaScript
   Componentes interativos: Navbar, Modais, Tabs, Accordion,
   Toasts, Sidebar, Dropdown, Ripple, Progress
   ============================================================ */

(function() {
  'use strict';

  // ─── Utility ───
  const qs = (sel, ctx) => (ctx || document).querySelector(sel);
  const qsa = (sel, ctx) => (ctx || document).querySelectorAll(sel);
  const on = (el, ev, fn) => el.addEventListener(ev, fn);

  // ─── Navbar scroll ───
  function initNavbar() {
    const navbar = qs('.lg-navbar');
    if (!navbar) return;
    const toggle = qs('.lg-navbar-toggle');
    const links = qs('.lg-navbar-links');

    on(window, 'scroll', function() {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    if (toggle && links) {
      on(toggle, 'click', function() {
        links.classList.toggle('open');
      });
    }
  }

  // ─── Modals ───
  function initModals() {
    qsa('[data-modal-target]').forEach(function(btn) {
      on(btn, 'click', function() {
        var id = btn.getAttribute('data-modal-target');
        var overlay = qs('#' + id);
        if (overlay) overlay.classList.add('active');
      });
    });

    function closeModal(overlay) {
      if (overlay) overlay.classList.remove('active');
    }

    qsa('.lg-modal-close, .lg-modal-overlay, .modal-close').forEach(function(el) {
      on(el, 'click', function(e) {
        var overlay = el.classList.contains('lg-modal-overlay')
          ? el : el.closest('.lg-modal-overlay');
        if (e.target === overlay || el.classList.contains('lg-modal-close') || el.classList.contains('modal-close')) {
          closeModal(overlay);
        }
      });
    });

    on(document, 'keydown', function(e) {
      if (e.key === 'Escape') {
        qsa('.lg-modal-overlay.active').forEach(function(o) {
          o.classList.remove('active');
        });
      }
    });
  }

  // ─── Tabs ───
  function initTabs() {
    qsa('.lg-tab').forEach(function(tab) {
      on(tab, 'click', function() {
        var parent = tab.closest('.lg-tabs');
        if (!parent) return;
        qsa('.lg-tab', parent).forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');

        var target = tab.getAttribute('data-tab');
        var content = parent.parentElement;
        qsa('.lg-tab-content', content).forEach(function(c) { c.classList.remove('active'); });
        var activeContent = qs('#' + target, content);
        if (activeContent) activeContent.classList.add('active');
      });
    });
  }

  // ─── Accordion ───
  function initAccordion() {
    qsa('.lg-accordion-header').forEach(function(header) {
      on(header, 'click', function() {
        var item = header.closest('.lg-accordion-item');
        if (!item) return;
        var accordion = item.closest('.lg-accordion');
        if (!accordion) return;

        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          qsa('.lg-accordion-item', accordion).forEach(function(i) {
            i.classList.remove('active');
          });
          item.classList.add('active');
        }
      });
    });
  }

  // ─── Toast notifications ───
  function showToast(type, message) {
    var container = qs('.lg-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'lg-toast-container';
      document.body.appendChild(container);
    }

    var icons = {
      success: '\u2713',
      error: '\u2717',
      warning: '\u26A0',
      info: '\u2139'
    };

    var toast = document.createElement('div');
    toast.className = 'lg-toast ' + type;
    toast.innerHTML = '<span class="lg-toast-icon">' + (icons[type] || '') + '</span>'
      + '<span class="lg-toast-message">' + message + '</span>'
      + '<button class="lg-toast-close">&times;</button>';

    container.appendChild(toast);

    on(qs('.lg-toast-close', toast), 'click', function() {
      toast.remove();
    });

    setTimeout(function() {
      if (toast.parentNode) toast.remove();
    }, 5000);
  }
  window.lgToast = showToast;

  // ─── Sidebar ───
  function initSidebar() {
    var openBtns = qsa('[data-sidebar-target]');
    var closeBtns = qsa('.lg-sidebar-close');
    var overlays = qsa('.lg-sidebar-overlay');

    openBtns.forEach(function(btn) {
      on(btn, 'click', function() {
        var id = btn.getAttribute('data-sidebar-target');
        var sidebar = qs('#' + id);
        var overlay = qs('[data-sidebar="' + id + '"]');
        if (sidebar) sidebar.classList.add('open');
        if (overlay) overlay.classList.add('open');
      });
    });

    closeBtns.forEach(function(btn) {
      on(btn, 'click', function() {
        var sidebar = btn.closest('.lg-sidebar');
        var overlay = qs('[data-sidebar="' + (sidebar ? sidebar.id : '') + '"]');
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
      });
    });

    overlays.forEach(function(overlay) {
      on(overlay, 'click', function() {
        var sidebarId = overlay.getAttribute('data-sidebar');
        var sidebar = qs('#' + sidebarId);
        if (sidebar) sidebar.classList.remove('open');
        overlay.classList.remove('open');
      });
    });
  }

  // ─── Dropdown close on outside click ───
  function initDropdowns() {
    on(document, 'click', function(e) {
      qsa('.lg-dropdown-menu.open').forEach(function(menu) {
        if (!menu.closest('.lg-dropdown') || !menu.closest('.lg-dropdown').contains(e.target)) {
          menu.classList.remove('open');
        }
      });
    });

    qsa('.lg-dropdown > .lg-btn, .lg-dropdown > .lg-dropdown-trigger').forEach(function(trigger) {
      on(trigger, 'click', function(e) {
        e.preventDefault();
        var menu = trigger.parentElement.querySelector('.lg-dropdown-menu');
        if (menu) menu.classList.toggle('open');
      });
    });
  }

  // ─── Ripple effect on buttons ───
  function initRipple() {
    qsa('.lg-btn').forEach(function(btn) {
      on(btn, 'click', function(e) {
        var ripple = document.createElement('span');
        ripple.className = 'ripple';
        var rect = btn.getBoundingClientRect();
        var size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        btn.appendChild(ripple);
        setTimeout(function() { ripple.remove(); }, 600);
      });
    });
  }

  // ─── Animated progress bars ───
  function initProgress() {
    qsa('.lg-progress-bar[data-progress]').forEach(function(bar) {
      var val = bar.getAttribute('data-progress');
      setTimeout(function() {
        bar.style.width = val + '%';
      }, 300);
    });
  }

  // ─── Smooth scroll for anchor links ───
  function initSmoothScroll() {
    qsa('a[href^="#"]').forEach(function(anchor) {
      on(anchor, 'click', function(e) {
        var target = qs(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ─── Init all ───
  function init() {
    initNavbar();
    initModals();
    initTabs();
    initAccordion();
    initSidebar();
    initDropdowns();
    initRipple();
    initProgress();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    on(document, 'DOMContentLoaded', init);
  } else {
    init();
  }

})();
