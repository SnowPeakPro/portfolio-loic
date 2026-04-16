const LANG_KEY = "portfolio_lang";

const I18N = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_experience: "Expérience",
    nav_education: "Formation",
    nav_certs: "Certifications",
    nav_cyber: "Cyber",
    nav_contact: "Contact",
    hero_eyebrow: "Portfolio professionnel",
    hero_name: "Loïc VIDAL-FERRASSE",
    hero_title: "Étudiant BUT Réseaux & Télécommunications",
    hero_intro: "Étudiant de 20 ans en 2e année de BUT R&T à l'IUT de Béziers, en alternance chez Xefi comme Technicien conseil.",
    hero_btn_projects: "Voir les projets",
    hero_btn_contact: "Me contacter",
    hero_point_1: "BUT R&T - IUT de Béziers (2024-2027)",
    hero_point_2: "Alternance Xefi (2025-2027)",
    hero_point_3: "Objectif : cybersécurité et réseaux",
    about_title: "À propos",
    about_text_1: "Je m'appelle Loïc VIDAL-FERRASSE. Mon parcours associe formation académique et expérience en alternance.",
    about_text_2: "Je développe progressivement mes compétences en réseaux, administration système et cybersécurité.",
    about_text_3: "Ce portfolio sert de base durable pour documenter mes projets et ma progression professionnelle.",
    skills_title: "Compétences",
    skill_level_label: "Niveau",
    projects_title: "Projets",
    projects_subtitle: "Une base claire est en place pour publier mes projets détaillés progressivement.",
    projects_search_label: "Rechercher un projet",
    projects_search_placeholder: "Rechercher un projet...",
    projects_filter_all: "Tout",
    projects_btn_detail: "Voir le détail",
    projects_empty: "Aucun projet ne correspond à la recherche actuelle.",
    exp_title: "Expérience professionnelle",
    education_title: "Formation",
    education_item_title: "BUT Réseaux & Télécommunications",
    education_item_text: "IUT de Béziers • 2024-2027 • Deuxième année • Spécialité Cybersécurité.",
    certs_title: "Certifications",
    certs_text: "Aucune certification pour le moment. Cette section sera enrichie au fil du parcours.",
    cyber_title: "Axe cybersécurité",
    cyber_intro: "La cybersécurité est l'axe principal de spécialisation, avec une montée en compétence progressive et structurée.",
    cyber_block_1_title: "Futurs objectifs cyber",
    cyber_block_1_text: "Approfondir la sécurisation d'infrastructures réseau et système en contexte professionnel.",
    cyber_block_2_title: "Outils appris",
    cyber_block_2_text: "Pratique progressive d'outils d'administration, de sécurité, de diagnostic et d'automatisation.",
    cyber_block_3_title: "Veille",
    cyber_block_3_text: "Suivi des vulnérabilités, bonnes pratiques et actualités techniques pour rester à jour.",
    contact_title: "Contact",
    contact_city: "Ville",
    footer_text: "Portfolio de Loïc VIDAL-FERRASSE •",
    footer_top: "Retour en haut",
    project_back: "← Retour aux projets",
    project_not_found_title: "Projet introuvable",
    project_not_found_text: "Le projet demandé n'existe pas encore ou le lien est invalide.",
    project_category: "Catégorie",
    project_technologies: "Technologies",
    project_key_points: "Points clés",
    project_result: "État actuel",
    project_next_step: "Prochaine étape",
    exp_items: [
      {
        title: "Xefi — Technicien conseil (alternance)",
        period: "2025 à 2027",
        text: "Montage et configuration de serveurs, installation et configuration de pare-feu Sophos, dépannage client et suivi des interventions."
      }
    ],
    skills_items: [
      { title: "Réseaux", level: "Débutant", description: "Bases en segmentation, adressage et routage.", tags: ["IPv4/IPv6", "VLAN", "Routage"] },
      { title: "Cybersécurité", level: "Débutant", description: "Application progressive de bonnes pratiques de sécurisation.", tags: ["Hardening", "ACL", "Pare-feu"] },
      { title: "Administration système", level: "Débutant", description: "Gestion de services Linux/Windows dans un cadre encadré.", tags: ["Linux", "Windows", "Services"] },
      { title: "Virtualisation", level: "Débutant", description: "Mise en place de labs pour tester des scénarios techniques.", tags: ["VM", "Lab", "Tests"] },
      { title: "Scripting / automatisation", level: "Débutant", description: "Scripts simples pour standardiser les tâches répétitives.", tags: ["PowerShell", "Bash", "Automatisation"] },
      { title: "IA", level: "Débutant", description: "Découverte d'usages d'assistance pour l'analyse et la documentation.", tags: ["Prompting", "Assistance", "Productivité"] }
    ]
  },
  en: {
    nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_experience: "Experience", nav_education: "Education", nav_certs: "Certifications", nav_cyber: "Cyber", nav_contact: "Contact",
    hero_eyebrow: "Professional portfolio", hero_name: "Loïc VIDAL-FERRASSE", hero_title: "BUT Network & Telecommunications Student",
    hero_intro: "I am a 20-year-old second-year BUT N&T student at IUT of Béziers, currently in a work-study role at Xefi as a Technical Support Technician.",
    hero_btn_projects: "View projects", hero_btn_contact: "Contact me",
    hero_point_1: "BUT N&T - IUT of Béziers (2024-2027)", hero_point_2: "Work-study at Xefi (2025-2027)", hero_point_3: "Goal: cybersecurity and networking",
    about_title: "About", about_text_1: "My name is Loïc VIDAL-FERRASSE. My path combines academic training and work-study experience.",
    about_text_2: "I am progressively building skills in networking, system administration, and cybersecurity.",
    about_text_3: "This portfolio is a long-term base to document my projects and professional progression.",
    skills_title: "Skills", skill_level_label: "Level",
    projects_title: "Projects", projects_subtitle: "A clear base is in place to publish my detailed projects progressively.",
    projects_search_label: "Search a project", projects_search_placeholder: "Search a project...", projects_filter_all: "All", projects_btn_detail: "View details", projects_empty: "No project matches the current search.",
    exp_title: "Professional experience", education_title: "Education", education_item_title: "BUT Network & Telecommunications", education_item_text: "IUT of Béziers • 2024-2027 • Second year • Cybersecurity specialization.",
    certs_title: "Certifications", certs_text: "No certifications yet. This section will be updated over time.",
    cyber_title: "Cybersecurity focus", cyber_intro: "Cybersecurity is the main specialization axis, with progressive and structured development.",
    cyber_block_1_title: "Future cyber goals", cyber_block_1_text: "Improve infrastructure security skills in real professional contexts.",
    cyber_block_2_title: "Tools learned", cyber_block_2_text: "Progressive use of administration, security, diagnostic, and automation tools.",
    cyber_block_3_title: "Monitoring", cyber_block_3_text: "Regular follow-up on vulnerabilities, best practices, and technical news.",
    contact_title: "Contact", contact_city: "City", footer_text: "Loïc VIDAL-FERRASSE portfolio •", footer_top: "Back to top",
    project_back: "← Back to projects", project_not_found_title: "Project not found", project_not_found_text: "The requested project is not available yet or the link is invalid.",
    project_category: "Category", project_technologies: "Technologies", project_key_points: "Key points", project_result: "Current status", project_next_step: "Next step",
    exp_items: [{ title: "Xefi — Technical Support Technician (work-study)", period: "2025 to 2027", text: "Server assembly and setup, Sophos firewall installation/configuration, customer troubleshooting, and intervention follow-up." }],
    skills_items: [
      { title: "Networking", level: "Beginner", description: "Foundations in segmentation, addressing, and routing.", tags: ["IPv4/IPv6", "VLAN", "Routing"] },
      { title: "Cybersecurity", level: "Beginner", description: "Progressive application of core security best practices.", tags: ["Hardening", "ACL", "Firewalls"] },
      { title: "System administration", level: "Beginner", description: "Linux/Windows service management in supervised contexts.", tags: ["Linux", "Windows", "Services"] },
      { title: "Virtualization", level: "Beginner", description: "Lab setup for testing technical scenarios.", tags: ["VM", "Lab", "Testing"] },
      { title: "Scripting / automation", level: "Beginner", description: "Simple scripts to standardize recurring tasks.", tags: ["PowerShell", "Bash", "Automation"] },
      { title: "AI", level: "Beginner", description: "Early use cases for assistance in analysis and documentation.", tags: ["Prompting", "Assistance", "Productivity"] }
    ]
  }
};

const PROJECT_CATEGORIES = ["Réseaux", "Cyber", "Système", "Scripts", "Projet", "SAE"];
let currentLang = localStorage.getItem(LANG_KEY) || "fr";
let selectedCategory = "all";
let searchTerm = "";

const $ = (s) => document.querySelector(s);

function applyTranslations() {
  const dict = I18N[currentLang];
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { const key = el.dataset.i18n; if (dict[key]) el.textContent = dict[key]; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { const key = el.dataset.i18nPlaceholder; if (dict[key]) el.setAttribute("placeholder", dict[key]); });
  const langToggle = $("#lang-toggle"); if (langToggle) langToggle.textContent = currentLang === "fr" ? "EN" : "FR";
}

const createTagList = (tags = []) => `<ul class="tag-list">${tags.map((t) => `<li class="tag">${t}</li>`).join("")}</ul>`;

function renderSkills() {
  const container = $("#skills-grid"); if (!container) return;
  container.innerHTML = I18N[currentLang].skills_items.map((skill) => `<article class="glass-card reveal"><h3>${skill.title}</h3><p class="skill-level">${I18N[currentLang].skill_level_label}: <strong>${skill.level}</strong></p><p>${skill.description}</p>${createTagList(skill.tags)}</article>`).join("");
}

function renderExperience() {
  const container = $("#experience-timeline"); if (!container) return;
  container.innerHTML = I18N[currentLang].exp_items.map((item) => `<article class="timeline-item glass-card"><h3>${item.title}</h3><p><strong>${item.period}</strong></p><p>${item.text}</p></article>`).join("");
}

const getProjectTitle = (p) => (currentLang === "fr" ? p.title_fr : p.title_en);
const getProjectShort = (p) => (currentLang === "fr" ? p.short_fr : p.short_en);

function renderProjectFilters() {
  const container = $("#project-filters"); if (!container) return;
  const allLabel = I18N[currentLang].projects_filter_all;
  container.innerHTML = ["all", ...PROJECT_CATEGORIES].map((c) => `<button class="filter-btn ${selectedCategory === c ? "active" : ""}" data-category="${c}" type="button">${c === "all" ? allLabel : c}</button>`).join("");
  container.querySelectorAll(".filter-btn").forEach((btn) => btn.addEventListener("click", () => { selectedCategory = btn.dataset.category; renderProjectFilters(); renderProjects(); }));
}

function renderProjects() {
  const container = $("#projects-grid"); if (!container) return;
  const list = PROJECTS.filter((p) => (selectedCategory === "all" || p.category === selectedCategory) && `${p.title_fr} ${p.title_en} ${p.short_fr} ${p.short_en}`.toLowerCase().includes(searchTerm.toLowerCase()));
  if (!list.length) { container.innerHTML = `<div class="empty-state">${I18N[currentLang].projects_empty}</div>`; return; }
  container.innerHTML = list.map((p) => `<article class="glass-card project-card reveal"><p class="project-meta">${p.category}</p><h3>${getProjectTitle(p)}</h3><p>${getProjectShort(p)}</p>${createTagList(p.technologies)}<a class="btn btn-secondary" href="project.html?slug=${encodeURIComponent(p.slug)}">${I18N[currentLang].projects_btn_detail}</a></article>`).join("");
}

function renderProjectDetail() {
  const container = $("#project-detail"); if (!container) return;
  const slug = new URLSearchParams(window.location.search).get("slug");
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!slug || !project) { container.innerHTML = `<h1>${I18N[currentLang].project_not_found_title}</h1><p>${I18N[currentLang].project_not_found_text}</p>`; return; }
  const title = currentLang === "fr" ? project.title_fr : project.title_en;
  const description = currentLang === "fr" ? project.description_fr : project.description_en;
  const keyPoints = currentLang === "fr" ? project.keyPoints_fr : project.keyPoints_en;
  const result = currentLang === "fr" ? project.result_fr : project.result_en;
  const nextStep = currentLang === "fr" ? project.nextStep_fr : project.nextStep_en;
  document.title = `${title} | Loïc VIDAL-FERRASSE`;
  container.innerHTML = `<h1>${title}</h1><p class="project-meta">${I18N[currentLang].project_category}: ${project.category}</p><p>${description}</p><h2>${I18N[currentLang].project_technologies}</h2>${createTagList(project.technologies)}<h2>${I18N[currentLang].project_key_points}</h2><ul>${keyPoints.map((p) => `<li>${p}</li>`).join("")}</ul><h2>${I18N[currentLang].project_result}</h2><p>${result}</p><h2>${I18N[currentLang].project_next_step}</h2><p>${nextStep}</p>`;
}

function setupNavigation() {
  const navToggle = $(".nav-toggle"); const mainNav = $("#main-nav");
  if (!navToggle || !mainNav) return;
  navToggle.addEventListener("click", () => { const isOpen = mainNav.classList.toggle("open"); navToggle.setAttribute("aria-expanded", String(isOpen)); });
  mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { mainNav.classList.remove("open"); navToggle.setAttribute("aria-expanded", "false"); }));
}

function setupBackToTop() {
  const button = $("#back-to-top"); if (!button) return;
  const updateState = () => button.classList.toggle("show", window.scrollY > 280);
  window.addEventListener("scroll", updateState); updateState();
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function setupLanguageToggle() {
  const button = $("#lang-toggle"); if (!button) return;
  button.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    localStorage.setItem(LANG_KEY, currentLang);
    applyTranslations(); renderSkills(); renderExperience(); renderProjectFilters(); renderProjects(); renderProjectDetail();
  });
}

function setupProjectSearch() {
  const input = $("#project-search"); if (!input) return;
  input.addEventListener("input", (event) => { searchTerm = event.target.value.trim(); renderProjects(); });
}

function setupFooterYear() { const yearNode = $("#year"); if (yearNode) yearNode.textContent = new Date().getFullYear(); }

function init() {
  if (!["fr", "en"].includes(currentLang)) currentLang = "fr";
  applyTranslations(); setupNavigation(); setupLanguageToggle(); setupBackToTop(); setupReveal(); setupFooterYear();
  renderSkills(); renderExperience(); renderProjectFilters(); renderProjects(); setupProjectSearch(); renderProjectDetail();
}

document.addEventListener("DOMContentLoaded", init);
