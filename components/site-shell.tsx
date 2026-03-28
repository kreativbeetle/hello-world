import Link from 'next/link'
import { ReactNode } from 'react'

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/before-after-gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/request-estimate', label: 'Request Estimate' },
]

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
      <header className="border-b border-[var(--color-stone)] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="text-2xl font-semibold text-[var(--color-forest)]">
            Anderson Property Preservation
          </Link>
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap gap-3 text-sm md:gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="rounded px-2 py-1 hover:text-[var(--color-forest)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[var(--color-stone)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
          <p className="text-sm">© {new Date().getFullYear()} Anderson Property Preservation</p>
        </div>
      </footer>
    </div>
  )
}
