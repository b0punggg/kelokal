import { landingContent } from '../../content/landing'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-semibold text-slate-900">{landingContent.brand}</div>
          <div className="mt-1 text-xs text-slate-600">{landingContent.footer.copyright}</div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Footer">
          {landingContent.footer.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded text-sm font-medium text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

