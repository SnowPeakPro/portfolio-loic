/*
 * DONNÉES TRYHACKME
 * -----------------
 * Les statistiques, rooms et badges ci-dessous ont été vérifiés à partir du
 * profil public SnowPeakPro le 28/07/2026. Les informations du parcours
 * Pre Security sont également confirmées par le certificat obtenu le 21/07/2026.
 */

const TRYHACKME_DATA = {
  username: "SnowPeakPro",
  profileUrl: "https://tryhackme.com/p/SnowPeakPro",
  updatedAt: "28/07/2026",
  updatedAt_en: "28 July 2026",
  updatedAtISO: "2026-07-28",
  rank: "[0x8][HACKER]",
  globalRank: 247857,
  topPercent: 10,
  points: 4339,
  stats: [
    {
      value: "54",
      label_fr: "rooms terminées",
      label_en: "completed rooms"
    },
    {
      value: "7",
      label_fr: "badges obtenus",
      label_en: "earned badges"
    },
    {
      value: "19 jours",
      value_en: "19 days",
      label_fr: "série actuelle",
      label_en: "current streak"
    },
    {
      value: "19 jours",
      value_en: "19 days",
      label_fr: "meilleure série",
      label_en: "best streak"
    }
  ],
  rooms: [
    {
      name: "Linux Fundamentals Parts 1–3",
      code: "LNX",
      status_fr: "3 rooms terminées",
      status_en: "3 rooms completed",
      category_fr: "Linux et ligne de commande",
      category_en: "Linux and command line",
      learning_fr: "Utilisation du terminal Linux, navigation dans les fichiers et découverte d’utilitaires courants.",
      learning_en: "Using the Linux terminal, navigating files, and discovering common utilities.",
      tools: ["Linux", "CLI", "Shell"],
      tools_en: ["Linux", "CLI", "Shell"]
    },
    {
      name: "What is Networking?",
      code: "NET",
      status_fr: "Terminée",
      status_en: "Completed",
      category_fr: "Fondamentaux réseau",
      category_en: "Networking fundamentals",
      learning_fr: "Compréhension des bases d’un réseau informatique et de la communication entre équipements.",
      learning_en: "Understanding computer-network fundamentals and communication between devices.",
      tools: ["Réseau", "TCP/IP", "Topologies"],
      tools_en: ["Networking", "TCP/IP", "Topologies"]
    },
    {
      name: "DNS in Detail",
      code: "DNS",
      status_fr: "Terminée",
      status_en: "Completed",
      category_fr: "Services réseau",
      category_en: "Network services",
      learning_fr: "Fonctionnement du DNS et rôle de la résolution de noms pour accéder aux services Internet.",
      learning_en: "How DNS works and how name resolution provides access to Internet services.",
      tools: ["DNS", "Résolution de noms", "Internet"],
      tools_en: ["DNS", "Name resolution", "Internet"]
    },
    {
      name: "HTTP in Detail",
      code: "HTTP",
      status_fr: "Terminée",
      status_en: "Completed",
      category_fr: "Protocoles Web",
      category_en: "Web protocols",
      learning_fr: "Structure d’une requête HTTP et échanges entre un client Web et un serveur.",
      learning_en: "HTTP request structure and exchanges between a web client and a server.",
      tools: ["HTTP", "Requêtes", "Web"],
      tools_en: ["HTTP", "Requests", "Web"]
    },
    {
      name: "Operating System Security",
      code: "OS",
      status_fr: "Terminée",
      status_en: "Completed",
      category_fr: "Sécurité des systèmes",
      category_en: "Operating-system security",
      learning_fr: "Gestion des utilisateurs, sécurité d’un système d’exploitation et authentification SSH sous Linux.",
      learning_en: "User management, operating-system security, and SSH authentication on Linux.",
      tools: ["Linux", "SSH", "Comptes"],
      tools_en: ["Linux", "SSH", "Accounts"]
    },
    {
      name: "John the Ripper: The Basics",
      code: "JTR",
      status_fr: "Terminée",
      status_en: "Completed",
      category_fr: "Audit de mots de passe",
      category_en: "Password auditing",
      learning_fr: "Prise en main de John the Ripper pour tester la robustesse de mots de passe et de passphrases avec une wordlist, notamment après conversion d’une clé privée SSH avec ssh2john.",
      learning_en: "Using John the Ripper to test password and passphrase strength with a wordlist, including after converting an SSH private key with ssh2john.",
      tools: ["John the Ripper", "rockyou.txt", "ssh2john"],
      tools_en: ["John the Ripper", "rockyou.txt", "ssh2john"]
    },
    {
      name: "Web Application Security",
      code: "WAS",
      status_fr: "Terminée",
      status_en: "Completed",
      category_fr: "Sécurité Web",
      category_en: "Web security",
      learning_fr: "Fonctionnement des applications Web et introduction aux problèmes de sécurité courants.",
      learning_en: "How web applications work and an introduction to common security issues.",
      tools: ["Applications Web", "Vulnérabilités", "Sécurité"],
      tools_en: ["Web applications", "Vulnerabilities", "Security"]
    },
    {
      name: "Cryptography Concepts",
      code: "CRY",
      status_fr: "Terminée",
      status_en: "Completed",
      category_fr: "Cryptographie",
      category_en: "Cryptography",
      learning_fr: "Compréhension du rôle de la cryptographie dans les usages numériques quotidiens.",
      learning_en: "Understanding the role of cryptography in everyday digital use.",
      tools: ["Confidentialité", "Intégrité", "Cryptographie"],
      tools_en: ["Confidentiality", "Integrity", "Cryptography"]
    },
    {
      name: "Defensive Security Intro",
      code: "BLUE",
      status_fr: "Terminée",
      status_en: "Completed",
      category_fr: "Sécurité défensive",
      category_en: "Defensive security",
      learning_fr: "Introduction à la Threat Intelligence, au SOC, au DFIR, à l’analyse de malwares et au SIEM.",
      learning_en: "Introduction to Threat Intelligence, SOC, DFIR, malware analysis, and SIEM.",
      tools: ["SOC", "DFIR", "SIEM"],
      tools_en: ["SOC", "DFIR", "SIEM"]
    }
  ],
  paths: [
    {
      name: "Pre Security",
      progress: 100,
      status_fr: "Terminé le 21/07/2026",
      status_en: "Completed on 21 July 2026",
      description_fr:
        "Parcours d'introduction couvrant le fonctionnement d'un ordinateur, les premières lignes de code, les bases des réseaux et du Web, ainsi que les principes d'attaque et de défense.",
      description_en:
        "Introductory learning path covering how computers work, first lines of code, networking and web fundamentals, and attacker and defender principles.",
      facts: [
        { value: "19 h 10", label_fr: "de formation", label_en: "of learning" },
        { value: "7", label_fr: "modules", label_en: "modules" },
        { value: "31", label_fr: "laboratoires pratiques", label_en: "hands-on labs" }
      ],
      certificateUrl: "assets/certifications/tryhackme-pre-security.pdf",
      certificatePreview: "assets/certifications/tryhackme-pre-security.webp",
      certificateId: "THM-BQXGMJ7MKZ",
      verified: true
    }
  ],
  badges: [
    {
      code: "READY",
      image: "assets/tryhackme/cyber-ready.webp",
      name_fr: "Cyber Ready",
      name_en: "Cyber Ready",
      description_fr: "Compréhension de l’impact de la formation en cybersécurité au sein d’une équipe.",
      description_en: "Understanding the impact of cybersecurity training on teams."
    },
    {
      code: ">_",
      image: "assets/tryhackme/cat-linux.webp",
      name_fr: "cat linux.txt",
      name_en: "cat linux.txt",
      description_fr: "Compétences fondamentales validées dans l’utilisation de Linux.",
      description_en: "Fundamental Linux skills validated through completed rooms."
    },
    {
      code: "NET",
      image: "assets/tryhackme/networking-nerd.webp",
      name_fr: "Networking Nerd",
      name_en: "Networking Nerd",
      description_fr: "Badge obtenu après avoir terminé le module Network Fundamentals.",
      description_en: "Badge earned after completing the Network Fundamentals module."
    },
    {
      code: "WEB",
      image: "assets/tryhackme/webbed.webp",
      name_fr: "Webbed",
      name_en: "Webbed",
      description_fr: "Compréhension du fonctionnement général du Web.",
      description_en: "Understanding of how the World Wide Web works."
    },
    {
      code: "WWW",
      image: "assets/tryhackme/world-wide-web.webp",
      name_fr: "World Wide Web",
      name_en: "World Wide Web",
      description_fr: "Badge obtenu après avoir terminé le module How the Web Works.",
      description_en: "Badge earned after completing the How the Web Works module."
    },
    {
      code: "7D",
      image: "assets/tryhackme/seven-day-streak.webp",
      name_fr: "7 Day Streak",
      name_en: "7 Day Streak",
      description_fr: "Série d’apprentissage de sept jours consécutifs atteinte.",
      description_en: "Seven-day consecutive learning streak achieved."
    }
  ],
  challenges: {
    introduction_fr:
      "Une sélection de rooms TryHackMe qui me permet d’explorer trois approches complémentaires : exploiter des vulnérabilités en Red Team, détecter et contrer les menaces en Blue Team, puis améliorer les défenses par la collaboration entre ces deux équipes en Purple Team, le tout dans des environnements légaux et isolés.",
    introduction_en:
      "A selection of TryHackMe rooms through which I explore three complementary approaches: exploiting vulnerabilities from a Red Team perspective, detecting and countering threats from a Blue Team perspective, and improving defenses through Purple Team collaboration between the two, all within legal, isolated environments.",
    teams: [
      {
        id: "purple",
        name: "Purple Team",
        role_fr: "Coordination offensive et défensive",
        role_en: "Offensive and defensive coordination",
        empty_fr: "Aucune room sélectionnée pour le moment.",
        empty_en: "No room selected yet.",
        rooms: []
      },
      {
        id: "red",
        name: "Red Team",
        role_fr: "Sécurité offensive",
        role_en: "Offensive security",
        empty_fr: "Aucune room sélectionnée pour le moment.",
        empty_en: "No room selected yet.",
        rooms: [
          {
            name: "Neighbour",
            status_fr: "Terminée",
            status_en: "Completed",
            description:
              "Check out our new cloud service, Authentication Anywhere. Can you find other user's secrets?",
            objective_fr:
              "Accéder aux informations d’un autre utilisateur sur le service fictif Authentication Anywhere.",
            objective_en:
              "Access another user's information on the fictional Authentication Anywhere service.",
            vulnerability_fr:
              "Une IDOR (Insecure Direct Object Reference), liée à un contrôle d’accès insuffisant : le serveur se fiait à l’identifiant transmis dans l’URL sans vérifier que la ressource appartenait à l’utilisateur connecté.",
            vulnerability_en:
              "An IDOR (Insecure Direct Object Reference) caused by insufficient access control: the server trusted the identifier supplied in the URL without checking whether the signed-in user was authorized to access the resource.",
            action_fr:
              "J’ai modifié directement dans l’URL du navigateur la valeur du paramètre envoyé à la page PHP afin de cibler un autre utilisateur. Le serveur a alors renvoyé ses informations sans effectuer le contrôle d’autorisation attendu.",
            action_en:
              "I changed the parameter value sent to the PHP page directly in the browser URL to target another user. The server then returned that user's information without performing the expected authorization check.",
            tags: ["IDOR", "Broken Access Control", "PHP", "URL"]
          }
        ]
      },
      {
        id: "blue",
        name: "Blue Team",
        role_fr: "Détection et défense",
        role_en: "Detection and defence",
        empty_fr: "Aucune room sélectionnée pour le moment.",
        empty_en: "No room selected yet.",
        rooms: []
      }
    ]
  }
};

const WATCH_DATA = {
  institutions: [
    {
      name: "ANSSI",
      code: "AN",
      image: "assets/watch/anssi.svg",
      url: "https://cyber.gouv.fr/",
      description_fr: "Recommandations, guides et publications de référence en cybersécurité.",
      description_en: "Reference cybersecurity recommendations, guides, and publications."
    },
    {
      name: "CERT-FR",
      code: "CF",
      image: "assets/watch/cert-fr.svg",
      url: "https://www.cert.ssi.gouv.fr/",
      description_fr: "Alertes, avis de sécurité et bulletins sur les vulnérabilités actives.",
      description_en: "Alerts, security advisories, and active-vulnerability bulletins."
    },
    {
      name: "CISA",
      code: "CI",
      image: "assets/watch/cisa.webp",
      url: "https://www.cisa.gov/",
      description_fr: "Alertes internationales et catalogue des vulnérabilités exploitées.",
      description_en: "International alerts and known-exploited-vulnerability catalog."
    },
    {
      name: "CNIL",
      code: "CN",
      image: "assets/watch/cnil.webp",
      url: "https://www.cnil.fr/",
      description_fr: "Protection des données, cadre réglementaire et bonnes pratiques RGPD.",
      description_en: "Data protection, regulatory guidance, and GDPR best practices."
    },
    {
      name: "ENISA",
      code: "EU",
      image: "assets/watch/enisa.webp",
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
    name: "TryHackMe — Pre Security Learning Path",
    status_fr: "Obtenu",
    status_en: "Earned",
    meta_fr: "Certificat de fin de parcours • 21 juillet 2026 • 19 h 10",
    meta_en: "Learning-path completion certificate • 21 July 2026 • 19h 10m",
    linkLabel_fr: "Consulter le certificat (PDF) ↗",
    linkLabel_en: "View certificate (PDF) ↗",
    url: "assets/certifications/tryhackme-pre-security.pdf",
    type: "earned"
  },
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
