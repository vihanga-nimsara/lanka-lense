import Link from "next/link";
import Image from "next/image";
import { videos, type Video } from "@/lib/data";
import type { YTVideo } from "@/lib/youtube";

type Props = {
  video: Video | YTVideo;
  large?: boolean;
};

export default function VideoCard({ video, large }: Props) {
  const related = videos.find((v) => v.id === video.id);

  return (
    <Link
      href={`/videos/${video.id}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-lg"
    >
      <div className="relative overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={480}
          height={270}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${large ? "aspect-video" : "aspect-video"}`}
        />
        {video.duration && (
          <span className="absolute bottom-3 right-3 rounded bg-ink/80 px-2 py-0.5 text-xs font-semibold text-white">
            {video.duration}
          </span>
        )}
        {video.category && (
          <span className="absolute left-3 top-3 rounded bg-coral px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
            {video.category}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3
          className={`font-serif font-bold text-ink transition-colors group-hover:text-teal ${
            large ? "text-xl" : "text-lg"
          }`}
        >
          {video.title}
        </h3>
        <p className="mt-2 text-sm text-ink/60">
          <span className="font-semibold text-ink/80">{video.channel}</span>
          {video.description ? ` — ${video.description.slice(0, 120)}…` : ""}
        </p>
        {related && <p className="mt-2 text-xs font-semibold text-teal">{related.category}</p>}
      </div>
    </Link>
  );
}