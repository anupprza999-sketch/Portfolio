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
    tags: ['Environment Design', 'Lighting', 'Stylized Art', 'Unreal Engine']
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
    tags: ['Architectural Heritage', '3D Reconstruction', 'Maya', 'Unreal Engine']
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
      'Designed multiple interior room environments with different lighting styles, including natural daytime and artificial moody setups, focusing on photorealism and spatial aesthetics.',
    tags: ['ArchViz', 'Interior Lighting', 'Photorealism', 'Blender']
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
