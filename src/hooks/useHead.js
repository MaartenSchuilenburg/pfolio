import { useEffect } from 'react'
import { LANGUAGES, SITE_URL } from '../content/site'

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setLink(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
}

const urlFor = (lang) => SITE_URL + LANGUAGES[lang].path

/**
 * Per-language head tags. index.html carries the Dutch defaults, which is what link-preview
 * crawlers (LinkedIn) read, since they do not run JavaScript.
 */
export function useHead(lang, meta) {
  useEffect(() => {
    const url = urlFor(lang)
    document.documentElement.lang = LANGUAGES[lang].htmlLang
    document.title = meta.title

    setMeta('name', 'description', meta.description)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:locale', LANGUAGES[lang].locale)
    setMeta('name', 'twitter:title', meta.title)
    setMeta('name', 'twitter:description', meta.description)

    setLink('link[rel="canonical"]', { rel: 'canonical', href: url })
    setLink('link[rel="alternate"][hreflang="nl"]', { rel: 'alternate', hreflang: 'nl', href: urlFor('nl') })
    setLink('link[rel="alternate"][hreflang="en"]', { rel: 'alternate', hreflang: 'en', href: urlFor('en') })
    setLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: urlFor('nl'),
    })
  }, [lang, meta])
}
