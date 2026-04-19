import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";

export type Work = {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  highlights: string[];
  images: string[];
  cover: string;
  video?: string;
};

export const works: Work[] = [
  {
    slug: "neon-simulator-game",
    title: "Neon Simulator Game",
    category: "Full Map Build · VFX",
    year: "2024",
    role: "Lead Builder & VFX Artist",
    description:
      "A vibrant futuristic simulator hub featuring a massive neon-lit central spire, glowing skyline towers, and stylized voxel foliage. Designed for high-traffic Roblox lobbies with optimized parts and custom particle systems.",
    highlights: [
      "Custom modular skyscraper kit (40+ parts)",
      "Animated rune-ring VFX around central spire",
      "Optimized lighting with neon Surface materials",
      "Stylized cube-tree environment props",
    ],
    images: [work1, work2, work4],
    cover: work1,
  },
  {
    slug: "voxel-utopia-lobby",
    title: "Voxel Utopia Lobby",
    category: "Environment Build",
    year: "2024",
    role: "Modeller & Builder",
    description:
      "A peaceful voxel-style city plaza with cube trees, modular benches, and neon-trimmed architecture. Built to serve as a relaxing spawn area before players queue into matches.",
    highlights: [
      "100% Roblox Studio parts (no meshes)",
      "Custom voxel tree variants",
      "Ambient particle drifts",
      "Mobile-friendly poly count",
    ],
    images: [work2, work1],
    cover: work2,
  },
  {
    slug: "play-portal-experience",
    title: "Play Portal Experience",
    category: "VFX · UI Worldspace",
    year: "2025",
    role: "VFX Artist",
    description:
      "An interactive in-world 'PLAY' portal surrounded by floating debris, lightning arcs, and shattered ring geometry. Built as the entry teleport pad for a featured Roblox front-page game.",
    highlights: [
      "Worldspace neon SurfaceGui text",
      "Floating debris with TweenService loops",
      "Lightning beam VFX between fragments",
      "Triggered teleport sequence",
    ],
    images: [work3, work1],
    cover: work3,
  },
  {
    slug: "ancient-rune-spire",
    title: "Ancient Rune Spire",
    category: "Hero Set Piece",
    year: "2025",
    role: "Modeller & VFX Artist",
    description:
      "A floating ritual spire wrapped in glowing runes and orbiting energy rings. Designed as the centerpiece for a magic-themed Roblox RPG hub.",
    highlights: [
      "Rotating rune text rings (custom decals)",
      "Orange core orb with pulsing glow",
      "Multi-layer ring orbit animation",
      "Hooked into game lore quest system",
    ],
    images: [work4, work1, work2],
    cover: work4,
  },
  {
    slug: "vfx-showcase-reel",
    title: "VFX Showcase Reel",
    category: "VFX",
    year: "2026",
    role: "VFX Artist",
    description:
      "A live-captured reel of in-engine Roblox VFX work — combat hits, elemental bursts, ability casts and ambient particle systems. Built entirely in Roblox Studio with a mix of meshes, beams, particles and TweenService-driven animation.",
    highlights: [
      "Mesh + particle hybrid effects",
      "Performance-tuned for mobile clients",
      "Reusable VFX module structure",
      "Color-graded for stylized projects",
    ],
    images: [work3, work4],
    cover: work4,
    video: "/vfx-showcase.mp4",
  },
];

export const getWork = (slug: string) => works.find((w) => w.slug === slug);
