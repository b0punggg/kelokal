import { landingContent } from "../../content/landing";
import { Link } from "react-router-dom";

function SocialIcon({ label }: { label: string }) {
  if (label.toLowerCase().includes("instagram")) {
    return (
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-900"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M17.5 6.5h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  // WhatsApp
  return (
    <span
      aria-hidden
      className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-900"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 11.5a8 8 0 0 1-11.7 7L4 20l1.6-4.1A8 8 0 1 1 20 11.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9.6 8.8c.2-.5.3-.5.7-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.4.4c-.2.2-.2.4 0 .7.6 1 1.4 1.8 2.4 2.4.3.2.5.2.7 0l.4-.4c.2-.2.4-.2.7-.1l1.7.7c.3.1.4.3.4.5v.6c0 .4 0 .5-.5.7-.6.3-1.7.5-3.4-.1-2.4-.9-4.9-3.4-5.8-5.8-.6-1.7-.4-2.8-.1-3.4Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export function Footer() {
  const f = landingContent.footer;

  return (
    <footer id="contact" className="bg-black px-4 py-14 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src="/logokiri.png" alt={f.brand} className="h-8 w-auto" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              {f.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {f.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label={s.label}
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <nav
              className="mt-4 flex flex-col gap-3 text-sm text-white/70"
              aria-label="Footer links"
            >
              {f.extraLinks.map((l) =>
                l.href.startsWith("/") ? (
                  <Link
                    key={l.label}
                    to={l.href}
                    className="w-fit rounded hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    className="w-fit rounded hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {l.label}
                  </a>
                ),
              )}
            </nav>
          </div>

          <div className="md:col-span-4">
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div>
                {f.contact.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
              <div>{f.contact.email}</div>
              <div>{f.contact.phone}</div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          {f.copyright}
        </div>
      </div>
    </footer>
  );
}
