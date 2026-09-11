/* ============================================================
   script.js — reads content.js, renders all pages,
   handles language switching, typewriter, mobile nav.
   You normally do NOT need to edit this file.
   ============================================================ */

function getLang() {
  const url = new URLSearchParams(window.location.search).get('lang');
  if (url && SITE_CONTENT[url]) return url;
  const stored = localStorage.getItem('lang');
  if (stored && SITE_CONTENT[stored]) return stored;
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  if (SITE_CONTENT[browser]) return browser;
  return 'en';
}

let currentLang = getLang();

function t(path) {
  const parts = path.split('.');
  let node = SITE_CONTENT[currentLang];
  for (const p of parts) {
    if (node == null) return '';
    node = node[p];
  }
  return node != null ? node : '';
}

function renderText() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (val !== '') el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-placeholder'));
    if (val !== '') el.placeholder = val;
  });
  document.documentElement.lang = currentLang;
}

/* ---------- Typewriter ---------- */
let typewriterTimeout = null;
function startTypewriter(phrases) {
  const el = document.getElementById('typewriter-text');
  if (!el || !phrases || !phrases.length) return;
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  let i = 0, c = 0, deleting = false;
  function tick() {
    const phrase = phrases[i];
    if (deleting) { el.textContent = phrase.substring(0, c - 1); c--; }
    else          { el.textContent = phrase.substring(0, c + 1); c++; }
    let delay = deleting ? 40 : 90;
    if (!deleting && c === phrase.length) { deleting = true; delay = 1600; }
    else if (deleting && c === 0) { deleting = false; i = (i + 1) % phrases.length; delay = 400; }
    typewriterTimeout = setTimeout(tick, delay);
  }
  tick();
}

/* ---------- Home ---------- */
function renderHome() {
  if (document.getElementById('typewriter-text'))
    startTypewriter(t('home.typewriter'));

  const statsEl = document.getElementById('hero-stats');
  if (statsEl) {
    const stats = t('home.stats') || [];
    statsEl.innerHTML = stats.map((s, i) =>
      `${i > 0 ? '<div class="meta-divider"></div>' : ''}
       <div class="meta-item">
         <span class="meta-number">${s.number}</span>
         <span class="meta-label">${s.label}</span>
       </div>`).join('');
  }

  const featEl = document.getElementById('featured-grid');
  if (featEl) {
    const cards = t('home.featured') || [];
    featEl.innerHTML = cards.map(c => `
      <div class="featured-card">
        <div class="featured-icon">${c.icon}</div>
        <h3>${c.title}</h3>
        <p>${c.text}</p>
        <a href="skills.html" class="featured-link">${t('home.learnMore')}</a>
      </div>`).join('');
  }
}

/* ---------- Skills ---------- */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  const cats = t('skills.categories') || [];
  grid.innerHTML = cats.map(cat => `
    <div class="skill-category">
      <h2>${cat.title}</h2>
      <ul class="skill-list">
        ${cat.items.map(it => `
          <li>
            <span class="skill-name">${it.name}</span>
            <span class="skill-level">${it.level}</span>
          </li>`).join('')}
      </ul>
    </div>`).join('');
}

/* ---------- Portfolio ---------- */
function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  const items = t('portfolio.items') || [];
  const liveLabel = t('portfolio.liveDemo') || 'Live Demo';
  const srcLabel  = t('portfolio.sourceCode') || 'Source Code';

  grid.innerHTML = items.map(it => {
    const imageHTML = it.image
      ? `<img src="${it.image}" alt="${it.title}" loading="lazy"
             onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'placeholder-img',textContent:'🖼️'}))">`
      : `<div class="placeholder-img">🖼️</div>`;

    const liveBtn = it.liveUrl
      ? `<a href="${it.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-small">${liveLabel} ↗</a>`
      : '';
    const srcBtn = it.sourceUrl
      ? `<a href="${it.sourceUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-small">${srcLabel} ↗</a>`
      : '';

    return `
      <div class="portfolio-item">
        <div class="portfolio-image">${imageHTML}</div>
        <div class="portfolio-info">
          <h3>${it.title}</h3>
          <p>${it.text}</p>
          <div class="portfolio-tags">
            ${(it.tags || []).map(tag => `<span>${tag}</span>`).join('')}
          </div>
          ${(liveBtn || srcBtn) ? `<div class="portfolio-links">${liveBtn}${srcBtn}</div>` : ''}
        </div>
      </div>`;
  }).join('');
}

/* ---------- Contact ---------- */
function renderContact() {
  const info = document.getElementById('contact-details');
  if (!info) return;

  const phoneNote = t('contact.phoneNote');
  const whatsappUrl = t('contact.whatsappUrl');
  const phoneInner = phoneNote
    ? `${t('contact.phone')} <span class="contact-note">(${phoneNote})</span>`
    : t('contact.phone');

  const phoneHTML = whatsappUrl
    ? `<a href="${whatsappUrl}" target="_blank" rel="noopener" class="contact-link">${phoneInner}</a>`
    : phoneInner;

  info.innerHTML = `
    <p><span class="contact-icon">📧</span> <a href="mailto:${t('contact.email')}" class="contact-link">${t('contact.email')}</a></p>
    <p><span class="contact-icon">📱</span> ${phoneHTML}</p>
    <p><span class="contact-icon">📍</span> ${t('contact.location')}</p>
    <p><span class="contact-icon">💼</span> ${t('contact.availability')}</p>`;
}

/* ---------- Language switcher ---------- */
function updateLangButtons() {
  document.querySelectorAll('[data-lang]').forEach(btn =>
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang));
}

function setupLangSwitcher() {
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (!SITE_CONTENT[lang]) return;
      localStorage.setItem('lang', lang);
      currentLang = lang;
      const url = new URL(window.location);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
      renderAll();
      updateLangButtons();
    });
  });
  updateLangButtons();
}

/* ---------- Mobile nav ---------- */
function setupMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => menu.classList.toggle('active'));
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('active')));
}

/* ---------- Boot ---------- */
function renderAll() {
  renderText();
  renderHome();
  renderSkills();
  renderPortfolio();
  renderContact();
}

document.addEventListener('DOMContentLoaded', () => {
  setupLangSwitcher();
  setupMobileNav();
  renderAll();
});
