import { FC } from 'react'

interface NavigationProps {
  activeSection?: string
}

export const Navigation: FC<NavigationProps> = ({ activeSection = 'hero' }) => {
  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'work', label: 'Selected Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills & Tools' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-[#0a0a0c]/80 border-b border-[#1f1f26]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-white font-semibold tracking-wider text-sm uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c8a45c] inline-block"></span>
          <span>Anup Prajapati</span>
          <span className="text-neutral-500 font-normal lowercase tracking-normal text-xs ml-2 hidden sm:inline">
            / 3d artist & lighting
          </span>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleScrollTo(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-white bg-[#1a1a22]'
                      : 'text-neutral-400 hover:text-white hover:bg-[#14141a]'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
