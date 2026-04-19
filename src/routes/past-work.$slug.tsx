import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getWork, works, type Work } from "@/data/works";

export const Route = createFileRoute("/past-work/$slug")({
  loader: ({ params }): { work: Work } => {
    const work = getWork(params.slug);
    if (!work) throw notFound();
    return { work };
  },
  head: ({ loaderData }) => {
    const w = loaderData?.work;
    if (!w) return { meta: [{ title: "Project — Change's Studios" }] };
    return {
      meta: [
        { title: `${w.title} — Change's Studios` },
        { name: "description", content: w.description },
        { property: "og:title", content: `${w.title} — Change's Studios` },
        { property: "og:description", content: w.description },
        { property: "og:image", content: w.cover },
        { name: "twitter:image", content: w.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-black text-glow-pink text-neon-pink mb-4">
        Project Not Found
      </h1>
      <Link to="/past-work" className="text-neon-cyan underline">
        ← Back to Past Work
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-destructive mb-4">Error</h1>
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: WorkDetail,
});

function WorkDetail() {
  const { work } = Route.useLoaderData() as { work: Work };
  const others = works.filter((w) => w.slug !== work.slug).slice(0, 3);

  return (
    <article className="max-w-6xl mx-auto px-6 pt-12 pb-12">
      <Link
        to="/past-work"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-neon-cyan hover:text-glow-cyan mb-8"
      >
        ← All Projects
      </Link>

      <div className="grid lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.3em] text-neon-pink mb-3">
            {work.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-glow-cyan mb-6">
            {work.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {work.description}
          </p>
        </div>
        <div className="glass rounded-xl p-6 h-fit space-y-4">
          <Info label="Year" value={work.year} />
          <Info label="Role" value={work.role} />
          <Info label="Category" value={work.category} />
        </div>
      </div>

      {/* Hero media */}
      <div className="rounded-2xl overflow-hidden glass mb-6 shadow-neon">
        {work.video ? (
          <video
            src={work.video}
            poster={work.cover}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto bg-black"
          />
        ) : (
          <img src={work.cover} alt={work.title} className="w-full h-auto" />
        )}
      </div>

      {/* Highlights */}
      <div className="glass rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-neon-green text-glow-green mb-5">
          ◆ Highlights
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {work.highlights.map((h) => (
            <li key={h} className="flex gap-3 items-start">
              <span className="text-neon-cyan mt-1">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Gallery */}
      {work.images.length > 1 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold uppercase tracking-widest text-neon-pink text-glow-pink mb-5">
            ◆ Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {work.images.map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden glass hover:shadow-pink transition-all"
              >
                <img src={src} alt={`${work.title} screenshot ${i + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Others */}
      <div className="border-t border-[oklch(0.82_0.18_200/0.2)] pt-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-neon-cyan mb-5">
          ◆ Other Projects
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {others.map((w) => (
            <Link
              key={w.slug}
              to="/past-work/$slug"
              params={{ slug: w.slug }}
              className="group glass rounded-xl overflow-hidden hover:shadow-neon transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={w.cover}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="font-[Orbitron] font-bold text-sm">{w.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">
        {label}
      </div>
      <div className="font-semibold text-neon-cyan">{value}</div>
    </div>
  );
}
