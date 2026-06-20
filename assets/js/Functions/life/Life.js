(function () {
  'use strict';

  const MOUNT_ID = 'mount-life';
  const ROOT_ID = 'life';

  function getMount() {
    return document.getElementById(MOUNT_ID) || document.body;
  }

  function renderLifePage() {
    const mount = getMount();
    if (document.getElementById(ROOT_ID)) return;

    mount.insertAdjacentHTML('beforeend', `
      <div id="life">
        <button id="toggle-btn-life">
          <span><i class="fas fa-sun"></i></span>
        </button>
        <div id="clock-life">GMT+8 00:00</div>

        <div class="container">
          <div class="life-heading">人生</div>
          <p class="life-placeholder">人生如星尘，仍在续写中...</p>
        </div>

        <a href="#" class="back-btn" id="life-back-btn">
          <i class="fas fa-arrow-left"></i>
        </a>
      </div>
    `);
  }

  function init() {
    renderLifePage();
  }

  window.Life = {
    init,
    renderLifePage
  };

  if (window.SitePages && typeof window.SitePages.register === 'function') {
    window.SitePages.register('life', {
      init() {
        init();
      },
      refresh() {
        init();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();