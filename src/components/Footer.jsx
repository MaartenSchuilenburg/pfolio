import { ExternalNote } from './shared/ExternalNote'
import { useContent } from '../hooks/useContent'
import { CONTACT, HYPERIONMIND_URL } from '../content/site'

export function Footer() {
  const { t } = useContent()

  return (
    <footer className="relative border-t border-border-secondary px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-text-tertiary md:flex-row">
        <p>
          © {new Date().getFullYear()} {CONTACT.name} · KvK {CONTACT.kvk}
        </p>
        <a href={HYPERIONMIND_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-action">
          {t.footer.hyperionmind}
          <ExternalNote note={t.common.hyperionmindNote} /> →
        </a>
      </div>
    </footer>
  )
}
