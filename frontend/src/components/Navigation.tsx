import { FC, useState } from 'react'
import { scrollToTarget } from '../utils/smoothScroll'

interface NavigationProps {
  activeSection?: string
}

export const Navigation: FC<NavigationProps> = ({ activeSection = 'hero' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'work', label: 'Selected Work' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills & Tools' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false)
    scrollToTarget(`#${id}`, -80)
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
      <div className="rounded-full bg-[#0d0d14]/85 backdrop-blur-xl border border-white/10 px-4 sm:px-6 py-2.5 shadow-2xl shadow-black/90 flex items-center justify-between transition-all">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-white font-semibold tracking-wider text-xs sm:text-sm uppercase group"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a45c] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c8a45c]"></span>
          </span>
          <span className="group-hover:text-[#e4c47d] transition-colors">Anup Prajapati</span>
          <span className="hidden md:inline-flex items-center text-[10px] font-mono lowercase tracking-normal text-neutral-400 bg-[#161622] px-2 py-0.5 rounded-full border border-white/5">
            UE5 & Environment Artist
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleScrollTo(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-black bg-[#c8a45c] font-semibold shadow-xs shadow-[#c8a45c]/30'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleScrollTo('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all shadow-md hover:shadow-[#c8a45c]/20 hover:scale-102"
          >
            <span>Let's Talk</span>
            <span className="text-[10px]">→</span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl bg-[#0d0d14]/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-black bg-[#c8a45c] font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="pt-3 mt-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white text-black text-center"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
