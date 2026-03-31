import { landingContent } from "../../content/landing";

export function StatsBar() {
  return (
    <section className="-mt-16 px-4 pb-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-5 shadow-lg backdrop-blur">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {landingContent.statsBar.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1 text-xs font-semibold tracking-wide text-white/70">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

