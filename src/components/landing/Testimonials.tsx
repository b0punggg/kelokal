import { landingContent } from '../../content/landing'
import { Section } from './Section'

export function Testimonials() {
  return (
    <Section id="testimoni" className="scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {landingContent.testimonials.title}
        </h2>
        <p className="mt-3 text-base text-slate-600 sm:text-lg">
          {landingContent.testimonials.subtitle}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {landingContent.testimonials.items.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6">
            <blockquote className="text-sm leading-relaxed text-slate-700">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                {t.name.slice(0, 1).toUpperCase()}
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-600">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}

