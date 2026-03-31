import { landingContent } from '../../content/landing'
import { Section } from './Section'

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export function Pricing() {
  return (
    <Section id="harga" className="scroll-mt-24 bg-slate-50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {landingContent.pricing.title}
        </h2>
        <p className="mt-3 text-base text-slate-600 sm:text-lg">{landingContent.pricing.subtitle}</p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {landingContent.pricing.plans.map((p) => (
          <div
            key={p.name}
            className={cx(
              'relative rounded-2xl border bg-white p-6',
              p.highlighted ? 'border-indigo-200 shadow-sm' : 'border-slate-200',
            )}
          >
            {p.highlighted ? (
              <div className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                Paling populer
              </div>
            ) : null}

            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
              <div className="text-sm font-semibold text-slate-900">{p.price}</div>
            </div>
            <p className="mt-2 text-sm text-slate-600">{p.description}</p>

            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-600" aria-hidden>
                    ✓
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={cx(
                'mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2',
                p.highlighted
                  ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                  : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50',
              )}
            >
              {p.ctaLabel}
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}

