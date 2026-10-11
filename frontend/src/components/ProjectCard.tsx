import { FC } from 'react'
import { ProjectData } from '../data/projects'

interface ProjectCardProps {
  project: ProjectData
  onSelect: (project: ProjectData) => void
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative p-6 rounded-xl bg-[#141418] border border-[#242429] hover:border-[#c8a45c]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Viewport Preview Area */}
        <div className="h-48 rounded-lg bg-[#181822] border border-[#22222e] flex flex-col items-center justify-center p-4 mb-5 group-hover:border-[#c8a45c]/30 transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-radial from-[#c8a45c]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="text-[#c8a45c] text-xl mb-1">✦</span>
          <span className="text-neutral-400 text-xs font-mono tracking-wider uppercase">
            {project.title}
          </span>
          <span className="text-[11px] text-neutral-600 mt-1">
            Click to view breakdown
          </span>
        </div>

        {/* Header Tags */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-[#c8a45c] font-medium uppercase tracking-wider">
            {project.category}
          </p>
          <span className="text-[10px] text-neutral-500 font-mono">
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
        <div className="flex items-center gap-2">
          {project.software.map((sw) => (
            <span
              key={sw}
              className="text-[11px] font-mono text-neutral-400 bg-[#1a1a24] px-2 py-0.5 rounded border border-[#282836]"
            >
              {sw}
            </span>
          ))}
        </div>
        <span className="text-xs text-[#c8a45c] font-medium group-hover:translate-x-1 transition-transform">
          Details →
        </span>
      </div>
    </div>
  )
}
