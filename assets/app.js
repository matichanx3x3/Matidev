// --- SELECTORES Y DATOS ---
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const projects = portfolioData.projects;

// --- FUNCIONES DE RENDERIZADO DE PLANTILLAS ---

/**
 * Genera el HTML para el visual de un proyecto (imagen o placeholder).
 * @param {object} project - El objeto del proyecto.
 * @param {boolean} large - Si el visual debe ser grande.
 * @returns {string} HTML del visual.
 */
function projectVisual(project, large = false) {
  if (project.image) {
    return `<img src="${project.image}" alt="Captura de ${project.title}">`;
  }
  const largeClass = large ? 'placeholder-large' : '';
  return `
    <div class="placeholder ${project.accent} ${largeClass}">
      <span>IMAGEN DEL PROYECTO</span>
      <strong>${project.title}</strong>
      <i>+</i>
    </div>`;
}

/**
 * Genera el HTML para una tarjeta de proyecto.
 * @param {object} project - El objeto del proyecto.
 * @param {boolean} list - Si la tarjeta es para una vista de lista.
 * @returns {string} HTML de la tarjeta.
 */
function projectCard(project, list = false) {
  const rowClass = list ? 'project-row' : '';
  return `
    <article class="project-card ${rowClass}" data-tags="${project.tags.join(' ')}">
      <a href="project.html?id=${project.slug}" class="project-visual">
        ${projectVisual(project)}
      </a>
      <div class="project-info">
        <div class="card-meta">
          <span>${project.year} · ${project.engine}</span>
          <span>${project.event}</span>
        </div>
        <h3><a href="project.html?id=${project.slug}">${project.title}</a></h3>
        <p>${project.summary}</p>
        <a class="card-link" href="project.html?id=${project.slug}">Ver caso de estudio <span>↗</span></a>
      </div>
    </article>`;
}

/**
 * Genera el HTML para una tarjeta de medio (Radar).
 * @param {object} m - El objeto del medio.
 * @returns {string} HTML de la tarjeta.
 */
function mediaCard(m) {
  return `
    <a class="media-card" href="${m.url}" target="_blank" rel="noopener">
      <div class="media-mark">${m.mark}</div>
      <div>
        <p class="eyebrow">${m.focus}</p>
        <h3>${m.name}</h3>
        <p>${m.description}</p>
      </div>
      <span class="external">↗</span>
    </a>`;
}

// --- FUNCIONES DE RENDERIZADO DE SECCIONES ---

function renderProjects() {
  const featuredContainer = $('#featured-projects');
  if (featuredContainer) {
    featuredContainer.innerHTML = projects.filter(p => p.featured).map(p => projectCard(p)).join('');
  }

  const listContainer = $('#projects-list');
  if (listContainer) {
    listContainer.innerHTML = projects.map(p => projectCard(p, true)).join('');
  }
}

function renderDetail() {
  const target = $('#project-detail');
  if (!target) return;

  const id = new URLSearchParams(location.search).get('id');
  const p = projects.find(item => item.slug === id) || projects[0];
  const nextProject = projects[(projects.indexOf(p) + 1) % projects.length];

  document.title = `${p.title} — Matidev`;

  target.innerHTML = `
    <section class="project-hero">
      <a class="back-link" href="projects.html">← Todos los proyectos</a>
      <div class="project-hero-title">
        <p class="eyebrow">${p.type.toUpperCase()} / ${p.year}</p>
        <h1>${p.title}</h1>
        <p>${p.summary}</p>
      </div>
      <div class="project-facts">
        <div><span>Motor</span><strong>${p.engine}</strong></div>
        <div><span>Duración</span><strong>${p.duration}</strong></div>
        <div><span>Contexto</span><strong>${p.event}</strong></div>
      </div>
    </section>
    <section class="detail-image">${projectVisual(p, true)}</section>
    <section class="case-study">
      <div>
        <p class="eyebrow">MI PAPEL</p>
        <ul class="roles">${p.roles.map(role => `<li>${role}</li>`).join('')}</ul>
      </div>
      <div>
        <p class="eyebrow">EL RETO</p>
        <p class="large-copy">${p.summary}</p>
        <p class="eyebrow push-down">APORTACIÓN</p>
        <ul class="bullet-list">${p.bullets.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    </section>
    <section class="next-project">
      <p class="eyebrow">SIGUIENTE PROYECTO</p>
      <a href="project.html?id=${nextProject.slug}">${nextProject.title} <span>↗</span></a>
    </section>`;
}

function renderMedia() {
  const fullList = $('#radar-list');
  if (fullList) {
    fullList.innerHTML = portfolioData.media.map(mediaCard).join('');
  }
  const homeList = $('#home-radar');
  if (homeList) {
    homeList.innerHTML = portfolioData.media.slice(0, 3).map(mediaCard).join('');
  }
}

function renderSkills() {
  const target = $('.skills-grid');
  if (!target) return;
  target.innerHTML = `
    <div class="skill-card"><span class="skill-number">01</span><h3>Desarrollo y programación</h3><div class="skill-tags"><span>Unity</span><span>Unreal Engine</span><span>C#</span><span>C++</span><span>Visual Studio</span><span>Rider</span><span>Git / GitHub</span></div></div>
    <div class="skill-card"><span class="skill-number">02</span><h3>Documentación y diseño de sistemas</h3><div class="skill-tags"><span>GDD y LDD</span><span>Mecánicas y sistemas</span><span>Prototipado</span><span>Playtesting</span><span>Level design</span><span>Progresión</span><span>UX</span></div></div>
    <div class="skill-card"><span class="skill-number">03</span><h3>Metodologías y herramientas</h3><div class="skill-tags"><span>Scrum / Agile</span><span>Excel</span><span>PowerPoint</span><span>Word</span></div></div>
    <div class="skill-card"><span class="skill-number">04</span><h3>Diseño, apoyo visual e idiomas</h3><div class="skill-tags"><span>Photoshop</span><span>Illustrator</span><span>Español · nativo</span><span>Inglés · avanzado</span></div></div>`;
}

// --- FUNCIONES DE INICIALIZACIÓN ---

function initMenu() {
  const button = $('.menu-toggle');
  const nav = $('.site-header nav');
  if (button && nav) {
    button.addEventListener('click', () => nav.classList.toggle('open'));
  }
}

function initFilters() {
  const filters = $$('.filter');
  const cards = $$('.project-row');
  filters.forEach(button => {
    button.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      button.classList.add('active');
      const currentFilter = button.dataset.filter;
      cards.forEach(card => {
        const cardTags = card.dataset.tags;
        card.hidden = currentFilter !== 'all' && !cardTags.includes(currentFilter);
      });
    });
  });
}

function initReveal() {
  const elementsToReveal = $$('.reveal, .project-card, .media-card, .timeline article, .skills-grid > div');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elementsToReveal.forEach(el => observer.observe(el));
}

function updateSiteInfo() {
  $$('.brand').forEach(el => {
    if (el.childNodes[0].nodeType === Node.TEXT_NODE) {
      el.childNodes[0].textContent = 'Matidev';
    }
  });
  document.title = document.title.replace('AJM', 'Matidev');
  $$('#year').forEach(el => el.textContent = new Date().getFullYear());
}

// --- EJECUCIÓN ---

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderDetail();
  renderMedia();
  initMenu();
  initFilters();
  initReveal();
  updateSiteInfo();
});
