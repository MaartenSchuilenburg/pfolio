import { useLocation } from 'react-router-dom'
import nl from '../content/nl'
import en from '../content/en'
import { LANGUAGES } from '../content/site'

const CONTENT = { nl, en }

export function langFromPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'nl'
}

/** Copy for the language in the route prefix: `/` is Dutch, `/en` is English. */
export function useContent() {
  const { pathname } = useLocation()
  const lang = langFromPath(pathname)
  return { lang, t: CONTENT[lang], language: LANGUAGES[lang] }
}
