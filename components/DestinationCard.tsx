import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/lib/data";

export default function DestinationCard({ slug }: { slug: string }) {
  const d = destinations.find((x) => x.slug === slug);
  if (!d) return null;

  return (
    <Link
      href={`/destinations/${d.slug}`}
      className="group relative block overflow-hidden rounded-xl bg-sand"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={d.image}
          alt={d.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">{d.region}</p>
          <h3 className="mt-1 font-serif text-2xl font-bold text-white">{d.name}</h3>
          <p className="mt-1 text-sm leading-snug text-white/85">{d.tagline}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-teal">
            Explore <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
