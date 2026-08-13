import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getVideo, getDestination, videos } from "@/lib/data";
import { getVideoDetails, searchVlogs, hasYoutubeKey, type YTVideo } from "@/lib/youtube";
import VideoCard from "@/components/VideoCard";

type Props = { params: Promise<{ id: string }> };
type AnyVideo = (typeof videos)[number] | YTVideo;

export function generateStaticParams() {
  return videos.map((v) => ({ id: v.id }));
}

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const v = getVideo(id) ?? (hasYoutubeKey() ? await getVideoDetails(id) : null);
  if (!v) return {};
  return { title: v.title, description: v.description.slice(0, 160) };
}

export default async function VideoPage({ params }: Props) {
  const { id } = await params;
  let video: AnyVideo | null = getVideo(id) ?? null;

  if (!video && hasYoutubeKey()) {
    try {
      video = await getVideoDetails(id);
    } catch {
      video = null;
    }
  }
  if (!video) notFound();

  const dest = video ? getDestination(getDestSlug(video)) : undefined;
  let related: AnyVideo[] = [];

  if (getVideo(id)) {
    related = videos.filter((x) => x.id !== id).slice(0, 3);
  } else if (hasYoutubeKey()) {
    try {
      const results = await searchVlogs("sri lanka travel vlog", 6);
      related = results.filter((x) => x.id !== id).slice(0, 3);
    } catch {
      related = [];
    }
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Link
          href="/videos"
          className="text-sm font-bold text-coral transition-colors hover:text-coral/80"
        >
          ← All videos
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-ink/5">
              <div className="relative aspect-video bg-ink">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal">
                {video.category} {video.duration ? `· ${video.duration}` : ""}
              </p>
              <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">{video.title}</h1>
              <p className="mt-2 font-semibold text-ink/80">
                by {video.channel}
                {dest && (
                  <Link href={`/destinations/${dest.slug}`} className="ml-2 text-teal hover:underline">
                    · {dest.name}
                  </Link>
                )}
              </p>
              <p className="mt-4 leading-relaxed text-ink/75">{video.description}</p>
            </div>
          </div>

          <aside>
            <h2 className="font-serif text-2xl font-bold">Related videos</h2>
            <div className="mt-4 space-y-4">
              {related.map((rv) => (
                <VideoCard key={rv.id} video={rv} />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function getDestSlug(video: AnyVideo): string {
  if ("destinationSlug" in video && video.destinationSlug) return video.destinationSlug;
  return "tea-country";
}