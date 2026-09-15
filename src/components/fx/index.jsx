/**
 * Motion effects, all built on `motion` (ADR-0001; copied from hyperion-landing). Every effect respects prefers-reduced-motion:
 * App wraps the tree in <MotionConfig reducedMotion="user">, and the CSS-driven effects are covered
 * by the reduced-motion block in index.css.
 */
import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  animate,
} from 'motion/react'

/** Blur + rise into view. Children of a <RevealGroup> stagger. */
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  )
}

export function RevealGroup({ children, className = '', stagger = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28, filter: 'blur(8px)', scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          scale: 1,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/** Heading that reveals word by word. */
export function WordReveal({ text, className = '', as = 'h2' }) {
  const Tag = motion[as]
  const words = text.split(' ')
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: '0.6em', filter: 'blur(6px)' },
            show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}

/** Card with a radial light that follows the pointer. */
export function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const background = useTransform(
    [x, y],
    ([cx, cy]) => `radial-gradient(360px circle at ${cx}px ${cy}px, rgba(34,197,94,0.14), transparent 70%)`,
  )

  const onMove = (event) => {
    const rect = ref.current.getBoundingClientRect()
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(-400)
        y.set(-400)
      }}
      className={`group relative overflow-hidden rounded border border-border-primary bg-background-secondary transition-colors hover:border-accent-action/50 ${className}`}
    >
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background }} />
      <div className="relative">{children}</div>
    </div>
  )
}

/** A light beam that travels around the border (CSS conic gradient, see index.css). */
export function BorderBeam({ children, className = '', innerClassName = '' }) {
  return (
    <div className={`beam-border relative rounded-lg p-px ${className}`}>
      <div className={`relative rounded-[7px] bg-background-primary ${innerClassName}`}>{children}</div>
    </div>
  )
}

/** Counts up to a value when it enters the viewport. */
export function NumberTicker({ value, decimals = 0, prefix = '', suffix = '', locale = 'nl-NL', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, value])

  const formatted = display.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

/** Endless horizontal scroll of items (CSS, pauses on hover). */
export function Marquee({ items, className = '' }) {
  const row = [...items, ...items]
  return (
    <div className={`marquee relative overflow-hidden ${className}`}>
      <div className="marquee-track flex w-max gap-10">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="whitespace-nowrap text-lg font-semibold text-text-tertiary">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/** Thin progress bar at the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-16 z-50 h-[2px] origin-left bg-gradient-to-r from-accent-action via-emerald-300 to-accent-action"
      style={{ scaleX }}
    />
  )
}

/** Wrapper that pulls its child a little toward the pointer. */
export function Magnetic({ children, strength = 0.25, className = '' }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 220, damping: 18 })
  const y = useSpring(0, { stiffness: 220, damping: 18 })

  const onMove = (event) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

/** Soft moving colour fields behind a section (CSS, see index.css). */
export function Aurora({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="absolute inset-0 grid-fade" />
    </div>
  )
}
