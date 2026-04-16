const LANG_KEY = "portfolio_lang";

const I18N = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_experience: "Expériences",
    nav_education: "Formations",
    nav_certs: "Certifications",
    nav_cyber: "Cyber",
    nav_contact: "Contact",
    hero_eyebrow: "Portfolio professionnel",
    hero_name: "Loïc Vidal-Ferrasse",
    hero_title: "Étudiant BUT Réseaux & Télécommunications",
    hero_intro:
      "Je construis des projets concrets en réseaux, administration système et cybersécurité pour développer un profil technique fiable, structuré et orienté terrain.",
    hero_btn_projects: "Voir mes projets",
    hero_btn_contact: "Me contacter",
    hero_point_1: "Orientation réseau, système et cyber",
    hero_point_2: "Approche pragmatique et documentée",
    hero_point_3: "Recherche d'opportunités en alternance/stage",
    about_title: "À propos",
    about_text_1:
      "Je suis étudiant en BUT Réseaux & Télécommunications avec une forte appétence pour les environnements techniques où fiabilité, sécurité et méthode sont essentielles.",
    about_text_2:
      "Ce portfolio me permet de centraliser mes projets, suivre ma progression et présenter un aperçu clair de mes compétences à de futurs employeurs.",
    skills_title: "Compétences",
    projects_title: "Projets",
    projects_subtitle: "Recherche, filtres et détail complet de chaque réalisation.",
    projects_search_label: "Rechercher un projet",
    projects_search_placeholder: "Rechercher un projet...",
    projects_filter_all: "Tout",
    projects_btn_detail: "Voir le détail",
    projects_empty: "Aucun projet ne correspond à la recherche actuelle.",
    exp_title: "Expériences professionnelles",
    education_title: "Formations",
    education_item_title: "BUT Réseaux & Télécommunications",
    education_item_text:
      "Formation orientée infrastructures réseau, administration système, cybersécurité opérationnelle et gestion de projets techniques.",
    certs_title: "Certifications",
    certs_text:
      "Cette section accueillera mes futures certifications en réseau, systèmes et cybersécurité.",
    cyber_title: "Axe Cybersécurité",
    cyber_intro:
      "La cybersécurité constitue un axe majeur de spécialisation, avec une approche progressive entre technique, documentation et veille continue.",
    cyber_block_1_title: "Notes techniques",
    cyber_block_1_text:
      "Rédaction de procédures, checklists sécurité et retours d'expérience sur les configurations réseau et système.",
    cyber_block_2_title: "Laboratoires / tests",
    cyber_block_2_text:
      "Mise en place d'environnements virtualisés pour tester des scénarios d'attaque/défense de manière contrôlée.",
    cyber_block_3_title: "Veille cyber",
    cyber_block_3_text:
      "Suivi régulier des vulnérabilités, bonnes pratiques, et tendances SOC pour garder une vision opérationnelle à jour.",
    contact_title: "Contact",
    footer_text: "Portfolio de Loïc Vidal-Ferrasse •",
    footer_top: "Retour en haut",
    project_back: "← Retour aux projets",
    project_not_found_title: "Projet introuvable",
    project_not_found_text: "Le projet demandé n'existe pas ou le lien est invalide.",
    project_category: "Catégorie",
    project_technologies: "Technologies",
    project_key_points: "Points clés",
    project_result: "Résultat",
    project_next_step: "Évolution prévue",
    exp_items: [
      {
        title: "Support informatique - Stage (exemple)",
        period: "2025",
        text: "Participation au support de proximité, traitement de tickets, suivi d'interventions et documentation des actions techniques."
      },
      {
        title: "Projet tutoré BUT R&T",
        period: "2024 - 2025",
        text: "Collaboration en équipe sur des sujets réseau/système avec répartition des responsabilités et reporting technique."
      }
    ],
    skills_items: [
      {
        title: "Réseaux",
        description: "Conception et configuration de topologies IP, segmentation, routage et services réseau de base.",
        tags: ["IPv4/IPv6", "VLAN", "Routage", "Switching"]
      },
      {
        title: "Cybersécurité",
        description: "Application de bonnes pratiques de sécurisation, contrôle d'accès et analyse de risques techniques.",
        tags: ["Hardening", "ACL", "Veille", "Gestion du risque"]
      },
      {
        title: "Administration système",
        description: "Gestion de serveurs et postes, supervision des services, maintenance et résolution d'incidents.",
        tags: ["Linux", "Windows", "Services", "Support"]
      },
      {
        title: "Virtualisation",
        description: "Création de laboratoires techniques pour expérimenter des scénarios réseau et sécurité.",
        tags: ["VM", "Lab", "Tests", "Isolation"]
      },
      {
        title: "Scripting / automatisation",
        description: "Développement de scripts pour standardiser des tâches répétitives et améliorer la productivité.",
        tags: ["PowerShell", "Bash", "Automatisation", "Documentation"]
      }
    ]
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_certs: "Certifications",
    nav_cyber: "Cyber",
    nav_contact: "Contact",
    hero_eyebrow: "Professional portfolio",
    hero_name: "Loïc Vidal-Ferrasse",
    hero_title: "BUT Network & Telecommunications Student",
    hero_intro:
      "I build practical projects in networking, system administration and cybersecurity to grow as a reliable, structured, operations-focused technical profile.",
    hero_btn_projects: "View projects",
    hero_btn_contact: "Contact me",
    hero_point_1: "Networking, systems and cyber focus",
    hero_point_2: "Pragmatic and documented approach",
    hero_point_3: "Looking for internship/work-study opportunities",
    about_title: "About",
    about_text_1:
      "I am a BUT Network & Telecommunications student with strong interest in technical environments where reliability, security and method matter.",
    about_text_2:
      "This portfolio helps me centralize projects, track progress and present a clear overview of my skills to future employers.",
    skills_title: "Skills",
    projects_title: "Projects",
    projects_subtitle: "Search, filters and complete detail for each project.",
    projects_search_label: "Search for a project",
    projects_search_placeholder: "Search a project...",
    projects_filter_all: "All",
    projects_btn_detail: "View details",
    projects_empty: "No project matches the current search.",
    exp_title: "Professional experience",
    education_title: "Education",
    education_item_title: "BUT Network & Telecommunications",
    education_item_text:
      "Education focused on network infrastructure, system administration, operational cybersecurity and technical project management.",
    certs_title: "Certifications",
    certs_text:
      "This section will host upcoming certifications in networking, systems and cybersecurity.",
    cyber_title: "Cybersecurity focus",
    cyber_intro:
      "Cybersecurity is a major specialization axis, with a progressive approach combining technical work, documentation and continuous monitoring.",
    cyber_block_1_title: "Technical notes",
    cyber_block_1_text:
      "Procedures, security checklists and feedback on network/system configurations.",
    cyber_block_2_title: "Labs / tests",
    cyber_block_2_text:
      "Virtualized environments to run controlled attack/defense scenarios.",
    cyber_block_3_title: "Cyber monitoring",
    cyber_block_3_text:
      "Regular tracking of vulnerabilities, best practices and SOC trends.",
    contact_title: "Contact",
    footer_text: "Loïc Vidal-Ferrasse portfolio •",
    footer_top: "Back to top",
    project_back: "← Back to projects",
    project_not_found_title: "Project not found",
    project_not_found_text: "The requested project does not exist or the link is invalid.",
    project_category: "Category",
    project_technologies: "Technologies",
    project_key_points: "Key points",
    project_result: "Result",
    project_next_step: "Next step",
    exp_items: [
      {
        title: "IT support - Internship (sample)",
        period: "2025",
        text: "Contributed to local support operations, ticket handling, intervention tracking and technical documentation."
      },
      {
        title: "Guided project - BUT N&T",
        period: "2024 - 2025",
        text: "Team collaboration on network/system topics with role distribution and technical reporting."
      }
    ],
    skills_items: [
      {
        title: "Networking",
        description: "Design and configuration of IP topologies, segmentation, routing and core network services.",
        tags: ["IPv4/IPv6", "VLAN", "Routing", "Switching"]
      },
      {
        title: "Cybersecurity",
        description: "Implementation of hardening practices, access control and technical risk analysis.",
        tags: ["Hardening", "ACL", "Monitoring", "Risk management"]
      },
      {
        title: "System administration",
        description: "Server and workstation management, service monitoring, maintenance and incident handling.",
        tags: ["Linux", "Windows", "Services", "Support"]
      },
      {
        title: "Virtualization",
        description: "Building technical labs to test networking and security scenarios.",
        tags: ["VM", "Lab", "Testing", "Isolation"]
      },
      {
        title: "Scripting / automation",
        description: "Script development to standardize repetitive tasks and improve productivity.",
        tags: ["PowerShell", "Bash", "Automation", "Documentation"]
      }
    ]
  }
};

const PROJECT_CATEGORIES = ["Réseaux", "Cyber", "Système", "Scripts", "Projet", "SAE"];

let currentLang = localStorage.getItem(LANG_KEY) || "fr";
let selectedCategory = "all";
let searchTerm = "";

function $(selector) {
  return document.querySelector(selector);
}

function applyTranslations() {
  const dict = I18N[currentLang];
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) element.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dict[key]) element.setAttribute("placeholder", dict[key]);
  });

  const langToggle = $("#lang-toggle");
  if (langToggle) langToggle.textContent = currentLang === "fr" ? "EN" : "FR";
}

function createTagList(tags = []) {
  return `<ul class="tag-list">${tags.map((tag) => `<li class="tag">${tag}</li>`).join("")}</ul>`;
}

function renderSkills() {
  const container = $("#skills-grid");
  if (!container) return;

  const skills = I18N[currentLang].skills_items;
  container.innerHTML = skills
    .map(
      (skill) => `
      <article class="glass-card reveal">
        <h3>${skill.title}</h3>
        <p>${skill.description}</p>
        ${createTagList(skill.tags)}
      </article>`
    )
    .join("");
}

function renderExperience() {
  const container = $("#experience-timeline");
  if (!container) return;

  container.innerHTML = I18N[currentLang].exp_items
    .map(
      (item) => `
      <article class="timeline-item glass-card">
        <h3>${item.title}</h3>
        <p><strong>${item.period}</strong></p>
        <p>${item.text}</p>
      </article>`
    )
    .join("");
}

function getProjectTitle(project) {
  return currentLang === "fr" ? project.title_fr : project.title_en;
}

function getProjectShort(project) {
  return currentLang === "fr" ? project.short_fr : project.short_en;
}

function renderProjectFilters() {
  const container = $("#project-filters");
  if (!container) return;

  const allLabel = I18N[currentLang].projects_filter_all;
  container.innerHTML = ["all", ...PROJECT_CATEGORIES]
    .map((category) => {
      const label = category === "all" ? allLabel : category;
      const activeClass = selectedCategory === category ? "active" : "";
      return `<button class="filter-btn ${activeClass}" data-category="${category}" type="button">${label}</button>`;
    })
    .join("");

  container.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;
      renderProjectFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  const container = $("#projects-grid");
  if (!container) return;

  const list = PROJECTS.filter((project) => {
    const matchCategory = selectedCategory === "all" || project.category === selectedCategory;
    const haystack = `${project.title_fr} ${project.title_en} ${project.short_fr} ${project.short_en}`.toLowerCase();
    const matchSearch = haystack.includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state">${I18N[currentLang].projects_empty}</div>`;
    return;
  }

  container.innerHTML = list
    .map(
      (project) => `
      <article class="glass-card project-card reveal">
        <p class="project-meta">${project.category}</p>
        <h3>${getProjectTitle(project)}</h3>
        <p>${getProjectShort(project)}</p>
        ${createTagList(project.technologies)}
        <a class="btn btn-secondary" href="project.html?slug=${encodeURIComponent(project.slug)}">${I18N[currentLang].projects_btn_detail}</a>
      </article>`
    )
    .join("");
}

function renderProjectDetail() {
  const container = $("#project-detail");
  if (!container) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!slug || !project) {
    container.innerHTML = `
      <h1>${I18N[currentLang].project_not_found_title}</h1>
      <p>${I18N[currentLang].project_not_found_text}</p>
    `;
    return;
  }

  const title = currentLang === "fr" ? project.title_fr : project.title_en;
  const description = currentLang === "fr" ? project.description_fr : project.description_en;
  const keyPoints = currentLang === "fr" ? project.keyPoints_fr : project.keyPoints_en;
  const result = currentLang === "fr" ? project.result_fr : project.result_en;
  const nextStep = currentLang === "fr" ? project.nextStep_fr : project.nextStep_en;

  document.title = `${title} | Loïc Vidal-Ferrasse`;

  container.innerHTML = `
    <h1>${title}</h1>
    <p class="project-meta">${I18N[currentLang].project_category}: ${project.category}</p>
    <p>${description}</p>

    <h2>${I18N[currentLang].project_technologies}</h2>
    ${createTagList(project.technologies)}

    <h2>${I18N[currentLang].project_key_points}</h2>
    <ul>${keyPoints.map((point) => `<li>${point}</li>`).join("")}</ul>

    <h2>${I18N[currentLang].project_result}</h2>
    <p>${result}</p>

    <h2>${I18N[currentLang].project_next_step}</h2>
    <p>${nextStep}</p>
  `;
}

function setupNavigation() {
  const navToggle = $(".nav-toggle");
  const mainNav = $("#main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

function setupBackToTop() {
  const button = $("#back-to-top");
  if (!button) return;

  const updateState = () => {
    button.classList.toggle("show", window.scrollY > 280);
  };

  window.addEventListener("scroll", updateState);
  updateState();

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupLanguageToggle() {
  const button = $("#lang-toggle");
  if (!button) return;

  button.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    localStorage.setItem(LANG_KEY, currentLang);
    applyTranslations();
    renderSkills();
    renderExperience();
    renderProjectFilters();
    renderProjects();
    renderProjectDetail();
  });
}

function setupProjectSearch() {
  const input = $("#project-search");
  if (!input) return;

  input.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderProjects();
  });
}

function setupFooterYear() {
  const yearNode = $("#year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();
}

function init() {
  if (!["fr", "en"].includes(currentLang)) currentLang = "fr";

  applyTranslations();
  setupNavigation();
  setupLanguageToggle();
  setupBackToTop();
  setupReveal();
  setupFooterYear();

  renderSkills();
  renderExperience();
  renderProjectFilters();
  renderProjects();
  setupProjectSearch();
  renderProjectDetail();
}

document.addEventListener("DOMContentLoaded", init);
