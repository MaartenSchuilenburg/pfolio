/**
 * Facts shared by both languages. Copy lives in nl.js and en.js (identical keys, checked by
 * scripts/check-content.js); the facts that copy depends on live here, so a change happens once.
 *
 * Positioning and naming rules: the hyperion-mind skill. Keep CAL_URL, CONTACT and the organisation
 * list in step with hyperion-landing's src/content/site.js.
 */

export const SITE_URL = 'https://www.maartenschuilenburg.nl'
export const HYPERIONMIND_URL = 'https://www.hyperionmind.eu/'
export const CAL_URL = 'https://cal.com/maarten-schuilenburg-npd6oq/30min'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/maartenschuilenburg/'
export const GITHUB_URL = 'https://github.com/MaartenSchuilenburg'

export const CONTACT = {
  name: 'Maarten Schuilenburg',
  email: 'm@maartenschuilenburg.nl',
  kvk: 81376456,
}

// Path under /public. Null hides the photo.
export const PHOTO = '/images/maarten.jpg'

// Cleared for the web 2026-09-15 (hyperion-landing list plus NBF, My Jewellery and NTFU).
export const ORGANISATIONS = [
  'KPN',
  'ASML',
  'Deloitte',
  'Kenter Groendus',
  'ABN AMRO',
  'DSM',
  'Defensie',
  'NBF',
  'My Jewellery',
  'NTFU',
]

// Same list as hyperion-landing's Credentials section. Proper names, so not translated.
export const CERTIFICATIONS = [
  'PSPO II',
  'PRINCE2 Foundation',
  'SAFe 5 Agilist',
  'Lean Six Sigma Yellow Belt',
  'AZ-900 Azure Fundamentals',
]

// Only published facts: roughly eight years across analytics and IT (hyperion-mind skill).
export const YEARS_EXPERIENCE = 8

export const LANGUAGES = {
  nl: { path: '/', locale: 'nl_NL', htmlLang: 'nl', numberLocale: 'nl-NL' },
  en: { path: '/en', locale: 'en_GB', htmlLang: 'en', numberLocale: 'en-GB' },
}

// Anchors are shared by both languages, so the language toggle can keep the reader's place.
export const SECTION_IDS = ['about', 'experience', 'projects', 'education', 'contact']
