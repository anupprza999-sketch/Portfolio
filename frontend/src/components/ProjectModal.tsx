import { FC } from 'react'
import { ProjectData } from '../data/projects'

interface ProjectModalProps {
  project: ProjectData | null
  onClose: () => void
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#141418] border border-[#2b2b36] rounded-2xl p-6 sm:p-8 text-neutral-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#1c1c24] border border-[#2b2b36] text-neutral-400 hover:text-white hover:bg-[#252530] flex items-center justify-center transition-colors z-20"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-widest text-[#c8a45c] font-medium">
              {project.category}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-xs px-2.5 py-0.5 rounded bg-[#1f1f2a] text-neutral-300 font-mono">
              {project.type} ({project.period})
            </span>
            {project.driveFolderUrl && (
              <a
                href={project.driveFolderUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs px-2.5 py-0.5 rounded bg-[#1b2230] text-[#70a4e8] border border-[#263750] hover:text-white transition-colors ml-auto font-mono"
              >
                Open Google Drive Assets ↗
              </a>
            )}
          </div>

          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Cinematic Video Showcase in Modal if available */}
        {project.videoPreview?.embedUrl && (
          <div className="mb-8 rounded-xl overflow-hidden border border-[#2b2b38] bg-black shadow-xl aspect-video relative">
            <iframe
              src={project.videoPreview.embedUrl}
              title={`${project.title} Showcase Reel`}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        )}

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#0e0e12] border border-[#22222b] mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">Role</p>
            <p className="text-xs text-white font-medium">{project.role}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">Duration</p>
            <p className="text-xs text-white font-medium">{project.period}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">Team Size</p>
            <p className="text-xs text-white font-medium">{project.teamSize} (Solo)</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">Status</p>
            <p className="text-xs text-[#c8a45c] font-medium capitalize">{project.status}</p>
          </div>
        </div>

        {/* Technical Breakdowns */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#181820] border border-[#242430]">
              <h5 className="text-xs font-semibold text-[#c8a45c] mb-1.5 flex items-center gap-1.5">
                <span>✦</span> Lighting & Atmosphere Setup
              </h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {project.details.lightingWorkflow}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#181820] border border-[#242430]">
              <h5 className="text-xs font-semibold text-[#c8a45c] mb-1.5 flex items-center gap-1.5">
                <span>✦</span> 3D Modeling & Assets
              </h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {project.details.modelingTechnique}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#181820] border border-[#242430]">
            <h5 className="text-xs font-semibold text-neutral-300 mb-1.5">
              Production Challenges & Solutions
            </h5>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {project.details.challenges}
            </p>
          </div>

          {/* Software and Tags */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs text-neutral-500 mr-2">Software Stack:</span>
            {project.software.map((sw) => (
              <span
                key={sw}
                className="px-2.5 py-1 rounded bg-[#20202b] text-neutral-300 text-xs font-mono border border-[#2e2e3d]"
              >
                {sw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
