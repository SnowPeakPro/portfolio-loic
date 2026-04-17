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
    hero_intro:
      "Étudiant de 20 ans en deuxième année de BUT R&T à l'IUT de Béziers, en alternance chez Xefi en tant que Technicien conseil. Ce site présente ma progression en réseaux, administration système et cybersécurité.",
    hero_btn_projects: "Voir les projets",
    hero_btn_contact: "Me contacter",
    hero_point_1: "BUT R&T - IUT de Béziers (2024-2027)",
    hero_point_2: "Alternance Xefi (2025-2027)",
    hero_point_3: "Objectif : évoluer en cybersécurité et réseaux",
    about_title: "À propos",
    about_text_1:
      "Je m'appelle Loïc VIDAL-FERRASSE. Mon parcours associe une formation BUT Réseaux & Télécommunications et une expérience terrain en alternance.",
    about_text_2:
      "Je développe progressivement mes compétences en réseaux, administration système et cybersécurité dans une logique de progression continue.",
    about_text_3:
      "Ce portfolio sert de base durable pour documenter mes projets, structurer mes acquis et préparer mes futures réalisations.",
    skills_title: "Compétences",
    skill_level_label: "Niveau",
    projects_title: "Projets",
    projects_subtitle:
      "Une base claire est en place pour publier mes projets détaillés au fur et à mesure.",
    projects_search_label: "Rechercher un projet",
    projects_search_placeholder: "Rechercher un projet...",
    projects_filter_all: "Tout",
    projects_btn_detail: "Voir le détail",
    projects_btn_link: "Voir le lien",
    projects_no_link: "Lien à venir",
    projects_image_placeholder: "Visuel temporaire",
    projects_empty: "Aucun projet ne correspond à la recherche actuelle.",
    exp_title: "Expérience professionnelle",
    education_title: "Formation",
    education_item_title: "BUT Réseaux & Télécommunications",
    education_item_text:
      "IUT de Béziers • 2024-2027 • Deuxième année • Spécialité Cybersécurité.",
    certs_title: "Certifications",
    certs_text:
      "Aucune certification pour le moment. Cette section sera enrichie au fil du parcours.",
    cyber_title: "Axe cybersécurité",
    cyber_intro:
      "La cybersécurité représente l'axe principal de spécialisation, avec une montée en compétence progressive, documentée et réaliste.",
    cyber_block_1_title: "Futurs objectifs cyber",
    cyber_block_1_text:
      "Approfondir la sécurisation des infrastructures réseau et système en contexte professionnel.",
    cyber_block_2_title: "Outils appris",
    cyber_block_2_text:
      "Pratique progressive d'outils d'administration, de sécurité, de diagnostic et d'automatisation.",
    cyber_block_3_title: "Veille",
    cyber_block_3_text:
      "Suivi régulier des vulnérabilités, des bonnes pratiques et des actualités techniques.",
    contact_title: "Contact",
    contact_city: "Ville",
    contact_city_value: "Béziers (placeholder)",
    footer_text: "Portfolio de Loïc VIDAL-FERRASSE •",
    footer_top: "Retour en haut",
    project_back: "← Retour aux projets",
    project_not_found_title: "Projet introuvable",
    project_not_found_text:
      "Le projet demandé n'existe pas encore ou le lien est invalide.",
    project_category: "Catégorie",
    project_technologies: "Technologies",
    project_key_points: "Points clés",
    project_result: "État actuel",
    project_next_step: "Prochaine étape",
    exp_items: [
      {
        title: "Xefi — Technicien conseil (alternance)",
        period: "2025 à 2027",
        text: "Interventions techniques dans un contexte client, avec progression continue sur les environnements système et réseau."
      },
      {
        title: "Missions principales",
        period: "Contexte opérationnel",
        text: "Montage et configuration de serveurs, sécurisation via installation/configuration de pare-feu Sophos, dépannage client et suivi des actions réalisées."
      }
    ],
    skills_items: [
      {
        title: "Réseaux",
        level: "Débutant",
        description:
          "Bases en segmentation, adressage et routage dans des environnements de laboratoire et de formation.",
        tags: ["IPv4/IPv6", "VLAN", "Routage"]
      },
      {
        title: "Cybersécurité",
        level: "Débutant",
        description:
          "Application progressive de bonnes pratiques de sécurisation en réseau et administration système.",
        tags: ["Hardening", "ACL", "Pare-feu"]
      },
      {
        title: "Administration système",
        level: "Débutant",
        description:
          "Gestion de services Linux/Windows dans un cadre d'apprentissage structuré et encadré.",
        tags: ["Linux", "Windows", "Services"]
      },
      {
        title: "Virtualisation",
        level: "Débutant",
        description:
          "Mise en place de laboratoires pour tester des scénarios techniques de manière contrôlée.",
        tags: ["VM", "Lab", "Tests"]
      },
      {
        title: "Scripting / automatisation",
        level: "Débutant",
        description:
          "Scripts simples pour standardiser les tâches répétitives et améliorer la régularité des interventions.",
        tags: ["PowerShell", "Bash", "Automatisation"]
      },
      {
        title: "IA",
        level: "Débutant",
        description:
          "Découverte d'usages d'assistance pour la documentation technique et l'analyse.",
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
      "I am a 20-year-old second-year BUT Network & Telecommunications student at IUT of Béziers, currently in a work-study role at Xefi as a Technical Support Technician. This site tracks my progress in networking, system administration, and cybersecurity.",
    hero_btn_projects: "View projects",
    hero_btn_contact: "Contact me",
    hero_point_1: "BUT N&T - IUT of Béziers (2024-2027)",
    hero_point_2: "Work-study at Xefi (2025-2027)",
    hero_point_3: "Goal: grow in cybersecurity and networking",
    about_title: "About",
    about_text_1:
      "My name is Loïc VIDAL-FERRASSE. My path combines a BUT Network & Telecommunications degree with hands-on work-study experience.",
    about_text_2:
      "I am steadily building skills in networking, system administration, and cybersecurity through a realistic learning approach.",
    about_text_3:
      "This portfolio is designed as a long-term base to document projects, structure progress, and prepare future work.",
    skills_title: "Skills",
    skill_level_label: "Level",
    projects_title: "Projects",
    projects_subtitle:
      "A clear baseline is in place to publish detailed projects progressively.",
    projects_search_label: "Search a project",
    projects_search_placeholder: "Search a project...",
    projects_filter_all: "All",
    projects_btn_detail: "View details",
    projects_btn_link: "Open link",
    projects_no_link: "Link coming soon",
    projects_image_placeholder: "Temporary visual",
    projects_empty: "No project matches the current search.",
    exp_title: "Professional experience",
    education_title: "Education",
    education_item_title: "BUT Network & Telecommunications",
    education_item_text:
      "IUT of Béziers • 2024-2027 • Second year • Cybersecurity specialization.",
    certs_title: "Certifications",
    certs_text:
      "No certifications yet. This section will be expanded over time.",
    cyber_title: "Cybersecurity focus",
    cyber_intro:
      "Cybersecurity is my main specialization axis, with progressive, documented, and realistic skill development.",
    cyber_block_1_title: "Future cyber goals",
    cyber_block_1_text:
      "Strengthen infrastructure security skills for real networking and system environments.",
    cyber_block_2_title: "Tools learned",
    cyber_block_2_text:
      "Progressive practice of administration, security, diagnostic, and automation tools.",
    cyber_block_3_title: "Monitoring",
    cyber_block_3_text:
      "Regular follow-up on vulnerabilities, best practices, and technical updates.",
    contact_title: "Contact",
    contact_city: "City",
    contact_city_value: "Béziers (placeholder)",
    footer_text: "Loïc VIDAL-FERRASSE portfolio •",
    footer_top: "Back to top",
    project_back: "← Back to projects",
    project_not_found_title: "Project not found",
    project_not_found_text:
      "The requested project is not available yet or the link is invalid.",
    project_category: "Category",
    project_technologies: "Technologies",
    project_key_points: "Key points",
    project_result: "Current status",
    project_next_step: "Next step",
    exp_items: [
      {
        title: "Xefi — Technical Support Technician (work-study)",
        period: "2025 to 2027",
        text: "Technical work in client environments, with continuous development on system and network operations."
      },
      {
        title: "Main responsibilities",
        period: "Operational context",
        text: "Server assembly and configuration, security deployment through Sophos firewall installation/configuration, customer troubleshooting, and intervention follow-up."
      }
    ],
    skills_items: [
      {
        title: "Networking",
        level: "Beginner",
        description:
          "Foundations in segmentation, addressing, and routing within lab and training environments.",
        tags: ["IPv4/IPv6", "VLAN", "Routing"]
      },
      {
        title: "Cybersecurity",
        level: "Beginner",
        description:
          "Progressive application of core security practices in networking and system administration.",
        tags: ["Hardening", "ACL", "Firewalls"]
      },
      {
        title: "System administration",
        level: "Beginner",
        description:
          "Linux/Windows service management in a structured learning context.",
        tags: ["Linux", "Windows", "Services"]
      },
      {
        title: "Virtualization",
        level: "Beginner",
        description:
          "Lab setup to test technical scenarios in controlled conditions.",
        tags: ["VM", "Lab", "Testing"]
      },
      {
        title: "Scripting / automation",
        level: "Beginner",
        description:
          "Simple scripts to standardize recurring tasks and improve consistency.",
        tags: ["PowerShell", "Bash", "Automation"]
      },
      {
        title: "AI",
        level: "Beginner",
        description:
          "Early practical uses for technical assistance, analysis, and documentation.",
        tags: ["Prompting", "Assistance", "Productivity"]
      }
    ]
  }
};

const PROJECT_CATEGORIES = ["Réseaux", "Cyber", "Système", "Scripts", "Projet", "SAE"];

let currentLang = localStorage.getItem(LANG_KEY) || "fr";
let selectedCategory = "all";
let searchTerm = "";

const $ = (selector) => document.querySelector(selector);

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

function createProjectVisual(project) {
  if (project.image) {
    return `<img class="project-thumb" src="${project.image}" alt="${getProjectTitle(project)}" loading="lazy" />`;
  }

  return `<div class="project-thumb project-thumb--placeholder" aria-hidden="true">${I18N[currentLang].projects_image_placeholder}</div>`;
}

function createProjectLink(project) {
  if (project.link) {
    return `<a class="btn btn-secondary" href="${project.link}" target="_blank" rel="noopener noreferrer">${I18N[currentLang].projects_btn_link}</a>`;
  }

  return `<span class="project-link-placeholder">${I18N[currentLang].projects_no_link}</span>`;
}

function renderSkills() {
  const container = $("#skills-grid");
  if (!container) return;

  container.innerHTML = I18N[currentLang].skills_items
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
      const isActive = selectedCategory === category ? "active" : "";
      return `<button class="filter-btn ${isActive}" data-category="${category}" type="button">${label}</button>`;
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

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const searchIndex = `${project.title_fr} ${project.title_en} ${project.short_fr} ${project.short_en}`.toLowerCase();
    const matchesSearch = searchIndex.includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (!filteredProjects.length) {
    container.innerHTML = `<div class="empty-state">${I18N[currentLang].projects_empty}</div>`;
    return;
  }

  container.innerHTML = filteredProjects
    .map(
      (project) => `
      <article class="glass-card project-card reveal">
        ${createProjectVisual(project)}
        <p class="project-meta">${project.category}</p>
        <h3>${getProjectTitle(project)}</h3>
        <p>${getProjectShort(project)}</p>
        ${createTagList(project.technologies)}
        <div class="project-actions">
          <a class="btn btn-secondary" href="project.html?slug=${encodeURIComponent(project.slug)}">${I18N[currentLang].projects_btn_detail}</a>
          ${createProjectLink(project)}
        </div>
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
      <p>${I18N[currentLang].project_not_found_text}</p>`;
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
    <p>${nextStep}</p>`;
}

function setupNavigation() {
  const navToggle = $(".nav-toggle");
  const mainNav = $("#main-nav");
  if (!navToggle || !mainNav) return;

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

function setupBackToTop() {
  const button = $("#back-to-top");
  if (!button) return;

  const toggleButton = () => {
    button.classList.toggle("show", window.scrollY > 280);
  };

  window.addEventListener("scroll", toggleButton);
  toggleButton();

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }

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
