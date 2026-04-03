import { landingContent } from "../../content/landing";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type AboutUsVariant = "home" | "page";

export function AboutUs({ variant = "home" }: { variant?: AboutUsVariant }) {
  const about = landingContent.aboutUs;
  const reduced = useReducedMotion();
  const desktopImages = useMemo(
    () => about.images.filter((img) => img.src && img.src !== "#"),
    [about.images],
  );
  const [slideIndex, setSlideIndex] = useState(0);

  const safeSlideImages = desktopImages.length
    ? desktopImages
    : [
        {
          src: "",
          alt: "",
        },
      ];

  const currentSlide = safeSlideImages[Math.min(slideIndex, safeSlideImages.length - 1)];
  const mobileImages = desktopImages.length
    ? desktopImages.slice(0, 3)
    : [
        { src: "", alt: "" },
        { src: "", alt: "" },
        { src: "", alt: "" },
      ];
  const currentMobileSlide =
    mobileImages[Math.min(slideIndex, mobileImages.length - 1)];
  // Untuk menghindari layout shift saat thumbnail lain diklik,
  // ukuran "gambar besar" dipaksa memakai rasio dari image pertama.
  const firstMobileSrc = mobileImages[0]?.src;
  const [mobileAspect, setMobileAspect] = useState<null | { w: number; h: number }>(null);

  useEffect(() => {
    if (!firstMobileSrc || firstMobileSrc === "#") {
      setMobileAspect(null);
      return;
    }

    const img = new Image();
    img.onload = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        setMobileAspect({ w: img.naturalWidth, h: img.naturalHeight });
      }
    };
    img.onerror = () => setMobileAspect(null);
    img.src = firstMobileSrc;
  }, [firstMobileSrc]);

  const goPrev = () => {
    setSlideIndex((i) => (safeSlideImages.length ? (i - 1 + safeSlideImages.length) % safeSlideImages.length : 0));
  };
  const goNext = () => {
    setSlideIndex((i) => (safeSlideImages.length ? (i + 1) % safeSlideImages.length : 0));
  };
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
          className="rounded-[0px] bg-black px-6 py-10 text-white sm:px-10 sm:py-12 lg:py-16"
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
                className="mt-4 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base [text-align:justify]"
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
            <>
              {/* Desktop layout: 3 kolom dengan panah kiri/tengah/kanan */}
              <div className="hidden lg:block">
                <div className="text-center">
                  <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    {about.title}
                  </h2>

                  <Link
                    to="/about-us"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#00adef] px-10 py-3 text-sm font-extrabold tracking-wide text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {about.badge}
                  </Link>
                </div>

                <div className="mx-auto mt-14 grid h-[420px] grid-cols-[140px_1fr_140px] gap-8">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous about us slide"
                    className="flex h-full w-full items-center justify-center bg-transparent text-white/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M14.5 6.5L9 12l5.5 5.5"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent">
                    {currentSlide?.src ? (
                      <img
                        src={currentSlide.src}
                        alt={currentSlide.alt ?? ""}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        loading="lazy"
                      />
                    ) : (
                      // Reserve space agar layout tetap stabil saat slide tanpa asset.
                      <div className="h-full w-full bg-transparent" />
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next about us slide"
                    className="flex h-full w-full items-center justify-center bg-transparent text-white/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.5 6.5L15 12l-5.5 5.5"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Mobile/tablet: 1 image besar + 3 thumbnail klik */}
              <div className="lg:hidden">
                <div className="text-center">
                  <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {about.title}
                  </h2>
                  <Link
                    to="/about-us"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#00adef] px-10 py-3 text-sm font-extrabold tracking-wide text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {about.badge}
                  </Link>
                </div>

                <div className="-mx-4 mt-8">
                  <div
                    className="w-full overflow-hidden bg-white"
                    style={
                      mobileAspect
                        ? { aspectRatio: `${mobileAspect.w} / ${mobileAspect.h}` }
                        : undefined
                    }
                  >
                    <div className="relative h-full w-full">
                      {currentMobileSlide?.src ? (
                        <img
                          src={currentMobileSlide.src}
                          alt={currentMobileSlide.alt ?? ""}
                          className="absolute inset-0 h-full w-full object-contain object-center"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-full w-full bg-white" />
                      )}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-4 px-4">
                    {mobileImages.map((img, idx) => {
                      const active = idx === slideIndex;
                      return (
                        <button
                          key={`${img.src}-${idx}`}
                          type="button"
                          onClick={() => setSlideIndex(idx)}
                          aria-label={`Select about us image ${idx + 1}`}
                          className={[
                            "relative h-[90px] overflow-hidden bg-white",
                            active ? "ring-2 ring-[#00adef]" : "",
                          ].join(" ")}
                        >
                          {img.src ? (
                            <img
                              src={img.src}
                              alt={img.alt ?? ""}
                              className="absolute inset-0 h-full w-full object-cover object-center"
                              loading="lazy"
                            />
                          ) : (
                            <div className="h-full w-full bg-white" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Page variant (mobile): 1 image besar + 3 thumbnail klik */}
          {isPage ? (
            <div className="mt-10 lg:hidden">
              <div className="-mx-4">
                <div
                  className="w-full overflow-hidden bg-white"
                  style={
                    mobileAspect
                      ? { aspectRatio: `${mobileAspect.w} / ${mobileAspect.h}` }
                      : undefined
                  }
                >
                  <div className="relative h-full w-full">
                    {currentMobileSlide?.src ? (
                      <img
                        src={currentMobileSlide.src}
                        alt={currentMobileSlide.alt ?? ""}
                        className="absolute inset-0 h-full w-full object-contain object-center"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full bg-white" />
                    )}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 px-4">
                  {mobileImages.map((img, idx) => {
                    const active = idx === slideIndex;
                    return (
                      <button
                        key={`${img.src}-${idx}`}
                        type="button"
                        onClick={() => setSlideIndex(idx)}
                        aria-label={`Select about us image ${idx + 1}`}
                        className={[
                          "relative h-[90px] overflow-hidden bg-white",
                          active ? "ring-2 ring-[#00adef]" : "",
                        ].join(" ")}
                      >
                        {img.src ? (
                          <img
                            src={img.src}
                            alt={img.alt ?? ""}
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            loading="lazy"
                          />
                        ) : (
                          <div className="h-full w-full bg-white" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}

          {/* Hanya tampil untuk halaman About Us */}
          {showGallery && (
            <motion.div
              className="mt-10 hidden lg:block"
              initial={
                pageWrap
                  ? { opacity: 0, y: 14, scale: 0.99, filter: "blur(10px)" }
                  : undefined
              }
              animate={
                pageWrap
                  ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
                  : undefined
              }
              transition={
                pageWrap
                  ? { delay: 0.26, duration: 0.75, ease: [0.22, 1, 0.36, 1] }
                  : undefined
              }
              style={{
                willChange: pageWrap ? "transform, opacity, filter" : undefined,
              }}
            >
              <div className="mx-auto grid h-[420px] grid-cols-[140px_1fr_140px] gap-8">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous about us slide"
                  className="flex h-full w-full items-center justify-center bg-transparent text-white/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M14.5 6.5L9 12l5.5 5.5"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent">
                  {currentSlide?.src ? (
                    <img
                      src={currentSlide.src}
                      alt={currentSlide.alt ?? ""}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-transparent" />
                  )}
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next about us slide"
                  className="flex h-full w-full items-center justify-center bg-transparent text-white/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.5 6.5L15 12l-5.5 5.5"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}

          {/* Mobile layout lama dihapus, karena sekarang pakai 1 gambar besar + 3 thumbnail klik */}

          {showGallery ? (
            <motion.div
              className="mx-auto mt-6 max-w-5xl"
              initial={pageWrap ? { opacity: 0, y: 16 } : undefined}
              animate={pageWrap ? { opacity: 1, y: 0 } : undefined}
              transition={
                pageWrap
                  ? { delay: 0.36, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                  : undefined
              }
              style={{ willChange: pageWrap ? "transform, opacity" : undefined }}
            >
              <div>
                <div className="h-full rounded-3xl bg-white/5 p-6 sm:p-8">
                  <div className="space-y-4 text-sm leading-relaxed text-white/75 sm:text-base [text-align:justify]">
                    {cardText.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  {cardBullets.length ? (
                    <ul className="mt-6 list-inside list-disc space-y-2 text-sm text-white/80 sm:text-base [text-align:justify]">
                      {cardBullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                  {cardTextAfterBullets.length ? (
                    <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/75 sm:text-base [text-align:justify]">
                      {cardTextAfterBullets.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-8">
                <div className="relative overflow-hidden rounded-3xl bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                  <img
                    src={images[4]?.src}
                    alt={images[4]?.alt ?? ""}
                    className="h-72 w-full object-cover sm:h-80 lg:h-[420px]"
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
