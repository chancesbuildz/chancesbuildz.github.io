import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Change's Studios" },
      {
        name: "description",
        content: "Get in touch with Change's Studios for Roblox modelling, building and VFX commissions.",
      },
      { property: "og:title", content: "Contact — Change's Studios" },
      {
        property: "og:description",
        content: "Hire Change's Studios for your next Roblox project.",
      },
    ],
  }),
  component: Contact,
});

const contacts = [
  {
    name: "Discord",
    handle: "changesstudios",
    href: "https://discord.com/users/changesstudios",
    color: "cyan",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a14.7 14.7 0 0 0-.617 1.265 18.27 18.27 0 0 0-5.487 0A12.6 12.6 0 0 0 9.838 3 19.74 19.74 0 0 0 6.077 4.371C2.59 9.498 1.658 14.49 2.124 19.41a19.94 19.94 0 0 0 5.993 3.029 14.6 14.6 0 0 0 1.279-2.07 12.85 12.85 0 0 1-2.014-.964c.169-.123.335-.252.494-.385 3.901 1.797 8.122 1.797 11.974 0 .161.133.327.262.494.385a12.85 12.85 0 0 1-2.018.965 14.4 14.4 0 0 0 1.28 2.069 19.93 19.93 0 0 0 5.997-3.03c.55-5.708-.94-10.658-3.946-15.04ZM8.68 16.4c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.953-2.428 2.156-2.428 1.21 0 2.176 1.103 2.158 2.428 0 1.334-.955 2.42-2.157 2.42Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.952-2.428 2.156-2.428 1.21 0 2.175 1.103 2.157 2.428 0 1.334-.946 2.42-2.156 2.42Z" />
      </svg>
    ),
  },
  {
    name: "Roblox",
    handle: "ChangesStudios",
    href: "https://www.roblox.com/users/profile",
    color: "pink",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M3.5 3 21 7.5 16.5 21 0 16.5 3.5 3Zm6.36 7.86 1.93 6.34 6.35-1.93-1.93-6.35-6.35 1.94Z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    handle: "@changesstudios",
    href: "https://twitter.com/changesstudios",
    color: "green",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.93l-5.4-7.06L4.5 22H1.24l8.04-9.18L1 2h7.07l4.88 6.45L18.24 2Zm-1.22 18h1.91L7.05 4H5.04l11.98 16Z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "hire@changesstudios.dev",
    href: "mailto:hire@changesstudios.dev",
    color: "cyan",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
] as const;

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 max-w-5xl mx-auto px-6 pt-16 pb-12 w-full">
        <div className="text-xs uppercase tracking-[0.3em] text-neon-pink mb-3">
          ◆ Get In Touch
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-glow-cyan mb-4">
          Contact Me
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Open for Roblox commissions: full builds, individual models, VFX work or
          consultation. Pick your platform below.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {contacts.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass rounded-2xl p-6 flex items-center gap-5 hover:-translate-y-1 transition-all duration-300 hover:shadow-${c.color === "cyan" ? "neon" : c.color}`}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center bg-[oklch(0.82_0.18_200/0.1)] text-neon-${c.color} text-glow-${c.color} group-hover:scale-110 transition-transform`}
              >
                {c.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  Reach me on
                </div>
                <div className="font-[Orbitron] font-bold text-xl">{c.name}</div>
                <div className={`text-sm text-neon-${c.color} truncate`}>{c.handle}</div>
              </div>
              <div className="text-2xl text-neon-cyan group-hover:translate-x-1 transition-transform">
                →
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-8 border-neon">
          <h2 className="font-[Orbitron] text-xl font-bold text-glow-green text-neon-green mb-3 uppercase tracking-widest">
            ◆ Commission Info
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>▸ Available for short-term and long-term projects</li>
            <li>▸ Payment via Robux, PayPal, or Crypto</li>
            <li>▸ Typical response time: under 24 hours</li>
            <li>▸ NDA / private work welcome</li>
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
