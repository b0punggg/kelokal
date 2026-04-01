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
              className="relative overflow-hidden rounded-none bg-none px-6 py-6"
            >
              <a
                href={item.blogUrl}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
              >
                <img
                  src={item.coverSrc}
                  alt={item.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="line-clamp-2 text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
