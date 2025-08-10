---
title: "Portfolio V2"
slug: "portfolio-v2"
date: "2025-07-28"
description: "Une version améliorée de mon portfolio, développée après mon alternance avec des compétences techniques renforcées. Nouveau : MDX pour le contenu et une accessibilité améliorée."
stack:
  - Next.js
  - TypeScript
  - next-intl
  - Tailwind CSS
  - Motion
  - Vercel
layout: content.njk
locale: fr
permalink: "/fr/projects/portfolio-v2/"
---

# Portfolio V2 (version actuelle)

- Projet personnel
- 07/2025
- [Voir le code sur Github](https://github.com/lemathurin/portfolio/tree/main)

## Présentation du projet

Après avoir travaillé sur une vraie base de code pendant mon alternance chez [Juisci](/experiences/juisci), j’ai beaucoup mieux compris la programmation par rapport à quand j’ai fait la [première version de ce portfolio](/projects/portfolio-v1). Cette version mise à jour a été une excellente occasion de mettre en pratique mes nouvelles connaissances et compétences en tant que développeur web.

## Tech stack

- Next.js
- TypeScript
- next-intl
- Tailwind CSS
- Motion
- Vercel

## Un peu plus d'infos

Dans la première version de ce portfolio, j'ai utilisé des chaînes i18n pour tout le texte, même pour les études de cas des projets. Écrire dans des fichiers JSON, ce n’était pas amusant du tout.

Pour cette version, j'ai décidé de tout transférer dans des fichiers MDX. C'est tellement plus facile et plus agréable d'ajouter ou de modifier du texte maintenant 😅.

Pour le rendu du contenu MDX, j’ai d’abord utilisé les styles “prose” de Tailwind. Mais au final, je n’aimais pas trop le rendu, donc j’ai supprimé `@tailwindcss/typography` et j’ai créé mes propres styles. Je n’ai pas encore couvert tous les éléments possibles, ce site est un projet en constante évolution. (Il reste encore pas mal de boulot.)

J'ai également essayé de rendre le site aussi accessible que possible, un grand pas en avant par rapport à la version précédente, avec un meilleur HTML sémantique, de meilleurs contrastes de couleurs et moins d’animations.

Les images sont hébergées sur [UploadThing](https://uploadthing.com/), et le site est déployé avec [Vercel](https://vercel.com).

Pour la prochaine itération, je pourrais ne pas utiliser Next.js et seulement utiliser de l'HTML et CSS 🤷‍♂️. Ce framework est un peu excessif pour mes besoins, et est assez lourd à envoyer.

Les performances peuvent certainement être améliorées. C'est un point sur lequel je me pencherai bientôt.

> Après réflexion, j'aurais mieux fait d'utiliser un générateur de site statique comme Eleventy ou Hugo 😑.

## Inspiration

Je me suis beaucoup (peut-être un peu trop ?) inspiré du [site web d'Alexander Sandberg](https://alexandersandberg.com/). Il est simple et élégant.

Les sites de [Paul Wong](https://www.paulwong.work) et de [Glenn Hitchcock](https://glenn.me/) ont également été d'excellentes sources d'inspiration.
