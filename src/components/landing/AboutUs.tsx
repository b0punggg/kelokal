import { landingContent } from "../../content/landing";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

type AboutUsVariant = "home" | "page";

export function AboutUs({ variant = "home" }: { variant?: AboutUsVariant }) {
  const about = landingContent.aboutUs;
  const reduced = useReducedMotion();
  const descriptionShort = about.descriptionShort;
  const descriptionLong = about.descriptionLong;
  const cardText = about.cardText;
  const cardBullets = about.cardBullets;
  const cardTextAfterBullets = about.cardTextAfterBullets;
  const showGallery = variant === "page";
  const images = showGallery
    ? about.images.slice(0, 5)
    : about.images.slice(0, 2);
  const isPage = variant === "page";

  const pageWrap = isPage && !reduced;
  const wrapProps = pageWrap
    ? {
        initial: { opacity: 0, y: 16, filter: "blur(10px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
      }
    : {};

  return (
    <section id="about-us" className="px-4 py-16 sm:py-10">
      <div className="mx-auto w-full max-w-full">
        <motion.div
          className="rounded-[0px] bg-black px-6 py-10 text-white sm:px-10 sm:py-12"
          {...wrapProps}
          style={{ willChange: pageWrap ? "transform, opacity, filter" : undefined }}
        >
          {isPage ? (
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={pageWrap ? { opacity: 0 } : undefined}
              animate={pageWrap ? { opacity: 1 } : undefined}
              transition={
                pageWrap
                  ? { delay: 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }
                  : undefined
              }
            >
              <motion.h2
                className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl"
                initial={pageWrap ? { opacity: 0, y: 10 } : undefined}
                animate={pageWrap ? { opacity: 1, y: 0 } : undefined}
                transition={
                  pageWrap
                    ? { delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
                    : undefined
                }
              >
                {about.title}
              </motion.h2>
              <motion.div
                className="mt-4 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base"
                initial={pageWrap ? { opacity: 0, y: 12 } : undefined}
                animate={pageWrap ? { opacity: 1, y: 0 } : undefined}
                transition={
                  pageWrap
                    ? { delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    : undefined
                }
              >
                {descriptionLong.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </motion.div>
            </motion.div>
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

          <motion.div
            className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end"
            initial={
              pageWrap
                ? { opacity: 0, y: 14, scale: 0.99, filter: "blur(10px)" }
                : undefined
            }
            animate={pageWrap ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined}
            transition={
              pageWrap
                ? { delay: 0.26, duration: 0.75, ease: [0.22, 1, 0.36, 1] }
                : undefined
            }
            style={{ willChange: pageWrap ? "transform, opacity, filter" : undefined }}
          >
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
          </motion.div>

          {showGallery ? (
            <motion.div
              className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-stretch"
              initial={pageWrap ? { opacity: 0, y: 16 } : undefined}
              animate={pageWrap ? { opacity: 1, y: 0 } : undefined}
              transition={
                pageWrap
                  ? { delay: 0.36, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                  : undefined
              }
              style={{ willChange: pageWrap ? "transform, opacity" : undefined }}
            >
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
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
