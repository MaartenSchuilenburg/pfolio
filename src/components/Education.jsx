import { Section } from './shared/Section'
import { RevealGroup, RevealItem, WordReveal } from './fx'
import { useContent } from '../hooks/useContent'
import { CERTIFICATIONS } from '../content/site'

function Column({ label, items }) {
  return (
    <RevealItem>
      <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-text-disabled">{label}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-text-secondary">
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-action" />
            {item}
          </li>
        ))}
      </ul>
    </RevealItem>
  )
}

export function Education() {
  const { t } = useContent()

  return (
    <Section id="education">
      <WordReveal text={t.education.title} className="mb-10 text-3xl font-bold text-text-primary md:text-4xl" />
      <RevealGroup className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <Column label={t.education.degreesLabel} items={t.education.degrees} />
        <Column label={t.education.certificationsLabel} items={CERTIFICATIONS} />
        <Column label={t.education.coursesLabel} items={t.education.courses} />
      </RevealGroup>
    </Section>
  )
}
