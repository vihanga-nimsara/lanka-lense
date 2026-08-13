import Link from "next/link";
import { destinations } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold">Lanka</span>
              <span className="font-serif text-2xl font-bold text-teal">Lense</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Real stories and videos from travellers who fell in love with the teardrop of India.
              Our guides. Your stories.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">Top Destinations</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {destinations.slice(0, 6).map((d) => (
                <li key={d.slug}>
                  <Link href={`/destinations/${d.slug}`} className="transition-colors hover:text-teal">
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link href="/destinations" className="transition-colors hover:text-teal">All Destinations</Link></li>
              <li><Link href="/videos" className="transition-colors hover:text-teal">Travel Videos</Link></li>
              <li><Link href="/experiences" className="transition-colors hover:text-teal">Experiences & Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">About</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>About Lanka Lense</li>
              <li>Contribute a Story</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">
            © 2026 Lanka Lense. Made for travellers, by travellers. All photos via Unsplash, videos via YouTube.
          </p>
        </div>
      </div>
    </footer>
  );
}
