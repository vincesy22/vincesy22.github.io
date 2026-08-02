# Portfolio

A personal developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Design

Dark mode by default (toggle to light in the navbar). The visual language pairs a serif display face
(Fraunces) with a monospace face (IBM Plex Mono) to reflect the site owner's path from Philosophy into
Information Technology — the serif carries the narrative voice, the mono carries the technical one. The
signature detail is the "// eyebrow" label pattern above every section heading and the typed terminal
panel in the hero, both nodding to the same idea: reasoning, then code.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Customizing content

Everything you're likely to want to change lives in `src/data/`:

- `src/data/nav.ts` — navigation links
- `src/data/skills.ts` — skill categories and proficiency levels
- `src/data/projects.ts` — project details (description, tech, features, challenges, learnings)
- `src/data/experience.ts` — timeline entries
- `src/data/misc.ts` — education, achievements, certificates, contact links

Search-and-replace these placeholders once you have the real values:

- **Name**: `Your Name` in `src/components/Hero.tsx` and `src/components/Footer.tsx`
- **Résumé link**: the `href="#"` on the "Download Résumé" link in `src/components/Hero.tsx`
- **Email / GitHub / LinkedIn / Facebook**: `src/data/misc.ts` (`contactLinks`) and `src/components/Footer.tsx`
- **Project screenshots**: replace the placeholder block in `src/components/ProjectCard.tsx` with an
  `<img>` once you have real screenshots, and update `githubUrl` / `demoUrl` in `src/data/projects.ts`
- **Contact form**: `src/components/Contact.tsx` currently just shows a confirmation message on submit.
  Wire the `handleSubmit` function to a service like Formspree, EmailJS, or your own API endpoint.

## Structure

```
src/
  components/   UI building blocks, one per section (plus shared pieces like ScrollReveal, SectionHeading)
  data/         Content as plain data objects — edit these, not the components, for day-to-day updates
  hooks/        useTheme (dark/light persistence), useScrollReveal (IntersectionObserver reveal-on-scroll)
  types/        Shared TypeScript interfaces for the data above
```

## Notes

- Scroll-reveal animations respect `prefers-reduced-motion`.
- All interactive elements have visible keyboard focus states.
- Colors are defined as design tokens in `tailwind.config.ts` (`ink`, `paper`, `copper`, `teal`) — change
  them there to retheme the whole site consistently.
