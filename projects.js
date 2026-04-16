const PROJECTS = [
  {
    slug: "sae-reseau-multi-site",
    title_fr: "SAE réseau multi-site",
    title_en: "Multi-site network SAE",
    category: "SAE",
    short_fr: "Conception et déploiement d'une architecture réseau inter-sites avec segmentation et services essentiels.",
    short_en: "Design and deployment of an inter-site network architecture with segmentation and core services.",
    description_fr:
      "Projet académique mené en équipe pour simuler une infrastructure multi-site complète. Le travail a couvert l'adressage IP, la configuration des VLAN, le routage inter-VLAN, les ACL, ainsi que la documentation de l'architecture et des procédures de validation.",
    description_en:
      "Team academic project to simulate a complete multi-site infrastructure. The scope included IP addressing, VLAN setup, inter-VLAN routing, ACL policies, and technical documentation with validation procedures.",
    technologies: ["Cisco Packet Tracer", "VLAN", "OSPF", "ACL", "Documentation"],
    keyPoints_fr: [
      "Plan d'adressage structuré et évolutif.",
      "Sécurisation des flux inter-segments via ACL.",
      "Documentation technique claire pour reprise et maintenance."
    ],
    keyPoints_en: [
      "Structured and scalable addressing plan.",
      "Inter-segment flow control secured with ACL policies.",
      "Clear technical documentation for handover and maintenance."
    ],
    result_fr:
      "Infrastructure fonctionnelle validée par scénarios de tests, avec connectivité maîtrisée entre plusieurs sites simulés.",
    result_en:
      "Functional infrastructure validated through test scenarios, with controlled connectivity across multiple simulated sites.",
    nextStep_fr:
      "Ajouter un volet supervision réseau (SNMP, logs centralisés) et renforcer la tolérance de panne.",
    nextStep_en:
      "Add network monitoring (SNMP, centralized logs) and improve fault tolerance."
  },
  {
    slug: "scripts-powershell-atera",
    title_fr: "Scripts PowerShell Atera",
    title_en: "Atera PowerShell scripts",
    category: "Scripts",
    short_fr: "Automatisation de tâches d'administration poste et support via scripts PowerShell intégrables dans Atera.",
    short_en: "Automation of workstation administration and support tasks with PowerShell scripts integrated into Atera.",
    description_fr:
      "Création d'une base de scripts PowerShell pour industrialiser des actions de support : nettoyage, inventaire rapide, collecte d'informations système et vérifications de conformité basiques. L'objectif est de réduire les opérations répétitives et standardiser les interventions.",
    description_en:
      "Built a PowerShell script set to industrialize support actions: cleanup tasks, quick inventory, system information collection, and baseline compliance checks. The goal is to reduce repetitive operations and standardize interventions.",
    technologies: ["PowerShell", "Atera", "Windows", "Automatisation"],
    keyPoints_fr: [
      "Scripts paramétrables et facilement réutilisables.",
      "Journalisation simple pour tracer les interventions.",
      "Approche orientée productivité et fiabilité en support."
    ],
    keyPoints_en: [
      "Parameterized scripts designed for reusability.",
      "Simple logging for intervention traceability.",
      "Productivity and reliability oriented support approach."
    ],
    result_fr:
      "Temps de traitement réduit sur des tâches récurrentes et meilleure homogénéité des opérations techniques.",
    result_en:
      "Reduced execution time on recurring tasks and improved consistency of technical operations.",
    nextStep_fr:
      "Créer une bibliothèque de scripts catégorisés et versionnés avec documentation d'usage.",
    nextStep_en:
      "Build a categorized, versioned script library with usage documentation."
  },
  {
    slug: "serveur-dns-raspberry-pi",
    title_fr: "Serveur DNS sur Raspberry Pi",
    title_en: "Raspberry Pi DNS server",
    category: "Système",
    short_fr: "Déploiement d'un serveur DNS local sur Raspberry Pi pour environnement de test et apprentissage infra.",
    short_en: "Deployment of a local DNS server on Raspberry Pi for lab and infrastructure learning purposes.",
    description_fr:
      "Mise en place d'un service DNS sur Raspberry Pi pour comprendre la résolution de noms, les zones locales et la maintenance d'un service réseau léger. Le projet inclut installation, configuration, tests de résolution et documentation.",
    description_en:
      "Set up a DNS service on a Raspberry Pi to deepen understanding of name resolution, local zones, and lightweight network service maintenance. The project includes installation, configuration, resolution testing, and documentation.",
    technologies: ["Raspberry Pi", "Linux", "BIND9", "DNS", "SSH"],
    keyPoints_fr: [
      "Configuration de zones locales et redirections.",
      "Durcissement de base du service et accès distant sécurisé.",
      "Tests fonctionnels via clients réseau internes."
    ],
    keyPoints_en: [
      "Local zone configuration and forwarding rules.",
      "Basic hardening and secure remote access.",
      "Functional tests from internal network clients."
    ],
    result_fr:
      "Service DNS opérationnel dans un laboratoire local, avec meilleure compréhension des dépendances réseau système.",
    result_en:
      "Operational DNS service in a local lab, with stronger understanding of system/network dependencies.",
    nextStep_fr:
      "Ajouter un second nœud DNS de secours et un monitoring de disponibilité.",
    nextStep_en:
      "Add a secondary DNS node and availability monitoring."
  }
];
