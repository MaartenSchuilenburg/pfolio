import { Section } from './shared/Section'
import { Reveal, RevealGroup, RevealItem, SpotlightCard, WordReveal } from './fx'
import { useContent } from '../hooks/useContent'

/**
 * Media and links per project id (the ids are the same in nl.js and en.js; the link text is the
 * item's linkLabel). Only real, cleared images: the client dashboard screenshots with client figures
 * stay off the site. `wide` spans two grid columns.
 */
const MEDIA = {
  nbf: {
    link: 'https://nbf-demo.onrender.com/',
  },
  pharmalarm: {
    image: '/images/pharmalarm.webp',
    width: 1400,
    height: 933,
    wide: true,
    link: 'https://accountabilityhack.nl/2019/10/09/1430/',
  },
  // Login e-mail address blurred in the screenshot
  sustainability: {
    image: '/images/sustainability.webp',
    width: 1316,
    height: 586,
  },
}

export function Projects() {
  const { t } = useContent()

  return (
    <Section id="projects">
      <WordReveal text={t.projects.title} className="mb-4 text-3xl font-bold text-text-primary md:text-4xl" />
      <Reveal>
        <p className="mb-10 max-w-2xl text-lg text-text-tertiary md:mb-12">{t.projects.intro}</p>
      </Reveal>

      <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project) => {
          const media = MEDIA[project.id]
          return (
            <RevealItem key={project.id} className={`h-full ${media?.wide ? 'md:col-span-2' : ''}`}>
              <SpotlightCard className="flex h-full flex-col">
                {media?.image && (
                  <img
                    src={media.image}
                    alt=""
                    width={media.width}
                    height={media.height}
                    loading="lazy"
                    className={`w-full border-b border-border-primary object-cover object-left-top ${
                      media.wide ? 'aspect-[3/2] md:aspect-[21/9]' : 'aspect-[16/9] bg-white'
                    }`}
                  />
                )}
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="mb-2 font-mono text-xs text-accent-action">{project.org}</p>
                  <h3 className="mb-3 text-lg font-semibold text-text-primary">{project.title}</h3>
                  <p className="mb-5 flex-1 leading-relaxed text-text-tertiary">{project.text}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border-primary px-2 py-0.5 text-xs text-text-tertiary"
                      >
                        {tag}
                      </span>
                    ))}
                    {media?.link && project.linkLabel && (
                      <a
                        href={media.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-sm font-semibold text-accent-action hover:text-accent-action-hover"
                      >
                        {project.linkLabel} →
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
