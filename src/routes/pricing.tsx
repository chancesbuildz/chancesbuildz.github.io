import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Change's Studios" },
      {
        name: "description",
        content:
          "Pricing for Roblox models, weapons, VFX and full maps by Change's Studios.",
      },
      { property: "og:title", content: "Pricing — Change's Studios" },
      {
        property: "og:description",
        content: "Transparent rates for Roblox modelling, building and VFX.",
      },
    ],
  }),
  component: Pricing,
});

type Tier = { tier: string; price: string };
type Section = { title: string; tag: string; tiers: Tier[] };

const sections: Section[] = [
  {
    title: "Map Models",
    tag: "Models",
    tiers: [
      { tier: "Simple", price: "$1 – $3 each" },
      { tier: "Unique", price: "$4 – $7 each" },
      { tier: "Special", price: "$15 – $20 each" },
    ],
  },
  {
    title: "Weapons",
    tag: "Combat",
    tiers: [
      { tier: "Simple", price: "$1 – $6 each" },
      { tier: "Unique", price: "$7 – $12 each" },
      { tier: "Special", price: "$25 – $30 each" },
      { tier: "Especial", price: "$35 – $80 each" },
    ],
  },
  {
    title: "VFX",
    tag: "Effects",
    tiers: [
      { tier: "Simple", price: "$3 – $7 each" },
      { tier: "Unique", price: "$8 – $30 each" },
      { tier: "Special", price: "$40 – $100 each" },
      { tier: "Especial", price: "$110 – $350 each" },
    ],
  },
  {
    title: "Maps",
    tag: "Full Builds",
    tiers: [
      { tier: "Small", price: "$10 – $25" },
      { tier: "Medium", price: "$30 – $50" },
      { tier: "Large", price: "$60 – $120" },
      { tier: "Huge", price: "$150 – $500" },
    ],
  },
];

function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 max-w-6xl mx-auto px-6 pt-16 pb-12 w-full">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 accent-dot">
          Pricing
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-4">Rates</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Transparent base rates by category. Final pricing depends on detail,
          creativity, uniqueness and style.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((s) => (
            <div key={s.title} className="glass rounded-2xl p-7 hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-[Orbitron] text-2xl font-bold">{s.title}</h2>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground border border-[oklch(1_0_0/0.15)] rounded-full px-2.5 py-1">
                  {s.tag}
                </span>
              </div>
              <ul className="divide-y divide-[oklch(1_0_0/0.08)]">
                {s.tiers.map((t) => (
                  <li key={t.tier} className="flex items-center justify-between py-3">
                    <span className="font-semibold uppercase tracking-wider text-sm">
                      {t.tier}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">
                      {t.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
              ◆ Pricing Notes
            </div>
            <p className="text-sm leading-relaxed">
              Map prices depend on how detailed, creative, unique and styled they
              need to be. Maps with VFX have higher prices, negotiated in DMs.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
              ◆ Payment
            </div>
            <p className="text-sm leading-relaxed">
              Robux only, at DevEx rates. Example: a $105 map = 30k Robux tax-covered
              or via group funds.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
              ◆ How It Works
            </div>
            <p className="text-sm leading-relaxed">
              High-quality assets made to your description and references. Payment
              mostly upon completion. Big projects: per-task or by time. Revenue %
              only when free and the project shows huge potential.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
