import { Section } from './shared/Section'
import { Button } from './shared/Button'
import { ExternalNote } from './shared/ExternalNote'
import { Aurora, Magnetic, Reveal, WordReveal } from './fx'
import { useContent } from '../hooks/useContent'
import { CAL_URL, CONTACT, GITHUB_URL, HYPERIONMIND_URL, LINKEDIN_URL } from '../content/site'

export function Contact() {
  const { t } = useContent()

  const details = [
    { label: t.contact.emailLabel, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: 'LinkedIn', value: 'maartenschuilenburg', href: LINKEDIN_URL },
    { label: 'GitHub', value: 'MaartenSchuilenburg', href: GITHUB_URL },
    { label: t.contact.kvkLabel, value: String(CONTACT.kvk) },
  ]

  return (
    <Section
      id="contact"
      className="overflow-hidden border-t border-border-secondary md:py-36"
      innerClassName="max-w-3xl text-center"
      background={<Aurora />}
    >
      <div className="relative">
        <WordReveal
          text={t.contact.title}
          className="mb-6 text-3xl font-bold text-text-primary md:text-5xl"
        />
        <Reveal delay={0.1}>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-tertiary">{t.contact.text}</p>
        </Reveal>

        <Reveal delay={0.2} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnetic>
            <Button href={CAL_URL} className="px-8 py-4 md:text-lg">
              {t.contact.ctaPrimary}
            </Button>
          </Magnetic>
          <Button href={HYPERIONMIND_URL} variant="secondary">
            {t.contact.ctaSecondary}
            <ExternalNote note={t.common.hyperionmindNote} className="text-xs" />
          </Button>
        </Reveal>

        <Reveal delay={0.3}>
          <dl className="mx-auto mt-14 grid max-w-xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {details.map((detail) => (
              <div key={detail.label} className="rounded border border-border-primary bg-background-primary/70 px-4 py-3">
                <dt className="font-mono text-xs text-text-disabled">{detail.label}</dt>
                <dd className="truncate text-text-secondary">
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="hover:text-accent-action"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
