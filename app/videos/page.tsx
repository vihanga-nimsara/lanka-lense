import type { Metadata } from "next";
import { videos as curated, type Video } from "@/lib/data";
import { searchVlogs, hasYoutubeKey, type YTVideo } from "@/lib/youtube";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: "Travel Videos",
  description: "Watch Sri Lanka travel videos — full guides, itineraries, and coastal adventures.",
};

export const revalidate = 3600;

export default async function VideosPage() {
  let videos: (Video | YTVideo)[] = curated;
  let live = false;

  if (hasYoutubeKey()) {
    try {
      const results = await searchVlogs("sri lanka travel vlog", 12);
      if (results.length > 0) {
        videos = results;
        live = true;
      }
    } catch {
      // fall back to curated list on any API error
    }
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-teal">Videos</p>
        <h1 className="mt-2 max-w-2xl font-serif text-4xl font-bold sm:text-5xl">
          Watch Sri Lanka before you go
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          {live
            ? "Fresh traveller vlogs of Sri Lanka, straight from YouTube — the trains, the trails, the temples and the tides."
            : "Hand-picked travel videos that show the real Sri Lanka — the trains, the trails, the temples and the tides. Add a YOUTUBE_API_KEY to load live vlogs."}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>
    </>
  );
}