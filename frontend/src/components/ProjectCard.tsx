import { FC, useState } from 'react'
import { ProjectData } from '../data/projects'

interface ProjectCardProps {
  project: ProjectData
  onSelect: (project: ProjectData) => void
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)
  const hasVideo = Boolean(project.videoPreview?.embedUrl)

  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative p-6 rounded-xl bg-[#141418]/85 backdrop-blur-md border border-[#242429]/80 hover:border-[#c8a45c]/60 hover:shadow-xl hover:shadow-[#c8a45c]/10 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Media Preview Area with Video Support */}
        <div className="h-52 rounded-lg bg-[#181822] border border-[#22222e] mb-5 group-hover:border-[#c8a45c]/40 transition-colors relative overflow-hidden flex items-center justify-center">
          {isPlayingVideo && project.videoPreview?.embedUrl ? (
            <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={`${project.videoPreview.embedUrl}?autoplay=1`}
                title={`${project.title} Video Preview`}
                className="w-full h-full border-0 pointer-events-auto"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsPlayingVideo(false)
                }}
                className="absolute top-2 right-2 px-2 py-1 rounded bg-black/80 text-white text-[10px] font-mono hover:bg-[#c8a45c] hover:text-black transition-colors z-20"
              >
                ✕ Close Video
              </button>
            </div>
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
              {/* Background Thumbnail if available */}
              {project.thumbnailUrl && (
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
              )}

              {/* Radial Ambient Overlay */}
              <div className="absolute inset-0 bg-radial from-[#c8a45c]/10 via-black/40 to-black/80 pointer-events-none"></div>

              {/* Central Badge / Play Action */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {hasVideo ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsPlayingVideo(true)
                    }}
                    className="w-12 h-12 rounded-full bg-[#c8a45c] text-black font-bold flex items-center justify-center shadow-lg shadow-[#c8a45c]/30 group-hover:scale-110 transition-transform mb-2 pointer-events-auto"
                    title="Play 3D Video Preview"
                  >
                    <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </button>
                ) : (
                  <span className="text-[#c8a45c] text-2xl mb-1 group-hover:scale-110 transition-transform">
                    ✦
                  </span>
                )}

                <span className="text-white text-xs font-mono tracking-wider uppercase drop-shadow-md">
                  {hasVideo ? '3D Render Reel' : project.title}
                </span>

                <span className="text-[11px] text-neutral-300 mt-1 drop-shadow">
                  {hasVideo ? 'Click ▶ to preview in card' : 'Click to inspect breakdown'}
                </span>
              </div>

              {/* Video Available Indicator Badge */}
              {hasVideo && (
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/70 border border-[#c8a45c]/40 text-[#c8a45c] text-[10px] font-mono flex items-center gap-1 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8a45c] animate-pulse"></span>
                  VIDEO PREVIEW
                </div>
              )}
            </div>
          )}
        </div>

        {/* Header Tags */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-[#c8a45c] font-medium uppercase tracking-wider">
            {project.category}
          </p>
          <span className="text-[10px] text-neutral-400 font-mono">
            {project.period}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#e4c47d] transition-colors">
          {project.title}
        </h3>

        {/* Summary Description */}
        <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-6">
          {project.description}
        </p>
      </div>

      {/* Software Badges */}
      <div className="pt-4 border-t border-[#1e1e26] flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.software.map((sw) => (
            <span
              key={sw}
              className="text-[10px] font-mono text-neutral-300 bg-[#1a1a24] px-2 py-0.5 rounded border border-[#282836]"
            >
              {sw}
            </span>
          ))}
        </div>
        <span className="text-xs text-[#c8a45c] font-medium group-hover:translate-x-1 transition-transform ml-2 shrink-0">
          Details →
        </span>
      </div>
    </div>
  )
}
