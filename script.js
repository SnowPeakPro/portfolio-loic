const LANG_KEY = "portfolio_lang";

const I18N = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_experience: "Expériences",
    nav_education: "Formation",
    nav_certs: "Certifications",
    nav_cyber: "Cyber",
    nav_contact: "Contact",
    hero_eyebrow: "Portfolio professionnel",
    hero_name: "Loïc VIDAL-FERRASSE",
    hero_title: "Étudiant BUT Réseaux & Télécommunications",
    hero_intro:
      "Étudiant de 20 ans en deuxième année de BUT R&T à l'IUT de Béziers, en alternance chez Xefi comme Technicien conseil. Ce portfolio documente ma progression en réseaux, administration système et cybersécurité.",
    hero_btn_projects: "Voir les projets",
    hero_btn_contact: "Me contacter",
    hero_point_1: "Deuxième année BUT R&T (2024-2027)",
    hero_point_2: "Alternance Xefi (2025-2027)",
    hero_point_3: "Objectif : évoluer en cyber et réseaux",
    about_title: "À propos",
    about_text_1:
      "Je m'appelle Loïc VIDAL-FERRASSE. Mon parcours actuel s'articule autour de ma formation en BUT Réseaux & Télécommunications et de mon alternance en environnement professionnel.",
    about_text_2:
      "Je développe progressivement mes compétences en réseaux, administration système et cybersécurité, avec une approche structurée et orientée pratique.",
    about_text_3:
      "Ce site est conçu comme une base durable : il me permet de centraliser mes projets, de suivre ma progression et de présenter un profil technique crédible à de futurs employeurs.",
    skills_title: "Compétences",
    skill_level_label: "Niveau",
    skill_level_beginner: "Débutant",
    projects_title: "Projets",
    projects_subtitle: "Section en construction : base propre pour publier les projets détaillés au fur et à mesure.",
    projects_search_label: "Rechercher un projet",
    projects_search_placeholder: "Rechercher un projet...",
    projects_filter_all: "Tout",
    projects_btn_detail: "Voir le détail",
    projects_empty: "Aucun projet ne correspond à la recherche actuelle.",
    exp_title: "Expérience professionnelle",
    education_title: "Formation",
    education_item_title: "BUT Réseaux & Télécommunications",
    education_item_text:
      "IUT de Béziers • 2024 à 2027 • Deuxième année en cours. Parcours orienté réseaux, administration système et spécialité cybersécurité.",
    certs_title: "Certifications",
    certs_text:
      "Aucune certification pour le moment. Cette section sera mise à jour au fil de mon parcours avec les validations obtenues.",
    cyber_title: "Axe cybersécurité",
    cyber_intro:
      "La cybersécurité constitue l'axe principal de progression de mon profil. L'objectif est d'avancer étape par étape avec des bases solides et une veille régulière.",
    cyber_block_1_title: "Futurs objectifs cyber",
    cyber_block_1_text:
      "Renforcer mes compétences sur la sécurisation des infrastructures réseau et système en contexte réel d'entreprise.",
    cyber_block_2_title: "Outils appris",
    cyber_block_2_text:
      "Pratique progressive d'outils et méthodes utiles en administration et sécurité (pare-feu, scripts, supervision, diagnostic).",
    cyber_block_3_title: "Veille",
    cyber_block_3_text:
      "Suivi régulier des bonnes pratiques, vulnérabilités et retours d'expérience pour améliorer mes réflexes techniques.",
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
        text: "Interventions techniques en environnement client, avec montée en compétence continue sur les infrastructures systèmes et réseaux."
      },
      {
        title: "Missions principales",
        period: "Contexte professionnel",
        text: "Montage et configuration de serveurs, sécurisation via installation/configuration de pare-feu Sophos, dépannage client et suivi des actions réalisées."
      }
    ],
    skills_items: [
      {
        title: "Réseaux",
        level: "Débutant",
        description: "Bases en conception, segmentation et configuration d'environnements réseau encadrés.",
        tags: ["IPv4/IPv6", "VLAN", "Routage"]
      },
      {
        title: "Cybersécurité",
        level: "Débutant",
        description: "Approche progressive de la sécurisation des systèmes et des réseaux, avec méthode et documentation.",
        tags: ["Hardening", "ACL", "Pare-feu"]
      },
      {
        title: "Administration système",
        level: "Débutant",
        description: "Gestion d'environnements Linux/Windows dans un cadre académique et professionnel supervisé.",
        tags: ["Linux", "Windows", "Services"]
      },
      {
        title: "Virtualisation",
        level: "Débutant",
        description: "Mise en place de laboratoires pour tester des configurations techniques de manière isolée.",
        tags: ["VM", "Lab", "Tests"]
      },
      {
        title: "Scripting / automatisation",
        level: "Débutant",
        description: "Création de scripts simples pour standardiser des tâches répétitives et améliorer la qualité d'exécution.",
        tags: ["PowerShell", "Bash", "Automatisation"]
      },
      {
        title: "IA",
        level: "Débutant",
        description: "Découverte d'usages pratiques de l'IA pour assister la documentation, l'analyse et la productivité technique.",
        tags: ["Prompting", "Assistance", "Productivité"]
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
    hero_name: "Loïc VIDAL-FERRASSE",
    hero_title: "BUT Network & Telecommunications Student",
    hero_intro:
      "I am a 20-year-old second-year BUT N&T student at IUT of Béziers, currently in a work-study position at Xefi as a Technical Support Technician. This portfolio documents my progress in networking, system administration, and cybersecurity.",
    hero_btn_projects: "View projects",
    hero_btn_contact: "Contact me",
    hero_point_1: "Second year BUT N&T (2024-2027)",
    hero_point_2: "Work-study at Xefi (2025-2027)",
    hero_point_3: "Goal: grow in cybersecurity and networking",
    about_title: "About",
    about_text_1:
      "My name is Loïc VIDAL-FERRASSE. My current path combines my BUT Network & Telecommunications program and my work-study experience in a professional IT environment.",
    about_text_2:
      "I am steadily building skills in networking, system administration, and cybersecurity through a practical and structured learning approach.",
    about_text_3:
      "This website is designed as a long-term portfolio foundation: it centralizes my projects, tracks my progression, and presents a clear technical profile to future employers.",
    skills_title: "Skills",
    skill_level_label: "Level",
    skill_level_beginner: "Beginner",
    projects_title: "Projects",
    projects_subtitle: "Section under construction: clean baseline to publish detailed projects progressively.",
    projects_search_label: "Search a project",
    projects_search_placeholder: "Search a project...",
    projects_filter_all: "All",
    projects_btn_detail: "View details",
    projects_empty: "No project matches the current search.",
    exp_title: "Professional experience",
    education_title: "Education",
    education_item_title: "BUT Network & Telecommunications",
    education_item_text:
      "IUT of Béziers • 2024 to 2027 • Currently in second year. Track focused on networking, system administration, and cybersecurity specialization.",
    certs_title: "Certifications",
    certs_text:
      "No certifications yet. This section will be updated over time as I complete formal certifications.",
    cyber_title: "Cybersecurity focus",
    cyber_intro:
      "Cybersecurity is the main growth area of my profile. The objective is to progress step by step with solid fundamentals and regular technical monitoring.",
    cyber_block_1_title: "Future cyber goals",
    cyber_block_1_text:
      "Strengthen my ability to secure network and system infrastructures in real business environments.",
    cyber_block_2_title: "Tools learned",
    cyber_block_2_text:
      "Progressive hands-on use of tools and methods relevant to administration and security (firewalls, scripting, monitoring, diagnostics).",
    cyber_block_3_title: "Technical monitoring",
    cyber_block_3_text:
      "Consistent follow-up of best practices, vulnerabilities, and field feedback to improve technical reflexes.",
    contact_title: "Contact",
    contact_city: "City",
    footer_text: "Loïc VIDAL-FERRASSE portfolio •",
    footer_top: "Back to top",
    project_back: "← Back to projects",
    project_not_found_title: "Project not found",
    project_not_found_text: "The requested project is not available yet or the link is invalid.",
    project_category: "Category",
    project_technologies: "Technologies",
    project_key_points: "Key points",
    project_result: "Current status",
    project_next_step: "Next step",
    exp_items: [
      {
        title: "Xefi — Technical Support Technician (work-study)",
        period: "2025 to 2027",
        text: "Technical interventions in client environments, with continuous skill development in systems and network operations."
      },
      {
        title: "Main responsibilities",
        period: "Professional context",
        text: "Server assembly and configuration, security deployment through Sophos firewall installation/configuration, client troubleshooting, and intervention follow-up."
      }
    ],
    skills_items: [
      {
        title: "Networking",
        level: "Beginner",
        description: "Foundations in design, segmentation, and configuration of supervised network environments.",
        tags: ["IPv4/IPv6", "VLAN", "Routing"]
      },
      {
        title: "Cybersecurity",
        level: "Beginner",
        description: "Progressive approach to securing systems and networks with method and documentation.",
        tags: ["Hardening", "ACL", "Firewalls"]
      },
      {
        title: "System administration",
        level: "Beginner",
        description: "Linux/Windows environment management in supervised academic and professional contexts.",
        tags: ["Linux", "Windows", "Services"]
      },
      {
        title: "Virtualization",
        level: "Beginner",
        description: "Setting up lab environments to test technical configurations in isolation.",
        tags: ["VM", "Lab", "Testing"]
      },
      {
        title: "Scripting / automation",
        level: "Beginner",
        description: "Simple script creation to standardize repetitive tasks and improve execution quality.",
        tags: ["PowerShell", "Bash", "Automation"]
      },
      {
        title: "AI",
        level: "Beginner",
        description: "Early exploration of practical AI use cases for documentation support, analysis, and technical productivity.",
        tags: ["Prompting", "Assistant tools", "Productivity"]
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
        <p class="skill-level">${I18N[currentLang].skill_level_label}: <strong>${skill.level}</strong></p>
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

  document.title = `${title} | Loïc VIDAL-FERRASSE`;

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
