import { motion } from 'motion/react'
import { Button } from './shared/Button'
import { ExternalNote } from './shared/ExternalNote'
import { BorderBeam } from './fx'
import { useContent } from '../hooks/useContent'
import { CAL_URL, HYPERIONMIND_URL, PHOTO } from '../content/site'

const rise = (delay) => ({
  initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export function Hero() {
  const { t } = useContent()

  return (
    <section id="top" className="relative px-4 pt-28 pb-20 md:px-6 md:pt-40 md:pb-32">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-[1.25fr_1fr] md:gap-16">
        <div className="order-2 md:order-1">
          <motion.p
            {...rise(0)}
            className="mb-5 inline-block rounded border border-accent-action px-3 py-1.5 font-mono text-xs text-accent-action md:text-sm"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.p {...rise(0.05)} className="mb-3 text-lg text-text-tertiary md:text-xl">
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            {...rise(0.1)}
            className="mb-6 text-4xl font-bold leading-tight text-text-primary md:text-5xl lg:text-6xl"
            style={{ hyphens: 'auto', WebkitHyphens: 'auto' }}
          >
            {t.hero.role}
          </motion.h1>

          <motion.p {...rise(0.2)} className="mb-8 text-lg leading-relaxed text-text-tertiary md:mb-10 md:text-xl">
            {t.hero.tagline}
          </motion.p>

          <motion.div {...rise(0.3)} className="flex flex-col gap-4 sm:flex-row">
            <Button href={CAL_URL} className="w-full text-center sm:w-auto">
              {t.hero.ctaPrimary}
            </Button>
            <Button href={HYPERIONMIND_URL} variant="secondary" className="w-full text-center sm:w-auto">
              {t.hero.ctaSecondary}
              <ExternalNote note={t.common.hyperionmindNote} className="text-xs" />
            </Button>
          </motion.div>

          <motion.p {...rise(0.35)} className="mt-5 text-sm text-text-tertiary">
            {t.hero.ctaNote}
          </motion.p>
        </div>

        {PHOTO && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 mr-auto w-32 sm:w-44 md:order-2 md:mx-auto md:w-full md:max-w-sm"
          >
            <BorderBeam innerClassName="p-1.5">
              <img
                src={PHOTO}
                alt={t.hero.photoAlt}
                width="556"
                height="640"
                className="aspect-[556/640] w-full rounded-md object-cover"
              />
            </BorderBeam>
          </motion.div>
        )}
      </div>
    </section>
  )
}
