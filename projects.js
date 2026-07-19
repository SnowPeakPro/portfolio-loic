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
    visual: "WIC",
    tone: "green",
    technologies: [
      "Windows Server 2025",
      "Active Directory",
      "GPO / LAPS",
      "PKI / LDAPS",
      "Stormshield",
      "VLAN / DMZ",
      "MySQL TLS",
      "StrongSwan / IPsec"
    ],
    date: "06/2026",
    featured: true,
    link: "",
    copy: {
      fr: {
        title: "Infrastructure Windows sécurisée — Wichita",
        status: "SAE 4.CYBER.01 terminée",
        type: "Projet académique en binôme",
        short:
          "Conception et sécurisation d’un système d’information de filiale : Active Directory redondant, PKI, GPO, segmentation VLAN/DMZ, filtrage, réplication SQL chiffrée et VPN IPsec.",
        context:
          "Dans le cadre de la SAE 4.CYBER.01 « Sécuriser un système d’information », nous avons conçu en binôme l’infrastructure de la filiale fictive Wichita, intégrée à une entreprise multi-sites. La maquette associait des serveurs Windows Server 2025 virtualisés, des clients Windows 11, un switch manageable, un pare-feu Stormshield et un routeur Linux. Le projet devait faire fonctionner ensemble l’annuaire, les services réseau et applicatifs, puis vérifier les mesures de sécurité par des scénarios de test documentés.",
        objectives: [
          "Déployer un domaine Active Directory redondant avec deux contrôleurs de domaine et DNS.",
          "Centraliser la configuration des utilisateurs et des postes avec les OU, groupes, GPO et LAPS.",
          "Chiffrer les échanges sensibles au moyen d’une PKI, de LDAPS, HTTPS, TLS et IPsec.",
          "Segmenter le réseau par VLAN et DMZ, puis n’autoriser que les flux nécessaires.",
          "Vérifier la continuité de service, les droits d’accès et l’efficacité des protections."
        ],
        actions: [
          "Déploiement d’un domaine Active Directory sur deux contrôleurs, puis validation de la réplication AD/DNS.",
          "Mise en place du DHCP, des comptes, groupes et OU, puis intégration des postes Windows 11 au domaine.",
          "Application de GPO de sécurité : complexité et verrouillage des comptes, pare-feu, journalisation, restrictions CMD/PowerShell et LAPS.",
          "Déploiement d’une autorité de certification et sécurisation de LDAPS, IIS/HTTPS et RDP par certificats.",
          "Configuration des VLAN, de la DMZ, des règles Stormshield et des fonctions NAT/DNAT sur le routeur Linux.",
          "Sécurisation de MySQL par TLS, réplication entre deux serveurs SQL et intégration à l’intranet.",
          "Mise en place d’un tunnel intersite IPsec IKEv2 avec StrongSwan et analyse des flux avec Wireshark et tcpdump."
        ],
        results: [
          "Redondance AD/DNS et attribution DHCP validées dans la maquette.",
          "Accès aux partages et à l’administration limités selon les groupes et les permissions.",
          "Isolation confirmée entre la DMZ et le réseau interne grâce aux VLAN et au filtrage Stormshield.",
          "Chiffrement vérifié pour LDAPS, HTTPS, MySQL, RDP en TLS 1.3 et le tunnel IPsec.",
          "Réplication MySQL opérationnelle et 19 scénarios de sécurité documentés."
        ],
        challenges: [
          "Faire interagir correctement AD, DNS, DHCP, PKI, IIS, SQL et les équipements réseau.",
          "Construire une chaîne de certificats utilisable par plusieurs services et postes du domaine.",
          "Définir les règles de flux sans compromettre le fonctionnement de l’intranet, de la DMZ et du VPN.",
          "Adapter l’architecture aux ressources disponibles, avec certains rôles regroupés dans la maquette."
        ],
        nextSteps: [
          "Séparer les rôles critiques comme la PKI, les services Web, les bases de données et les partages.",
          "Centraliser les journaux et ajouter une supervision plus complète de l’infrastructure.",
          "Mettre en place des sauvegardes régulières et tester leur restauration.",
          "Poursuivre le durcissement des serveurs et confronter la maquette à un audit plus approfondi."
        ],
        evidence: [
          "Document technique complet et schéma global de l’infrastructure",
          "Captures de déploiement AD/DNS, GPO, LAPS, PKI et certificats",
          "Configurations du switch Cisco, du Stormshield et du routeur Linux",
          "Captures Wireshark et tcpdump des flux LDAPS, TLS et IPsec",
          "Résultats des 19 scénarios de validation de sécurité"
        ]
      },
      en: {
        title: "Secure Windows infrastructure — Wichita",
        status: "SAE 4.CYBER.01 completed",
        type: "Academic team project",
        short:
          "Design and security of a branch information system: redundant Active Directory, PKI, Group Policy, VLAN/DMZ segmentation, filtering, encrypted SQL replication, and an IPsec VPN.",
        context:
          "As part of the SAE 4.CYBER.01 project on securing an information system, we designed the infrastructure of the fictional Wichita branch as a two-person team within a multi-site company. The lab combined virtualized Windows Server 2025 systems, Windows 11 clients, a managed switch, a Stormshield firewall, and a Linux router. The project integrated directory, network, and application services before validating the security controls through documented test scenarios.",
        objectives: [
          "Deploy a redundant Active Directory domain with two domain controllers and DNS.",
          "Centrally manage users and workstations through OUs, groups, Group Policy, and LAPS.",
          "Encrypt sensitive communications using PKI, LDAPS, HTTPS, TLS, and IPsec.",
          "Segment the network with VLANs and a DMZ, allowing only required traffic.",
          "Validate service continuity, access rights, and the effectiveness of the security controls."
        ],
        actions: [
          "Deployed an Active Directory domain on two controllers and validated AD/DNS replication.",
          "Configured DHCP, accounts, groups, and OUs, then joined Windows 11 workstations to the domain.",
          "Applied security policies for password complexity, account lockout, firewalling, logging, CMD/PowerShell restrictions, and LAPS.",
          "Deployed a certificate authority and secured LDAPS, IIS/HTTPS, and RDP with certificates.",
          "Configured VLANs, the DMZ, Stormshield rules, and NAT/DNAT functions on the Linux router.",
          "Enforced TLS for MySQL, replicated data between two SQL servers, and connected the database to the intranet.",
          "Established a site-to-site IKEv2 IPsec tunnel with StrongSwan and analyzed traffic with Wireshark and tcpdump."
        ],
        results: [
          "AD/DNS redundancy and DHCP assignment validated in the lab.",
          "File-share and administration access limited according to groups and permissions.",
          "Isolation between the DMZ and internal network confirmed through VLANs and Stormshield filtering.",
          "Encryption verified for LDAPS, HTTPS, MySQL, RDP over TLS 1.3, and the IPsec tunnel.",
          "MySQL replication operational and 19 security validation scenarios documented."
        ],
        challenges: [
          "Integrating AD, DNS, DHCP, PKI, IIS, SQL, and network devices coherently.",
          "Building a certificate chain usable by several domain services and workstations.",
          "Defining traffic rules without disrupting the intranet, DMZ, and VPN.",
          "Adapting the architecture to available resources, with some roles combined in the lab."
        ],
        nextSteps: [
          "Separate critical roles such as PKI, web services, databases, and file services.",
          "Centralize logs and add more complete infrastructure monitoring.",
          "Implement regular backups and test restoration procedures.",
          "Harden the servers further and submit the lab to a deeper security audit."
        ],
        evidence: [
          "Complete technical report and global architecture diagram",
          "AD/DNS, Group Policy, LAPS, PKI, and certificate deployment captures",
          "Cisco switch, Stormshield, and Linux router configurations",
          "Wireshark and tcpdump captures of LDAPS, TLS, and IPsec traffic",
          "Results from 19 security validation scenarios"
        ]
      }
    }
  }
];
