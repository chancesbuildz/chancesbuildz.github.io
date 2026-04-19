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
    brand: "#5865F2",
    icon: (
      // Official Discord 2024+ mark
      <svg viewBox="0 0 127.14 96.36" className="w-9 h-9" fill="currentColor" aria-hidden="true">
        <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2.05a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2.05a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69c-6.27 0-11.45-5.69-11.45-12.69s5-12.74 11.43-12.74S54 46 53.88 53s-5.05 12.69-11.43 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z" />
      </svg>
    ),
  },
  {
    name: "Roblox",
    handle: "ChangesStudios",
    href: "https://www.roblox.com/users/profile",
    brand: "#FFFFFF",
    icon: (
      // Official Roblox tilted square mark
      <svg viewBox="0 0 32 32" className="w-9 h-9" fill="currentColor" aria-hidden="true">
        <path d="M5.5 2 2 25.5 25.5 30 30 6.5 5.5 2Zm10.65 14.32-1.06 5.42-5.43-1.06 1.07-5.42 5.42 1.06Z" />
      </svg>
    ),
  },
] as const;

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 max-w-5xl mx-auto px-6 pt-16 pb-12 w-full">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
          ◆ Get In Touch
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-4">
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
              className="group glass rounded-2xl p-6 flex items-center gap-5 hover:-translate-y-1 transition-all duration-300 hover:border-[oklch(0.82_0.18_200/0.6)]"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center bg-[oklch(0.22_0.05_265)] group-hover:scale-110 transition-transform"
                style={{ color: c.brand }}
              >
                {c.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  Reach me on
                </div>
                <div className="font-[Orbitron] font-bold text-xl">{c.name}</div>
                <div className="text-sm text-muted-foreground truncate">{c.handle}</div>
              </div>
              <div className="text-2xl text-muted-foreground group-hover:translate-x-1 group-hover:text-foreground transition-all">
                →
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-8">
          <h2 className="font-[Orbitron] text-xl font-bold mb-3 uppercase tracking-widest">
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
