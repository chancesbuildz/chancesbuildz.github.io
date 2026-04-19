import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { works } from "@/data/works";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Change's Studios — Roblox Modeller, Builder & VFX Artist" },
      {
        name: "description",
        content:
          "Portfolio of Change's Studios — advanced Roblox Studio modelling, building and VFX work for top-tier experiences.",
      },
      { property: "og:title", content: "Change's Studios — Roblox Developer Portfolio" },
      {
        property: "og:description",
        content: "Modeller · Builder · VFX Artist for Roblox Studio.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.3em] text-neon-cyan mb-8">
            ◆ Roblox Studio Specialist ◆
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-glow-cyan leading-tight">
            CHANGE'S
            <br />
            <span className="text-glow-pink text-neon-pink">STUDIOS</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground">
            Crafting next-gen Roblox experiences. Modeller. Builder. VFX Artist.
            Bringing neon-soaked worlds to life one part at a time.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/past-work"
              className="px-8 py-3 rounded-lg bg-gradient-hero text-background font-bold uppercase tracking-wider shadow-neon hover:scale-105 transition-transform"
            >
              View Past Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg glass border-neon font-bold uppercase tracking-wider text-neon-cyan hover:bg-[oklch(0.82_0.18_200/0.15)] transition-colors"
            >
              Hire Me
            </Link>
          </div>

          {/* Specs strip */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Modelling", color: "cyan", icon: "▲" },
              { label: "Building", color: "green", icon: "■" },
              { label: "VFX", color: "pink", icon: "✦" },
            ].map((s) => (
              <div
                key={s.label}
                className={`glass rounded-xl p-6 hover:scale-105 transition-transform animate-float`}
                style={{ animationDelay: `${Math.random()}s` }}
              >
                <div className={`text-4xl mb-3 text-neon-${s.color} text-glow-${s.color}`}>
                  {s.icon}
                </div>
                <div className="font-[Orbitron] font-bold tracking-widest uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-neon-pink mb-2">
                ◆ Featured
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-glow-cyan">
                Recent Builds
              </h2>
            </div>
            <Link
              to="/past-work"
              className="text-sm font-semibold uppercase tracking-wider text-neon-cyan hover:text-glow-cyan"
            >
              See All →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {works.slice(0, 2).map((w) => (
              <Link
                key={w.slug}
                to="/past-work/$slug"
                params={{ slug: w.slug }}
                className="group relative overflow-hidden rounded-xl glass hover:shadow-neon transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={w.cover}
                    alt={w.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-widest text-neon-cyan mb-1">
                    {w.category}
                  </div>
                  <div className="font-[Orbitron] font-bold text-lg">{w.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
