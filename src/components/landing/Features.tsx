import { useEffect, useRef, useState } from "react";
import { landingContent } from "../../content/landing";
import { Section } from "./Section";

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getRemaining(targetIso: string): CountdownState {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export function Features() {
  const items = landingContent.features.items.slice(0, 3);
  const countdownConfig = landingContent.features.countdown;
  const reducedMotion = usePrefersReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [titleAnim, setTitleAnim] = useState<
    "" | "animate-bounceIn" | "animate-bounceOut"
  >("");

  const [remaining, setRemaining] = useState<CountdownState>(() =>
    countdownConfig
      ? getRemaining(countdownConfig.target)
      : { days: 0, hours: 0, minutes: 0, seconds: 0 },
  );

  useEffect(() => {
    if (!countdownConfig) return;
    const id = window.setInterval(() => {
      setRemaining(getRemaining(countdownConfig.target));
    }, 1000);
    return () => window.clearInterval(id);
  }, [countdownConfig]);

  useEffect(() => {
    if (reducedMotion) {
      setZoomed(true);
      setTitleAnim("");
      return;
    }

    const el = wrapRef.current;
    if (!el) return;

    let lastY = window.scrollY;
    let direction: "up" | "down" = "down";

    const onScroll = () => {
      const y = window.scrollY;
      direction = y > lastY ? "down" : "up";
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          if (direction === "down") {
            setZoomed(true);
            setTitleAnim("animate-bounceIn");
          }
        } else {
          if (direction === "up") {
            setZoomed(false);
            setTitleAnim("animate-bounceOut");
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    obs.observe(el);
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, [reducedMotion]);

  return (
    <Section id="fitur" className="scroll-mt-24 min-h-screen flex items-center">
      <div ref={wrapRef}>
        <div
          className={[
            "mx-auto max-w-3xl text-left will-change-transform lg:mx-0",
            titleAnim,
            !titleAnim && (zoomed ? "scale-100" : "scale-100"),
          ].join(" ")}
          onAnimationEnd={() => setTitleAnim("")}
        >
          <h2 className="whitespace-pre-line text-4xl font-extrabold leading-[0.95] tracking-tight text-slate-900 sm:text-5xl">
            {landingContent.features.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {items.map((f, idx) => (
                <a
                  key={f.title}
                  href={f.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-full border border-slate-300 bg-white/0 px-5 py-4 text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-sm font-extrabold text-slate-800">
                      {String(idx + 1).padStart(1, "0")}
                    </span>
                    <span className="text-sm font-semibold tracking-wide text-slate-800">
                      {f.title}
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className="text-xl text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-slate-700"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            {countdownConfig && (
              <div className="rounded-3xl bg-slate-200/70 p-6 text-slate-900 shadow-sm">
                <h3 className="text-xl font-extrabold leading-tight">
                  {countdownConfig.label}
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Days", value: remaining.days },
                    { label: "Hours", value: remaining.hours },
                    { label: "Minutes", value: remaining.minutes },
                    { label: "Seconds", value: remaining.seconds },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white/70 p-4 text-center"
                    >
                      <div className="text-3xl font-extrabold tracking-tight">
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div className="mt-1 text-xs font-semibold text-slate-600">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-3">
            <div className="grid gap-4">
              <div className="rounded-3xl bg-slate-900 px-6 py-7 text-white shadow-sm">
                <div className="whitespace-pre-line text-3xl font-extrabold leading-none tracking-tight">
                  {landingContent.features.eventDate}
                </div>
              </div>

              <div className="rounded-3xl bg-[#00adef] px-6 py-7 text-slate-900 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-white/60">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z"
                        fill="#EF4444"
                        stroke="#111827"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        fill="#fff"
                        stroke="#111827"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="whitespace-pre-line text-2xl font-extrabold leading-tight">
                    {landingContent.features.eventLocation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
