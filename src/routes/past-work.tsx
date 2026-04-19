import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { works } from "@/data/works";

export const Route = createFileRoute("/past-work")({
  head: () => ({
    meta: [
      { title: "Past Work — Change's Studios" },
      {
        name: "description",
        content:
          "Browse past Roblox builds, models and VFX projects from Change's Studios.",
      },
      { property: "og:title", content: "Past Work — Change's Studios" },
      {
        property: "og:description",
        content: "Roblox builds, models and VFX showcases.",
      },
    ],
  }),
  component: PastWorkLayout,
});

function PastWorkLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/past-work/$slug");

  if (isChild) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-neon-pink mb-3">
          ◆ Portfolio
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-glow-cyan mb-4">
          Past Work
        </h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          A selection of recent Roblox Studio projects. Click any tile to see details
          and screenshots.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {works.map((w) => (
            <Link
              key={w.slug}
              to="/past-work/$slug"
              params={{ slug: w.slug }}
              className={`group relative overflow-hidden rounded-2xl glass hover:shadow-neon transition-all hover:-translate-y-1 duration-300 ${
                w.video ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className="overflow-hidden relative bg-black"
                style={{ aspectRatio: w.video ? "32 / 9" : "16 / 9" }}
              >
                {w.video ? (
                  <video
                    src={w.video}
                    poster={w.cover || undefined}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={w.cover}
                    alt={w.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass text-xs uppercase tracking-wider">
                  {w.year}
                </div>
                {w.video && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    Video
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.25em] text-neon-pink mb-2">
                  {w.category}
                </div>
                <h3 className="font-[Orbitron] font-bold text-xl mb-1 group-hover:text-glow-cyan transition-all">
                  {w.title}
                </h3>
                <div className="text-sm text-muted-foreground">{w.role}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neon-cyan">
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
