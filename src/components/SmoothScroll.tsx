import { useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SmoothScroll() {
  const location = useLocation();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    // Handle initial hash (and any hash navigations while lenis is active).
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const el = document.querySelector(hash);
      if (!el) return;

      // Let layout settle (images/fonts) before scrolling.
      window.setTimeout(() => {
        lenis.scrollTo(el as HTMLElement, { offset: -80 });
      }, 0);
    };

    scrollToHash();

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [location.key]);

  useEffect(() => {
    if (!prefersReducedMotion()) return;
    const hash = location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (!el) return;
    window.setTimeout(() => {
      (el as HTMLElement).scrollIntoView();
    }, 0);
  }, [location.key, location.hash]);

  return null;
}
