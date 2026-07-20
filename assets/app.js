const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const projects = portfolioData.projects;

function projectVisual(project, large = false) {
  if (project.image) return `<img src="${project.image}" alt="Captura de ${project.title}">`;
  return `<div class="placeholder ${project.accent} ${large ? 'placeholder-large' : ''}"><span>IMAGEN DEL PROYECTO</span><strong>${project.title}</strong><i>+</i></div>`;
}
function projectCard(project, list = false) {
  return `<article class="project-card ${list ? 'project-row' : ''}" data-tags="${project.tags.join(' ')}"><a href="project.html?id=${project.slug}" class="project-visual">${projectVisual(project)}</a><div class="project-info"><div class="card-meta"><span>${project.year} · ${project.engine}</span><span>${project.event}</span></div><h3><a href="project.html?id=${project.slug}">${project.title}</a></h3><p>${project.summary}</p><a class="card-link" href="project.html?id=${project.slug}">Ver caso de estudio <span>↗</span></a></div></article>`;
}
function renderProjects() {
  const featured = $('#featured-projects'); if (featured) featured.innerHTML = projects.filter(p => p.featured).map(p => projectCard(p)).join('');
  const list = $('#projects-list'); if (list) list.innerHTML = projects.map(p => projectCard(p, true)).join('');
}
function renderDetail() {
  const target = $('#project-detail'); if (!target) return;
  const id = new URLSearchParams(location.search).get('id'); const p = projects.find(item => item.slug === id) || projects[0];
  document.title = `${p.title} — Matidev`;
  target.innerHTML = `<section class="project-hero"><a class="back-link" href="projects.html">← Todos los proyectos</a><div class="project-hero-title"><p class="eyebrow">${p.type.toUpperCase()} / ${p.year}</p><h1>${p.title}</h1><p>${p.summary}</p></div><div class="project-facts"><div><span>Motor</span><strong>${p.engine}</strong></div><div><span>Duración</span><strong>${p.duration}</strong></div><div><span>Contexto</span><strong>${p.event}</strong></div></div></section><section class="detail-image">${projectVisual(p, true)}</section><section class="case-study"><div><p class="eyebrow">MI PAPEL</p><ul class="roles">${p.roles.map(role => `<li>${role}</li>`).join('')}</ul></div><div><p class="eyebrow">EL RETO</p><p class="large-copy">${p.summary}</p><p class="eyebrow push-down">APORTACIÓN</p><ul class="bullet-list">${p.bullets.map(item => `<li>${item}</li>`).join('')}</ul></div></section><section class="next-project"><p class="eyebrow">SIGUIENTE PROYECTO</p><a href="project.html?id=${projects[(projects.indexOf(p)+1)%projects.length].slug}">${projects[(projects.indexOf(p)+1)%projects.length].title} <span>↗</span></a></section>`;
}
function mediaCard(m) { return `<a class="media-card" href="${m.url}" target="_blank" rel="noopener"><div class="media-mark">${m.mark}</div><div><p class="eyebrow">${m.focus}</p><h3>${m.name}</h3><p>${m.description}</p></div><span class="external">↗</span></a>`; }
function renderMedia() { const full = $('#radar-list'); if (full) full.innerHTML = portfolioData.media.map(mediaCard).join(''); const home = $('#home-radar'); if (home) home.innerHTML = portfolioData.media.slice(0,3).map(mediaCard).join(''); }
function initMenu() { const button = $('.menu-toggle'), nav = $('.site-header nav'); if(button) button.addEventListener('click', () => nav.classList.toggle('open')); }
function initFilters() { $$('.filter').forEach(button => button.addEventListener('click', () => { $$('.filter').forEach(x => x.classList.remove('active')); button.classList.add('active'); $$('.project-row').forEach(card => card.hidden = button.dataset.filter !== 'all' && !card.dataset.tags.includes(button.dataset.filter)); })); }
function initReveal() { const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }}), {threshold:.12}); $$('.reveal, .project-card, .media-card, .timeline article, .skills-grid > div').forEach(el => obs.observe(el)); }
function renderSkills() { const target = $('.skills-grid'); if (!target) return; target.innerHTML = `<div class="skill-card"><span class="skill-number">01</span><h3>Desarrollo y programación</h3><div class="skill-tags"><span>Unity</span><span>Unreal Engine</span><span>C#</span><span>C++</span><span>Visual Studio</span><span>Rider</span><span>Git / GitHub</span></div></div><div class="skill-card"><span class="skill-number">02</span><h3>Documentación y diseño de sistemas</h3><div class="skill-tags"><span>GDD y LDD</span><span>Mecánicas y sistemas</span><span>Prototipado</span><span>Playtesting</span><span>Level design</span><span>Progresión</span><span>UX</span></div></div><div class="skill-card"><span class="skill-number">03</span><h3>Metodologías y herramientas</h3><div class="skill-tags"><span>Scrum / Agile</span><span>Excel</span><span>PowerPoint</span><span>Word</span></div></div><div class="skill-card"><span class="skill-number">04</span><h3>Diseño, apoyo visual e idiomas</h3><div class="skill-tags"><span>Photoshop</span><span>Illustrator</span><span>Español · nativo</span><span>Inglés · avanzado</span></div></div>`; }
renderProjects(); renderDetail(); renderMedia(); renderSkills(); initMenu(); initFilters(); initReveal(); $$('.brand') && $$('.brand').forEach(el => el.childNodes[0].textContent = 'Matidev'); document.title = document.title.replace('AJM', 'Matidev'); $$('#year').forEach(el => el.textContent = new Date().getFullYear());
