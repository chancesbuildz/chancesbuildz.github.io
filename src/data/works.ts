import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";
import work7 from "@/assets/work-7.png";
import work8 from "@/assets/work-8.png";
import vfxPoster from "@/assets/vfx-poster.jpg";
import vfxVideo from "@/assets/vfx-showcase.mp4";

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
    slug: "neon-city-build",
    title: "Neon City Build",
    category: "Map · Build · VFX",
    year: "2025",
    role: "Lead Builder & VFX Artist",
    description:
      "A full neon-soaked Roblox city map: a massive central rune-spire, glowing skyline towers, voxel cube-tree forests and an interactive 'PLAY' portal entry. Built end-to-end in Roblox Studio with stylized lighting, custom particle systems and worldspace UI — designed for high-traffic front-page lobbies.",
    highlights: [
      "Modular skyscraper kit (40+ parts)",
      "Animated rune-ring VFX around central spire",
      "Voxel cube-tree forest props",
      "Interactive 'PLAY' worldspace portal",
      "Lightning beams + floating debris VFX",
      "Mobile-friendly optimization",
    ],
    images: [work1, work2, work3, work4],
    cover: work1,
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
    images: [],
    cover: vfxPoster,
    video: "/vfx-showcase.mp4",
  },
  {
    slug: "pastel-dream-island",
    title: "Pastel Dream Island",
    category: "Stylized Map Build",
    year: "2025",
    role: "Modeller & Builder",
    description:
      "A soft pastel floating island with low-poly trees, mushrooms, a flowing river, waterfalls and a candy-pink cottage tucked into the woods. Designed as a cozy social hub with a dreamy sunset sky and stylized particle ambience.",
    highlights: [
      "Hand-built low-poly nature pack",
      "Custom waterfall + river mesh setup",
      "Pastel cottage with detailed interior props",
      "Cozy lantern-lit forest paths",
      "Soft sunset lighting + sky preset",
    ],
    images: [work5, work6, work7, work8],
    cover: work5,
  },
];

export const getWork = (slug: string) => works.find((w) => w.slug === slug);
