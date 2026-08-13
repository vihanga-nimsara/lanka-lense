import Link from "next/link";
import { experiences } from "@/lib/data";

export default function ExperienceCard({ slug }: { slug: string }) {
  const e = experiences.find((x) => x.slug === slug);
  if (!e) return null;

  return (
    <Link
      href={`/experiences/${e.slug}`}
      className="group flex flex-col rounded-xl border border-ink/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-teal">
        {e.author} · {e.date}
      </p>
      <h3 className="mt-2 font-serif text-xl font-bold text-ink transition-colors group-hover:text-teal">
        {e.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">{e.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal">
        Read story <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
