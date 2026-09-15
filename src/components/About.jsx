import { Section } from './shared/Section'
import { NumberTicker, Reveal, RevealGroup, RevealItem, WordReveal } from './fx'
import { useContent } from '../hooks/useContent'
import { CERTIFICATIONS, ORGANISATIONS, YEARS_EXPERIENCE } from '../content/site'

export function About() {
  const { t, language } = useContent()

  // Only facts listed elsewhere on the page
  const stats = [
    { value: YEARS_EXPERIENCE, suffix: '+', label: t.about.stats.years },
    { value: ORGANISATIONS.length, label: t.about.stats.organisations },
    { value: CERTIFICATIONS.length, label: t.about.stats.certifications },
  ]

  return (
    <Section id="about" innerClassName="max-w-3xl">
      <WordReveal text={t.about.title} className="mb-8 text-3xl font-bold text-text-primary md:text-4xl" />

      <div className="space-y-6 text-lg leading-relaxed text-text-tertiary">
        {t.about.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className={i === 0 ? 'text-text-secondary' : ''}>{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <RevealGroup className="mt-12 grid grid-cols-3 gap-3 md:gap-4">
        {stats.map((stat) => (
          <RevealItem key={stat.label}>
            <div className="rounded border border-border-primary bg-background-secondary/60 p-4 text-center md:p-5">
              <p className="text-3xl font-bold text-shimmer md:text-5xl">
                <NumberTicker value={stat.value} suffix={stat.suffix || ''} locale={language.numberLocale} />
              </p>
              <p className="mt-1 text-xs text-text-tertiary md:text-sm">{stat.label}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
