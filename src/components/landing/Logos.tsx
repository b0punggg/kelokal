import { landingContent } from "../../content/landing";
import { Section } from "./Section";

export function Logos() {
  return (
    <Section className="py-12">
      <p className="text-center text-sm font-medium text-slate-600">
        {landingContent.logos.title}
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {landingContent.logos.items.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
          >
            {name}
          </div>
        ))}
      </div>
    </Section>
  );
}
