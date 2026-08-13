import Link from "next/link";

const links = [
  { href: "/destinations", label: "Destinations" },
  { href: "/videos", label: "Videos" },
  { href: "/experiences", label: "Experiences" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="font-serif text-2xl font-bold tracking-tight text-ink">Lanka</span>
          <span className="font-serif text-2xl font-bold text-teal">Lense</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/80 transition-colors hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/experiences"
            className="hidden rounded bg-coral px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-coral/90 sm:block"
          >
            Share a Story
          </Link>
          <Link
            href="/destinations"
            className="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
          >
            Explore
          </Link>
        </div>
      </div>

      <nav className="border-t border-ink/5 md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-around py-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-ink/80">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
