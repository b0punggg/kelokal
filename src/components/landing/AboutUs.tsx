import { landingContent } from "../../content/landing";
import { Link } from "react-router-dom";

type AboutUsVariant = "home" | "page";

export function AboutUs({ variant = "home" }: { variant?: AboutUsVariant }) {
  const about = landingContent.aboutUs;
  const descriptionShort = about.descriptionShort;
  const descriptionLong = about.descriptionLong;
  const cardText = about.cardText;
  const cardBullets = about.cardBullets;
  const cardTextAfterBullets = about.cardTextAfterBullets;
  const showGallery = variant === "page";
  const images = showGallery ? about.images.slice(0, 5) : about.images.slice(0, 2);
  const isPage = variant === "page";

  return (
    <section id="about-us" className="px-4 py-16 sm:py-10">
      <div className="mx-auto w-full max-w-full">
        <div className="rounded-[0px] bg-black px-6 py-10 text-white sm:px-10 sm:py-12">
          {isPage ? (
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                {about.title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base">
                {descriptionLong.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {about.title}
                </h2>
              </div>

              <div className="lg:col-span-5">
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  {descriptionShort}
                </p>
              </div>
            </div>
          )}

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl bg-white/5">
                <img
                  src={images[0]?.src}
                  alt={images[0]?.alt ?? ""}
                  className="h-72 w-full object-cover sm:h-80"
                  loading="lazy"
                />
                {variant === "home" ? (
                  <Link
                    to="/about-us"
                    className="absolute bottom-4 left-4 rounded-xl bg-[#00adef] px-4 py-3 text-xs font-extrabold tracking-wide text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {about.badge}
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-2">
              <div className="relative overflow-hidden rounded-3xl bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                <img
                  src={images[1]?.src}
                  alt={images[1]?.alt ?? ""}
                  className="h-72 w-full object-cover sm:h-80"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {showGallery ? (
            <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-stretch">
              <div className="lg:col-span-7">
                <div className="h-full rounded-3xl bg-white/5 p-6 sm:p-8">
                  <div className="space-y-4 text-sm leading-relaxed text-white/75 sm:text-base">
                    {cardText.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  {cardBullets.length ? (
                    <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-white/80 sm:text-base">
                      {cardBullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                  {cardTextAfterBullets.length ? (
                    <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/75 sm:text-base">
                      {cardTextAfterBullets.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="lg:col-span-5 lg:pl-2">
                <div className="relative overflow-hidden rounded-3xl bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                  <img
                    src={images[4]?.src}
                    alt={images[4]?.alt ?? ""}
                    className="h-72 w-full object-cover sm:h-80"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
