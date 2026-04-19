import { useEffect, useState } from "react";

const STORAGE_KEY = "cs-loaded-session";

export function BootLoader({ children }: { children: React.ReactNode }) {
  // Show loader on every fresh visit / refresh, not on client-side route changes
  const [done, setDone] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  });
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (done) return;
    const start = performance.now();
    const duration = 1800; // ~1.8s
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased * 100);
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        setFadeOut(true);
        setTimeout(() => {
          sessionStorage.setItem(STORAGE_KEY, "1");
          setDone(true);
        }, 500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [done]);

  return (
    <>
      {children}
      {!done && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, oklch(0.3 0.1 240 / 0.6), transparent 60%), radial-gradient(ellipse at bottom right, oklch(0.4 0.18 330 / 0.25), transparent 50%)",
          }}
        >
          {/* animated grid bg */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.82 0.18 200 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.18 200 / 0.15) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            }}
          />

          <div className="relative w-full max-w-md px-8 text-center">
            {/* Logo mark */}
            <div className="mx-auto mb-8 w-20 h-20 rounded-2xl bg-gradient-hero shadow-neon flex items-center justify-center font-black text-3xl text-background animate-pulse-glow">
              C
            </div>

            <div className="font-[Orbitron] text-2xl font-black tracking-[0.3em] mb-2">
              CHANGE'S STUDIOS
            </div>
            <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-8">
              Initializing Workspace
            </div>

            {/* Bar */}
            <div className="relative h-[6px] rounded-full bg-[oklch(0.25_0.05_265)] overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-hero rounded-full transition-[width] duration-75 ease-out"
                style={{
                  width: `${progress}%`,
                  boxShadow:
                    "0 0 12px oklch(0.82 0.18 200 / 0.8), 0 0 24px oklch(0.78 0.22 330 / 0.5)",
                }}
              />
              {/* moving shimmer */}
              <div
                className="absolute inset-y-0 w-1/3 -skew-x-12"
                style={{
                  left: `${Math.max(0, progress - 20)}%`,
                  background:
                    "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.4), transparent)",
                  transition: "left 75ms linear",
                }}
              />
            </div>

            <div className="mt-3 flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <span>{loadingLabel(progress)}</span>
              <span className="text-foreground">{Math.floor(progress)}%</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function loadingLabel(p: number) {
  if (p < 25) return "Booting Studio";
  if (p < 55) return "Loading Assets";
  if (p < 80) return "Compiling VFX";
  if (p < 100) return "Rendering UI";
  return "Ready";
}
