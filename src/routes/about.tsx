import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Chance's Studios" },
      {
        name: "description",
        content:
          "About Chance's Studios — Roblox Modeller, Builder, and VFX Artist with years of experience building neon worlds.",
      },
      { property: "og:title", content: "About — Chance's Studios" },
      {
        property: "og:description",
        content: "Meet the developer behind Chance's Studios.",
      },
    ],
  }),
  component: About,
});

const skills = [
  { name: "Roblox Studio", level: 98 },
  { name: "Modelling (Blender)", level: 90 },
  { name: "VFX & Particles", level: 95 },
  { name: "Lighting Design", level: 92 },
  { name: "UI / Worldspace", level: 85 },
  { name: "Optimization", level: 88 },
];

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-neon-pink mb-3">◆ About</div>
        <h1 className="text-5xl md:text-6xl font-black text-glow-cyan mb-8">
          Who is Change?
        </h1>

        <div className="glass rounded-2xl p-8 md:p-10 space-y-5 text-lg leading-relaxed">
          <p>
            Hey — I'm <span className="text-neon-cyan font-semibold">Change</span>, the
            solo developer behind Chance's Studios. I specialize in crafting striking,
            high-performance environments and visual effects for Roblox experiences.
          </p>
          <p>
            From modular voxel cities to glowing rune spires and full-scale VFX portals,
            my work focuses on <span className="text-neon-green">stylized neon
            aesthetics</span> with a strong emphasis on optimization. Every part is
            placed with intention — I want your game to look incredible AND run silky
            smooth on mobile.
          </p>
          <p>
            I've collaborated with multiple front-page Roblox teams as a Modeller,
            Builder, and VFX Artist — and I'm always down to help bring your vision to
            life.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-glow-pink text-neon-pink mb-6 uppercase tracking-widest">
            ◆ Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((s) => (
              <div key={s.name} className="glass rounded-xl p-5">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold uppercase tracking-wider">{s.name}</span>
                  <span className="text-neon-cyan font-mono">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-[oklch(0.25_0.05_265)] overflow-hidden">
                  <div
                    className="h-full bg-gradient-hero shadow-neon"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Toolbox */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-glow-green text-neon-green mb-6 uppercase tracking-widest">
            ◆ Toolbox
          </h2>
          
          {/* Primary Tools - Blender & Roblox Studio */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { name: "Blender", tag: "3D Modelling" },
              { name: "Roblox Studio", tag: "Game Engine" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="glass rounded-xl p-6 border-neon border border-[oklch(0.75_0.15_200/0.4)] hover:border-[oklch(0.75_0.15_200/0.6)] transition-all hover:-translate-y-1"
              >
                <div className="text-sm text-neon-cyan uppercase tracking-wider mb-1">{tool.tag}</div>
                <div className="text-xl font-bold text-foreground font-[Orbitron]">{tool.name}</div>
              </div>
            ))}
          </div>
          
          {/* Secondary Tools */}
          <div className="flex flex-wrap gap-3">
            {["Substance Painter", "Photoshop", "After Effects", "Figma"].map(
              (t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full glass border-neon text-sm font-semibold uppercase tracking-wider"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
