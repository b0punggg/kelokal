import { landingContent } from '../../content/landing'
import { Section } from './Section'

export function FAQ() {
  return (
    <Section id="faq" className="scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {landingContent.faq.title}
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {landingContent.faq.items.map((item) => (
          <details key={item.question} className="group px-6 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded-md">
              <span>{item.question}</span>
              <span
                aria-hidden
                className="text-slate-500 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</div>
          </details>
        ))}
      </div>
    </Section>
  )
}

