import type { PropsWithChildren } from 'react'
import { Reveal } from './Reveal'

export function Section({
  id,
  className = '',
  children,
}: PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={`px-4 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  )
}

