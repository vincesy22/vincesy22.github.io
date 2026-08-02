import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink-300/40 dark:border-paper-100/15 text-ink-700 dark:text-paper-100/80 transition-colors hover:border-teal-500 hover:text-teal-500 dark:hover:text-teal-400"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
