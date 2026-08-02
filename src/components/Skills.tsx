import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { skillCategories } from '../data/skills'
import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect, useState } from 'react'

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>(0.3)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new MutationObserver(() => {
      if (node.classList.contains('is-visible')) {
        const t = setTimeout(() => setWidth(level), delay)
        return () => clearTimeout(t)
      }
    })
    observer.observe(node, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, delay])

  return (
    <div ref={ref} className="reveal">
      <div className="flex items-center justify-between text-xs">
        <span className="text-ink-700 dark:text-paper-100/80">{name}</span>
        <span className="font-mono text-ink-500 dark:text-paper-100/40">{level}%</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-ink-300/20 dark:bg-paper-100/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-copper-400 transition-[width] duration-[1200ms] ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-ink-50/0 dark:bg-ink-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="03 · skills"
            title="What I build with"
            description="Grouped by where each tool actually shows up in my work, from browser to breadboard."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, ci) => {
            const Icon = (Icons[category.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Code2
            return (
              <ScrollReveal key={category.title} delay={ci * 60}>
                <div className="h-full rounded-2xl border border-ink-300/30 dark:border-paper-100/10 bg-white/50 dark:bg-ink-900/50 p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      <Icon size={17} />
                    </span>
                    <h3 className="font-display text-lg font-medium text-ink-900 dark:text-paper-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    {category.skills.map((skill, si) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={si * 90} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
