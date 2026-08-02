import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, FolderGit2, Mail } from 'lucide-react'

const NAME = 'Vince Emmanuel F. Sy'
const RESUME_URL = 'https://drive.google.com/file/d/1jp_IrOj_Eud-_gkbxZ431T8mWocq48GR/view?usp=sharing'
const LINES = [
  'const developer = {',
  '  degree: "BS Information Technology",',
  '  school: "University of Santo Tomas",',
  '  builds: ["web apps", "automation", "IoT"],',
  '};',
]

function TerminalPanel() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    if (visibleLines >= LINES.length) return
    const currentLine = LINES[visibleLines]
    if (charCount < currentLine.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 18)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setVisibleLines((l) => l + 1)
      setCharCount(0)
    }, 220)
    return () => clearTimeout(t)
  }, [charCount, visibleLines])

  return (
    <div className="w-full rounded-2xl border border-paper-100/10 bg-ink-900/80 shadow-glow backdrop-blur-sm overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-paper-100/10 bg-ink-850 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-copper-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper-100/20" />
        <span className="ml-2 font-mono text-[11px] text-paper-100/40">about-me.ts</span>
      </div>
      <pre className="px-5 py-6 font-mono text-[13px] leading-relaxed text-paper-100/90 min-h-[180px]">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i}>
            <Highlighted line={line} />
          </div>
        ))}
        {visibleLines < LINES.length && (
          <div>
            <Highlighted line={LINES[visibleLines].slice(0, charCount)} />
            <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-teal-400 animate-blink" />
          </div>
        )}
      </pre>
    </div>
  )
}

function Highlighted({ line }: { line: string }) {
  // Lightweight syntax coloring for the terminal panel — strings in copper, keys in teal.
  const parts = line.split(/("(?:[^"\\]|\\.)*")/g)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('"') ? (
          <span key={i} className="text-copper-300">
            {part}
          </span>
        ) : (
          <span key={i} className="text-teal-300/90">
            {part}
          </span>
        ),
      )}
    </>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-paper-100 dark:bg-ink-950 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-lines [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-copper-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow font-mono text-sm text-teal-600 dark:text-teal-400">01 · hero</p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ink-900 dark:text-paper-100 text-balance">
            {NAME}
          </h1>
          <p className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-copper-500 dark:text-copper-400">
            BS Information Technology Graduate
          </p>
          <p className="mt-6 max-w-xl font-display text-xl italic text-ink-700 dark:text-paper-100/80">
            Building software, automation, and embedded systems that solve real-world problems.
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-600 dark:text-paper-100/65">
            I'm an Information Technology graduate from the University of Santo Tomas with industry experience
            in automation workflows at AGN Networks. I build across the stack — from web applications to
            IoT devices — with a focus on practical, efficient solutions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 font-mono text-sm font-medium text-ink-950 transition-transform hover:-translate-y-0.5 hover:bg-teal-400"
            >
              <FolderGit2 size={16} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-300/50 dark:border-paper-100/20 px-6 py-3 font-mono text-sm text-ink-800 dark:text-paper-100/90 transition-colors hover:border-copper-500 hover:text-copper-500 dark:hover:text-copper-400"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-ink-600 dark:text-paper-100/60 underline decoration-dotted underline-offset-4 hover:text-teal-600 dark:hover:text-teal-400"
            >
              <Download size={15} />
              Download Résumé
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <TerminalPanel />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-500 dark:text-paper-100/40 sm:flex"
      >
        <span className="font-mono text-[11px] tracking-wide">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  )
}
