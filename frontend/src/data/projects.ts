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
  videoPreview?: {
    driveFileId?: string
    embedUrl?: string
    type: 'google-drive' | 'direct'
  }
  thumbnailUrl?: string
  driveFolderUrl?: string
  details: {
    overview: string
    lightingWorkflow: string
    modelingTechnique: string
    challenges: string
  }
}

export const PORTFOLIO_PROJECTS: ProjectData[] = [
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
    videoPreview: {
      driveFileId: '1Z-x_70qJdbYzs2jLDGVrWImS1xfQgi6f',
      embedUrl: 'https://drive.google.com/file/d/1Z-x_70qJdbYzs2jLDGVrWImS1xfQgi6f/preview',
      type: 'google-drive'
    },
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1HEuc_06HtelTjEw_psrtuWg8qlk2A45e&sz=w1000',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1qFGkq5ggAbHPaNIwlVZfMapL3V0Pxq6H',
    details: {
      overview:
        'A centerpiece real-time environment showcasing an ancient stone portal crackling with celestial energy, built with Lumen global illumination and particle Niagara systems in Unreal Engine 5.',
      lightingWorkflow:
        'Lumen real-time bounce lighting combined with an emissive blue-cyan vortex core casting volumetric light rays through turbulent atmospheric fog.',
      modelingTechnique:
        'Ancient carved stone monoliths and weathered steps modeled in Blender with high-density Nanite geometry and modular rune trim sheets.',
      challenges:
        'Synchronizing particle vortex velocity with dynamic material ripple shaders while sustaining optimal real-time 60+ FPS playback.'
    }
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
    videoPreview: {
      driveFileId: '1vsNAA2-AkaGRC3aadIy3ffQm0noQkHa5',
      embedUrl: 'https://drive.google.com/file/d/1vsNAA2-AkaGRC3aadIy3ffQm0noQkHa5/preview',
      type: 'google-drive'
    },
    driveFolderUrl: 'https://drive.google.com/drive/folders/1fgH9YWGvLaQmKMEk72YGvQkNuKs7OVAy',
    details: {
      overview:
        'A cinematic fantasy world study exploring floating landmasses, rocky underbellies, and aerial atmospheric depth inspired by classical concept art.',
      lightingWorkflow:
        'Volumetric directional sunlight piercing through fluffy cloud cards with exponential height fog creating deep aerial perspective.',
      modelingTechnique:
        'Sculpted cliff rocks with inverted gravity stone spires, layered foliage systems, and vertex-blended moss shaders.',
      challenges:
        'Simulating convincing cloud sea depth and managing light bounce underneath suspended rocky landmasses.'
    }
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
    videoPreview: {
      driveFileId: '1DT5Jm_FA_V-6VQVh1xVE-8bfFmpsIZG9',
      embedUrl: 'https://drive.google.com/file/d/1DT5Jm_FA_V-6VQVh1xVE-8bfFmpsIZG9/preview',
      type: 'google-drive'
    },
    driveFolderUrl: 'https://drive.google.com/drive/folders/1BRUt9mDxtAanHAl9Yz3TgYwbatn_cIpE',
    details: {
      overview:
        'A cultural preservation initiative reconstructing the historic monumental gateway of Bhaktapur with meticulous architectural proportions, multi-tiered rooflines, and terracotta motifs.',
      lightingWorkflow:
        '3D clay render showcase lighting emphasizing sculpt silhouette, timber strut angles (tudal), and authentic depth contrast.',
      modelingTechnique:
        'High-precision modular asset modeling in Autodesk Maya based on direct historical reference photographs, including traditional Dachi Appa brickwork.',
      challenges:
        'Translating intricate historical wood-carved toranas and struts into clean game-ready topology without losing historical nuance.'
    }
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
    videoPreview: {
      driveFileId: '1wloG-LGQQqdTv5ajf91uogSl7u21iEa8',
      embedUrl: 'https://drive.google.com/file/d/1wloG-LGQQqdTv5ajf91uogSl7u21iEa8/preview',
      type: 'google-drive'
    },
    driveFolderUrl: 'https://drive.google.com/drive/folders/1EkgmLJhc7Mr5IT6Sqlt_oEwmJR-FxBZR',
    details: {
      overview:
        'An emotive natural retreat harmonizing traditional Japanese residential architecture with organic nature, water movement, and cherry blossom petals.',
      lightingWorkflow:
        'Gentle morning sunrise with warm pink and gold rim lighting illuminating falling sakura blossoms and translucent water spray.',
      modelingTechnique:
        'Shoji sliding screens, tatami timber framing, curved roof eaves, and procedural riverbed rock clusters.',
      challenges:
        'Creating natural petal wind flow and realistic waterfall fluid motion in a stylized real-time scene.'
    }
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
    videoPreview: {
      driveFileId: '1sqj4y-rRsQ3xuZNmQyEok9yddc1Vnaes',
      embedUrl: 'https://drive.google.com/file/d/1sqj4y-rRsQ3xuZNmQyEok9yddc1Vnaes/preview',
      type: 'google-drive'
    },
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1HpQFqceYeDeT3Nzejui_LCRokN2M61y6&sz=w1000',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1rW7GpZhmD41VIs7U-TqvwPpVzrgUo7XB',
    details: {
      overview:
        'Atmospheric study in winter serenity, contrasting cold stone and blue snow shadows with warm lantern illumination in a traditional Japanese garden setting.',
      lightingWorkflow:
        'Soft cool 7000K diffuse sky illumination contrasted with warm 2200K fire/candlelight radiating from stone toro lanterns.',
      modelingTechnique:
        'Procedural snow accumulation shader utilizing vertex normal world-up masking to drape snow naturally across roofs and stones.',
      challenges:
        'Achieving convincing subsurface scattering for snow blankets without muddying dark rock contact shadows.'
    }
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
    videoPreview: {
      driveFileId: '1YCiTCx07bPGM7_yjvh1qLwX50e12xNVX',
      embedUrl: 'https://drive.google.com/file/d/1YCiTCx07bPGM7_yjvh1qLwX50e12xNVX/preview',
      type: 'google-drive'
    },
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1kucoc0C__Q-079g23jPuvp_2fUQhBuZt&sz=w1000',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1r9b80FQk3iphyv26Af-qDeTWurtXP9nm',
    details: {
      overview:
        'Interior spatial study focused on tranquility, material purity, and the geometric beauty of traditional Japanese residential joinery and bonsai staging.',
      lightingWorkflow:
        'Warm angled afternoon sunbeams casting sharp shoji grid lattice shadows across textured woven tatami floor mats.',
      modelingTechnique:
        'Clean architectural modeling in Blender, custom woven straw PBR normals, and hand-sculpted bonsai trunk twists.',
      challenges:
        'Balancing translucency on shoji paper so the exterior garden is softly suggested through the translucent screen.'
    }
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
    videoPreview: {
      driveFileId: '1QzMvLu7R7cgGXUPCemPhWDVuUu0zbt-h',
      embedUrl: 'https://drive.google.com/file/d/1QzMvLu7R7cgGXUPCemPhWDVuUu0zbt-h/preview',
      type: 'google-drive'
    },
    driveFolderUrl: 'https://drive.google.com/drive/folders/10X3mhF2slhuydyAGOh1Pk6OpiX2n-CNb',
    details: {
      overview:
        'Futuristic nightlife lounge exploring cyberpunk design languages, vibrant magenta and electric cyan lighting, and dark reflective finishes.',
      lightingWorkflow:
        'Multi-colored emissive signage casting dynamic Lumen bounce light across wet glass surfaces and metallic bar stools.',
      modelingTechnique:
        'Curved LED counter bars, high-poly liquor bottle displays with refraction shaders, and modular overhead HVAC conduit piping.',
      challenges:
        'Preventing specular fireflies in real-time engine rendering while maintaining sharp reflections on polished countertops.'
    }
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
    videoPreview: {
      driveFileId: '1wluTHA_LEJhUAnc-aZY9EVOYFzcRumNz',
      embedUrl: 'https://drive.google.com/file/d/1wluTHA_LEJhUAnc-aZY9EVOYFzcRumNz/preview',
      type: 'google-drive'
    },
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1ugar-pAXrr2XXNqEC_rt-mxN99uIVrh-&sz=w1000',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1d49tqHZCP9ETDy4s6A3VwV2CsFyqF8As',
    details: {
      overview:
        'Commercial product visualization focused on achieving flawless optical realism, precise gem cut refraction, and cinematic luxury advertising presentation.',
      lightingWorkflow:
        'Studio HDRI lighting paired with custom focused pin-spotlights to maximize diamond fire, rainbow optical chromatic dispersion, and platinum bevel highlights.',
      modelingTechnique:
        'Precision 58-facet round brilliant cut diamond geometry, micro-prong settings, and seamless ring band filigree.',
      challenges:
        'Rendering accurate spectral dispersion and internal facet reflections without excessive render noise.'
    }
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
    videoPreview: {
      driveFileId: '13b6EwUrNIeBaA7j1uEAih0pwozoXqKEY',
      embedUrl: 'https://drive.google.com/file/d/13b6EwUrNIeBaA7j1uEAih0pwozoXqKEY/preview',
      type: 'google-drive'
    },
    driveFolderUrl: 'https://drive.google.com/drive/folders/10X3mhF2slhuydyAGOh1Pk6OpiX2n-CNb',
    details: {
      overview:
        'Architectural visualization project highlighting natural materials, curved architectural portals, and calm, balanced living and dining compositions.',
      lightingWorkflow:
        'Dual lighting studies comparing crisp 11 AM daylight pouring through floor-to-ceiling sheer curtains against cozy 2700K evening cove lighting.',
      modelingTechnique:
        'Custom curved bouclé armchairs, fluted wood wall paneling, and delicate ceramic pottery modeled in Blender.',
      challenges:
        'Accurately capturing soft light attenuation and contact ambient occlusion in light-toned monochromatic spaces.'
    }
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
    videoPreview: {
      driveFileId: '1BbiQS-Mun9OSvxEeu8DI0g6yBH_ykfBu',
      embedUrl: 'https://drive.google.com/file/d/1BbiQS-Mun9OSvxEeu8DI0g6yBH_ykfBu/preview',
      type: 'google-drive'
    },
    driveFolderUrl: 'https://drive.google.com/drive/folders/10X3mhF2slhuydyAGOh1Pk6OpiX2n-CNb',
    details: {
      overview:
        'A high-end commercial hospitality scene highlighting custom architectural millwork, backlit translucent onyx stone, and intimate conversational seating.',
      lightingWorkflow:
        'Subtle warm under-counter LED strips casting soft gradients across fluted timber faces with precise downlights accenting glassware.',
      modelingTechnique:
        'Modular tiered bottle display racking, tufted velvet bar chairs, and detailed drinkware assets.',
      challenges:
        'Balancing translucent marble light transmission with realistic ambient room shadow depth.'
    }
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
    thumbnailUrl: 'https://drive.google.com/thumbnail?id=1o6Eah8xDVAA90EaHeU9V4WNd94lzhbHJ&sz=w1000',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1URziW7w5N8kS7RvhgT76GC4nljj0QQON',
    details: {
      overview:
        'Hard-surface concept design of an agile reconnaissance robot exploring plausible mechanical robotics, ball-and-socket joints, and armor panel seams.',
      lightingWorkflow:
        'High-contrast rim lighting outlining the mecha silhouette with emissive visor optics providing a focal point.',
      modelingTechnique:
        'Subdivision surface hard-surface modeling in Autodesk Maya with support edge loops, hydraulic cylinder rigs, and panelling.',
      challenges:
        'Designing mechanical joints that allow full range of motion without intersecting surrounding armor plates.'
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
    driveFolderUrl: 'https://drive.google.com/drive/folders/102gVJVXjeWmM4yP1jRerqIkJlozBVKSo',
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
  }
]
