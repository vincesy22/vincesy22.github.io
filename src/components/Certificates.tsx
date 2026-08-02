import { Award, ExternalLink } from 'lucide-react'
import { certificates } from '../data/misc'
import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'

export default function Certificates() {
  return (
    <section id="certificates" className="bg-paper-100 dark:bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="08 · certificates"
            title="Certificates & Trainings"
            description="Certifications and trainings earned through the ITPEC program, IBM SkillsBuild, Edge Impulse, Salesforce, and UST CICS."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 60}>
              <div
                className={`flex h-full flex-col items-start rounded-2xl border p-6 transition-colors ${
                  cert.href ? 'border-ink-300/30 dark:border-paper-100/10 bg-white/50 dark:bg-ink-900/50 hover:border-teal-500' : 'border-ink-300/30 dark:border-paper-100/10 bg-white/50 dark:bg-ink-900/50'
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-copper-500/10 text-copper-500 dark:text-copper-400">
                  <Award size={18} />
                </span>
                <h3 className="mt-4 font-display text-base font-medium text-ink-800 dark:text-paper-100/90">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-ink-500 dark:text-paper-100/45">{cert.issuer}</p>
                <p className="mt-0.5 font-mono text-[11px] text-ink-400 dark:text-paper-100/35">{cert.date}</p>
                {cert.href && (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    View certificate <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
