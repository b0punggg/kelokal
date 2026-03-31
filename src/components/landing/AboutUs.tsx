import { landingContent } from "../../content/landing";

export function AboutUs() {
  const about = landingContent.aboutUs;

  return (
    <section id="about-us" className="px-4 py-16 sm:py-10">
      <div className="mx-auto w-full max-w-full">
        <div className="rounded-[0px] bg-black px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                {about.title}
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                {about.description}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl bg-white/5">
                <img
                  src={about.images[0]?.src}
                  alt={about.images[0]?.alt ?? ""}
                  className="h-72 w-full object-cover sm:h-80"
                  loading="lazy"
                />
                <button className="absolute bottom-4 left-4 rounded-xl bg-[#00adef] px-4 py-3 text-xs font-extrabold tracking-wide text-slate-900">
                  {about.badge}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-2">
              <div className="relative overflow-hidden rounded-3xl bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                <img
                  src={about.images[1]?.src}
                  alt={about.images[1]?.alt ?? ""}
                  className="h-72 w-full object-cover sm:h-80"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
