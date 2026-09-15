export function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}) {
  const baseStyles = 'px-6 py-3 rounded border-[1px] font-semibold transition-all duration-200 text-sm md:text-base'

  const variants = {
    primary: `${baseStyles} bg-accent-action text-black hover:bg-accent-action-hover border-accent-action`,
    secondary: `${baseStyles} bg-transparent border-border-primary text-text-tertiary hover:border-text-secondary hover:text-text-secondary`,
    tertiary: `${baseStyles} bg-transparent border-none text-text-tertiary hover:text-text-secondary p-0`,
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
