import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/past-work", label: "Past Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/tos", label: "ToS" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-[oklch(0.82_0.18_200/0.3)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-hero shadow-neon flex items-center justify-center font-black text-background">
            C
          </div>
          <span className="font-[Orbitron] font-bold text-lg tracking-widest text-glow-cyan">
            CHANGE'S STUDIOS
          </span>
        </Link>
        <nav className="flex gap-1 sm:gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 text-sm font-semibold uppercase tracking-wider rounded-md transition-all hover:text-neon-cyan hover:bg-[oklch(0.82_0.18_200/0.1)] data-[status=active]:text-neon-cyan data-[status=active]:bg-[oklch(0.82_0.18_200/0.15)] data-[status=active]:shadow-neon"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[oklch(0.82_0.18_200/0.2)] py-8 text-center text-sm text-muted-foreground">
      <div className="font-[Orbitron] tracking-widest text-neon-cyan">CHANGE'S STUDIOS</div>
      <div className="mt-2">© {new Date().getFullYear()} — Roblox Modeller · Builder · VFX Artist</div>
    </footer>
  );
}
