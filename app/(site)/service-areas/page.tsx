import Link from 'next/link'

const areas = [
  { href: '/service-areas/columbus-muscogee', label: 'Columbus / Muscogee' },
  { href: '/service-areas/harris-county-ga', label: 'Harris County, GA' },
  { href: '/service-areas/russell-county-al', label: 'Russell County, AL' },
]

export default function ServiceAreasPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <h1 className="text-4xl font-semibold">Service Areas</h1>
      <ul className="mt-8 space-y-3">
        {areas.map((area) => (
          <li key={area.href}>
            <Link href={area.href} className="text-[var(--color-forest)] underline">
              {area.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
