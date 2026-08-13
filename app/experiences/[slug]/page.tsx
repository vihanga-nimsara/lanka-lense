import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getExperience, getDestination, experiences, getVideo } from "@/lib/data";
import ExperienceCard from "@/components/ExperienceCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const e = getExperience(slug);
  if (!e) return {};
  return { title: e.title, description: e.excerpt };
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const e = getExperience(slug);
  if (!e) notFound();

  const dest = getDestination(e.destinationSlug);
  const video = e.videoId ? getVideo(e.videoId) : undefined;
  const more = experiences.filter((x) => x.slug !== e.slug).slice(0, 3);

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-teal">
          {e.author} · {e.date}
          {dest && (
            <>
              {" "}
              ·{" "}
              <Link href={`/destinations/${dest.slug}`} className="hover:underline">
                {dest.name}
              </Link>
            </>
          )}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">{e.title}</h1>
        <p className="mt-4 font-serif text-xl italic text-ink/70">{e.excerpt}</p>

        {video && (
          <div className="mt-8 overflow-hidden rounded-2xl shadow-lg ring-1 ring-ink/5">
            <div className="relative aspect-video bg-ink">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <p className="bg-ink px-4 py-3 text-sm text-white/80">
              Watch: <span className="font-semibold">{video.title}</span> — {video.channel}
            </p>
          </div>
        )}

        <div className="mt-8 space-y-6">
          {e.body.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6">
          <p className="text-sm text-ink/50">
            — {e.author}, writing about{" "}
            {dest ? (
              <Link href={`/destinations/${dest.slug}`} className="font-semibold text-teal hover:underline">
                {dest.name}
              </Link>
            ) : (
              "Sri Lanka"
            )}
          </p>
        </div>
      </article>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-2xl font-bold">More traveller experiences</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => (
              <ExperienceCard key={m.slug} slug={m.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
