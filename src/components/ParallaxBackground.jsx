import { useEffect, useState } from 'react'

// Brand accent #22c55e as RGB
const ACCENT = '34, 197, 94'

// Shapes that drift toward the centre as the page scrolls
const elements = [
  { id: 1, type: 'square', startX: '5%', startY: '10%', size: 80, speed: 0.3 },
  { id: 2, type: 'triangle', startX: '88%', startY: '5%', size: 100, speed: 0.4 },
  { id: 3, type: 'square', startX: '8%', startY: '25%', size: 120, speed: 0.5 },
  { id: 4, type: 'hexagon', startX: '85%', startY: '15%', size: 90, speed: 0.35 },
  { id: 5, type: 'triangle', startX: '10%', startY: '50%', size: 110, speed: 0.45 },
  { id: 6, type: 'square', startX: '82%', startY: '45%', size: 70, speed: 0.55 },
  { id: 7, type: 'hexagon', startX: '12%', startY: '70%', size: 85, speed: 0.4 },
  { id: 8, type: 'triangle', startX: '80%', startY: '65%', size: 95, speed: 0.6 },
  { id: 9, type: 'square', startX: '7%', startY: '85%', size: 100, speed: 0.5 },
  { id: 10, type: 'hexagon', startX: '86%', startY: '80%', size: 80, speed: 0.45 },
]

function hexagonPoints(size) {
  return [0, 60, 120, 180, 240, 300]
    .map((angle) => {
      const rad = (angle * Math.PI) / 180
      return `${size / 2 + (size / 2) * Math.cos(rad)},${size / 2 + (size / 2) * Math.sin(rad)}`
    })
    .join(' ')
}

// `subtle`: the phone treatment (four small, faint shapes at the edges) on every screen size, so
// the shapes stay behind a text-heavy profile page instead of competing with it
export function ParallaxBackground({ subtle = false }) {
  const [scrollY, setScrollY] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)')
    const updateMobile = () => setIsMobile(mobileQuery.matches)
    updateMobile()
    mobileQuery.addEventListener('change', updateMobile)
    return () => mobileQuery.removeEventListener('change', updateMobile)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(media.matches)

    // One state update per animation frame instead of one per scroll event
    let frame = null
    const handleScroll = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY)
        frame = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  // Phones: four small, fainter shapes pinned to the edges that barely drift inward, so they never
  // sit on top of the text
  const reduced = isMobile || subtle
  const visible = reduced
    ? elements
        .filter((e) => [1, 4, 8, 9].includes(e.id))
        .map((e) => ({
          ...e,
          size: Math.round(e.size * (isMobile ? 0.45 : 0.7)),
          startX: parseInt(e.startX) < 50 ? '-3%' : isMobile ? '90%' : '95%',
        }))
    : elements

  const renderElement = (element) => {
    const offset = reducedMotion ? 0 : scrollY * element.speed
    const drift = reduced ? 0.08 : 0.5
    const moveX = parseInt(element.startX) < 50 ? offset * drift : -(offset * drift)
    const moveY = offset * (reduced ? 0.4 : 0.8)
    const opacity = Math.max(0.06, (reduced ? 0.16 : 0.3) - offset / 1000)
    const fill = `rgba(${ACCENT}, ${opacity})`
    const stroke = `rgba(${ACCENT}, ${opacity * 1.2})`
    const base = {
      position: 'absolute',
      left: element.startX,
      top: element.startY,
      pointerEvents: 'none',
      willChange: 'transform',
    }

    if (element.type === 'square') {
      return (
        <div
          key={element.id}
          style={{
            ...base,
            width: element.size,
            height: element.size,
            backgroundColor: fill,
            border: `2px solid ${stroke}`,
            transform: `translate(${moveX}px, ${moveY}px) rotate(45deg)`,
          }}
        />
      )
    }

    const points =
      element.type === 'triangle'
        ? `${element.size / 2} 0, ${element.size} ${element.size}, 0 ${element.size}`
        : hexagonPoints(element.size)

    return (
      <svg
        key={element.id}
        width={element.size}
        height={element.size}
        viewBox={`0 0 ${element.size} ${element.size}`}
        style={{ ...base, transform: `translate(${moveX}px, ${moveY}px)` }}
      >
        <polygon points={points} fill={fill} stroke={stroke} strokeWidth="2" />
      </svg>
    )
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {visible.map(renderElement)}
    </div>
  )
}
