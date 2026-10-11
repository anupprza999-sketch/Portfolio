export interface ProjectData {
  id: string
  title: string
  category: string
  software: string[]
  role: string
  period: string
  teamSize: number
  type: string
  status: 'completed' | 'ongoing'
  description: string
  tags: string[]
  details: {
    overview: string
    lightingWorkflow: string
    modelingTechnique: string
    challenges: string
  }
}

export const PORTFOLIO_PROJECTS: ProjectData[] = [
  {
    id: 'japanese-shrine-environment',
    title: 'Japanese Shrine Environment',
    category: 'Environment Art',
    software: ['Blender', 'Unreal Engine'],
    role: 'Environment Artist & Lighting Artist',
    period: '4 Days',
    teamSize: 1,
    type: 'Office Project',
    status: 'completed',
    description:
      'Created a stylized Japanese shrine environment with detailed lighting and composition, focusing on mood, atmospheric fog, and visual storytelling.',
    tags: ['Environment Design', 'Lighting', 'Stylized Art', 'Unreal Engine'],
    details: {
      overview:
        'A comprehensive stylized environment exploring traditional Japanese architecture surrounded by peaceful nature, crafted in Blender and assembled in Unreal Engine.',
      lightingWorkflow:
        'Dynamic volumetric directional sunlight paired with gentle height fog and soft bounce lighting to evoke quiet dawn serenity.',
      modelingTechnique:
        'Modular wooden beam kits, stone lanterns, and curved roof tiling modeled in Blender with optimized topology and clean UV unwrapping.',
      challenges:
        'Balancing stylized aesthetic simplicity with atmospheric depth and natural vegetation density.'
    }
  },
  {
    id: 'basantapur-temple-3d-reconstruction',
    title: 'Basantapur Temple 3D Reconstruction',
    category: 'Architectural Heritage',
    software: ['Maya', 'Unreal Engine', 'Blender'],
    role: '3D Modeler & Environment Artist',
    period: 'Ongoing',
    teamSize: 1,
    type: 'Solo Project',
    status: 'ongoing',
    description:
      'Modeled traditional Basantapur temples with attention to architectural detail, intricate wood carvings, and heritage aesthetics. Integrating cinematic lighting and environment setup in Unreal Engine.',
    tags: ['Architectural Heritage', '3D Reconstruction', 'Maya', 'Unreal Engine'],
    details: {
      overview:
        'Historical digital preservation project recreating the UNESCO World Heritage Newar architecture of Basantapur Durbar Square, Kathmandu Valley.',
      lightingWorkflow:
        'Physically-based golden hour sun angles highlighting tiered pagoda multi-roof geometries and deep carved timber shadows.',
      modelingTechnique:
        'Precision architectural modeling in Autodesk Maya based on reference photographs, featuring detailed struts, toranas, and multi-tier pagoda roofs.',
      challenges:
        'Achieving historical accuracy for traditional wood-carving motifs while maintaining real-time engine performance.'
    }
  },
  {
    id: 'interior-room-designs',
    title: 'Interior Room Designs',
    category: 'ArchViz & Lighting',
    software: ['Blender', 'Unreal Engine'],
    role: 'Environment & Lighting Artist',
    period: '~2 Days per Scene',
    teamSize: 1,
    type: 'Office Project',
    status: 'completed',
    description:
      'Designed multiple interior room environments with different lighting styles, including natural daytime and artificial moody setups, focusing on realism and aesthetics.',
    tags: ['ArchViz', 'Interior Lighting', 'Photorealism', 'Blender'],
    details: {
      overview:
        'A study of interior spatial design and architectural lighting scenarios, ranging from bright Nordic minimalism to moody dusk illumination.',
      lightingWorkflow:
        'Comparison of natural aperture portal lighting with tailored interior fixture lighting (IES profiles, warm Kelvin temperatures).',
      modelingTechnique:
        'High-poly furniture modeling, custom fabric wrinkles, and PBR material setup with subtle roughness imperfections.',
      challenges:
        'Preventing light bleed and noise in enclosed architectural spaces while achieving rich ambient occlusion.'
    }
  }
]
