/**
 * Fails when nl.js and en.js do not have the same shape: every key, and every array item's keys,
 * must exist in both languages. Runs before `vite build`.
 */
import nl from '../src/content/nl.js'
import en from '../src/content/en.js'

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value)

function compare(a, b, path, problems) {
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      problems.push(`${path}: array in one language only`)
      return
    }
    if (a.length !== b.length) problems.push(`${path}: ${a.length} items in nl, ${b.length} in en`)
    for (let i = 0; i < Math.min(a.length, b.length); i++) compare(a[i], b[i], `${path}[${i}]`, problems)
    return
  }
  if (isObject(a) || isObject(b)) {
    if (!isObject(a) || !isObject(b)) {
      problems.push(`${path}: object in one language only`)
      return
    }
    for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (!(key in a)) problems.push(`${path}.${key}: missing in nl`)
      else if (!(key in b)) problems.push(`${path}.${key}: missing in en`)
      else compare(a[key], b[key], `${path}.${key}`, problems)
    }
  }
}

const problems = []
compare(nl, en, 'content', problems)

if (problems.length) {
  console.error(`Content check failed (${problems.length}):\n  ${problems.join('\n  ')}`)
  process.exit(1)
}
console.log('Content check passed: nl and en have the same keys.')
