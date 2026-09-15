import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { Home } from './pages/Home'

// Scroll to the #anchor after a route change; the language toggle jumps instantly to keep the place
function RouteEffects() {
  const location = useLocation()

  useEffect(() => {
    const behavior = location.state?.keepPlace ? 'auto' : 'smooth'
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash, location.state])

  return null
}

export default function App() {
  return (
    // reducedMotion="user": every motion animation respects prefers-reduced-motion
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <RouteEffects />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/en" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
