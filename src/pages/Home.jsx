import { Navigation } from '../components/Navigation'
import { ParallaxBackground } from '../components/ParallaxBackground'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'
import { Education } from '../components/Education'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { useContent } from '../hooks/useContent'
import { useHead } from '../hooks/useHead'

export function Home() {
  const { lang, t } = useContent()
  useHead(lang, t.meta)

  return (
    <>
      <ParallaxBackground subtle />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
