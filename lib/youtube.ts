const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

export type YTVideo = {
  id: string;
  title: string;
  channel: string;
  description: string;
  duration: string;
  thumbnail: string;
  category: string;
  publishedAt: string;
  viewCount: string;
};

type YTSearchItem = {
  id?: { videoId?: string };
  snippet?: {
    title?: string;
    channelTitle?: string;
    description?: string;
    publishedAt?: string;
  };
};

type YTVideoItem = {
  id?: string;
  contentDetails?: { duration?: string };
  statistics?: { viewCount?: string };
};

function isoToDuration(iso: string): string {
  const m = iso.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!m) return "";
  const h = m[1] ? parseInt(m[1]) : 0;
  const min = m[2] ? parseInt(m[2]) : 0;
  const sec = m[3] ? parseInt(m[3]) : 0;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return h > 0 ? `${h}:${pad(min)}:${pad(sec)}` : `${min}:${pad(sec)}`;
}

function ytThumbnail(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function hasYoutubeKey() {
  return Boolean(YOUTUBE_API_KEY);
}

export async function searchVlogs(
  query = "sri lanka travel vlog",
  maxResults = 12
): Promise<YTVideo[]> {
  if (!YOUTUBE_API_KEY) return [];

  const searchUrl =
    `${YOUTUBE_API_BASE}/search?part=snippet&type=video&q=${encodeURIComponent(query)}` +
    `&maxResults=${maxResults}&relevanceLanguage=en&key=${YOUTUBE_API_KEY}`;

  const searchRes = await fetch(searchUrl, { next: { revalidate: 3600 } });
  if (!searchRes.ok) return [];
  const searchData = (await searchRes.json()) as { items?: YTSearchItem[] };
  const items = searchData.items ?? [];

  const ids = items
    .map((i) => i?.id?.videoId)
    .filter((x): x is string => Boolean(x))
    .join(",");
  if (!ids) return [];

  const detailsUrl =
    `${YOUTUBE_API_BASE}/videos?part=snippet,contentDetails,statistics` +
    `&id=${ids}&key=${YOUTUBE_API_KEY}`;

  const detailsRes = await fetch(detailsUrl, { next: { revalidate: 3600 } });
  if (!detailsRes.ok) return [];

  const detailsData = (await detailsRes.json()) as { items?: YTVideoItem[] };
  const byId = new Map<string, YTVideoItem>();
  for (const d of detailsData.items ?? []) if (d.id) byId.set(d.id, d);

  return items
    .map((i) => {
      const id = i?.id?.videoId ?? "";
      const snippet = i?.snippet;
      const details = byId.get(id);
      if (!id || !snippet) return null;
      return {
        id,
        title: snippet.title ?? "Untitled",
        channel: snippet.channelTitle ?? "Unknown channel",
        description: (snippet.description ?? "").slice(0, 300),
        duration: isoToDuration(details?.contentDetails?.duration ?? ""),
        thumbnail: ytThumbnail(id),
        category: "Traveller Vlog",
        publishedAt: snippet.publishedAt ?? "",
        viewCount: details?.statistics?.viewCount ?? "",
      } as YTVideo;
    })
    .filter((v): v is YTVideo => v !== null);
}

export async function getVideoDetails(id: string): Promise<YTVideo | null> {
  if (!YOUTUBE_API_KEY) return null;

  const url =
    `${YOUTUBE_API_BASE}/videos?part=snippet,contentDetails,statistics` +
    `&id=${id}&key=${YOUTUBE_API_KEY}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const data = await res.json();
  const item = data.items?.[0];
  if (!item) return null;

  return {
    id,
    title: item.snippet?.title ?? "Untitled",
    channel: item.snippet?.channelTitle ?? "Unknown channel",
    description: item.snippet?.description ?? "",
    duration: isoToDuration(item.contentDetails?.duration ?? ""),
    thumbnail: ytThumbnail(id),
    category: "Traveller Vlog",
    publishedAt: item.snippet?.publishedAt ?? "",
    viewCount: item.statistics?.viewCount ?? "",
  };
}