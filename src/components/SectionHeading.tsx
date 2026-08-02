interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className="eyebrow font-mono text-sm tracking-wide text-ink-500 dark:text-teal-400/90">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink-900 dark:text-paper-100 text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-ink-600 dark:text-paper-100/70 leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
