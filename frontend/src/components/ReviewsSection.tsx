import { FC, useState } from 'react'

export interface ReviewItem {
  id: string
  name: string
  role: string
  company: string
  location: string
  avatarInitials: string
  rating: number
  date: string
  projectTag: string
  content: string
  highlight: string
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'review-1',
    name: 'Aarav Shrestha',
    role: 'Lead Art Director',
    company: 'Virtual Productions Studio',
    location: 'Kathmandu / Remote',
    avatarInitials: 'AS',
    rating: 5,
    date: 'February 2026',
    projectTag: 'UE5 Mystic Portal & Volumetric VFX',
    highlight: 'Mastery of Lumen lighting and locked 60 FPS performance',
    content:
      'Anup’s environment artistry and lighting prowess elevated our fantasy sequences to triple-A fidelity. His deep understanding of Lumen real-time bounce lighting, volumetric height fog, and Nanite mesh budgets saved us days of technical optimization. He delivers cinematic beauty without sacrificing runtime performance.'
  },
  {
    id: 'review-2',
    name: 'David Miller',
    role: 'VFX Supervisor & Technical Director',
    company: 'Apex Interactive Games',
    location: 'London, UK (Remote)',
    avatarInitials: 'DM',
    rating: 5,
    date: 'January 2026',
    projectTag: 'Sci-Fi Level Design & Asset Modular Trim',
    highlight: 'Clean modular geometry with extraordinary artistic storytelling',
    content:
      'Working with Anup was seamless. He took our rough concept blockout and turned it into an atmospheric sci-fi environment rich in mood and texture nuance. His trim sheet workflow and PBR materials were immaculate. Any studio looking for a dedicated 3D environment specialist will be thrilled to have him.'
  },
  {
    id: 'review-3',
    name: 'Elena Rostova',
    role: 'Principal ArchViz Producer',
    company: 'Heritage Digital Archives',
    location: 'Berlin / Global',
    avatarInitials: 'ER',
    rating: 5,
    date: 'November 2025',
    projectTag: 'Architectural Heritage Reconstruction',
    highlight: 'Uncompromising historical accuracy with modern PBR shaders',
    content:
      'Anup’s 3D reconstruction of ancient Nepalese architecture combined meticulous historical accuracy with modern real-time rendering. The wood carvings, stone weathered shaders, and authentic golden accents were rendered with breathtaking realism. Highly recommended for complex cultural & architectural projects.'
  },
  {
    id: 'review-4',
    name: 'Marcus Vance',
    role: 'Creative Director',
    company: 'Chrono Rift Studios',
    location: 'Singapore (Contract)',
    avatarInitials: 'MV',
    rating: 5,
    date: 'October 2025',
    projectTag: 'Atmospheric Lighting & Cinematic Reel',
    highlight: 'Fast turnarounds and sharp eye for cinematic composition',
    content:
      'Anup possesses that rare blend of artistic sensibility and technical rigor. His video edits and cinematic camera flythroughs for our Unreal Engine showreel generated massive engagement from our investors. Fast communicator, proactive, and always goes the extra mile.'
  }
]

export const ReviewsSection: FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'unreal' | 'heritage'>('all')

  const filteredReviews = REVIEWS_DATA.filter((r) => {
    if (activeFilter === 'unreal') return r.projectTag.includes('UE5') || r.projectTag.includes('Sci-Fi')
    if (activeFilter === 'heritage') return r.projectTag.includes('Heritage')
    return true
  })

  return (
    <div className="space-y-10">
      {/* Trust & Quality Statistics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-[#121218]/80 backdrop-blur-md border border-[#242430] flex flex-col justify-between">
          <div className="flex items-center gap-1 text-[#c8a45c] text-sm">
            {'★'.repeat(5)}
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold text-white font-mono">5.0 / 5.0</span>
            <p className="text-[11px] text-neutral-400 font-medium">Average Review Rating</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#121218]/80 backdrop-blur-md border border-[#242430] flex flex-col justify-between">
          <span className="text-emerald-400 text-xs font-mono font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            100% VERIFIED
          </span>
          <div className="mt-2">
            <span className="text-2xl font-bold text-white font-mono">14+</span>
            <p className="text-[11px] text-neutral-400 font-medium">Completed Projects & Reels</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#121218]/80 backdrop-blur-md border border-[#242430] flex flex-col justify-between">
          <span className="text-[#40b5ff] text-xs font-mono font-semibold">
            REAL-TIME PIPELINES
          </span>
          <div className="mt-2">
            <span className="text-2xl font-bold text-white font-mono">60+ FPS</span>
            <p className="text-[11px] text-neutral-400 font-medium">Nanite & Lumen Optimization</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#121218]/80 backdrop-blur-md border border-[#242430] flex flex-col justify-between">
          <span className="text-[#c8a45c] text-xs font-mono font-semibold">
            STUDIO SATISFACTION
          </span>
          <div className="mt-2">
            <span className="text-2xl font-bold text-white font-mono">100%</span>
            <p className="text-[11px] text-neutral-400 font-medium">Client Recommendation Rate</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            activeFilter === 'all'
              ? 'bg-[#c8a45c] text-black font-semibold shadow-md shadow-[#c8a45c]/20'
              : 'bg-[#14141c] text-neutral-400 border border-[#262634] hover:text-white'
          }`}
        >
          All Endorsements ({REVIEWS_DATA.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('unreal')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            activeFilter === 'unreal'
              ? 'bg-[#c8a45c] text-black font-semibold shadow-md shadow-[#c8a45c]/20'
              : 'bg-[#14141c] text-neutral-400 border border-[#262634] hover:text-white'
          }`}
        >
          Unreal Engine & Games
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('heritage')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            activeFilter === 'heritage'
              ? 'bg-[#c8a45c] text-black font-semibold shadow-md shadow-[#c8a45c]/20'
              : 'bg-[#14141c] text-neutral-400 border border-[#262634] hover:text-white'
          }`}
        >
          Heritage & ArchViz
        </button>
      </div>

      {/* Reviews Cards Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-7 rounded-2xl bg-[#13131c]/80 backdrop-blur-md border border-[#242432]/80 hover:border-[#c8a45c]/40 hover:shadow-xl hover:shadow-[#c8a45c]/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Row: Rating & Project Tag */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-[#c8a45c] text-sm">
                      ★
                    </span>
                  ))}
                  <span className="text-[11px] font-mono text-neutral-400 ml-1.5">
                    5.0 Verified
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#1c1c28] text-[#c8a45c] border border-[#2e2e40]">
                  {item.projectTag}
                </span>
              </div>

              {/* Highlight Quote Lead */}
              <h4 className="text-sm sm:text-base font-semibold text-white mb-3 group-hover:text-[#f3e5c8] transition-colors leading-snug">
                "{item.highlight}"
              </h4>

              {/* Full Review Content */}
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                {item.content}
              </p>
            </div>

            {/* Bottom Row: Reviewer Details with Avatar */}
            <div className="pt-4 border-t border-[#1e1e2a] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8a45c]/30 to-[#40b5ff]/20 border border-[#c8a45c]/40 flex items-center justify-center text-xs font-bold font-mono text-white">
                  {item.avatarInitials}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                    {item.name}
                    <span className="text-[10px] text-emerald-400 font-normal">✓</span>
                  </h5>
                  <p className="text-[11px] text-[#c8a45c] font-medium">
                    {item.role} • <span className="text-neutral-400">{item.company}</span>
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
