export interface PortfolioProject {
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
  driveFolderUrl?: string
  hasVideoPreview?: boolean
}

export interface UserProfileData {
  name: string
  birthDate: string
  address: string
  mobile: string
  email: string
  linkedin: string
  careerObjective: string
  education: {
    degree: string
    faculty?: string
    institution: string
    year: string
  }[]
  technicalSkills: {
    name: string
    category: string
    description: string
  }[]
  additionalSkills: string[]
  workExperience: {
    company: string
    role: string
    responsibilities: string[]
  }[]
}

export const PORTFOLIO_PROJECTS_DATA: PortfolioProject[] = [
  {
    id: 'portal-ue5',
    title: 'Mystic Spatial Portal (UE5)',
    category: 'Environment Art',
    software: ['Unreal Engine 5', 'Blender', 'Substance'],
    role: 'Environment & VFX Artist',
    period: '1 Week',
    teamSize: 1,
    type: 'Solo Project',
    status: 'completed',
    description:
      'Immersive dimensional gateway environment created in Unreal Engine 5 featuring swirling spatial vortex shaders, dynamic volumetric height fog, and ancient stone architecture.',
    tags: ['Unreal Engine 5', 'VFX Portal', 'Lumen', 'Volumetric Fog'],
    driveFolderUrl: 'https://drive.google.com/drive/folders/1qFGkq5ggAbHPaNIwlVZfMapL3V0Pxq6H',
    hasVideoPreview: true
  },
  {
    id: 'floating-island',
    title: 'Floating Island Sanctuary',
    category: 'Environment Art',
    software: ['Unreal Engine 5', 'Blender', 'Maya'],
    role: 'Environment & Level Artist',
    period: '2 Weeks',
    teamSize: 1,
    type: 'Solo Project',
    status: 'completed',
    description:
      'Fantastical floating islands suspended in a sky realm featuring lush hanging vegetation, cascading water streams, and tranquil temple ruins bathed in golden dawn.',
    tags: ['Floating Island', 'Landscape Art', 'Unreal Engine 5', 'Environment Design'],
    driveFolderUrl: 'https://drive.google.com/drive/folders/1fgH9YWGvLaQmKMEk72YGvQkNuKs7OVAy',
    hasVideoPreview: true
  },
  {
    id: 'front-gateway-bhaktapur',
    title: 'Front Gateway to Bhaktapur',
    category: 'Architectural Heritage',
    software: ['Maya', 'Blender', 'Unreal Engine'],
    role: 'Heritage 3D Modeler & Lighting Artist',
    period: 'Ongoing',
    teamSize: 1,
    type: 'Solo Project',
    status: 'ongoing',
    description:
      'Digital architectural reconstruction of the historic entrance gateway to Bhaktapur, Nepal, capturing authentic Newar timber carvings, brick masonry, and heritage aesthetics.',
    tags: ['Architectural Heritage', 'Bhaktapur Gate', 'Maya', 'Digital Preservation'],
    driveFolderUrl: 'https://drive.google.com/drive/folders/1BRUt9mDxtAanHAl9Yz3TgYwbatn_cIpE',
    hasVideoPreview: true
  },
  {
    id: 'traditional-japanese-house-sakura',
    title: 'Japanese House with Sakura & Waterfall',
    category: 'Environment Art',
    software: ['Blender', 'Unreal Engine'],
    role: 'Environment & Lighting Artist',
    period: '1 Week',
    teamSize: 1,
    type: 'Solo Project',
    status: 'completed',
    description:
      'Peaceful traditional Japanese estate featuring blooming cherry blossom trees (Sakura), flowing garden waterfall, wooden verandas, and serene morning mist.',
    tags: ['Japanese Architecture', 'Sakura', 'Waterfall', 'Environment Design'],
    driveFolderUrl: 'https://drive.google.com/drive/folders/1EkgmLJhc7Mr5IT6Sqlt_oEwmJR-FxBZR',
    hasVideoPreview: true
  },
  {
    id: 'traditional-winter-japanese-garden',
    title: 'Winter Japanese Garden',
    category: 'Environment Art',
    software: ['Blender', 'Unreal Engine'],
    role: 'Environment & Lighting Artist',
    period: '5 Days',
    teamSize: 1,
    type: 'Solo Project',
    status: 'completed',
    description:
      'Tranquil snow-covered Japanese courtyard garden with frosted stone lanterns (Toro), frozen ponds, snow-laden bamboo groves, and soft wintry overcast lighting.',
    tags: ['Winter Scene', 'Snow Shader', 'Japanese Garden', 'Atmospheric Lighting'],
    driveFolderUrl: 'https://drive.google.com/drive/folders/1rW7GpZhmD41VIs7U-TqvwPpVzrgUo7XB',
    hasVideoPreview: true
  },
  {
    id: 'japanese-tatami-room',
    title: 'Zen Tatami Room & Bonsai Interior',
    category: 'ArchViz & Lighting',
    software: ['Blender', 'Unreal Engine'],
    role: 'Environment & Lighting Artist',
    period: '4 Days',
    teamSize: 1,
    type: 'Office Project',
    status: 'completed',
    description:
      'Minimalist traditional Japanese interior with tatami woven mats, sliding shoji paper doors, a focal sculpted bonsai tree, and natural afternoon sun streaming in.',
    tags: ['ArchViz', 'Japanese Interior', 'Tatami', 'Blender'],
    driveFolderUrl: 'https://drive.google.com/drive/folders/1r9b80FQk3iphyv26Af-qDeTWurtXP9nm',
    hasVideoPreview: true
  },
  {
    id: 'cyberpunk-neon-bar-lounge',
    title: 'Cyberpunk Neon Bar & Lounge',
    category: 'Sci-Fi & Level Design',
    software: ['Unreal Engine 5', 'Blender', 'Photoshop'],
    role: 'Environment & Lighting Artist',
    period: '1 Week',
    teamSize: 1,
    type: 'Solo Project',
    status: 'completed',
    description:
      'High-contrast futuristic nightclub interior featuring vibrant neon signage, reflective polished bar counters, holographic drink dispensers, and moody volumetric smoke.',
    tags: ['Cyberpunk', 'Neon Lighting', 'Lumen', 'Sci-Fi Interior'],
    driveFolderUrl: 'https://drive.google.com/drive/folders/10X3mhF2slhuydyAGOh1Pk6OpiX2n-CNb',
    hasVideoPreview: true
  },
  {
    id: 'luxury-diamond-ring-viz',
    title: 'Luxury Diamond Ring Commercial Showcase',
    category: 'Product Visualization',
    software: ['Blender', 'Photoshop', 'Premiere Pro'],
    role: '3D LookDev & Lighting Artist',
    period: '3 Days',
    teamSize: 1,
    type: 'Solo Project',
    status: 'completed',
    description:
      'High-end jewelry commercial visualization showcasing an intricate diamond engagement ring with realistic optical dispersion (caustics), platinum reflections, and turntable cinematography.',
    tags: ['Product Viz', 'Jewelry Rendering', 'Dispersion Caustics', 'Blender Cycles'],
    driveFolderUrl: 'https://drive.google.com/drive/folders/1d49tqHZCP9ETDy4s6A3VwV2CsFyqF8As',
    hasVideoPreview: true
  },
  {
    id: 'japandi-minimalist-living',
    title: 'Japandi Minimalist Living & Dining Space',
    category: 'ArchViz & Lighting',
    software: ['Blender', 'Unreal Engine'],
    role: 'ArchViz & Interior Designer',
    period: '4 Days',
    teamSize: 1,
    type: 'Office Project',
    status: 'completed',
    description:
      'Warm contemporary interior blending Japanese minimalism and Scandinavian functionality with pale oak joinery, linen upholstery, curved arches, and sun-dappled lighting.',
    tags: ['ArchViz', 'Japandi Design', 'Interior Lighting', 'Minimalism'],
    driveFolderUrl: 'https://drive.google.com/drive/folders/10X3mhF2slhuydyAGOh1Pk6OpiX2n-CNb',
    hasVideoPreview: true
  },
  {
    id: 'cocktail-lounge-drink-counter',
    title: 'Modern Cocktail Lounge & Drink Counter',
    category: 'ArchViz & Lighting',
    software: ['Blender', 'Unreal Engine'],
    role: 'Interior Environment Artist',
    period: '5 Days',
    teamSize: 1,
    type: 'Office Project',
    status: 'completed',
    description:
      'Chic hospitality interior featuring an edgy illuminated beverage counter, backlit marble shelving, brass fixtures, and sophisticated mood lighting.',
    tags: ['Hospitality ArchViz', 'Bar Counter', 'Backlit Marble', 'Interior Design'],
    driveFolderUrl: 'https://drive.google.com/drive/folders/10X3mhF2slhuydyAGOh1Pk6OpiX2n-CNb',
    hasVideoPreview: true
  },
  {
    id: 'mecha-robot-concept',
    title: 'Tactical Mecha Robot Concept',
    category: 'Character & Hard-Surface',
    software: ['Maya', 'Blender', 'Photoshop'],
    role: '3D Modeler & Hard-Surface Artist',
    period: '1 Week',
    teamSize: 1,
    type: 'Solo Project',
    status: 'completed',
    description:
      'Detailed tactical humanoid mecha robot featuring functional joint articulation, hydraulic pistons, armored plating, sensor optic arrays, and studio turntable showcase.',
    tags: ['Hard-Surface', 'Mecha Robot', 'Maya', 'Character Design'],
    driveFolderUrl: 'https://drive.google.com/drive/folders/1URziW7w5N8kS7RvhgT76GC4nljj0QQON',
    hasVideoPreview: false
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
    driveFolderUrl: 'https://drive.google.com/drive/folders/102gVJVXjeWmM4yP1jRerqIkJlozBVKSo',
    hasVideoPreview: false
  }
]

export const USER_PROFILE_DATA: UserProfileData = {
  name: 'Anup Prajapati',
  birthDate: '27th October, 2000',
  address: 'Madhapur Thimi-5, Bhaktapur, Nepal',
  mobile: '+977 9863855425',
  email: 'Anupprza999@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anup-prajapati-a75878242',
  careerObjective:
    'Creative and detail-oriented 3D Artist specializing in Unreal Engine environment design and lighting, seeking to contribute to innovative projects in gaming, film, or digital media. Passionate about crafting immersive and realistic scenes, with a strong focus on composition, color, and dynamic lighting.',
  education: [
    {
      degree: '+2 (High School)',
      faculty: 'Management',
      institution: 'Supreme College Bhaktapur',
      year: '2020'
    },
    {
      degree: 'Diploma in VFX and Animation',
      institution: 'Maya Animation Academy',
      year: '2077 B.S.'
    }
  ],
  technicalSkills: [
    { name: 'Unreal Engine', category: 'Engine & Lighting', description: 'Creating 3D scenes, level design, and dynamic lighting setups' },
    { name: 'Autodesk Maya', category: '3D Modeling', description: '3D modeling, asset creation, and UV unwrapping' },
    { name: 'Blender', category: '3D Modeling & Layout', description: 'Modeling, scene layouts, interior spaces, asset creation' },
    { name: 'Adobe After Effects', category: 'Post-Production', description: 'VFX, compositing, motion design, and video editing' },
    { name: 'Adobe Premiere Pro', category: 'Video Editing', description: 'Cinematic reel editing, audio syncing, pacing' },
    { name: 'Adobe Photoshop', category: 'Texturing & Design', description: 'Photo manipulation, texture editing, matte painting' },
    { name: 'Figma', category: 'UI/UX Design', description: 'Interface layouts, wireframes, visual design concepts' }
  ],
  additionalSkills: [
    '3D Modelling',
    '2D/3D Animation',
    '3D Lighting and Scene Setup',
    'Logo Design',
    'Photo Manipulation',
    'Image/Video Masking',
    'Color Grading',
    'Logo Animation',
    'Video Editing'
  ],
  workExperience: [
    {
      company: 'Gamenic Virtual Studio',
      role: '3D Artist',
      responsibilities: [
        'Created 3D models for various projects using Blender',
        'Designed and developed interior spaces and rooms in Blender and Unreal Engine',
        'Built immersive environments and implemented realistic lighting setups in Unreal Engine',
        'Edited and produced videos using Adobe After Effects and Premiere Pro',
        'Designed graphics and visual assets for different creative needs',
        'Generated AI-based photos and videos using Runway and Midjourney',
        'Created web design layouts and UI/UX concepts using Figma'
      ]
    }
  ]
}
