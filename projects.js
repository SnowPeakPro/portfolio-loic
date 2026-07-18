/*
 * Données des études de cas.
 * Les projets en préparation sont explicitement identifiés pour ne pas les
 * présenter comme déjà réalisés.
 */

const PROJECT_CATEGORIES = ["Automatisation", "Systèmes", "Cybersécurité", "Réseaux"];

const PROJECTS = [
  {
    slug: "application-redemarrage-vm",
    category: "Automatisation",
    visual: "VM",
    tone: "violet",
    technologies: ["PowerShell", "Windows", "VMware", "vmrun", "Atera"],
    date: "2026",
    featured: true,
    link: "",
    copy: {
      fr: {
        title: "Application de redémarrage automatique de VM",
        status: "En développement et en test",
        type: "Projet professionnel",
        short:
          "Une application Windows qui centralise l’installation des composants nécessaires au redémarrage automatique de machines virtuelles après celui de leur poste physique.",
        context:
          "Certains postes physiques hébergent des machines virtuelles VMware qui doivent retrouver automatiquement leur état de fonctionnement après le redémarrage de l’hôte. La procédure initiale reposait sur plusieurs scripts et étapes techniques distinctes, difficiles à reproduire rapidement lors d’un déploiement.",
        objectives: [
          "Regrouper l’installation des deux composants dans une seule interface.",
          "Simplifier la sélection et la configuration des machines virtuelles concernées.",
          "Journaliser les actions et rendre les erreurs vmrun compréhensibles.",
          "Fournir une procédure suffisamment simple pour être réutilisée sur plusieurs postes."
        ],
        actions: [
          "Conception d’une interface Windows orientée technicien.",
          "Intégration des scripts d’installation et de configuration dans un exécutable unique.",
          "Ajout d’options permettant d’installer les composants séparément ou ensemble.",
          "Mise en place de journaux pour suivre le démarrage des VM et diagnostiquer les erreurs.",
          "Tests du comportement après redémarrage du poste physique."
        ],
        results: [
          "Un point d’entrée unique à la place de plusieurs commandes manuelles.",
          "Une procédure plus lisible et plus facilement transmissible.",
          "Une meilleure visibilité sur l’état des VM et les erreurs de démarrage."
        ],
        challenges: [
          "Détecter une VM déjà ouverte ou verrouillée afin d’éviter un second démarrage.",
          "Gérer les chemins VMware contenant des espaces et des caractères particuliers.",
          "Exécuter les actions avec les droits nécessaires sans complexifier l’usage."
        ],
        nextSteps: [
          "Finaliser la détection des VM déjà actives.",
          "Ajouter un mécanisme de version et de mise à jour de l’application.",
          "Signer l’exécutable et consolider les tests sur plusieurs configurations."
        ],
        evidence: [
          "Interface de l’application",
          "Journaux d’exécution vmrun",
          "Procédure d’installation et d’utilisation"
        ]
      },
      en: {
        title: "Automatic VM restart application",
        status: "Under development and testing",
        type: "Professional project",
        short:
          "A Windows application that centralizes the installation of components used to restart virtual machines automatically after their physical host reboots.",
        context:
          "Some physical workstations host VMware virtual machines that must return to service automatically after the host reboots. The initial process relied on several scripts and separate technical steps, making repeatable deployments harder.",
        objectives: [
          "Install both required components from one interface.",
          "Simplify VM selection and configuration.",
          "Log actions and make vmrun errors understandable.",
          "Provide a reusable deployment procedure."
        ],
        actions: [
          "Designed a technician-focused Windows interface.",
          "Integrated installation and configuration scripts into one executable.",
          "Added options to install each component separately or together.",
          "Added logs for VM startup monitoring and troubleshooting.",
          "Tested behavior after physical host reboots."
        ],
        results: [
          "One entry point instead of several manual commands.",
          "A clearer and more transferable procedure.",
          "Better visibility into VM status and startup errors."
        ],
        challenges: [
          "Detecting an already running or locked VM.",
          "Handling VMware paths with spaces and special characters.",
          "Running actions with the required permissions while keeping usage simple."
        ],
        nextSteps: [
          "Complete active-VM detection.",
          "Add application versioning and updates.",
          "Sign the executable and extend tests to more configurations."
        ],
        evidence: ["Application interface", "vmrun execution logs", "Installation and usage guide"]
      }
    }
  },
  {
    slug: "lab-infrastructure-windows",
    category: "Systèmes",
    visual: "LAB",
    tone: "blue",
    technologies: ["Windows Server", "Active Directory", "DNS", "DHCP", "VLAN", "GPO"],
    date: "2026–2027",
    featured: true,
    link: "",
    copy: {
      fr: {
        title: "Laboratoire d’infrastructure Windows",
        status: "Conception en préparation",
        type: "Projet personnel",
        short:
          "La simulation d’une infrastructure d’entreprise sur trois postes physiques et un switch manageable pour pratiquer l’administration Windows de bout en bout.",
        context:
          "Ce futur laboratoire personnel doit reproduire à petite échelle une infrastructure Windows cohérente. L’objectif est de dépasser les manipulations isolées en faisant fonctionner ensemble le réseau, l’annuaire, les services, les postes clients et les mécanismes de sécurité.",
        objectives: [
          "Construire un domaine Active Directory avec des comptes, groupes et unités d’organisation.",
          "Déployer DNS, DHCP, stratégies de groupe et partages de fichiers.",
          "Segmenter le réseau à l’aide de VLAN configurés sur un switch manageable.",
          "Intégrer trois postes physiques et plusieurs machines virtuelles.",
          "Tester la supervision, la sauvegarde et des scénarios d’incident."
        ],
        actions: [
          "Définition du périmètre fonctionnel et des services à reproduire.",
          "Préparation de l’inventaire matériel et du futur plan d’adressage.",
          "Organisation prévue en étapes afin de valider chaque couche avant la suivante."
        ],
        results: [
          "Architecture cible définie autour de trois postes physiques et d’un switch manageable.",
          "Liste des services et scénarios de validation préparée.",
          "Projet structuré pour produire des preuves techniques au fur et à mesure."
        ],
        challenges: [
          "Répartir les rôles entre le matériel physique et les machines virtuelles.",
          "Conserver un laboratoire réaliste malgré des ressources limitées.",
          "Isoler les VLAN tout en autorisant uniquement les flux nécessaires."
        ],
        nextSteps: [
          "Finaliser le schéma réseau et le plan d’adressage.",
          "Configurer les VLAN et les liaisons du switch.",
          "Déployer le premier contrôleur de domaine puis intégrer les postes clients.",
          "Documenter chaque scénario de test et les mesures de sécurisation."
        ],
        evidence: [
          "Schéma d’architecture à produire",
          "Configurations du switch et des services",
          "Captures de tests et journal de construction"
        ]
      },
      en: {
        title: "Windows infrastructure lab",
        status: "Design in preparation",
        type: "Personal project",
        short:
          "A small enterprise infrastructure simulated across three physical computers and a managed switch to practice end-to-end Windows administration.",
        context:
          "This future personal lab will reproduce a coherent Windows infrastructure at a small scale. The goal is to move beyond isolated exercises by integrating networking, directory services, clients, services, and security controls.",
        objectives: [
          "Build an Active Directory domain with users, groups, and organizational units.",
          "Deploy DNS, DHCP, Group Policy, and file shares.",
          "Segment the network with VLANs on a managed switch.",
          "Integrate three physical hosts and several virtual machines.",
          "Test monitoring, backup, and incident scenarios."
        ],
        actions: [
          "Defined the functional scope and target services.",
          "Started hardware inventory and IP planning.",
          "Structured a staged deployment process to validate each layer."
        ],
        results: [
          "Target architecture defined around three physical hosts and a managed switch.",
          "Services and validation scenarios listed.",
          "A project structure ready for progressive technical evidence."
        ],
        challenges: [
          "Distributing roles between physical hardware and virtual machines.",
          "Keeping the lab realistic with limited resources.",
          "Isolating VLANs while allowing only necessary traffic."
        ],
        nextSteps: [
          "Complete the network diagram and IP plan.",
          "Configure switch VLANs and links.",
          "Deploy the first domain controller and join client workstations.",
          "Document every test scenario and security control."
        ],
        evidence: ["Planned architecture diagram", "Switch and service configurations", "Test captures and build log"]
      }
    }
  },
  {
    slug: "scripts-powershell-atera",
    category: "Automatisation",
    visual: "PS",
    tone: "cyan",
    technologies: ["PowerShell", "Atera", "Windows", "WMI/CIM", "WinForms"],
    date: "2026",
    featured: true,
    link: "",
    copy: {
      fr: {
        title: "Outils PowerShell intégrés à Atera",
        status: "Utilisé en alternance",
        type: "Projet professionnel",
        short:
          "Un ensemble de scripts pour inventorier les postes, superviser l’espace disque et mieux informer les utilisateurs avant une intervention distante.",
        context:
          "Les interventions récurrentes sur des postes Windows gagnent à être standardisées. L’intégration de scripts dans Atera permet d’exécuter les mêmes contrôles à distance et de restituer des informations directement exploitables par un technicien.",
        objectives: [
          "Réduire le temps consacré aux vérifications répétitives.",
          "Uniformiser les informations remontées depuis les postes.",
          "Détecter plus tôt les problèmes d’espace disque.",
          "Prévenir clairement l’utilisateur avant une prise en main ou une action distante."
        ],
        actions: [
          "Création d’un inventaire matériel et logiciel détaillé.",
          "Développement d’une surveillance de l’espace libre avec des seuils exprimés en Go.",
          "Création d’une fenêtre de notification personnalisée avant intervention.",
          "Préparation d’un script de montage de lecteurs réseau et d’imprimantes utilisant les variables Atera.",
          "Adaptation des sorties pour faciliter leur lecture dans la console RMM."
        ],
        results: [
          "Informations techniques centralisées sans connexion manuelle au poste.",
          "Seuils de stockage mieux adaptés aux besoins de chaque environnement.",
          "Communication plus claire avec l’utilisateur avant les interventions."
        ],
        challenges: [
          "Prendre en compte les différences entre modèles et versions de Windows.",
          "Produire une sortie lisible dans le contexte d’exécution système d’Atera.",
          "Tester les scripts sans perturber le poste utilisateur."
        ],
        nextSteps: [
          "Regrouper les scripts dans un dépôt documenté et versionné.",
          "Ajouter des contrôles d’intégrité et des codes de retour normalisés.",
          "Étendre progressivement les scénarios d’automatisation."
        ],
        evidence: ["Sorties d’inventaire anonymisées", "Interface de notification", "Résultats de supervision Atera"]
      },
      en: {
        title: "PowerShell tools integrated with Atera",
        status: "Used during work-study",
        type: "Professional project",
        short:
          "A collection of scripts used to inventory workstations, monitor disk space, and notify users before remote support sessions.",
        context:
          "Recurring Windows support tasks benefit from standardization. Integrating scripts into Atera makes it possible to run the same checks remotely and return information that technicians can use immediately.",
        objectives: [
          "Reduce time spent on repetitive checks.",
          "Standardize workstation information.",
          "Detect disk-space issues earlier.",
          "Clearly notify users before a remote action."
        ],
        actions: [
          "Built a detailed hardware and software inventory.",
          "Developed free-space monitoring with thresholds expressed in GB.",
          "Created a custom intervention notification window.",
          "Prepared network-drive and printer mapping using Atera variables.",
          "Adapted script output for the RMM console."
        ],
        results: [
          "Centralized technical information without manually connecting to the device.",
          "Storage thresholds better aligned with each environment.",
          "Clearer communication before remote interventions."
        ],
        challenges: [
          "Supporting differences across hardware models and Windows versions.",
          "Producing readable output under Atera's system execution context.",
          "Testing scripts without disrupting the user."
        ],
        nextSteps: [
          "Collect scripts in a documented and versioned repository.",
          "Add integrity checks and standardized return codes.",
          "Extend automation scenarios progressively."
        ],
        evidence: ["Anonymized inventory output", "Notification interface", "Atera monitoring results"]
      }
    }
  },
  {
    slug: "infrastructure-reseau-securisee",
    category: "Cybersécurité",
    visual: "VPN",
    tone: "green",
    technologies: ["nftables", "OpenVPN", "PKI", "Squid", "Nginx", "TLS"],
    date: "2026",
    featured: true,
    link: "",
    copy: {
      fr: {
        title: "Infrastructure réseau sécurisée",
        status: "Réalisé en formation",
        type: "Projet académique",
        short:
          "Déploiement progressif de mécanismes de filtrage, d’un accès distant sécurisé et de services proxy dans une architecture de laboratoire.",
        context:
          "Les travaux pratiques de la ressource Infrastructures de sécurité ont servi à construire et vérifier plusieurs briques courantes d’une passerelle sécurisée : filtrage, traduction d’adresses, chiffrement des flux et contrôle des accès Web.",
        objectives: [
          "Mettre en œuvre un filtrage réseau stateful.",
          "Configurer un accès distant chiffré avec certificats.",
          "Comprendre le rôle d’une PKI et vérifier l’identité des pairs.",
          "Déployer un proxy direct et un reverse proxy HTTPS."
        ],
        actions: [
          "Création de règles nftables pour le filtrage, le NAT, le SNAT et le DNAT.",
          "Génération et utilisation de certificats pour un tunnel OpenVPN.",
          "Vérification des échanges avec tcpdump et Wireshark.",
          "Configuration de Squid pour le proxy et l’analyse des journaux.",
          "Configuration de Nginx comme reverse proxy avec terminaison TLS."
        ],
        results: [
          "Flux autorisés et interdits vérifiés par des tests ciblés.",
          "Tunnel VPN établi dans l’environnement de laboratoire.",
          "Lecture et interprétation des journaux proxy et des captures réseau."
        ],
        challenges: [
          "Diagnostiquer les erreurs de négociation TLS et les paquets de contrôle non routables.",
          "Faire correspondre les règles de filtrage à une matrice de flux précise.",
          "Distinguer les responsabilités du proxy, du reverse proxy et du pare-feu."
        ],
        nextSteps: [
          "Reproduire l’architecture dans le futur laboratoire personnel.",
          "Ajouter une supervision centralisée des journaux.",
          "Comparer plusieurs stratégies de durcissement TLS."
        ],
        evidence: ["Configurations nftables", "Captures OpenVPN", "Journaux Squid", "Configuration Nginx"]
      },
      en: {
        title: "Secure network infrastructure",
        status: "Completed during training",
        type: "Academic project",
        short:
          "Progressive deployment of filtering, secure remote access, and proxy services in a laboratory architecture.",
        context:
          "Security Infrastructure practical work was used to build and verify common security gateway components: filtering, address translation, encrypted traffic, and web access control.",
        objectives: [
          "Implement stateful network filtering.",
          "Configure certificate-based encrypted remote access.",
          "Understand PKI and peer identity verification.",
          "Deploy a forward proxy and HTTPS reverse proxy."
        ],
        actions: [
          "Created nftables rules for filtering, NAT, SNAT, and DNAT.",
          "Generated and used certificates for an OpenVPN tunnel.",
          "Verified traffic with tcpdump and Wireshark.",
          "Configured Squid and analyzed its logs.",
          "Configured Nginx as a reverse proxy with TLS termination."
        ],
        results: [
          "Allowed and denied flows verified through targeted tests.",
          "VPN tunnel established in the lab environment.",
          "Proxy logs and network captures interpreted."
        ],
        challenges: [
          "Troubleshooting TLS negotiation and unroutable control packets.",
          "Matching filtering rules to an exact flow matrix.",
          "Separating the roles of firewall, proxy, and reverse proxy."
        ],
        nextSteps: [
          "Reproduce the architecture in the future personal lab.",
          "Add centralized log monitoring.",
          "Compare multiple TLS hardening strategies."
        ],
        evidence: ["nftables configurations", "OpenVPN captures", "Squid logs", "Nginx configuration"]
      }
    }
  }
];
