import { FC, useState } from 'react'
import { Navigation } from './components/Navigation'
import { Section } from './components/Section'
import { HeroCanvas } from './scenes/HeroCanvas'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import { PORTFOLIO_PROJECTS, ProjectData } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'

const App: FC = () => {
  const { containerRef } = useScrollAnimation()
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col selection:bg-[#c8a45c]/20 selection:text-white"
    >
      <Navigation activeSection="hero" />

      <main className="flex-1 pt-16">
        {/* Hero Section with Interactive 3D Real-time Scene */}
        <section
          id="hero"
          className="relative min-h-[92vh] flex items-center px-6 max-w-7xl mx-auto overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full py-12">
            {/* Left Content Column */}
            <div id="hero-content" className="lg:col-span-7 space-y-6 z-10 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#141418] text-[#c8a45c] border border-[#242429]">
                <span className="w-2 h-2 rounded-full bg-[#c8a45c] animate-pulse"></span>
                3D Artist & Environment Specialist
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                Anup Prajapati
              </h1>

              <p className="text-xl sm:text-2xl text-neutral-400 font-light max-w-xl">
                Unreal Engine Environment Design, Atmospheric Lighting & Architectural Reconstruction
              </p>

              <p className="text-sm text-neutral-500 max-w-lg leading-relaxed">
                Crafting photorealistic environments and stylized worlds with emphasis on mood, dynamic lighting, and architectural storytelling.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="px-6 py-3 rounded text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-colors"
                >
                  View Selected Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded text-sm font-medium bg-[#141418] text-neutral-300 border border-[#242429] hover:text-white hover:border-neutral-600 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right 3D Viewport Column */}
            <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-radial from-[#1e1e28]/20 to-transparent pointer-events-none rounded-full blur-2xl"></div>
              <HeroCanvas />
            </div>
          </div>
        </section>

        {/* Selected Work Gallery */}
        <Section id="work" title="Selected Works" subtitle="Portfolio Exhibition">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" title="About & Background" subtitle="Creative Profile">
          <div className="max-w-3xl space-y-4 text-neutral-300 text-base leading-relaxed">
            <p>
              I am a 3D artist and environment designer based in Bhaktapur, Nepal, with a strong focus on Unreal Engine scene creation, dynamic lighting, and architectural reconstruction.
            </p>
            <p className="text-neutral-400 text-sm">
              With experience at Gamenic Virtual Studio, I specialize in building immersive interior and exterior environments, lighting setups, 3D asset modeling in Blender and Maya, and visual storytelling.
            </p>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Technical Toolset" subtitle="Proficiencies">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Unreal Engine', desc: 'Environment design, lighting setups' },
              { name: 'Autodesk Maya', desc: '3D modeling & asset creation' },
              { name: 'Blender', desc: 'Scene composition & interiors' },
              { name: 'Adobe Premiere Pro', desc: 'Cinematic video editing' },
              { name: 'Adobe After Effects', desc: 'Motion VFX & compositing' },
              { name: 'Adobe Photoshop', desc: 'Texture manipulation & matte' },
              { name: 'Figma', desc: 'Visual design & layouts' },
              { name: 'Lighting & Shading', desc: 'Atmosphere, mood, photorealism' }
            ].map((skill) => (
              <div key={skill.name} className="p-4 rounded bg-[#141418] border border-[#242429]">
                <h4 className="text-sm font-semibold text-white mb-1">{skill.name}</h4>
                <p className="text-xs text-neutral-500">{skill.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get in Touch" subtitle="Collaboration">
          <div className="max-w-xl space-y-6">
            <p className="text-sm text-neutral-400">
              Open to environment art opportunities, architectural visualization, and collaborative creative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="mailto:Anupprza999@gmail.com"
                className="px-5 py-3 rounded bg-white text-black text-xs font-semibold tracking-wide uppercase hover:bg-neutral-200 transition-colors text-center"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/anup-prajapati-a75878242"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded bg-[#141418] border border-[#242429] text-neutral-300 text-xs font-semibold tracking-wide uppercase hover:border-neutral-500 hover:text-white transition-colors text-center"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-8 px-6 border-t border-[#1a1a22] text-center text-xs text-neutral-500">
        <p>© 2026 Anup Prajapati. 3D Artist & Environment Designer. All rights reserved.</p>
      </footer>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default App

