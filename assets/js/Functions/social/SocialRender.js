(function () {
  'use strict';

  const ROOT_ID = 'social';
  const MOUNT_ID = 'mount-social';

  function getMount() {
    return document.getElementById(MOUNT_ID) || document.body;
  }

  function getSocialRoot() {
    return document.getElementById(ROOT_ID);
  }

  function refreshAfterRender(root) {
    if (!root) return;

    if (window.CustomCursorAPI && typeof window.CustomCursorAPI.refresh === 'function') {
      window.CustomCursorAPI.refresh(root);
    }
  }

  function renderSocialPage() {
    const existing = getSocialRoot();

    if (existing) {
      refreshAfterRender(existing);
      return existing;
    }

    const mount = getMount();

    mount.insertAdjacentHTML('beforeend', `
      <div id="social">
        <button id="toggle-btn-social">
          <span><i class="fas fa-sun"></i></span>
        </button>
        <div id="clock-social">GMT+8 00:00</div>

        <!-- Social cards -->
        <div class="container">
          <div class="social-heading" data-i18n="social_heading">Connect With Me</div>
          
          <div class="social-grid">
            <!-- GitHub card -->
            <div class="social-card">
              <div class="social-icon"><i class="fab fa-github"></i></div>
              <div class="social-title" data-i18n="github_title">GitHub</div>
              <div class="social-description" data-i18n="github_desc">My code repositories and projects</div>
              <a href="https://github.com/alienshun" class="social-link" target="_blank" rel="noopener noreferrer" data-i18n="link_profile">Profile</a>
            </div>
          </div>
        </div>

        <!-- Website statistics — GoatCounter + MapMyVisitors disabled -->
          <!--
          <div class="stats-heading" data-i18n="stats_heading">Website Statistics</div>

          <div class="stats-metrics" aria-label="GoatCounter summary">
            <div class="stats-metric">
              <div class="stats-metric-label" data-i18n="metric_total">All-time (Total)</div>
              <div class="stats-metric-value" id="gc-total">—</div>
            </div>
            <div class="stats-metric">
              <div class="stats-metric-label" data-i18n="metric_month">Last 30 days</div>
              <div class="stats-metric-value" id="gc-month">—</div>
            </div>
            <div class="stats-metric">
              <div class="stats-metric-label" data-i18n="metric_week">Last 7 days</div>
              <div class="stats-metric-value" id="gc-week">—</div>
            </div>
            <div class="stats-metric">
              <div class="stats-metric-label" data-i18n="metric_page">This path</div>
              <div class="stats-metric-value" id="gc-page">—</div>
            </div>
          </div>

          <div class="stats-block">
            <div class="stats-subtitle">
              <span data-i18n="dashboard_title">GoatCounter Dashboard</span>
              <a class="stats-link" href="https://alienshun.goatcounter.com/" target="_blank" rel="noopener noreferrer" data-i18n="link_open">Open</a>
            </div>

            <div class="stats-embed">
              <iframe
                class="goatcounter-frame"
                title="GoatCounter dashboard"
                loading="lazy"
                data-src="https://alienshun.goatcounter.com?hideui=1"
              ></iframe>
            </div>
          </div>

          <div class="stats-sep"></div>

          <div class="stats-block">
            <div class="stats-subtitle">
              <span data-i18n="visitor_map">Visitor Map</span>
            </div>
            <div class="visitor-map-wrap">
              <div id="visitor-map-placeholder"></div>
            </div>
          </div>

          <div class="stats-sep"></div>

          <div id="guestbook" class="stats-block comments-block">
            <div class="comments-header">
              <div class="stats-subtitle comments-subtitle">
                <span data-i18n="comments_title">Guestbook</span>
              </div>

              <a
                id="giscus-github-link"
                class="comments-github-icon"
                href="https://github.com/alienshun/new-homepage-testing/discussions/2"
                target="_blank"
                rel="noopener noreferrer"
                title="Open discussion on GitHub"
                aria-label="Open discussion on GitHub"
              >
                <svg
                  class="comments-github-svg"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                    0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                    -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
                    .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                    0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
                    0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 3.87c.68 0 1.36.09 2 .26
                    1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
                    .51.56.82 1.27.82 2.15
                    0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
                    0 1.07-.01 1.93-.01 2.2
                    0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
                  />
                </svg>
              </a>
            </div>

            <p class="comments-login-hint">
              <span data-i18n="comments_hint_intro">Feel free to leave a note, suggestion, or academic message. </span>
              <span data-i18n="comments_hint_exchange">Visitors are also welcome to share their personal homepages or other appropriate information here for academic exchange and mutual improvement, provided that the content is lawful and respectful. </span>
              <span data-i18n="comments_hint_support">Comments support </span>
              <a
                class="comments-syntax-link"
                href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github"
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="comments_hint_markdown"
              >GitHub Flavored Markdown</a>
              <span data-i18n="comments_hint_and"> and </span>
              <a
                class="comments-syntax-link"
                href="https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions"
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="comments_hint_math"
              >mathematical expressions</a>
              <span data-i18n="comments_hint_suffix">. Sign in with GitHub to comment.</span>
            </p>

            <div id="giscus-container" class="giscus-container">
              <div id="giscus-loading" class="giscus-loading" data-i18n="comments_loading">
                Loading comments...
              </div>
            </div>
          </div>
          -->
        
        <a href="#" class="back-btn" id="social-back-btn">
          <i class="fas fa-arrow-left"></i>
        </a>
      </div>
    `);

    const root = getSocialRoot();
    refreshAfterRender(root);

    return root;
  }

  function init() {
    return renderSocialPage();
  }

  window.SocialRender = {
    init,
    renderSocialPage
  };

  if (window.SitePages && typeof window.SitePages.register === 'function') {
    window.SitePages.register('social', {
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