import { landingContent } from '../../content/landing'
import { Section } from './Section'

export function CTA() {
  return (
    <Section className="bg-slate-50">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-tr from-indigo-50 via-white to-emerald-50 p-8 sm:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {landingContent.cta.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">{landingContent.cta.subtitle}</p>
          <div className="mt-7">
            <a
              href={landingContent.cta.button.href}
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
            >
              {landingContent.cta.button.label}
            </a>
          </div>
          <p className="mt-3 text-xs font-medium text-slate-600">{landingContent.cta.note}</p>
        </div>
      </div>
    </Section>
  )
}

