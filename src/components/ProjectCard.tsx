import { useState } from 'react'
import { ChevronDown, ExternalLink, Github, ImageIcon, Lightbulb, ListChecks, Wrench } from 'lucide-react'
import type { Project } from '../types'
import ScrollReveal from './ScrollReveal'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <ScrollReveal delay={index * 70}>
      <article className="group overflow-hidden rounded-2xl border border-ink-300/30 dark:border-paper-100/10 bg-white/60 dark:bg-ink-900/50 transition-shadow hover:shadow-glow">
        <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900 dark:from-ink-850 dark:to-ink-950">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-grid-lines opacity-40" />
              <div className="relative flex flex-col items-center gap-2 text-paper-100/30">
                <ImageIcon size={28} />
                <span className="font-mono text-[11px]">screenshot placeholder</span>
              </div>
            </>
          )}
          {project.featured && (
            <span className="absolute right-3 top-3 rounded-full bg-teal-500/90 px-2.5 py-1 font-mono text-[10px] font-medium text-ink-950">
              featured
            </span>
          )}
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-medium text-ink-900 dark:text-paper-100">{project.title}</h3>
          <p className="mt-1.5 text-sm text-ink-600 dark:text-paper-100/60">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-copper-500/10 px-2.5 py-1 font-mono text-[11px] text-copper-600 dark:text-copper-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.metrics && (
            <div className="mt-5 flex gap-6">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-2xl font-semibold text-teal-600 dark:text-teal-400">{m.value}</p>
                  <p className="text-xs text-ink-500 dark:text-paper-100/50">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="mt-5 flex items-center gap-1.5 font-mono text-xs text-teal-600 dark:text-teal-400 hover:underline"
          >
            {expanded ? 'Hide details' : 'View details'}
            <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>

          {expanded && (
            <div className="mt-5 flex flex-col gap-5 border-t border-ink-300/20 dark:border-paper-100/10 pt-5">
              <p className="text-sm leading-relaxed text-ink-700 dark:text-paper-100/75">{project.description}</p>

              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-ink-500 dark:text-paper-100/50">
                  <ListChecks size={13} /> key features
                </div>
                <ul className="mt-2 space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-ink-700 dark:text-paper-100/75">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-ink-500 dark:text-paper-100/50">
                  <Wrench size={13} /> challenges
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-paper-100/75">{project.challenges}</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-ink-500 dark:text-paper-100/50">
                  <Lightbulb size={13} /> what I learned
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-paper-100/75">{project.learned}</p>
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center gap-3">
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-300/40 dark:border-paper-100/20 px-4 py-2 font-mono text-xs text-ink-800 dark:text-paper-100/85 transition-colors hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
            >
              <Github size={13} /> GitHub
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="inline-flex items-center gap-1.5 rounded-full bg-teal-500 px-4 py-2 font-mono text-xs font-medium text-ink-950 transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}
