import { useEffect, useState } from "react";
import { landingContent } from "../../content/landing";
import { Link } from "react-router-dom";

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-semibold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
          onClick={() => setOpen(false)}
        >
          {scrolled ? (
            <span
              className="inline-flex items-center gap-2"
              aria-label="Logo bubbles"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#00adef] motion-safe:animate-labPulse [animation-delay:0ms]" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/70 motion-safe:animate-labPulse [animation-delay:180ms]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00adef]/70 motion-safe:animate-labPulse [animation-delay:360ms]" />
            </span>
          ) : (
            <img
              src="/logokiri.png"
              alt="Logo"
              className="h-5 w-auto motion-safe:animate-labPulse sm:h-6"
            />
          )}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {landingContent.nav.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-white hover:text-[#00adef] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-[#00adef] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="text-xl leading-none">
            {open ? "×" : "≡"}
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cx("md:hidden bg-black", open ? "block" : "hidden")}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3"
          aria-label="Mobile"
        >
          {landingContent.nav.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
