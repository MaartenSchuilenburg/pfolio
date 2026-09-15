/** "(site in Dutch)" after a link to hyperionmind.eu on the English page; nothing in Dutch. */
export function ExternalNote({ note, className = '' }) {
  if (!note) return null
  return <span className={`font-normal text-text-tertiary ${className}`}> ({note})</span>
}
