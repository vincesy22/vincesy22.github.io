import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { achievements } from '../data/misc'
import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'

export default function Achievements() {
  return (
    <section id="achievements" className="bg-ink-50/0 dark:bg-ink-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="07 · achievements"
            title="Where I've grown"
            description="Academic performance, certifications, capstone results, and the leadership and industry work behind them."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Award
            return (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-ink-300/30 dark:border-paper-100/10 bg-white/50 dark:bg-ink-900/50 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-medium text-ink-900 dark:text-paper-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-paper-100/65">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
