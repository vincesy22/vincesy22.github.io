import { useState, type FormEvent } from 'react'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Send } from 'lucide-react'
import { contactLinks } from '../data/misc'
import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'

type Status = 'idle' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string

    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:vinceemmanuelsy@gmail.com?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contact" className="bg-ink-50/0 dark:bg-ink-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="09 · contact"
            title="Let's build something"
            description="Open to internship opportunities, entry-level roles, and interesting collaborations."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-2">
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => {
                const Icon = (Icons[link.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Link
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-4 rounded-xl border border-ink-300/30 dark:border-paper-100/10 bg-white/50 dark:bg-ink-900/50 px-5 py-4 transition-colors hover:border-teal-500"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      <Icon size={17} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] text-ink-500 dark:text-paper-100/45">
                        {link.label}
                      </span>
                      <span className="block truncate text-sm text-ink-800 dark:text-paper-100/85 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                        {link.value}
                      </span>
                    </span>
                  </a>
                )
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-ink-300/30 dark:border-paper-100/10 bg-white/50 dark:bg-ink-900/50 p-7"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-mono text-xs text-ink-500 dark:text-paper-100/50">Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Juan Dela Cruz"
                    className="rounded-lg border border-ink-300/40 dark:border-paper-100/15 bg-transparent px-3.5 py-2.5 text-ink-900 dark:text-paper-100 placeholder:text-ink-400 dark:placeholder:text-paper-100/30 outline-none focus-visible:border-teal-500"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-mono text-xs text-ink-500 dark:text-paper-100/50">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="rounded-lg border border-ink-300/40 dark:border-paper-100/15 bg-transparent px-3.5 py-2.5 text-ink-900 dark:text-paper-100 placeholder:text-ink-400 dark:placeholder:text-paper-100/30 outline-none focus-visible:border-teal-500"
                  />
                </label>
              </div>
              <label className="mt-5 flex flex-col gap-1.5 text-sm">
                <span className="font-mono text-xs text-ink-500 dark:text-paper-100/50">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Let's talk about..."
                  className="resize-none rounded-lg border border-ink-300/40 dark:border-paper-100/15 bg-transparent px-3.5 py-2.5 text-ink-900 dark:text-paper-100 placeholder:text-ink-400 dark:placeholder:text-paper-100/30 outline-none focus-visible:border-teal-500"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 font-mono text-sm font-medium text-ink-950 transition-transform hover:-translate-y-0.5 hover:bg-teal-400"
              >
                <Send size={15} />
                Send Message
              </button>

              {status === 'sent' && (
                <p className="mt-4 font-mono text-xs text-teal-600 dark:text-teal-400" role="status">
                  Your email draft is ready — just hit send in your mail app. Thanks for reaching out!
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
