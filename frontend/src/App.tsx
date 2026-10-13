import { FC, useState } from 'react'
import { Navigation } from './components/Navigation'
import { Background3DCanvas } from './scenes/Background3DCanvas'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import { PORTFOLIO_PROJECTS, ProjectData } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'
import { ContactForm } from './components/ContactForm'
import { Section } from './components/Section'
import { HeroViewportScene } from './scenes/HeroViewportScene'
import { ReviewsSection } from './components/ReviewsSection'
import heroArtImg from './assets/hero_art.jpg'

const CATEGORIES = [
  'All',
  'Environment Art',
  'Architectural Heritage',
  'ArchViz & Lighting',
  'Sci-Fi & Level Design',
  'Game Environment'
] as const

const App: FC = () => {
  const { containerRef } = useScrollAnimation()
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [viewportMode, setViewportMode] = useState<'3d' | 'concept'>('3d')
  const [wireframeMode, setWireframeMode] = useState<boolean>(false)
  const [autoRotate, setAutoRotate] = useState<boolean>(true)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Anupprza999@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col selection:bg-[#c8a45c]/25 selection:text-white overflow-x-hidden font-sans"
    >
      {/* Persistent Full-Page Scroll-Driven 3D Canvas */}
      <Background3DCanvas />

      {/* Floating Modern Glass Navigation */}
      <Navigation activeSection="hero" />

      <main className="relative z-10 flex-1 pt-24 sm:pt-28">
        {/* ========================================================
            HERO SECTION: CINEMATIC SHOWCASE & 3D ASSET INSPECTOR
            ======================================================== */}
        <section
          id="hero"
          className="relative min-h-[90vh] flex items-center px-6 max-w-7xl mx-auto overflow-hidden py-8 sm:py-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
            {/* Left Content Column */}
            <div id="hero-content" className="lg:col-span-7 space-y-6 z-10 text-left">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-[#14141e]/90 backdrop-blur-md text-[#c8a45c] border border-[#2a2a3c]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a45c] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a45c]"></span>
                </span>
                <span>3D Environment Artist & Lighting Specialist</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Anup Prajapati
              </h1>

              {/* Shimmer Subheadline */}
              <p className="text-lg sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
                Unreal Engine 5 Environment Design, Dynamic Lumen Lighting & Architectural Reconstruction
              </p>

              {/* Descriptive Paragraph */}
              <p className="text-sm text-neutral-400 max-w-xl leading-relaxed">
                Crafting photorealistic environments and stylized worlds with emphasis on mood, dynamic lighting, and architectural storytelling. Delivering production-ready Nanite geometry and real-time 60+ FPS pipelines.
              </p>

              {/* Stats Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 max-w-xl">
                <div className="p-3 rounded-xl bg-[#12121a]/80 border border-[#222230]">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white">14+</span>
                  <p className="text-[10px] text-neutral-400 font-mono mt-0.5">Projects & Reels</p>
                </div>
                <div className="p-3 rounded-xl bg-[#12121a]/80 border border-[#222230]">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-[#c8a45c]">60+ FPS</span>
                  <p className="text-[10px] text-neutral-400 font-mono mt-0.5">Real-Time Budgets</p>
                </div>
                <div className="p-3 rounded-xl bg-[#12121a]/80 border border-[#222230]">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-[#40b5ff]">Lumen</span>
                  <p className="text-[10px] text-neutral-400 font-mono mt-0.5">Global Illum.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#12121a]/80 border border-[#222230]">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">5.0 ★</span>
                  <p className="text-[10px] text-neutral-400 font-mono mt-0.5">Client Rating</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="px-6 py-3 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all shadow-lg hover:shadow-white/10 flex items-center gap-2 group"
                >
                  <span>Explore Selected Work</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="#reviews"
                  className="px-5 py-3 rounded-full text-xs font-semibold bg-[#161622]/90 backdrop-blur-md text-[#c8a45c] border border-[#2a2a3c] hover:border-[#c8a45c] hover:bg-[#1a1a28] transition-all flex items-center gap-1.5"
                >
                  <span>★ Read Reviews</span>
                </a>
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-full text-xs font-semibold bg-[#12121a]/80 backdrop-blur-md text-neutral-300 border border-[#242432] hover:text-white hover:border-neutral-500 transition-all"
                >
                  Get in Touch
                </a>
              </div>

              {/* Scroll Indicator Hint */}
              <div className="pt-4 flex items-center gap-3 text-xs text-neutral-500 font-mono">
                <span className="inline-block w-2.5 h-4 rounded-full border border-neutral-600 relative after:content-[''] after:w-1 after:h-1 after:bg-[#c8a45c] after:rounded-full after:absolute after:top-1 after:left-1/2 after:-translate-x-1/2 after:animate-bounce"></span>
                <span>Scroll down to explore 3D spatial environments & selected works</span>
              </div>
            </div>

            {/* Right 3D Viewport Frame */}
            <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[580px] w-full flex items-center justify-center relative">
              <div className="w-full h-full rounded-2xl border border-[#262634]/70 bg-gradient-to-b from-[#14141c]/90 via-[#0e0e14]/90 to-[#0a0a0e]/95 backdrop-blur-md p-4 sm:p-5 flex flex-col justify-between relative group hover:border-[#c8a45c]/40 transition-all shadow-2xl shadow-black/80">
                {/* Viewport Header Bar with Mode Switcher & Tools */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1f1f2c]/70 pb-3 text-[11px] font-mono">
                  {/* Left: Status & View Mode Tabs */}
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-[#c8a45c] font-semibold tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-[#c8a45c] animate-pulse"></span>
                      SHOWCASE
                    </span>
                    <div className="flex items-center bg-[#101016] p-0.5 rounded-lg border border-[#232330]">
                      <button
                        type="button"
                        onClick={() => setViewportMode('3d')}
                        className={`px-2.5 py-1 rounded text-[10px] font-medium transition-all ${
                          viewportMode === '3d'
                            ? 'bg-[#c8a45c] text-black font-semibold shadow-xs'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        3D Asset
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewportMode('concept')}
                        className={`px-2.5 py-1 rounded text-[10px] font-medium transition-all ${
                          viewportMode === 'concept'
                            ? 'bg-[#c8a45c] text-black font-semibold shadow-xs'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        UE5 Render
                      </button>
                    </div>
                  </div>

                  {/* Right: Real-time Inspection Toggles (Only in 3D Mode) */}
                  {viewportMode === '3d' ? (
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setWireframeMode(!wireframeMode)}
                        title="Toggle Wireframe Inspection"
                        className={`px-2 py-0.5 rounded text-[10px] border transition-colors ${
                          wireframeMode
                            ? 'bg-[#40b5ff]/20 text-[#40b5ff] border-[#40b5ff]/50'
                            : 'bg-[#181824] text-neutral-400 border-[#2a2a38] hover:text-neutral-200'
                        }`}
                      >
                        Wire: {wireframeMode ? 'ON' : 'OFF'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setAutoRotate(!autoRotate)}
                        title="Toggle Turntable Rotation"
                        className={`px-2 py-0.5 rounded text-[10px] border transition-colors ${
                          autoRotate
                            ? 'bg-[#c8a45c]/20 text-[#c8a45c] border-[#c8a45c]/50'
                            : 'bg-[#181824] text-neutral-400 border-[#2a2a38] hover:text-neutral-200'
                        }`}
                      >
                        Spin: {autoRotate ? 'ON' : 'OFF'}
                      </button>
                    </div>
                  ) : (
                    <span className="text-[10px] text-neutral-400 font-mono">
                      LUMEN ILLUMINATION
                    </span>
                  )}
                </div>

                {/* Viewport Body: Live 3D Scene OR High-Res Concept Render */}
                <div className="flex-1 w-full rounded-xl overflow-hidden relative my-3 bg-[#0a0a0f]/80 border border-[#1a1a24] flex items-center justify-center">
                  {viewportMode === '3d' ? (
                    <>
                      <HeroViewportScene
                        wireframe={wireframeMode}
                        autoRotate={autoRotate}
                      />
                      {/* Floating HUD Telemetry Overlay */}
                      <div className="absolute bottom-2 left-2 pointer-events-none flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#0e0e14]/90 border border-[#242434] text-[9px] font-mono text-[#c8a45c]">
                          TRIS: 14.8K // PBR
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#0e0e14]/90 border border-[#242434] text-[9px] font-mono text-neutral-400">
                          SHRINE DIORAMA
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2 pointer-events-none">
                        <span className="px-2 py-0.5 rounded bg-[#0e0e14]/90 border border-[#242434] text-[9px] font-mono text-neutral-500">
                          Orbit: Drag 360° • Zoom: Scroll
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="relative w-full h-full overflow-hidden group/img">
                      <img
                        src={heroArtImg}
                        alt="Unreal Engine Environment Art Showcase"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <span className="inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-[#c8a45c] text-black font-semibold mb-1">
                          UNREAL ENGINE 5 KEY ART
                        </span>
                        <h4 className="text-sm font-semibold text-white drop-shadow-md">
                          Mystic Ancient Gateway & Celestial Sanctum
                        </h4>
                        <p className="text-[11px] text-neutral-300 font-light mt-0.5">
                          Volumetric height fog, Niagara vortex dynamics, and Lumen real-time bounce lighting.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Viewport Footer Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 border-t border-[#1f1f2c]/70 pt-2.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    STAGE 01 // ARTIFACT RECONSTRUCTION
                  </span>
                  <span className="text-[#c8a45c]/90">
                    BLENDER 4.x + UNREAL ENGINE 5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SELECTED WORK GALLERY SECTION
            ======================================================== */}
        <Section id="work" title="Selected Works" subtitle="Portfolio Exhibition">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#c8a45c] text-black font-semibold shadow-md shadow-[#c8a45c]/20'
                    : 'bg-[#141418]/80 backdrop-blur-md text-neutral-400 border border-[#242429] hover:text-white hover:border-neutral-600'
                }`}
              >
                {category}
                {category === 'All' && ` (${PORTFOLIO_PROJECTS.length})`}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </Section>

        {/* ========================================================
            CLIENT & STUDIO REVIEWS / ENDORSEMENTS SECTION
            ======================================================== */}
        <Section id="reviews" title="Client & Studio Reviews" subtitle="Verified Testimonials">
          <ReviewsSection />
        </Section>

        {/* ========================================================
            ABOUT & CREATIVE PROFILE SECTION
            ======================================================== */}
        <Section id="about" title="About & Background" subtitle="Creative Profile">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-neutral-300">
            <div className="md:col-span-7 space-y-5 text-base leading-relaxed p-6 sm:p-8 rounded-2xl bg-[#13131c]/80 backdrop-blur-md border border-[#242432]/80">
              <h3 className="text-xl font-bold text-white">
                Environment Art with Depth, Mood & Architectural Heritage
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                I am a 3D artist and environment designer based in Bhaktapur, Nepal, specializing in Unreal Engine environment design, lighting, and architectural reconstruction.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Passionate about crafting immersive and realistic scenes with a strong focus on composition, color palettes, and dynamic atmospheric lighting. From ancient cultural monuments to high-concept sci-fi spaces, I bring scenes to life with narrative intent and technical optimization.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#1c1c28] text-[#c8a45c] border border-[#2c2c3c]">
                  Unreal Engine 5
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#1c1c28] text-neutral-300 border border-[#2c2c3c]">
                  Lumen & Nanite
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#1c1c28] text-neutral-300 border border-[#2c2c3c]">
                  Blender & Maya
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#1c1c28] text-neutral-300 border border-[#2c2c3c]">
                  Substance PBR
                </span>
              </div>
            </div>

            <div className="md:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#13131c]/80 backdrop-blur-md border border-[#242432]/80 space-y-4 flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#c8a45c] font-semibold mb-3">
                  Location & Contact Details
                </h4>
                <div className="space-y-2.5 text-xs text-neutral-400">
                  <div className="flex items-center justify-between py-1 border-b border-[#1e1e28]">
                    <span className="text-neutral-500">Location</span>
                    <span className="text-white font-medium">Madhapur Thimi-5, Bhaktapur, Nepal</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#1e1e28]">
                    <span className="text-neutral-500">Email</span>
                    <span className="text-white font-mono">Anupprza999@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#1e1e28]">
                    <span className="text-neutral-500">Phone</span>
                    <span className="text-white font-mono">+977 9863855425</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#1e1e28]">
                    <span className="text-neutral-500">Availability</span>
                    <span className="text-emerald-400 font-medium">Open for Freelance & Contracts</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full py-2.5 rounded-xl text-xs font-mono font-medium bg-[#1c1c28] hover:bg-[#c8a45c] text-white hover:text-black border border-[#2e2e40] transition-colors flex items-center justify-center gap-2"
              >
                <span>{copiedEmail ? '✓ Copied to Clipboard!' : '📋 Copy Email Address'}</span>
              </button>
            </div>
          </div>
        </Section>

        {/* ========================================================
            PROFESSIONAL EXPERIENCE & EDUCATION SECTION
            ======================================================== */}
        <Section id="experience" title="Experience & Education" subtitle="Career History">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#13131c]/80 backdrop-blur-md border border-[#242432]/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#c8a45c] font-semibold">
                  Work Experience
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Gamenic Virtual Studio</h4>
                <p className="text-xs text-[#c8a45c] font-medium mb-3">3D Artist</p>
                <ul className="space-y-2 text-xs text-neutral-300 list-disc list-inside">
                  <li>Created high-density 3D environment assets using Blender and Maya</li>
                  <li>Designed and developed interior spaces with realistic lighting setups in Unreal Engine</li>
                  <li>Implemented real-time atmospheric lighting, volumetric fog, and post-process volumes</li>
                  <li>Edited and produced cinematic video showreels using Adobe Premiere Pro and After Effects</li>
                  <li>Generated visual assets and architectural concepts using Midjourney and Runway</li>
                </ul>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#13131c]/80 backdrop-blur-md border border-[#242432]/80 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#c8a45c] font-semibold">
                Education & Credentials
              </span>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#181824] border border-[#242434]">
                  <h4 className="text-sm font-semibold text-white">Diploma in VFX and Animation</h4>
                  <p className="text-xs text-[#c8a45c] font-medium">Maya Animation Academy</p>
                  <p className="text-[11px] text-neutral-400 font-mono mt-1">Joined: 2077 B.S. • Comprehensive 3D Pipeline</p>
                </div>
                <div className="p-4 rounded-xl bg-[#181824] border border-[#242434]">
                  <h4 className="text-sm font-semibold text-white">+2 High School</h4>
                  <p className="text-xs text-[#c8a45c] font-medium">Supreme College Bhaktapur</p>
                  <p className="text-[11px] text-neutral-400 font-mono mt-1">Management Stream • Passed: 2020</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ========================================================
            TECHNICAL TOOLSET & PROFICIENCIES SECTION
            ======================================================== */}
        <Section id="skills" title="Technical Toolset" subtitle="Proficiencies & Software">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'Unreal Engine 5', desc: 'Environment design, Lumen, Nanite, Niagara VFX', category: 'Engine' },
              { name: 'Autodesk Maya', desc: '3D modeling, asset creation & UV mapping', category: '3D DCC' },
              { name: 'Blender', desc: 'Scene composition, hard-surface & interiors', category: '3D DCC' },
              { name: 'Adobe Premiere Pro', desc: 'Cinematic reel editing & audio mastering', category: 'Video' },
              { name: 'Adobe After Effects', desc: 'Motion VFX, camera tracking & compositing', category: 'VFX' },
              { name: 'Adobe Photoshop', desc: 'Texture manipulation, trim sheets & matte art', category: 'Textures' },
              { name: 'Figma', desc: 'Visual design, moodboards & layouts', category: 'Design' },
              { name: 'Lighting & Shading', desc: 'Atmospheric depth, PBR materials & photorealism', category: 'Lighting' }
            ].map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-[#13131c]/80 backdrop-blur-md border border-[#242432]/80 hover:border-[#c8a45c]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#c8a45c] block mb-1">
                  {skill.category}
                </span>
                <h4 className="text-sm font-bold text-white mb-1">{skill.name}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ========================================================
            CONTACT SECTION WITH DIRECT ACTIONS
            ======================================================== */}
        <Section id="contact" title="Get in Touch" subtitle="Collaboration & Inquiries">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-sm text-neutral-300 leading-relaxed">
                Available for freelance environment design, architectural 3D reconstruction, and dynamic lighting contracts worldwide.
              </p>

              <div className="p-5 rounded-2xl bg-[#13131c]/80 backdrop-blur-md border border-[#242432]/80 space-y-3">
                <span className="text-[10px] font-mono text-[#c8a45c] uppercase tracking-wider font-semibold">
                  Direct Inquiries
                </span>
                <p className="text-sm font-mono text-white">Anupprza999@gmail.com</p>
                <p className="text-xs text-neutral-400">Bhaktapur, Nepal (UTC +5:45)</p>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#1c1c28] hover:bg-[#c8a45c] text-neutral-300 hover:text-black border border-[#2c2c3c] transition-colors"
                >
                  {copiedEmail ? '✓ Copied!' : 'Copy Email'}
                </button>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/anup-prajapati-a75878242"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#161622] border border-[#2b2b3a] text-neutral-200 text-xs font-medium hover:border-[#c8a45c] hover:text-white transition-all flex items-center gap-1.5"
                >
                  <span>LinkedIn Profile</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#13131c]/80 backdrop-blur-md border border-[#242432]/80 shadow-xl">
                <h4 className="text-base font-bold text-white mb-2">Send a Direct Message</h4>
                <p className="text-xs text-neutral-400 mb-6">
                  Have an environment concept, game project, or architectural model you'd like to bring to life? Let's discuss timeline and requirements.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Modern Footer with Quick Navigation */}
      <footer className="py-12 px-6 border-t border-[#1a1a24] bg-[#08080c] text-center text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Anup Prajapati. 3D Artist & Environment Specialist.</p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a href="#hero" className="hover:text-white transition-colors">Back to Top ↑</a>
            <span>•</span>
            <a href="#work" className="hover:text-white transition-colors">Works</a>
            <span>•</span>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default App
