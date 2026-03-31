import { landingContent } from "../../content/landing";

export function News() {
  const items = landingContent.news.items;

  return (
    <section className="bg-[#ffffff] px-4 py-14">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold tracking-wide text-slate-900 sm:text-4xl">
          {landingContent.news.title}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.blogUrl}
              className="relative overflow-hidden rounded-none bg-none px-6 py-6 text-white"
            >
              <div className="mt-4 block">
                <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm">
                  <iframe
                    src={item.blogUrl}
                    title={item.title}
                    className="h-[280px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
