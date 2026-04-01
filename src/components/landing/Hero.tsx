import { landingContent } from "../../content/landing";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

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

export function Hero() {
  const slides = landingContent.hero.slides;
  const reducedMotion = usePrefersReducedMotion();
  const reducedMotionFm = useReducedMotion();
  const intro = landingContent.hero.intro;
  const [active, setActive] = useState(0);
  const SLIDE_INTERVAL_MS = 4200;
  const SLIDE_TRANSITION = {
    duration: 1.15,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const safeActive = slides.length
    ? ((active % slides.length) + slides.length) % slides.length
    : 0;

  useEffect(() => {
    if (reducedMotion || reducedMotionFm) return;
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => i + 1);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, reducedMotionFm, slides.length, SLIDE_INTERVAL_MS]);

  const visible = useMemo(() => {
    if (!slides.length) return [] as typeof slides;
    const left = slides[(safeActive - 1 + slides.length) % slides.length]!;
    const center = slides[safeActive]!;
    const right = slides[(safeActive + 1) % slides.length]!;
    return [left, center, right];
  }, [safeActive, slides]);

  return (
    <section className="px-0 pt-0">
      <div id="top" className="scroll-mt-24" />
      <div className="bg-black py-6 sm:py-20 md:py-32 text-white flex items-center justify-center">
        <div className="mx-auto w-full max-w-6xl">
          <div className="md:hidden flex flex-col items-center gap-5 text-center">
            <p className="border-b border-white pb-1 text-[10px] font-medium capitalize leading-none tracking-[0.18em] whitespace-nowrap text-white motion-safe:animate-introRise [animation-delay:0ms]">
              {intro.line1Tagline}
            </p>
            <p className="font-daysone text-4xl font-semibold capitalize tracking-tight sm:text-5xl motion-safe:animate-introRise [animation-delay:220ms]">
              {intro.line1Word}
            </p>
            <p className="font-daysone text-4xl font-semibold capitalize tracking-tight sm:text-5xl motion-safe:animate-introRise [animation-delay:440ms]">
              {intro.line2Word}
            </p>
            <p className="font-daysone text-4xl font-semibold capitalize tracking-tight sm:text-5xl motion-safe:animate-introRise [animation-delay:660ms]">
              {intro.line3Word}
            </p>
            <p className="border-b border-white pb-1 text-[10px] font-medium capitalize leading-none tracking-[0.18em] whitespace-nowrap text-white motion-safe:animate-introRise [animation-delay:880ms]">
              {intro.line3Tagline}
            </p>
          </div>

          <div className="hidden md:flex md:flex-col md:gap-14 lg:gap-16">
            <div className="flex flex-wrap items-end justify-start gap-x-6 gap-y-4">
              <p className="font-daysone text-5xl font-semibold capitalize tracking-tight sm:text-6xl md:text-7xl lg:text-8xl motion-safe:animate-introRise [animation-delay:0ms]">
                {intro.line1Word}
              </p>
              <p className="shrink-0 border-b border-white pb-1 text-[8px] font-medium capitalize leading-none tracking-[0.18em] text-white sm:text-[10px] md:text-xs md:translate-y-[-0.35em] md:tracking-[0.2em] whitespace-nowrap motion-safe:animate-introRise [animation-delay:260ms]">
                {intro.line1Tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-end justify-center gap-x-6 gap-y-4">
              <p className="font-daysone text-5xl font-semibold capitalize tracking-tight sm:text-6xl md:text-7xl lg:text-8xl motion-safe:animate-introRise [animation-delay:520ms]">
                {intro.line2Word}
              </p>
            </div>

            <div className="flex flex-wrap items-end justify-end gap-x-6 gap-y-4">
              <p className="order-2 border-b border-white pb-1 text-[10px] font-medium capitalize leading-snug tracking-[0.2em] text-white sm:order-1 sm:text-xs whitespace-nowrap motion-safe:animate-introRise [animation-delay:980ms]">
                {intro.line3Tagline}
              </p>
              <p className="font-daysone order-1 text-5xl font-semibold capitalize tracking-tight sm:order-2 sm:text-6xl md:text-7xl lg:text-8xl motion-safe:animate-introRise [animation-delay:760ms]">
                {intro.line3Word}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 py-6 min-h-[62vh] sm:py-10 sm:min-h-screen flex items-center justify-center">
        {slides.length ? (
          reducedMotion || reducedMotionFm || slides.length === 1 ? (
            <img
              src={slides[0]!.src}
              alt={slides[0]!.alt}
              className="w-full max-w-5xl aspect-[16/9] object-cover rounded-[10px] shadow-xl sm:w-5/6"
              loading="eager"
            />
          ) : (
            <div className="relative w-full overflow-hidden">
              <div className="grid w-full grid-cols-12 items-center gap-3 sm:gap-6">
                {visible.map((s, idx) => {
                  const isCenter = idx === 1;
                  const colSpan = isCenter ? "col-span-6" : "col-span-3";
                  const scale = isCenter ? 1 : 0.94;
                  const opacity = isCenter ? 1 : 0.82;
                  return (
                    <motion.div
                      // layout makes it smoothly "swap" sizes/positions
                      layout
                      key={`${s.src}-${idx === 1 ? safeActive : `${safeActive}-${idx}`}`}
                      className={`${colSpan}`}
                      transition={SLIDE_TRANSITION}
                      animate={{ opacity }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <motion.img
                        layout
                        src={s.src}
                        alt={s.alt}
                        className="h-[44vh] w-full object-cover rounded-[10px] shadow-xl sm:h-[62vh]"
                        loading={isCenter ? "eager" : "lazy"}
                        draggable={false}
                        transition={SLIDE_TRANSITION}
                        style={{
                          transformOrigin: "center",
                          scale,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )
        ) : (
          <div className="grid h-full w-full place-items-center bg-slate-100 text-sm font-medium text-slate-600">
            No slides
          </div>
        )}
      </div>
    </section>
  );
}
