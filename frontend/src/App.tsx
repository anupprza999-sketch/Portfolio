import { FC, useState } from 'react'
import { Navigation } from './components/Navigation'
import { Section } from './components/Section'
import { HeroCanvas } from './scenes/HeroCanvas'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import { PORTFOLIO_PROJECTS, ProjectData } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'
import { ContactForm } from './components/ContactForm'

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

        {/* About & Verified Career Profile */}
        <Section id="about" title="About & Background" subtitle="Creative Profile">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-neutral-300">
            <div className="md:col-span-7 space-y-4 text-base leading-relaxed">
              <p>
                I am a 3D artist and environment designer based in Bhaktapur, Nepal, specializing in Unreal Engine environment design, lighting, and architectural reconstruction.
              </p>
              <p className="text-neutral-400 text-sm">
                Passionate about crafting immersive and realistic scenes with a strong focus on composition, color palettes, and dynamic atmospheric lighting.
              </p>
            </div>
            <div className="md:col-span-5 p-6 rounded-xl bg-[#141418] border border-[#242429] space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#c8a45c] font-semibold">
                Location & Details
              </h4>
              <p className="text-xs text-neutral-400">
                <span className="text-white font-medium">Location:</span> Madhapur Thimi-5, Bhaktapur, Nepal
              </p>
              <p className="text-xs text-neutral-400">
                <span className="text-white font-medium">Email:</span> Anupprza999@gmail.com
              </p>
              <p className="text-xs text-neutral-400">
                <span className="text-white font-medium">Phone:</span> +977 9863855425
              </p>
            </div>
          </div>
        </Section>

        {/* Professional Experience & Education */}
        <Section id="experience" title="Experience & Education" subtitle="Career History">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="p-6 rounded-xl bg-[#141418] border border-[#242429] space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#c8a45c] font-semibold">
                Work Experience
              </p>
              <div>
                <h4 className="text-base font-bold text-white">Gamenic Virtual Studio</h4>
                <p className="text-xs text-[#c8a45c] font-medium mb-3">3D Artist</p>
                <ul className="space-y-2 text-xs text-neutral-400 list-disc list-inside">
                  <li>Created 3D models for various projects using Blender</li>
                  <li>Designed and developed interior spaces and rooms in Blender and Unreal Engine</li>
                  <li>Built immersive environments and implemented realistic lighting setups in Unreal Engine</li>
                  <li>Edited and produced videos using Adobe After Effects and Premiere Pro</li>
                  <li>Generated visual assets and concepts using Midjourney and Runway</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="p-6 rounded-xl bg-[#141418] border border-[#242429] space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#c8a45c] font-semibold">
                Education & Credentials
              </p>
              <div className="space-y-4">
                <div className="border-b border-[#202029] pb-3">
                  <h4 className="text-sm font-semibold text-white">Diploma in VFX and Animation</h4>
                  <p className="text-xs text-[#c8a45c]">Maya Animation Academy</p>
                  <p className="text-[11px] text-neutral-500 font-mono mt-0.5">Joined: 2077 B.S.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">+2 (High School)</h4>
                  <p className="text-xs text-[#c8a45c]">Supreme College Bhaktapur</p>
                  <p className="text-[11px] text-neutral-500 font-mono mt-0.5">Management • Passed: 2020</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Technical Skills */}
        <Section id="skills" title="Technical Toolset" subtitle="Proficiencies">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'Unreal Engine', desc: 'Environment design, lighting' },
              { name: 'Autodesk Maya', desc: '3D modeling & asset creation' },
              { name: 'Blender', desc: 'Scene composition & interiors' },
              { name: 'Adobe Premiere Pro', desc: 'Cinematic video editing' },
              { name: 'Adobe After Effects', desc: 'Motion VFX & compositing' },
              { name: 'Adobe Photoshop', desc: 'Texture manipulation & matte' },
              { name: 'Figma', desc: 'Visual design & layouts' },
              { name: 'Lighting & Shading', desc: 'Atmosphere, mood, photorealism' }
            ].map((skill) => (
              <div key={skill.name} className="p-4 rounded-xl bg-[#141418] border border-[#242429]">
                <h4 className="text-sm font-semibold text-white mb-1">{skill.name}</h4>
                <p className="text-xs text-neutral-500">{skill.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section with Active Form */}
        <Section id="contact" title="Get in Touch" subtitle="Collaboration & Inquiries">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Available for freelance environment design, architectural 3D reconstruction, and lighting contracts.
              </p>
              <div className="pt-2 space-y-2 text-xs text-neutral-400 font-mono">
                <p>Email: Anupprza999@gmail.com</p>
                <p>Location: Bhaktapur, Nepal</p>
              </div>
              <div className="pt-4">
                <a
                  href="https://www.linkedin.com/in/anup-prajapati-a75878242"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2.5 rounded bg-[#181820] border border-[#2b2b36] text-neutral-300 text-xs font-medium hover:border-[#c8a45c] hover:text-white transition-colors"
                >
                  View LinkedIn Profile ↗
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
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

