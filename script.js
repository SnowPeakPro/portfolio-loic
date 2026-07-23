const LANG_KEY = "portfolio_lang";

const I18N = {
  fr: {
    page_title: "Loïc VIDAL-FERRASSE | Réseaux, systèmes & cybersécurité",
    nav_profile: "Profil",
    nav_projects: "Projets",
    nav_experience: "Expérience",
    nav_cyber: "Cyber lab",
    nav_watch: "Veille",
    nav_contact: "Contact",
    hero_eyebrow: "BUT R&T • Cybersécurité • Alternance",
    hero_title: "J’administre, j’automatise et je sécurise des environnements numériques.",
    hero_intro:
      "Étudiant en troisième année de BUT Réseaux & Télécommunications, parcours Cybersécurité, et alternant technicien conseil chez XEFI Narbonne.",
    hero_btn_projects: "Découvrir mes réalisations",
    hero_btn_tryhackme: "Voir mon profil TryHackMe",
    hero_status: "En progression continue",
    hero_role: "Technicien conseil • Étudiant cyber",
    proof_year_value: "3e année",
    proof_year_label: "BUT Réseaux & Télécommunications",
    proof_work_label: "Alternance chez XEFI Narbonne",
    proof_thm_label: "Pratique sur TryHackMe",
    proof_track_label: "Parcours de spécialisation",
    profile_kicker: "Mon profil",
    profile_title: "Une progression construite entre formation et terrain",
    profile_text_1:
      "Mon parcours associe les connaissances acquises en BUT R&T à des missions réalisées en entreprise. Cette complémentarité me permet de comprendre une infrastructure, d’intervenir avec méthode et de documenter les solutions mises en place.",
    profile_text_2:
      "Je m’intéresse particulièrement à l’administration Windows et Linux, à l’automatisation des tâches récurrentes, à la sécurisation des services et à la supervision des environnements clients.",
    principle_1_title: "Comprendre",
    principle_1_text: "Analyser le besoin et l’existant avant d’agir.",
    principle_2_title: "Fiabiliser",
    principle_2_text: "Tester, journaliser et rendre la solution reproductible.",
    principle_3_title: "Transmettre",
    principle_3_text: "Documenter clairement pour faciliter la maintenance.",
    projects_kicker: "Réalisations",
    projects_title: "Des projets reliés à des besoins concrets",
    projects_subtitle: "Projets professionnels, académiques et personnels documentés sous forme d’études de cas.",
    projects_search_label: "Rechercher un projet",
    projects_search_placeholder: "Rechercher un projet ou une technologie...",
    projects_filter_all: "Tous",
    projects_empty: "Aucun projet ne correspond à cette recherche.",
    projects_view: "Voir l’étude de cas →",
    experience_kicker: "Expérience",
    experience_title: "Alternance chez XEFI Narbonne",
    experience_intro: "Une expérience terrain au contact d’infrastructures et de besoins clients variés.",
    experience_contract: "Alternance",
    experience_role: "Technicien conseil",
    experience_text:
      "J’interviens sur la préparation, l’administration, la sécurisation et le dépannage d’environnements informatiques professionnels, avec une attention particulière portée au suivi des actions et à la continuité de service.",
    skills_kicker: "Compétences",
    skills_title: "Des compétences appuyées par la pratique",
    skills_intro: "Chaque domaine est relié à un contexte réel : alternance, formation ou laboratoire personnel.",
    cyber_kicker: "Cyber lab",
    cyber_title: "Une pratique régulière sur TryHackMe",
    cyber_intro: "Des laboratoires pour renforcer mes connaissances et manipuler des outils dans un environnement autorisé.",
    thm_profile_text: "Pratique personnelle d’environ cinq sessions par semaine.",
    thm_profile_link: "Ouvrir le profil public ↗",
    thm_rank: "Rang",
    thm_points: "points",
    thm_updated: "Mis à jour le",
    thm_tab_rooms: "Rooms marquantes",
    thm_tab_paths: "Parcours",
    thm_tab_badges: "Badges",
    thm_badge_earned: "Obtenu",
    thm_certificate_link: "Consulter le certificat (PDF) ↗",
    thm_certificate_alt: "Aperçu du certificat TryHackMe Pre Security obtenu par SnowPeakPro",
    thm_certificate_id: "Identifiant",
    watch_kicker: "Veille technologique",
    watch_title: "Suivre, vérifier et comprendre l’actualité cyber",
    watch_intro: "Ma veille s’appuie actuellement sur des organismes institutionnels et des créateurs de contenu spécialisés.",
    watch_step_1: "Collecter",
    watch_step_1_text: "Identifier les sujets, alertes et nouvelles pratiques.",
    watch_step_2: "Recouper",
    watch_step_2_text: "Comparer plusieurs sources avant de retenir une information.",
    watch_step_3: "Synthétiser",
    watch_step_3_text: "Conserver les éléments utiles et leurs impacts techniques.",
    watch_sources_label: "Sources suivies",
    watch_institutions: "Organismes institutionnels",
    watch_channels: "Chaînes spécialisées",
    education_kicker: "Parcours",
    education_title: "Formation",
    education_but_title: "BUT Réseaux & Télécommunications",
    education_but_text: "IUT de Béziers • Troisième année • Parcours Cybersécurité",
    education_bac_title: "Baccalauréat général",
    education_bac_text: "Mathématiques, NSI et Maths expertes • Mention Bien",
    certs_kicker: "Progression",
    certs_title: "Certificats et objectifs",
    certs_earned_group: "Certificats obtenus",
    certs_planned_group: "En cours ou envisagés",
    contact_kicker: "Contact",
    contact_title: "Échangeons autour d’un projet ou d’une opportunité",
    contact_text: "Je suis disponible pour discuter de réseaux, d’administration système, d’automatisation et de cybersécurité.",
    footer_text: "Construit pour documenter une progression réelle.",
    footer_top: "Retour en haut ↑",
    project_back: "← Retour aux projets",
    project_not_found_title: "Projet introuvable",
    project_not_found_text: "Le projet demandé n’existe pas ou le lien utilisé est invalide.",
    project_fact_type: "Contexte",
    project_fact_status: "État",
    project_fact_date: "Période",
    project_context: "Contexte",
    project_objectives: "Objectifs",
    project_actions: "Travail réalisé ou préparé",
    project_results: "Résultats et état actuel",
    project_challenges: "Difficultés techniques",
    project_next: "Prochaines étapes",
    project_evidence: "Preuves associées",
    project_technologies: "Technologies",
    categories: {
      Automatisation: "Automatisation",
      Systèmes: "Systèmes",
      Cybersécurité: "Cybersécurité",
      Réseaux: "Réseaux"
    },
    missions: [
      {
        code: "SYS / SUPPORT",
        title: "Administration et dépannage",
        text: "Préparation de postes et serveurs, diagnostic d’incidents et suivi des interventions techniques."
      },
      {
        code: "M365 / EXO",
        title: "Services Microsoft 365",
        text: "Gestion de comptes, alias, groupes de distribution et paramètres Exchange Online."
      },
      {
        code: "SEC / SOPHOS",
        title: "Sécurisation des environnements",
        text: "Déploiement, paramétrage et vérification de solutions Sophos Endpoint, Central et pare-feu."
      },
      {
        code: "RMM / SCRIPT",
        title: "Automatisation et supervision",
        text: "Scripts PowerShell, remontées d’inventaire, contrôles préventifs et automatisations Atera."
      }
    ],
    skills: [
      {
        context: "Alternance + formation",
        title: "Administration systèmes",
        description: "Installer, configurer, diagnostiquer et maintenir des environnements Windows et Linux.",
        tags: ["Windows Server", "Linux", "Services", "VMware"]
      },
      {
        context: "Formation + laboratoire",
        title: "Réseaux",
        description: "Concevoir une segmentation, configurer les équipements et analyser les communications.",
        tags: ["IPv4/IPv6", "VLAN", "Routage", "STP"]
      },
      {
        context: "Formation + TryHackMe",
        title: "Cybersécurité",
        description: "Appliquer le filtrage, le durcissement, le chiffrement et une démarche d’analyse structurée.",
        tags: ["nftables", "OpenVPN", "PKI", "Hardening"]
      },
      {
        context: "Alternance + projets",
        title: "Scripting et automatisation",
        description: "Transformer des procédures répétitives en outils testables, journalisés et réutilisables.",
        tags: ["PowerShell", "Bash", "Ansible", "Atera"]
      },
      {
        context: "Alternance",
        title: "Microsoft 365",
        description: "Administrer les identités, la messagerie et les groupes dans un environnement professionnel.",
        tags: ["Exchange Online", "Entra ID", "Groupes", "Alias"]
      },
      {
        context: "Alternance + formation",
        title: "Supervision et diagnostic",
        description: "Collecter des informations, interpréter les journaux et isoler méthodiquement la cause d’un incident.",
        tags: ["Atera", "Wireshark", "Logs", "Monitoring"]
      }
    ]
  },
  en: {
    page_title: "Loïc VIDAL-FERRASSE | Networks, systems & cybersecurity",
    nav_profile: "Profile",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_cyber: "Cyber lab",
    nav_watch: "Monitoring",
    nav_contact: "Contact",
    hero_eyebrow: "Networks & Telecom • Cybersecurity • Work-study",
    hero_title: "I administer, automate, and secure digital environments.",
    hero_intro:
      "Third-year Network & Telecommunications student specializing in cybersecurity and work-study IT support technician at XEFI Narbonne.",
    hero_btn_projects: "Explore my work",
    hero_btn_tryhackme: "View my TryHackMe profile",
    hero_status: "Continuously learning",
    hero_role: "IT support technician • Cyber student",
    proof_year_value: "Third year",
    proof_year_label: "Network & Telecommunications degree",
    proof_work_label: "Work-study at XEFI Narbonne",
    proof_thm_label: "Practice on TryHackMe",
    proof_track_label: "Specialization track",
    profile_kicker: "My profile",
    profile_title: "Progress built through education and field experience",
    profile_text_1:
      "My path combines the knowledge acquired during my Network & Telecommunications degree with assignments completed in a professional environment. This balance helps me understand infrastructure, work methodically, and document implemented solutions.",
    profile_text_2:
      "I am particularly interested in Windows and Linux administration, recurring-task automation, service security, and client-environment monitoring.",
    principle_1_title: "Understand",
    principle_1_text: "Analyze the need and current state before taking action.",
    principle_2_title: "Make reliable",
    principle_2_text: "Test, log, and make the solution repeatable.",
    principle_3_title: "Share",
    principle_3_text: "Document clearly to make maintenance easier.",
    projects_kicker: "Selected work",
    projects_title: "Projects connected to real needs",
    projects_subtitle: "Professional, academic, and personal projects documented as case studies.",
    projects_search_label: "Search projects",
    projects_search_placeholder: "Search a project or technology...",
    projects_filter_all: "All",
    projects_empty: "No project matches this search.",
    projects_view: "View case study →",
    experience_kicker: "Experience",
    experience_title: "Work-study at XEFI Narbonne",
    experience_intro: "Hands-on experience across varied client needs and infrastructures.",
    experience_contract: "Work-study",
    experience_role: "IT support technician",
    experience_text:
      "I help prepare, administer, secure, and troubleshoot professional IT environments, with particular attention to action tracking and service continuity.",
    skills_kicker: "Skills",
    skills_title: "Skills supported by practice",
    skills_intro: "Every area is tied to a real context: work-study, education, or a personal lab.",
    cyber_kicker: "Cyber lab",
    cyber_title: "Regular hands-on practice on TryHackMe",
    cyber_intro: "Labs used to strengthen my knowledge and practice tools in an authorized environment.",
    thm_profile_text: "Personal practice averaging around five sessions per week.",
    thm_profile_link: "Open public profile ↗",
    thm_rank: "Rank",
    thm_points: "points",
    thm_updated: "Updated on",
    thm_tab_rooms: "Selected rooms",
    thm_tab_paths: "Learning paths",
    thm_tab_badges: "Badges",
    thm_badge_earned: "Earned",
    thm_certificate_link: "View certificate (PDF) ↗",
    thm_certificate_alt: "Preview of SnowPeakPro's TryHackMe Pre Security certificate",
    thm_certificate_id: "Certificate ID",
    watch_kicker: "Technology monitoring",
    watch_title: "Following, checking, and understanding cyber news",
    watch_intro: "My current monitoring is based on institutional organizations and specialist content creators.",
    watch_step_1: "Collect",
    watch_step_1_text: "Identify topics, alerts, and new practices.",
    watch_step_2: "Cross-check",
    watch_step_2_text: "Compare several sources before retaining information.",
    watch_step_3: "Summarize",
    watch_step_3_text: "Keep useful information and its technical impact.",
    watch_sources_label: "Followed sources",
    watch_institutions: "Institutional organizations",
    watch_channels: "Specialist channels",
    education_kicker: "Background",
    education_title: "Education",
    education_but_title: "Network & Telecommunications degree",
    education_but_text: "IUT of Béziers • Third year • Cybersecurity track",
    education_bac_title: "French general baccalaureate",
    education_bac_text: "Mathematics, Computer Science, and Advanced Mathematics • Honors",
    certs_kicker: "Progress",
    certs_title: "Certificates and goals",
    certs_earned_group: "Earned certificates",
    certs_planned_group: "In progress or planned",
    contact_kicker: "Contact",
    contact_title: "Let’s discuss a project or opportunity",
    contact_text: "I am available to discuss networks, system administration, automation, and cybersecurity.",
    footer_text: "Built to document real progress.",
    footer_top: "Back to top ↑",
    project_back: "← Back to projects",
    project_not_found_title: "Project not found",
    project_not_found_text: "The requested project does not exist or the link is invalid.",
    project_fact_type: "Context",
    project_fact_status: "Status",
    project_fact_date: "Period",
    project_context: "Context",
    project_objectives: "Objectives",
    project_actions: "Work completed or prepared",
    project_results: "Results and current status",
    project_challenges: "Technical challenges",
    project_next: "Next steps",
    project_evidence: "Related evidence",
    project_technologies: "Technologies",
    categories: {
      Automatisation: "Automation",
      Systèmes: "Systems",
      Cybersécurité: "Cybersecurity",
      Réseaux: "Networking"
    },
    missions: [
      {
        code: "SYS / SUPPORT",
        title: "Administration and troubleshooting",
        text: "Workstation and server preparation, incident diagnosis, and technical intervention tracking."
      },
      {
        code: "M365 / EXO",
        title: "Microsoft 365 services",
        text: "Account, alias, distribution-group, and Exchange Online administration."
      },
      {
        code: "SEC / SOPHOS",
        title: "Environment security",
        text: "Deployment, configuration, and validation of Sophos Endpoint, Central, and firewall solutions."
      },
      {
        code: "RMM / SCRIPT",
        title: "Automation and monitoring",
        text: "PowerShell scripts, inventory collection, preventive checks, and Atera automation."
      }
    ],
    skills: [
      {
        context: "Work-study + education",
        title: "System administration",
        description: "Install, configure, troubleshoot, and maintain Windows and Linux environments.",
        tags: ["Windows Server", "Linux", "Services", "VMware"]
      },
      {
        context: "Education + lab",
        title: "Networking",
        description: "Design segmentation, configure equipment, and analyze communications.",
        tags: ["IPv4/IPv6", "VLAN", "Routing", "STP"]
      },
      {
        context: "Education + TryHackMe",
        title: "Cybersecurity",
        description: "Apply filtering, hardening, encryption, and a structured analysis process.",
        tags: ["nftables", "OpenVPN", "PKI", "Hardening"]
      },
      {
        context: "Work-study + projects",
        title: "Scripting and automation",
        description: "Turn repetitive procedures into testable, logged, and reusable tools.",
        tags: ["PowerShell", "Bash", "Ansible", "Atera"]
      },
      {
        context: "Work-study",
        title: "Microsoft 365",
        description: "Administer identities, messaging, and groups in a professional environment.",
        tags: ["Exchange Online", "Entra ID", "Groups", "Aliases"]
      },
      {
        context: "Work-study + education",
        title: "Monitoring and diagnosis",
        description: "Collect information, interpret logs, and isolate incident causes methodically.",
        tags: ["Atera", "Wireshark", "Logs", "Monitoring"]
      }
    ]
  }
};

let currentLang = localStorage.getItem(LANG_KEY) || "fr";
let selectedCategory = "all";
let searchTerm = "";
let revealObserver = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function languageValue(item, key) {
  return item[`${key}_${currentLang}`] ?? item[key] ?? "";
}

function projectCopy(project) {
  return project.copy[currentLang] || project.copy.fr;
}

function categoryLabel(category) {
  return I18N[currentLang].categories[category] || category;
}

function createTags(tags = []) {
  return `<ul class="tag-list">${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>`;
}

function applyTranslations() {
  const dict = I18N[currentLang];
  document.documentElement.lang = currentLang;

  $$('[data-i18n]').forEach((element) => {
    const value = dict[element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });

  $$('[data-i18n-placeholder]').forEach((element) => {
    const value = dict[element.dataset.i18nPlaceholder];
    if (value) element.setAttribute("placeholder", value);
  });

  const langToggle = $("#lang-toggle");
  if (langToggle) {
    langToggle.textContent = currentLang === "fr" ? "EN" : "FR";
    langToggle.setAttribute(
      "aria-label",
      currentLang === "fr" ? "Afficher le site en anglais" : "Display the website in French"
    );
  }

  if (document.body.dataset.page === "home") document.title = dict.page_title;
}

function renderProjects() {
  const container = $("#projects-grid");
  if (!container) return;

  const normalizedSearch = searchTerm.toLocaleLowerCase(currentLang);
  const filtered = PROJECTS.filter((project) => {
    const copy = projectCopy(project);
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const index = [copy.title, copy.short, copy.status, copy.type, ...project.technologies]
      .join(" ")
      .toLocaleLowerCase(currentLang);
    return matchesCategory && index.includes(normalizedSearch);
  });

  if (!filtered.length) {
    container.innerHTML = `<div class="empty-state">${I18N[currentLang].projects_empty}</div>`;
    return;
  }

  container.innerHTML = filtered
    .map((project) => {
      const copy = projectCopy(project);
      return `
        <article class="project-card reveal">
          <div class="project-visual tone-${project.tone}" aria-hidden="true"><span>${project.visual}</span></div>
          <div class="project-content">
            <div class="project-topline">
              <span class="project-category">${categoryLabel(project.category)}</span>
              <span class="project-status">${copy.status}</span>
            </div>
            <h3>${copy.title}</h3>
            <p>${copy.short}</p>
            ${createTags(project.technologies.slice(0, 4))}
            <a class="text-link" href="project.html?slug=${encodeURIComponent(project.slug)}">${I18N[currentLang].projects_view}</a>
          </div>
        </article>`;
    })
    .join("");

  observeReveals(container);
}

function renderProjectFilters() {
  const container = $("#project-filters");
  if (!container) return;

  const categories = ["all", ...PROJECT_CATEGORIES];
  container.innerHTML = categories
    .map((category) => {
      const label = category === "all" ? I18N[currentLang].projects_filter_all : categoryLabel(category);
      const active = selectedCategory === category;
      return `<button class="filter-btn${active ? " active" : ""}" type="button" data-category="${category}" aria-pressed="${active}">${label}</button>`;
    })
    .join("");

  $$(".filter-btn", container).forEach((button) => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;
      renderProjectFilters();
      renderProjects();
    });
  });
}

function renderMissions() {
  const container = $("#mission-grid");
  if (!container) return;
  container.innerHTML = I18N[currentLang].missions
    .map(
      (mission) => `
        <article class="mission-card reveal">
          <span class="mission-code">${mission.code}</span>
          <h3>${mission.title}</h3>
          <p>${mission.text}</p>
        </article>`
    )
    .join("");
  observeReveals(container);
}

function renderSkills() {
  const container = $("#skills-grid");
  if (!container) return;
  container.innerHTML = I18N[currentLang].skills
    .map(
      (skill) => `
        <article class="skill-card reveal">
          <span class="skill-context">${skill.context}</span>
          <h3>${skill.title}</h3>
          <p>${skill.description}</p>
          ${createTags(skill.tags)}
        </article>`
    )
    .join("");
  observeReveals(container);
}

function renderTryHackMe() {
  const stats = $("#thm-stats");
  const rooms = $("#panel-rooms");
  const paths = $("#panel-paths");
  const badges = $("#panel-badges");
  const rank = $("#thm-rank");
  const points = $("#thm-points");
  const updated = $("#thm-updated");
  if (!stats || !rooms || !paths || !badges) return;

  if (rank) rank.textContent = `${I18N[currentLang].thm_rank} ${TRYHACKME_DATA.rank}`;
  if (points) points.textContent = `${TRYHACKME_DATA.points.toLocaleString(currentLang === "fr" ? "fr-FR" : "en-US")} ${I18N[currentLang].thm_points}`;
  if (updated) {
    const updatedAt = currentLang === "en" ? TRYHACKME_DATA.updatedAt_en : TRYHACKME_DATA.updatedAt;
    updated.textContent = `${I18N[currentLang].thm_updated} ${updatedAt}`;
    updated.dateTime = TRYHACKME_DATA.updatedAtISO;
  }

  stats.innerHTML = TRYHACKME_DATA.stats
    .map(
      (stat) => `
        <article class="thm-stat">
          <strong>${currentLang === "en" && stat.value_en ? stat.value_en : stat.value}</strong>
          <span>${languageValue(stat, "label")}</span>
        </article>`
    )
    .join("");

  rooms.innerHTML = `<div class="room-grid">${TRYHACKME_DATA.rooms
    .map(
      (room) => `
        <article class="room-card">
          <div class="room-head">
            <span class="room-code">${room.code}</span>
            <span class="room-status">${languageValue(room, "status")}</span>
          </div>
          <h3>${room.name}</h3>
          <p class="room-category">${languageValue(room, "category")}</p>
          <p>${languageValue(room, "learning")}</p>
          ${createTags(currentLang === "en" && room.tools_en ? room.tools_en : room.tools)}
        </article>`
    )
    .join("")}</div>`;

  paths.innerHTML = `<div class="path-grid">${TRYHACKME_DATA.paths
    .map((path) => {
      const facts = path.facts
        ? `<div class="path-facts">${path.facts
            .map(
              (fact) => `
                <div><strong>${fact.value}</strong><span>${languageValue(fact, "label")}</span></div>`
            )
            .join("")}</div>`
        : "";
      const certificate = path.certificateUrl
        ? `
          <a class="path-certificate-preview" href="${path.certificateUrl}" target="_blank" rel="noopener noreferrer">
            <img src="${path.certificatePreview}" alt="${I18N[currentLang].thm_certificate_alt}" loading="lazy" width="993" height="703">
          </a>`
        : "";
      const certificateLink = path.certificateUrl
        ? `
          <div class="path-certificate-actions">
            <a class="text-link" href="${path.certificateUrl}" target="_blank" rel="noopener noreferrer">${I18N[currentLang].thm_certificate_link}</a>
            <span>${I18N[currentLang].thm_certificate_id} : ${path.certificateId}</span>
          </div>`
        : "";
      return `
        <article class="path-card ${path.verified ? "path-card--verified" : ""}">
          ${certificate}
          <div class="path-card-content">
            <div class="path-topline"><h3>${path.name}</h3><span class="path-status ${path.verified ? "verified" : ""}">${languageValue(path, "status")}</span></div>
            <p>${languageValue(path, "description")}</p>
            ${facts}
            <div class="progress-track" aria-label="${path.name} : ${path.progress}%"><div class="progress-bar" style="width:${path.progress}%"></div></div>
            <span class="progress-label">${path.progress}%${path.verified ? "" : " *"}</span>
            ${certificateLink}
          </div>
        </article>`;
    })
    .join("")}</div>`;

  badges.innerHTML = `<div class="badge-grid">${TRYHACKME_DATA.badges
    .map(
      (badge) => `
        <article class="badge-card">
          <div class="badge-head"><span class="badge-code" aria-hidden="true">${badge.code}</span><span class="badge-status">${I18N[currentLang].thm_badge_earned}</span></div>
          <h3>${languageValue(badge, "name")}</h3>
          <p>${languageValue(badge, "description")}</p>
        </article>`
    )
    .join("")}</div>`;
}

function renderSources() {
  const institutionContainer = $("#institution-list");
  const channelContainer = $("#channel-list");
  if (!institutionContainer || !channelContainer) return;

  const render = (items) =>
    items
      .map(
        (item) => `
          <a class="source-item" href="${item.url}" target="_blank" rel="noopener noreferrer">
            <span class="source-code" aria-hidden="true">${item.code}</span>
            <div><strong>${item.name}</strong><p>${languageValue(item, "description")}</p></div>
            <span class="source-arrow" aria-hidden="true">↗</span>
          </a>`
      )
      .join("");

  institutionContainer.innerHTML = render(WATCH_DATA.institutions);
  channelContainer.innerHTML = render(WATCH_DATA.channels);
}

function renderCertifications() {
  const container = $("#certifications-list");
  if (!container) return;

  const renderItems = (certifications) =>
    certifications.map(
      (certification) => `
      <div class="certification-item certification-item--${certification.type}">
        <div class="certification-copy">
          <strong>${certification.name}</strong>
          ${certification.meta_fr ? `<span>${languageValue(certification, "meta")}</span>` : ""}
          ${
            certification.url
              ? `<a href="${certification.url}" target="_blank" rel="noopener noreferrer">${languageValue(certification, "linkLabel")}</a>`
              : ""
          }
        </div>
        <span class="certification-status ${certification.type}">${languageValue(certification, "status")}</span>
      </div>`
    ).join("");

  const groups = [
    {
      key: "earned",
      title: I18N[currentLang].certs_earned_group,
      items: CERTIFICATION_DATA.filter((certification) => certification.type === "earned")
    },
    {
      key: "planned",
      title: I18N[currentLang].certs_planned_group,
      items: CERTIFICATION_DATA.filter((certification) => certification.type !== "earned")
    }
  ];

  container.innerHTML = groups
    .filter((group) => group.items.length)
    .map(
      (group) => `
        <section class="certification-group certification-group--${group.key}">
          <h3>${group.title}</h3>
          <div class="certification-group-list">${renderItems(group.items)}</div>
        </section>`
    )
    .join("");
}

function listMarkup(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderProjectDetail() {
  const container = $("#project-detail");
  if (!container) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    container.innerHTML = `
      <div class="not-found">
        <h1>${I18N[currentLang].project_not_found_title}</h1>
        <p>${I18N[currentLang].project_not_found_text}</p>
        <a class="btn btn-secondary" href="index.html#projects">${I18N[currentLang].project_back}</a>
      </div>`;
    return;
  }

  const copy = projectCopy(project);
  document.title = `${copy.title} | Loïc VIDAL-FERRASSE`;
  const backLink = $("#project-back");
  if (backLink) backLink.textContent = I18N[currentLang].project_back;

  container.innerHTML = `
    <article class="project-detail">
      <header class="project-detail-hero reveal">
        <div class="project-visual tone-${project.tone}" aria-hidden="true"><span>${project.visual}</span></div>
        <div class="project-detail-copy">
          <div class="project-topline">
            <span class="project-category">${categoryLabel(project.category)}</span>
            <span class="project-status">${copy.status}</span>
          </div>
          <h1>${copy.title}</h1>
          <p>${copy.short}</p>
          ${createTags(project.technologies)}
        </div>
      </header>

      <dl class="project-facts reveal">
        <div><dt>${I18N[currentLang].project_fact_type}</dt><dd>${copy.type}</dd></div>
        <div><dt>${I18N[currentLang].project_fact_status}</dt><dd>${copy.status}</dd></div>
        <div><dt>${I18N[currentLang].project_fact_date}</dt><dd>${project.date}</dd></div>
      </dl>

      <div class="project-story-grid">
        <section class="story-card story-card--wide reveal"><h2>${I18N[currentLang].project_context}</h2><p>${copy.context}</p></section>
        <section class="story-card reveal"><h2>${I18N[currentLang].project_objectives}</h2>${listMarkup(copy.objectives)}</section>
        <section class="story-card reveal"><h2>${I18N[currentLang].project_actions}</h2>${listMarkup(copy.actions)}</section>
        <section class="story-card reveal"><h2>${I18N[currentLang].project_results}</h2>${listMarkup(copy.results)}</section>
        <section class="story-card reveal"><h2>${I18N[currentLang].project_challenges}</h2>${listMarkup(copy.challenges)}</section>
        <section class="story-card reveal"><h2>${I18N[currentLang].project_next}</h2>${listMarkup(copy.nextSteps)}</section>
        <section class="story-card reveal"><h2>${I18N[currentLang].project_evidence}</h2>${listMarkup(copy.evidence)}</section>
        <section class="story-card story-card--wide reveal"><h2>${I18N[currentLang].project_technologies}</h2>${createTags(project.technologies)}</section>
      </div>
    </article>`;

  observeReveals(container);
}

function setupProjectSearch() {
  const input = $("#project-search");
  if (!input) return;
  input.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderProjects();
  });
}

function setupCyberTabs() {
  const tabs = $$(".cyber-tab");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
        const panel = $(`#panel-${item.dataset.panel}`);
        if (panel) panel.hidden = !active;
      });
    });

    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const offset = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (tabs.indexOf(tab) + offset + tabs.length) % tabs.length;
      tabs[nextIndex].focus();
      tabs[nextIndex].click();
    });
  });
}

function setupNavigation() {
  const toggle = $(".nav-toggle");
  const nav = $("#main-nav");
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", currentLang === "fr" ? "Ouvrir le menu" : "Open menu");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? (currentLang === "fr" ? "Fermer le menu" : "Close menu") : currentLang === "fr" ? "Ouvrir le menu" : "Open menu"
    );
  });

  $$("a", nav).forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      close();
      toggle.focus();
    }
  });
}

function setupActiveNavigation() {
  if (document.body.dataset.page !== "home" || !("IntersectionObserver" in window)) return;
  const links = $$("#main-nav a[href^='#']");
  const sections = links.map((link) => $(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
  );
  sections.forEach((section) => observer.observe(section));
}

function observeReveals(root = document) {
  const elements = $$(".reveal:not(.visible)", root);
  if (!elements.length) return;

  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px" }
    );
  }

  elements.forEach((element) => revealObserver.observe(element));
}

function setupLanguageToggle() {
  const button = $("#lang-toggle");
  if (!button) return;
  button.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    localStorage.setItem(LANG_KEY, currentLang);
    applyTranslations();
    renderProjectFilters();
    renderProjects();
    renderMissions();
    renderSkills();
    renderTryHackMe();
    renderSources();
    renderCertifications();
    renderProjectDetail();
    observeReveals();
  });
}

function setupBackToTop() {
  const button = $("#back-to-top");
  if (!button) return;
  const update = () => button.classList.toggle("show", window.scrollY > 500);
  window.addEventListener("scroll", update, { passive: true });
  update();
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupFooterYear() {
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

function init() {
  if (!["fr", "en"].includes(currentLang)) currentLang = "fr";

  applyTranslations();
  renderProjectFilters();
  renderProjects();
  renderMissions();
  renderSkills();
  renderTryHackMe();
  renderSources();
  renderCertifications();
  renderProjectDetail();

  setupNavigation();
  setupActiveNavigation();
  setupLanguageToggle();
  setupProjectSearch();
  setupCyberTabs();
  setupBackToTop();
  setupFooterYear();
  observeReveals();
}

document.addEventListener("DOMContentLoaded", init);
