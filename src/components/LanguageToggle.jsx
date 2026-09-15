import { useNavigate } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { LANGUAGES, SECTION_IDS } from '../content/site'

// The section whose top has passed just under the fixed navigation, so the reader keeps their place
function currentSection() {
  let current = null
  for (const id of SECTION_IDS) {
    const element = document.getElementById(id)
    if (element && element.getBoundingClientRect().top <= 120) current = id
  }
  return current
}

export function LanguageToggle({ className = '' }) {
  const { lang, t } = useContent()
  const navigate = useNavigate()

  const switchTo = (target) => {
    if (target === lang) return
    const section = currentSection()
    navigate(`${LANGUAGES[target].path}${section ? `#${section}` : ''}`, { state: { keepPlace: true } })
  }

  const option = (code) => (
    <button
      type="button"
      onClick={() => switchTo(code)}
      aria-current={code === lang ? 'true' : undefined}
      lang={LANGUAGES[code].htmlLang}
      className={`px-2 py-1 rounded transition-colors ${
        code === lang ? 'text-text-primary' : 'text-text-tertiary hover:text-text-secondary'
      }`}
    >
      {code.toUpperCase()}
    </button>
  )

  return (
    <div
      role="group"
      aria-label={t.nav.switchLabel}
      className={`flex items-center font-mono text-xs md:text-sm ${className}`}
    >
      {option('nl')}
      <span aria-hidden="true" className="text-text-disabled">
        |
      </span>
      {option('en')}
    </div>
  )
}
