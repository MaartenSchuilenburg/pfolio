import { Section } from './shared/Section'
import { Marquee, Reveal, RevealGroup, RevealItem, WordReveal } from './fx'
import { useContent } from '../hooks/useContent'
import { ORGANISATIONS } from '../content/site'

function formatPeriod(period, now) {
  if (!period?.from) return null
  return `${period.from} – ${period.to ?? now}`
}

export function Experience() {
  const { t } = useContent()

  return (
    <Section id="experience" innerClassName="max-w-3xl">
      <WordReveal text={t.experience.title} className="mb-10 text-3xl font-bold text-text-primary md:text-4xl" />

      <RevealGroup className="relative space-y-10 border-l border-border-primary pl-6 md:pl-8">
        {t.experience.items.map((item) => {
          const period = formatPeriod(item.period, t.experience.now)
          return (
            <RevealItem key={item.org} className="relative">
              <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-3 w-3 md:-left-[39px]">
                <span
                  className={`block h-3 w-3 rounded-full border-2 border-accent-action ${
                    item.period?.to == null ? 'pulse-dot bg-accent-action' : 'bg-background-primary'
                  }`}
                />
              </span>
              {period && <p className="mb-1 font-mono text-xs text-text-disabled md:text-sm">{period}</p>}
              <h3 className="text-xl font-semibold text-text-primary">{item.org}</h3>
              <p className="mb-2 text-text-secondary">{item.role}</p>
              {item.text && <p className="leading-relaxed text-text-tertiary">{item.text}</p>}
            </RevealItem>
          )
        })}
      </RevealGroup>

      <Reveal className="mt-16">
        <p className="mb-4 text-center font-mono text-xs uppercase tracking-widest text-text-disabled">
          {t.experience.organisationsLabel}
        </p>
        <Marquee items={ORGANISATIONS} />
      </Reveal>
    </Section>
  )
}
