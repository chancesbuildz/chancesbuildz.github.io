import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/tos")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Chance's Studios" },
      {
        name: "description",
        content:
          "Terms of service and rules for hiring Chance's Studios for Roblox modelling, building and VFX commissions.",
      },
      { property: "og:title", content: "Terms of Service — Chance's Studios" },
      {
        property: "og:description",
        content: "Rules when hiring me — payment, refunds, revisions, ownership and conduct.",
      },
    ],
  }),
  component: ToS,
});

type Section = { title: string; tag: string; rules: string[] };

const sections: Section[] = [
  {
    title: "Payment Rules",
    tag: "01",
    rules: [
      "Payment is negotiated in person, depending on the scale of the project, deadlines and creativity.",
      "For commissions under $100, payment can be done upon completion. Other arrangements are negotiable.",
      "For commissions over $100, at least 30% is paid up front, the rest upon completion of the full job. Negotiable.",
      "I will never send over files before payment is made. Non-negotiable.",
      "The agreed price is what I should receive — taxes and fees must be covered by the client. Non-negotiable.",
      "Prices cannot be adjusted during or after the work is in progress.",
    ],
  },
  {
    title: "Refund Rules",
    tag: "02",
    rules: [
      "No refunds — unless the issue is on my side. If the project is made exactly as agreed, no refund will be given after the files are sent over. Non-negotiable.",
      "If the issue is on my side and you've already paid up front, you will be fully refunded.",
    ],
  },
  {
    title: "Revision & Edit Rules",
    tag: "03",
    rules: [
      "Once the idea is summed up and I'm given enough description, references and creative freedom to start working, only minor changes are allowed.",
      "If minor changes pile up, additional costs will apply.",
      "If you've paid up front and we disagree after excessive edit requests and stop working together, no refund will be given. Non-negotiable.",
    ],
  },
  {
    title: "Ownership & Usage",
    tag: "04",
    rules: [
      "After payment, I'll hand over the files you ordered.",
      "You cannot resell or redistribute the files. They are for your personal projects only — not for commissions or anything else.",
    ],
  },
  {
    title: "Timeframe & Deadlines",
    tag: "05",
    rules: [
      "Deadlines are agreed on before starting work on the project.",
      "If deadline issues are caused by the client not responding in time or not providing required information, I do not take responsibility.",
      "If the issue is on my side, we'll negotiate privately. You'll be warned in advance if any problems occur.",
    ],
  },
  {
    title: "Communication & Conduct",
    tag: "06",
    rules: [
      "Clients should maintain respectful communication and have manners when communicating.",
      "If I feel disrespected, I have the right to stop working for you without any refund.",
      "We'll communicate throughout the work so you can be sure it's done well and as you had in mind.",
    ],
  },
  {
    title: "Additional Fees",
    tag: "07",
    rules: [
      "Tight deadlines have additional fees.",
      "Larger projects have additional fees.",
      "Revisions and edits have additional fees.",
      "All of these will be discussed in private.",
    ],
  },
];

function ToS() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 max-w-5xl mx-auto px-6 pt-16 pb-12 w-full">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 accent-dot">
          Terms of Service
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-4">Rules when Hiring Me</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          The terms below apply to every commission. By hiring me, you agree to all of them.
        </p>

        <div className="space-y-6">
          {sections.map((s) => (
            <section
              key={s.title}
              className="glass rounded-2xl p-7 hover:-translate-y-0.5 transition-transform"
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-[Orbitron] text-2xl font-bold">{s.title}</h2>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground border border-[oklch(1_0_0/0.15)] rounded-full px-2.5 py-1 font-mono">
                  {s.tag}
                </span>
              </div>
              <ul className="space-y-3">
                {s.rules.map((r, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-neon-cyan font-mono shrink-0">◆</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-10 glass rounded-2xl p-7 border border-[oklch(0.82_0.18_200/0.3)]">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="text-neon-cyan font-semibold">By commissioning me,</span> you agree to all the
            above terms. Failure to comply may result in termination of the project without a refund.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
