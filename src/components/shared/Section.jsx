/** `background` renders edge to edge behind the centred content (e.g. <Aurora />). */
export function Section({ id, children, className = '', innerClassName = '', background = null }) {
  return (
    <section id={id} className={`relative scroll-mt-16 px-4 py-20 md:px-6 md:py-28 ${className}`}>
      {background}
      <div className={`relative mx-auto max-w-6xl ${innerClassName}`}>{children}</div>
    </section>
  )
}
