import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'

export default function Experience() {
  return (
    <section id="experience" className="bg-ink-50/0 dark:bg-ink-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="05 · experience"
            title="Timeline"
            description="Industry work in automation and CRM at AGN Networks, alongside leadership while at UST."
          />
        </ScrollReveal>

        <div className="relative mt-14 pl-8 sm:pl-10">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-500/60 via-ink-300/30 dark:via-paper-100/15 to-transparent sm:left-[11px]" />
          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <ScrollReveal key={`${item.title}-${i}`} delay={i * 60}>
                <div className="relative">
                  <span className="absolute -left-8 top-1.5 h-[9px] w-[9px] rounded-full bg-teal-500 ring-4 ring-teal-500/15 sm:-left-10" />
                  <p className="font-mono text-xs text-ink-500 dark:text-teal-400/80">{item.date}</p>
                  <h3 className="mt-1.5 font-display text-lg font-medium text-ink-900 dark:text-paper-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-copper-600 dark:text-copper-400">{item.org}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600 dark:text-paper-100/70">
                    {item.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-ink-300/15 dark:bg-paper-100/8 px-2.5 py-0.5 font-mono text-[11px] text-ink-600 dark:text-paper-100/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
