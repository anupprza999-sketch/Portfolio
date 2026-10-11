import { FC } from 'react'

const App: FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col justify-center items-center p-8">
      <header className="max-w-2xl text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Anup Prajapati
        </h1>
        <p className="text-xl text-neutral-400">
          3D Artist, Environment Designer & Lighting Artist
        </p>
        <p className="text-sm text-neutral-500 max-w-lg mx-auto">
          Crafting immersive 3D environments with cinematic lighting and architectural storytelling.
        </p>
        <div className="pt-4 flex items-center justify-center gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1a1a22] text-[#c8a45c] border border-[#2b2b36]">
            Phase 2: Repository Initialized
          </span>
        </div>
      </header>
    </div>
  )
}

export default App
