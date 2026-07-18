/*
 * CONTENU PROVISOIRE
 * -------------------
 * Les statistiques, rooms, parcours, badges et statuts de certification de ce
 * fichier sont des valeurs de démonstration. Ils seront remplacés par les
 * informations réelles fournies par Loïc avant la publication définitive.
 */

const TRYHACKME_DATA = {
  username: "SnowPeakPro",
  profileUrl: "https://tryhackme.com/p/SnowPeakPro",
  updatedAt: "18/07/2026",
  stats: [
    { value: "48", label_fr: "rooms terminées", label_en: "completed rooms" },
    { value: "8", label_fr: "badges obtenus", label_en: "earned badges" },
    { value: "Top 15 %", label_fr: "classement global", label_en: "global ranking" },
    { value: "27 jours", value_en: "27 days", label_fr: "meilleure série", label_en: "best streak" }
  ],
  rooms: [
    {
      name: "Nmap: The Basics",
      code: "NMAP",
      date: "Juillet 2026*",
      date_en: "July 2026*",
      category_fr: "Réseau et reconnaissance",
      category_en: "Networking and reconnaissance",
      learning_fr: "Découverte des hôtes, analyse des ports et interprétation des résultats de scan.",
      learning_en: "Host discovery, port analysis, and scan result interpretation.",
      tools: ["Nmap", "TCP/IP", "Linux"]
    },
    {
      name: "Active Directory Basics",
      code: "AD",
      date: "Juillet 2026*",
      date_en: "July 2026*",
      category_fr: "Windows et identités",
      category_en: "Windows and identity",
      learning_fr: "Organisation d’un domaine, objets Active Directory, authentification et stratégies de groupe.",
      learning_en: "Domain organization, Active Directory objects, authentication, and Group Policy.",
      tools: ["AD DS", "Kerberos", "GPO"]
    },
    {
      name: "Linux PrivEsc",
      code: "LPE",
      date: "Juin 2026*",
      date_en: "June 2026*",
      category_fr: "Linux et élévation de privilèges",
      category_en: "Linux and privilege escalation",
      learning_fr: "Recherche de mauvaises configurations, permissions sensibles et chemins d’élévation locaux.",
      learning_en: "Finding misconfigurations, sensitive permissions, and local escalation paths.",
      tools: ["Linux", "Bash", "SUID"]
    },
    {
      name: "OWASP Top 10 – 2021",
      code: "WEB",
      date: "Juin 2026*",
      date_en: "June 2026*",
      category_fr: "Sécurité des applications Web",
      category_en: "Web application security",
      learning_fr: "Compréhension des principales familles de vulnérabilités Web et de leurs remédiations.",
      learning_en: "Understanding major web vulnerability families and their remediation.",
      tools: ["HTTP", "Burp Suite", "OWASP"]
    },
    {
      name: "Splunk: Exploring SPL",
      code: "SPL",
      date: "Mai 2026*",
      date_en: "May 2026*",
      category_fr: "Blue Team et analyse de journaux",
      category_en: "Blue Team and log analysis",
      learning_fr: "Création de recherches SPL pour filtrer, corréler et interpréter des événements de sécurité.",
      learning_en: "Writing SPL searches to filter, correlate, and interpret security events.",
      tools: ["Splunk", "SPL", "Logs"]
    },
    {
      name: "Windows Forensics 1",
      code: "DFIR",
      date: "Mai 2026*",
      date_en: "May 2026*",
      category_fr: "Investigation numérique",
      category_en: "Digital forensics",
      learning_fr: "Identification d’artefacts Windows utiles pour reconstruire une activité sur un poste.",
      learning_en: "Identifying Windows artifacts used to reconstruct activity on a workstation.",
      tools: ["Windows", "Registry", "Event Logs"]
    }
  ],
  paths: [
    {
      name: "Pre Security",
      progress: 100,
      status_fr: "Terminé*",
      status_en: "Completed*",
      description_fr: "Fondamentaux réseau, Web, Linux et Windows.",
      description_en: "Networking, web, Linux, and Windows fundamentals."
    },
    {
      name: "Cyber Security 101",
      progress: 72,
      status_fr: "En cours*",
      status_en: "In progress*",
      description_fr: "Vue d’ensemble des métiers, techniques et outils cyber.",
      description_en: "Overview of cybersecurity roles, techniques, and tools."
    },
    {
      name: "Jr Penetration Tester",
      progress: 46,
      status_fr: "En cours*",
      status_en: "In progress*",
      description_fr: "Méthodologie de test d’intrusion et exploitation encadrée.",
      description_en: "Penetration-testing methodology and guided exploitation."
    },
    {
      name: "SOC Level 1",
      progress: 31,
      status_fr: "En cours*",
      status_en: "In progress*",
      description_fr: "Analyse de journaux, détection et traitement d’alertes.",
      description_en: "Log analysis, detection, and alert handling."
    }
  ],
  badges: [
    {
      code: "NET",
      name_fr: "Networking",
      name_en: "Networking",
      description_fr: "Fondamentaux réseau et analyse des services exposés.",
      description_en: "Networking fundamentals and exposed-service analysis."
    },
    {
      code: "LNX",
      name_fr: "Linux",
      name_en: "Linux",
      description_fr: "Navigation, permissions et administration de base.",
      description_en: "Navigation, permissions, and basic administration."
    },
    {
      code: "WEB",
      name_fr: "Web Security",
      name_en: "Web Security",
      description_fr: "Vulnérabilités Web courantes et principes de remédiation.",
      description_en: "Common web vulnerabilities and remediation principles."
    },
    {
      code: "AD",
      name_fr: "Active Directory",
      name_en: "Active Directory",
      description_fr: "Identités, authentification et environnement de domaine.",
      description_en: "Identity, authentication, and domain environments."
    },
    {
      code: "BT",
      name_fr: "Blue Team",
      name_en: "Blue Team",
      description_fr: "Collecte, recherche et analyse d’événements de sécurité.",
      description_en: "Security event collection, search, and analysis."
    },
    {
      code: "PT",
      name_fr: "Pentesting",
      name_en: "Pentesting",
      description_fr: "Reconnaissance, énumération et méthodologie d’audit.",
      description_en: "Reconnaissance, enumeration, and audit methodology."
    }
  ]
};

const WATCH_DATA = {
  institutions: [
    {
      name: "ANSSI",
      code: "AN",
      url: "https://cyber.gouv.fr/",
      description_fr: "Recommandations, guides et publications de référence en cybersécurité.",
      description_en: "Reference cybersecurity recommendations, guides, and publications."
    },
    {
      name: "CERT-FR",
      code: "CF",
      url: "https://www.cert.ssi.gouv.fr/",
      description_fr: "Alertes, avis de sécurité et bulletins sur les vulnérabilités actives.",
      description_en: "Alerts, security advisories, and active-vulnerability bulletins."
    },
    {
      name: "CISA",
      code: "CI",
      url: "https://www.cisa.gov/",
      description_fr: "Alertes internationales et catalogue des vulnérabilités exploitées.",
      description_en: "International alerts and known-exploited-vulnerability catalog."
    },
    {
      name: "CNIL",
      code: "CN",
      url: "https://www.cnil.fr/",
      description_fr: "Protection des données, cadre réglementaire et bonnes pratiques RGPD.",
      description_en: "Data protection, regulatory guidance, and GDPR best practices."
    },
    {
      name: "ENISA",
      code: "EU",
      url: "https://www.enisa.europa.eu/",
      description_fr: "Rapports européens sur les menaces, les risques et la résilience numérique.",
      description_en: "European reports on threats, risks, and digital resilience."
    }
  ],
  channels: [
    {
      name: "Fransosiche",
      code: "FR",
      url: "https://www.youtube.com/@Fransosiche",
      description_fr: "Pentest, OSINT, métiers et retours d’expérience cyber.",
      description_en: "Pentesting, OSINT, cybersecurity roles, and field experience."
    },
    {
      name: "Hafnium – Sécurité informatique",
      code: "HF",
      url: "https://www.youtube.com/@HafniumSecuriteInformatique",
      description_fr: "Démonstrations techniques et explications accessibles sur la sécurité.",
      description_en: "Accessible technical demonstrations and security explanations."
    },
    {
      name: "Parlons Cyber",
      code: "PC",
      url: "https://www.youtube.com/@ParlonsCyber",
      description_fr: "Outils, OSINT, Linux et sensibilisation à la cybersécurité.",
      description_en: "Tools, OSINT, Linux, and cybersecurity awareness."
    },
    {
      name: "HackinGeeK",
      code: "HG",
      url: "https://www.youtube.com/hackingeek",
      description_fr: "Hacking éthique, CTF, systèmes et méthodologie pour progresser.",
      description_en: "Ethical hacking, CTFs, systems, and learning methodology."
    },
    {
      name: "The Cyber Mentor",
      code: "TCM",
      url: "https://www.youtube.com/@TCMSecurityAcademy",
      description_fr: "Formations pratiques en pentest, Active Directory et sécurité offensive.",
      description_en: "Practical pentesting, Active Directory, and offensive-security training."
    },
    {
      name: "overfl0w",
      code: "OF",
      url: "https://www.youtube.com/@overfl-0-w",
      description_fr: "Culture informatique, sécurité et compréhension des technologies.",
      description_en: "IT culture, security, and technology explanations."
    }
  ]
};

const CERTIFICATION_DATA = [
  {
    name: "Cisco Introduction to Cybersecurity",
    status_fr: "À confirmer",
    status_en: "To confirm",
    type: "pending"
  },
  {
    name: "Fortinet NSE 1",
    status_fr: "Objectif provisoire",
    status_en: "Provisional goal",
    type: "goal"
  },
  {
    name: "Fortinet NSE 2",
    status_fr: "Objectif provisoire",
    status_en: "Provisional goal",
    type: "goal"
  },
  {
    name: "Fortinet NSE 3",
    status_fr: "Objectif provisoire",
    status_en: "Provisional goal",
    type: "goal"
  },
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    status_fr: "Envisagée",
    status_en: "Considered",
    type: "considered"
  }
];
