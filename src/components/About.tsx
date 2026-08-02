import {
  Bot,
  BrainCircuit,
  Briefcase,
  Cpu,
  Database,
  Eye,
  Globe,
  Lock,
  Puzzle,
  Sparkles,
  Target,
  Users,
  Workflow,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'

const interests = [
  { label: 'Software Development', icon: Cpu },
  { label: 'Automation & Workflows', icon: Workflow },
  { label: 'Web Development', icon: Globe },
  { label: 'IoT & Embedded Systems', icon: BrainCircuit },
  { label: 'Database Systems', icon: Database },
  { label: 'Cybersecurity', icon: Lock },
  { label: 'AI & Emerging Tech', icon: Bot },
  { label: 'Problem Solving', icon: Puzzle },
]

const strengths = [
  { label: 'Fast Learner', icon: Sparkles },
  { label: 'Analytical Thinker', icon: BrainCircuit },
  { label: 'Detail-Oriented', icon: Eye },
  { label: 'Team Player', icon: Users },
  { label: 'Continuous Learner', icon: Target },
]

export default function About() {
  return (
    <section id="about" className="bg-paper-100 dark:bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="02 · about"
            title="Aspriring Data Analyst/AI Engineer with a full-stack curiosity"
            description="From web applications to automation workflows and embedded devices — a short account of what I build and what I care about."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3">
            <div className="rounded-2xl border border-ink-300/30 dark:border-paper-100/10 bg-white/60 dark:bg-ink-900/50 p-8">
              <div className="flex items-center gap-2 font-mono text-xs text-teal-600 dark:text-teal-400">
                <Briefcase size={14} />
                at a glance
              </div>
              <p className="mt-4 leading-relaxed text-ink-700 dark:text-paper-100/80">
                I'm a <strong className="text-ink-900 dark:text-paper-100">BS Information Technology graduate</strong>{' '}
                from the University of Santo Tomas, interned at AGN Networks as a{' '}
                <strong className="text-ink-900 dark:text-paper-100">Software Developer</strong>.
                There I developed and optimized automation workflows, integrated business systems, and supported CRM
                enhancements using JavaScript, Google Sheets, and n8n — reducing manual tasks and streamlining business operations.
              </p>
              <p className="mt-4 leading-relaxed text-ink-700 dark:text-paper-100/80">
                My technical foundation spans object-oriented programming, data structures and algorithms,
                information management (SQL), software engineering, and web development with HTML, CSS,
                JavaScript, PHP, and MySQL. Beyond software, I've designed and built embedded systems —
                from an Arduino occupancy counter to an IoT capstone that automated a litter box end to end.
              </p>
              <p className="mt-4 leading-relaxed text-ink-700 dark:text-paper-100/80">
                I like understanding the "why" behind a system before I touch the "how," and I move comfortably
                between the abstract and the concrete — from requirements on paper to a sensor wired into a breadboard,
                or a workflow automating data between two business systems.
              </p>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <ScrollReveal delay={80}>
              <div className="rounded-2xl border border-ink-300/30 dark:border-paper-100/10 p-6">
                <h3 className="eyebrow font-mono text-xs text-ink-500 dark:text-teal-400/80">interests</h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {interests.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2.5 rounded-lg border border-ink-300/20 dark:border-paper-100/10 px-3 py-2.5 text-sm text-ink-700 dark:text-paper-100/80"
                    >
                      <Icon size={15} className="shrink-0 text-copper-500 dark:text-copper-400" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <div className="rounded-2xl border border-ink-300/30 dark:border-paper-100/10 p-6">
                <h3 className="eyebrow font-mono text-xs text-ink-500 dark:text-teal-400/80">strengths</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {strengths.map(({ label, icon: Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3.5 py-1.5 text-xs font-medium text-teal-700 dark:text-teal-300"
                    >
                      <Icon size={13} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
