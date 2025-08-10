---
title: "Portfolio V2"
slug: "portfolio-v2"
date: "2025-07-28"
description: "A refined version of my portfolio, built with improved technical skills post-apprenticeship. Features MDX for content and enhanced accessibility."
stack:
  - Next.js
  - TypeScript
  - next-intl
  - Tailwind CSS
  - Motion
  - Vercel
---

# Portfolio V2 (current version)

- Personal project
- 07/2025
- [View code on Github](https://github.com/lemathurin/portfolio/tree/main)

## Project overview

After working on a real codebase during my apprenticeship at [Juisci](/experiences/juisci), I gained a much stronger understanding of programming compared to when I made the [first version of this portfolio](/projects/porfolio-v1). This updated version was a great opportunity to put my newfound knowledge and skills as a web developer into practice.

## Tech stack

- Next.js
- TypeScript
- next-intl
- Tailwind CSS
- Motion
- Vercel

## A little more info

In the first version of this portfolio, I used i18n strings for all the text, even for project case studies. It wasn't fun to write anything, who likes to write in JSON files?

For this version, I decided to move everything to MDX files. I can't tell you how much easier and enjoyable it is to add or modify text now 😅.

For the rendered MDX content, I initially used Tailwind's prose styles. I ended up not loving the final result, so I removed `@tailwindcss/typography` and just made my own styles. I haven’t covered every possible element yet, as this website is a continuous work in progress. (There's still so much to do.)

I also tried to make the website as accessible as possible, a big step up from the previous version, with better semantic HTML, improved color contrast, and fewer animations.

Images are hosted on [UploadThing](https://uploadthing.com/), and the website is deployed with [Vercel](https://vercel.com).

For the next iteration, I might not use Next.js and just use HTML and CSS 🤷‍♂️. This framework is a little bit overkill for my needs, and is quite heavy to send.

Performance can definitely be improved. That's something I'll work on soon.

> After some reflecting, I would have been better off using a static site generator like Eleventy or Hugo 😑.

## Inspiration

A lot (maybe a little too much?) of inspiration came from [Alexander Sandberg's website](https://alexandersandberg.com/). It's simple and classy, simply lovely.

[Paul Wong's website](https://www.paulwong.work) and [Glenn Hitchcock's website](https://glenn.me/) were also great sources of inspiration.
