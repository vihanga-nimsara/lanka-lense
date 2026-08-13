import Link from "next/link";
import Image from "next/image";
import { destinations, experiences } from "@/lib/data";
import { searchVlogs, hasYoutubeKey } from "@/lib/youtube";
import DestinationCard from "@/components/DestinationCard";
import VideoCard from "@/components/VideoCard";
import ExperienceCard from "@/components/ExperienceCard";

export const revalidate = 3600;

const heroImage =
  "https://images.unsplash.com/photo-1751247026229-518bfec9b5e6?fm=jpg&q=80&w=2400&auto=format&fit=crop";

export default async function Home() {
  let featured: Awaited<ReturnType<typeof searchVlogs>> = [];
  if (hasYoutubeKey()) {
    try {
      featured = await searchVlogs("sri lanka travel vlog", 3);
    } catch {
      featured = [];
    }
  }
  if (featured.length === 0) featured = [];
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[78vh] items-end">
        <Image src={heroImage} alt="Sigiriya Lion Rock at sunrise" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6">
          <p className="mb-3 inline-block rounded bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
            Sri Lanka · Traveller Stories
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-6xl">
            See Sri Lanka through the eyes of those who lived it
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            Sunrise over Sigiriya. The blue train through tea country. Whales off Mirissa. Real
            experiences and the videos that prove it — curated from travellers who&apos;ve been there.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/videos"
              className="rounded bg-coral px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-coral/90"
            >
              Watch Travel Videos
            </Link>
            <Link
              href="/destinations"
              className="rounded border-2 border-white/80 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-ink"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal">Destinations</p>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Where to go in Sri Lanka</h2>
          </div>
          <Link href="/destinations" className="text-sm font-bold text-coral transition-colors hover:text-coral/80">
            View all destinations →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {destinations.slice(0, 8).map((d) => (
            <DestinationCard key={d.slug} slug={d.slug} />
          ))}
        </div>
      </section>

      {/* TRENDING VIDEOS */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal">Watch</p>
              <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Trending travel videos</h2>
            </div>
            <Link href="/videos" className="text-sm font-bold text-coral transition-colors hover:text-coral/80">
              View all videos →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal">Stories</p>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Latest traveller experiences</h2>
          </div>
          <Link href="/experiences" className="text-sm font-bold text-coral transition-colors hover:text-coral/80">
            View all experiences →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.slice(0, 3).map((e) => (
            <ExperienceCard key={e.slug} slug={e.slug} />
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-teal">Lanka Lense Community</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-bold sm:text-4xl">
            Your story could be the next one travellers read
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Climbed the Lion Rock? Chased a whale in Mirissa? Share your experience and the video
            that captured it.
          </p>
          <Link
            href="/experiences"
            className="mt-8 inline-block rounded bg-coral px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-coral/90"
          >
            Share Your Story
          </Link>
        </div>
      </section>
    </>
  );
}
