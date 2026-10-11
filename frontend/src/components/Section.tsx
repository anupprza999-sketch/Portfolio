import { FC, ReactNode } from 'react'

interface SectionProps {
  id: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export const Section: FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12 md:mb-16">
          {subtitle && (
            <p className="text-xs uppercase tracking-widest text-[#c8a45c] font-medium mb-2">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
