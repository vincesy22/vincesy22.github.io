import { GraduationCap } from 'lucide-react'
import { education } from '../data/misc'
import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'

export default function Education() {
  return (
    <section id="education" className="bg-paper-100 dark:bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading eyebrow="06 · education" title="Education" />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {education.map((item, i) => (
            <ScrollReveal key={item.school} delay={i * 80} className="sm:col-span-2">
              <div className="h-full rounded-2xl border border-ink-300/30 dark:border-paper-100/10 bg-white/50 dark:bg-ink-900/50 p-7">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-copper-500/10 text-copper-600 dark:text-copper-400">
                    <GraduationCap size={18} />
                  </span>
                  <span className="rounded-full bg-teal-500/10 px-3 py-1 font-mono text-[11px] text-teal-700 dark:text-teal-300">
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-ink-900 dark:text-paper-100">
                  {item.school}
                </h3>
                <p className="mt-1 text-sm text-ink-700 dark:text-paper-100/75">{item.degree}</p>
                <p className="mt-1 font-mono text-xs text-ink-500 dark:text-paper-100/45">{item.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-paper-100/65">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
