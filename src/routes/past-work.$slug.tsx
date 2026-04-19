import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
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
  const [playing, setPlaying] = useState(false);

  return (
    <article className="max-w-5xl mx-auto px-6 pt-10 pb-20">
      <Link
        to="/past-work"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground mb-10 transition-colors"
      >
        ← All Projects
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          {work.category} · {work.year}
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          {work.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {work.description}
        </p>
      </header>

      {/* Hero media */}
      {(work.video || work.cover) && (
        <div className="rounded-2xl overflow-hidden glass mb-12 relative aspect-video bg-black">
          {work.video ? (
            playing ? (
              <video
                src={work.video}
                poster={work.cover || undefined}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 w-full h-full"
                aria-label="Play video"
              >
                <img
                  src={work.cover}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform shadow-neon">
                    <span className="text-3xl ml-1.5">▶</span>
                  </div>
                </div>
              </button>
            )
          ) : (
            <img src={work.cover} alt={work.title} className="w-full h-full object-cover" />
          )}
        </div>
      )}

      {/* Meta + Highlights */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <aside className="glass rounded-2xl p-6 h-fit space-y-5 lg:sticky lg:top-24">
          <Info label="Year" value={work.year} />
          <Info label="Role" value={work.role} />
          <Info label="Category" value={work.category} />
        </aside>
        <div className="lg:col-span-2">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-5">
            Highlights
          </h2>
          <ul className="space-y-3">
            {work.highlights.map((h) => (
              <li key={h} className="flex gap-3 items-start text-base leading-relaxed">
                <span className="text-muted-foreground mt-1.5">—</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery */}
      {work.images.length > 1 && (
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-5">
            Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {work.images.map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden glass hover:opacity-90 transition-opacity"
              >
                <img src={src} alt={`${work.title} screenshot ${i + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Others */}
      <div className="border-t border-border pt-10">
        <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-5">
          More Projects
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {others.map((w) => (
            <Link
              key={w.slug}
              to="/past-work/$slug"
              params={{ slug: w.slug }}
              className="group glass rounded-xl overflow-hidden hover:opacity-90 transition-opacity"
            >
              <div className="aspect-video overflow-hidden bg-black">
                <img
                  src={w.cover}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="font-bold text-sm">{w.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{w.year}</div>
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
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
        {label}
      </div>
      <div className="font-semibold">{value}</div>
    </div>
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
