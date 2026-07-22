# Portfolio de Loïc Vidal-Ferrasse

Portfolio professionnel statique présentant mon parcours en BUT Réseaux & Télécommunications, mon alternance chez XEFI Narbonne et mes projets en réseaux, systèmes, automatisation et cybersécurité.

## Contenu

- études de cas professionnelles, académiques et personnelles ;
- compétences reliées à des contextes de mise en pratique ;
- progression TryHackMe ;
- sources de veille institutionnelles et chaînes spécialisées ;
- version française et anglaise ;
- mise en page responsive et accessible au clavier.

## Données TryHackMe

Les statistiques, la sélection de rooms et les six badges TryHackMe sont regroupés dans `cyber-data.js`. Ils correspondent au profil public `SnowPeakPro` au 22 juillet 2026 : niveau 7, rang `[0x7][ADEPT]`, 3 102 points, 40 rooms terminées, 6 badges, classement Top 15 %, série active de 14 jours et meilleure série de 14 jours.

Le parcours Pre Security, sa durée, ses modules et ses laboratoires sont également vérifiés par le certificat obtenu le 21 juillet 2026. Les objectifs de certification qui ne sont pas encore confirmés restent explicitement indiqués comme provisoires.

La preuve est publiée dans `assets/certifications/tryhackme-pre-security.pdf`, avec une version WebP optimisée utilisée pour son aperçu sur la page.

Les projets sont définis dans `projects.js`. Un projet encore en préparation est toujours identifié explicitement afin de ne pas le présenter comme déjà réalisé.

## Tester localement

Le site ne nécessite aucune dépendance. Il peut être lancé avec un serveur HTTP local :

```bash
python3 -m http.server 8000
```

Il est ensuite accessible à l'adresse `http://localhost:8000`.

## Déploiement

Le site est publié avec GitHub Pages depuis la branche principale du dépôt.
