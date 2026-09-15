import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './shared/Button'
import { LanguageToggle } from './LanguageToggle'
import { useContent } from '../hooks/useContent'
import { CAL_URL, CONTACT, SECTION_IDS } from '../content/site'

export function Navigation() {
  const { t, language } = useContent()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-border-primary bg-background-primary/90 backdrop-blur-[10px]'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <Link to={language.path} className="min-w-0 truncate font-bold text-text-primary hover:opacity-80">
          {/* First name only on the narrowest phones, so the toggle and call button fit */}
          <span className="sm:hidden">{CONTACT.name.split(' ')[0]}</span>
          <span className="hidden sm:inline">{CONTACT.name}</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm lg:flex">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-text-tertiary transition-colors hover:text-text-secondary"
            >
              {t.nav[id]}
            </a>
          ))}
        </div>

        <div className="flex flex-shrink-0 items-center gap-2 md:gap-4">
          <LanguageToggle />
          <Button href={CAL_URL} className="hidden md:inline-block whitespace-nowrap">
            {t.hero.ctaPrimary}
          </Button>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden whitespace-nowrap rounded bg-accent-action px-3 py-2 text-sm font-semibold text-black hover:bg-accent-action-hover"
          >
            {t.nav.ctaShort}
          </a>
        </div>
      </div>
    </nav>
  )
}
