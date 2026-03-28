import Link from 'next/link'

export default function HomePage() {
  return (
    <section id="home-hero" className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-forest)]">Anderson Property Preservation</p>
      <h1 className="mt-3 text-5xl font-semibold leading-tight">Premium property cleanup and preservation services.</h1>
      <p className="mt-6 max-w-2xl text-lg text-black/75">
        Production scaffold is live with Next.js App Router, Tailwind tokens, and Payload-ready architecture.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/request-estimate" className="rounded-[var(--radius-card)] bg-[var(--color-forest)] px-6 py-3 text-white">
          Request Estimate
        </Link>
        <Link href="/services" className="rounded-[var(--radius-card)] border border-[var(--color-stone)] px-6 py-3">
          View Services
        </Link>
      </div>
    </section>
  )
}
