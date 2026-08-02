import { Facebook, Github, Heart, Linkedin, Mail, Phone } from 'lucide-react'
import { navLinks } from '../data/nav'

const socials = [
  { icon: Github, href: 'https://github.com/vincesy22', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vince-emmanuel-sy-19b944312', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/vince.sy.60328', label: 'Facebook' },
  { icon: Mail, href: 'mailto:vinceemmanuelsy@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+639625608515', label: 'Phone' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-300/30 dark:border-paper-100/10 bg-paper-100 dark:bg-ink-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm text-ink-900 dark:text-paper-100">
            <span className="text-teal-500 dark:text-teal-400">{'</>'}</span> vince sy
          </p>
          <p className="mt-1 text-xs text-ink-500 dark:text-paper-100/45">
            BS Information Technology · University of Santo Tomas
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-ink-600 dark:text-paper-100/55 hover:text-teal-600 dark:hover:text-teal-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-300/30 dark:border-paper-100/15 text-ink-600 dark:text-paper-100/60 transition-colors hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6">
        <p className="flex items-center justify-center gap-1.5 border-t border-ink-300/20 dark:border-paper-100/10 pt-6 text-center font-mono text-xs text-ink-400 dark:text-paper-100/35">
          © {new Date().getFullYear()} Vince Emmanuel F. Sy. Built with
          <Heart size={12} className="fill-copper-400 text-copper-400" />
          and a lot of coffee.
        </p>
      </div>
    </footer>
  )
}
