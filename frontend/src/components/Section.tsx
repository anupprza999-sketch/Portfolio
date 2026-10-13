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
    <section id={id} className={`py-20 md:py-28 px-6 max-w-7xl mx-auto relative ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12 md:mb-16 text-left">
          {subtitle && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-[#12121a]/90 backdrop-blur-md text-[#c8a45c] border border-[#242434] mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a45c] animate-pulse"></span>
              {subtitle}
            </div>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
