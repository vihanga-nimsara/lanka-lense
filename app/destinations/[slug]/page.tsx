import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  destinations,
  getDestination,
  videosByDestination,
  experiencesByDestination,
} from "@/lib/data";
import VideoCard from "@/components/VideoCard";
import ExperienceCard from "@/components/ExperienceCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return { title: d.name, description: d.tagline };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const destVideos = videosByDestination(d.slug);
  const destExperiences = experiencesByDestination(d.slug);

  return (
    <>
      <section className="relative flex min-h-[60vh] items-end">
        <Image src={d.image} alt={d.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-32 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal">{d.region}</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">{d.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/85">{d.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold">About {d.name}</h2>
            <p className="mt-4 leading-relaxed text-ink/75">{d.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-sand p-5">
                <h3 className="font-serif text-lg font-bold text-teal">Best time to visit</h3>
                <p className="mt-2 text-sm text-ink/75">{d.bestTime}</p>
              </div>
              <div className="rounded-xl bg-sand p-5">
                <h3 className="font-serif text-lg font-bold text-teal">Getting there</h3>
                <p className="mt-2 text-sm text-ink/75">{d.howToGet}</p>
              </div>
            </div>

            <h3 className="mt-10 font-serif text-2xl font-bold">Top highlights</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {d.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-ink/80">
                  <span className="text-teal">✓</span> {h}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl bg-ink p-6 text-white">
            <h3 className="font-serif text-xl font-bold">Quick facts</h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-bold uppercase tracking-wider text-white/50">Region</dt>
                <dd className="mt-1">{d.region}</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-wider text-white/50">Traveller videos</dt>
                <dd className="mt-1">{destVideos.length} video{destVideos.length === 1 ? "" : "s"}</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-wider text-white/50">Experiences</dt>
                <dd className="mt-1">{destExperiences.length} stor{destExperiences.length === 1 ? "y" : "ies"}</dd>
              </div>
            </dl>
            <Link
              href="/destinations"
              className="mt-6 inline-block text-sm font-bold text-teal transition-colors hover:text-white"
            >
              ← All destinations
            </Link>
          </aside>
        </div>
      </section>

      {destVideos.length > 0 && (
        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <h2 className="font-serif text-2xl font-bold">Videos from {d.name}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {destVideos.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          </div>
        </section>
      )}

      {destExperiences.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-2xl font-bold">Experiences in {d.name}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destExperiences.map((e) => (
              <ExperienceCard key={e.slug} slug={e.slug} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}