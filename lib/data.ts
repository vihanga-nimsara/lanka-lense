export type Destination = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  bestTime: string;
  howToGet: string;
};

export type Video = {
  id: string;
  title: string;
  channel: string;
  description: string;
  duration: string;
  category: string;
  destinationSlug: string;
  thumbnail: string;
};

export type Experience = {
  slug: string;
  title: string;
  author: string;
  date: string;
  destinationSlug: string;
  excerpt: string;
  body: string[];
  videoId?: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?fm=jpg&q=80&w=1600&auto=format&fit=crop`;

export const destinations: Destination[] = [
  {
    slug: "colombo",
    name: "Colombo",
    region: "Western Province",
    tagline: "Sri Lanka's buzzing capital where colonial charm meets skyscrapers",
    description:
      "Sri Lanka's commercial capital is a whirlwind of tuk-tuks, street food, colonial-era buildings and glistening skyscrapers. Wander the lanes of Pettah Market, catch the sunset from the Lotus Tower and duck into the serene Gangaramaya Temple before a fresh seafood dinner in Galle Face Green.",
    image: img("photo-1742277295420-650b9134086a"),
    highlights: ["Gangaramaya Temple", "Lotus Tower", "Pettah Market", "Galle Face Green"],
    bestTime: "January to April, when the west coast stays dry.",
    howToGet: "Fly into Bandaranaike International Airport (CMB), 35km north of the city centre.",
  },
  {
    slug: "sigiriya",
    name: "Sigiriya",
    region: "Central Province",
    tagline: "Climb the 5th-century Lion Rock fortress above the jungle",
    description:
      "The 'Lion Rock' rises 200m above the surrounding plains — an ancient palace-fortress with surviving frescoes, water gardens and breathtaking views. For the classic shot, hike Pidurangala Rock at sunrise and watch the fortress glow golden across the valley.",
    image: img("photo-1751247026229-518bfec9b5e6"),
    highlights: ["Lion Rock fortress", "Pidurangala sunrise", "Sigiriya frescoes"],
    bestTime: "Visit in the early morning to beat the heat and the crowds.",
    howToGet: "A 4-hour drive from Colombo; the nearest rail town is Dambulla.",
  },
  {
    slug: "kandy",
    name: "Kandy",
    region: "Central Province",
    tagline: "The sacred hill capital that hugs a glittering lake",
    description:
      "Surrounded by misty green hills and the last kingdom of Sri Lanka's kings, Kandy is the island's spiritual heart. Watch the nightly ceremonies at the Temple of the Sacred Tooth Relic, stroll the Kandy Lake and get lost in the colourful bazaar below the palace.",
    image: img("photo-1749528744900-320f05d4317a"),
    highlights: ["Temple of the Tooth", "Kandy Lake", "Kandy Esala Perahera", "Royal Botanical Gardens"],
    bestTime: "The Kandy Esala Perahera festival dazzles in July/August.",
    howToGet: "A 3-hour train or drive from Colombo through rolling hills.",
  },
  {
    slug: "ella",
    name: "Ella",
    region: "Uva Province",
    tagline: "The laid-back hill town of tea, trains and towering peaks",
    description:
      "This mellow mountain town is backpacker heaven. Hike Little Adam's Peak for sunrise, chase waterfalls along the Ella Rock trail and — if you time it right — catch the famous blue train rolling over the Nine Arches Bridge, a stone viaduct buried in jungle.",
    image: img("photo-1770839012309-1a2cddff696e"),
    highlights: ["Nine Arches Bridge", "Little Adam's Peak", "Ella Rock", "Ravana Falls"],
    bestTime: "March to May, with the clearest mountain skies.",
    howToGet: "The scenic Kandy–Ella train ride is itself a highlight.",
  },
  {
    slug: "galle",
    name: "Galle",
    region: "Southern Province",
    tagline: "Wander a 400-year-old Dutch fort by the Indian Ocean",
    description:
      "Inside the UNESCO-listed Galle Fort, cobblestone lanes wind past Dutch-colonial villas, galleries, cafes and the lighthouse on the ramparts. Beyond the walls, the south coast unfolds into golden beaches, stilt fishermen and some of Asia's best surf breaks.",
    image: img("photo-1743614887896-c0cef1e559db"),
    highlights: ["Galle Fort ramparts", "Dutch Museum", "Lighthouse", "Unawatuna Beach"],
    bestTime: "November to April for dry, sunny days.",
    howToGet: "A 2.5-hour train ride from Colombo hugging the coast.",
  },
  {
    slug: "mirissa",
    name: "Mirissa & the South Coast",
    region: "Southern Province",
    tagline: "Whale watching, beach bars and palm-fringed coves",
    description:
      "One of Sri Lanka's most beautiful beaches, Mirissa's crescent bay is framed by coconut palms and a famous coconut-tree hill. Book a whale-watching boat at dawn, learn to surf in Weligama or simply sip king coconuts as the sun melts into the sea.",
    image: img("photo-1776776236588-bd5630bc86b8"),
    highlights: ["Whale watching", "Coconut Tree Hill", "Surfing in Weligama", "Parrot Rock"],
    bestTime: "Blue whales pass by from November to April.",
    howToGet: "A 3-hour coastal train or bus from Galle.",
  },
  {
    slug: "tea-country",
    name: "Tea Country & Nuwara Eliya",
    region: "Central Highlands",
    tagline: "Emerald plantations, cool mist and the world's finest Ceylon tea",
    description:
      "Rolling green hills carpeted in tea stretch as far as the eye can see. Tour a working tea factory, sample fresh infusions at the source and sleep in a colonial-era guesthouse in 'Little England' Nuwara Eliya, a town that feels lifted straight from the English countryside.",
    image: img("photo-1742286087572-937f08b947b8"),
    highlights: ["Tea factory tours", "Nuwara Eliya town", "Gregory Lake", "Horton Plains"],
    bestTime: "The tea country is cool all year; March–May is driest.",
    howToGet: "Reachable by the famous Nanu Oya–Ella train line.",
  },
  {
    slug: "anuradhapura",
    name: "Anuradhapura",
    region: "North Central Province",
    tagline: "Marvel at ancient stupas that have stood for 2,000 years",
    description:
      "One of the world's great ancient cities, Anuradhapura's colossal white stupas and sacred Bodhi tree draw pilgrims from across the globe. Rent a bicycle and pedal between towering dagobas, monasteries and shimmering bathing pools of the first Sinhalese kingdom.",
    image: img("photo-1663403764732-9575781f7a7b"),
    highlights: ["Ruwanwelisaya stupa", "Sri Maha Bodhi tree", "Jetavanaramaya", "Isurumuniya"],
    bestTime: "October to April, when the north is at its driest.",
    howToGet: "A 4-hour drive from Colombo via the A9 highway.",
  },
  {
    slug: "polonnaruwa",
    name: "Polonnaruwa",
    region: "North Central Province",
    tagline: "Ride past the ruined palaces of a medieval kingdom",
    description:
      "The well-preserved medieval capital of the Sinhalese kings is a UNESCO site best explored by bicycle. Cruise past the Gal Vihara's giant carved Buddhas, the Royal Palace ruins and the ancient bathing pools that still hold water after 800 years.",
    image: img("photo-1660350624336-82672f9be026"),
    highlights: ["Gal Vihara Buddhas", "Royal Palace", "Parakrama Samudra", "Polonnaruwa ruins"],
    bestTime: "Visit from sunrise to stay ahead of the heat.",
    howToGet: "A 3-hour drive from Dambulla or 5 hours from Colombo.",
  },
];

export const videos: Video[] = [
  {
    id: "91HL5tjTIeQ",
    title: "Why Sri Lanka Should Be Your Next Trip (Full Travel Guide)",
    channel: "Chews to Explore",
    description:
      "The ultimate Sri Lanka travel vlog — epic hikes at Sigiriya and Pidurangala, tea plantations, waterfalls, temples, local food and the southern coast beaches. Real costs, transport tips, unique stays and must-do experiences to plan your own itinerary with confidence.",
    duration: "48:36",
    category: "Full Travel Guide",
    destinationSlug: "tea-country",
    thumbnail: "https://i.ytimg.com/vi/91HL5tjTIeQ/hqdefault.jpg",
  },
  {
    id: "ciedIBH5P70",
    title: "Sri Lanka: Ancient Temples, Tea Hills & Paradise Beaches",
    channel: "Daniela Zavala",
    description:
      "A solo-travel film through Dambulla Cave Temple, the Sigiriya fortress, Kandy's Temple of the Tooth, Nuwara Eliya's tea country and the golden beaches of Ambalangoda. First-person stories of cooking with a local family, riding the mountain train and the kindness of strangers.",
    duration: "18:22",
    category: "Solo Travel Film",
    destinationSlug: "kandy",
    thumbnail: "https://i.ytimg.com/vi/ciedIBH5P70/hqdefault.jpg",
  },
  {
    id: "rKVbHJvzdmc",
    title: "Ultimate Sri Lanka Travel Guide: Colombo, Kandy & the Coast",
    channel: "Riding with the Ranas",
    description:
      "Over two weeks on the island, this couple packs in the capital, the sacred city of Kandy, Udawalawe safaris, Mirissa beaches and Negombo seafood. Includes rice-and-curry breakdowns, tuk-tuk stories and honest first impressions of the 'teardrop of India'.",
    duration: "27:05",
    category: "Travel Guide",
    destinationSlug: "colombo",
    thumbnail: "https://i.ytimg.com/vi/rKVbHJvzdmc/hqdefault.jpg",
  },
  {
    id: "YVLI5OW14KM",
    title: "Sri Lanka Itinerary: 14 Days of Trains, Safaris & Beaches",
    channel: "PindropandHop",
    description:
      "A complete 14-day route across the best of the island — Sigiriya, the Kandy–Ella train, Udawalawe and Yala safaris, and the south coast beaches of Mirissa and Unawatuna. Every stop pinned to a map with honest tips on transport, drivers and where to stay.",
    duration: "18:43",
    category: "Itinerary",
    destinationSlug: "ella",
    thumbnail: "https://i.ytimg.com/vi/YVLI5OW14KM/hqdefault.jpg",
  },
  {
    id: "0yVQ5Nyb3RU",
    title: "Ultimate South Coast Guide: Weligama Surf, Mirissa & Ahangama",
    channel: "Wanderlust Explorer",
    description:
      "Everything on Sri Lanka's south coast — where to stay, eat and what not to miss. Surf lessons in Weligama, a Bentota river safari, sunset at Mirissa's Coconut Tree Hill and a calm evening on Ahangama beach, plus a full room tour of a cliff-top hotel.",
    duration: "21:17",
    category: "Coastal Guide",
    destinationSlug: "mirissa",
    thumbnail: "https://i.ytimg.com/vi/0yVQ5Nyb3RU/hqdefault.jpg",
  },
  {
    id: "yTPjPIb-CcY",
    title: "Everything You Need to Know Before Visiting Sri Lanka",
    channel: "Rhett and Claire",
    description:
      "Three weeks on the island distilled into one practical guide — entry requirements and visas, how to get around, daily budgets, accommodation, what to pack and safety tips. The perfect pre-trip watch before your first day in Sri Lanka.",
    duration: "33:41",
    category: "Travel Tips",
    destinationSlug: "colombo",
    thumbnail: "https://i.ytimg.com/vi/yTPjPIb-CcY/hqdefault.jpg",
  },
];

export const experiences: Experience[] = [
  {
    slug: "sunrise-at-pidurangala",
    title: "Watching the sun rise over the Lion Rock",
    author: "Maya Thompson",
    date: "March 2026",
    destinationSlug: "sigiriya",
    excerpt:
      "By 5am I was stumbling up a boulder-strewn hillside in the dark — and it was the best decision of my whole trip.",
    body: [
      "There's a moment in Sri Lanka that I replay constantly: clinging to a bare rock with a hundred other travellers, all silent, all facing east, as the sky above Sigiriya turned peach and gold. We had started the climb at 5am, torches lighting the hand-carved steps, a friendly tuk-tuk driver named Nuwan waiting for us back at the trailhead.",
      "Pidurangala's summit is a huge flat boulder that overlooks the Lion Rock across a green valley. As the sun crested the horizon, the fortress glowed amber, mist pooled in the jungle below, and a group of Buddhist monks on a nearby ledge began to chant. Nobody reached for their phone. It felt too sacred for that.",
      "The climb down is tougher than the way up — wear real shoes, not sandals, and carry water. But I promise, if you only see one sunrise in Sri Lanka, make it this one. You'll carry it home with you.",
    ],
  },
  {
    slug: "blue-train-ella",
    title: "The famous blue train to Ella, hanging out the door",
    author: "Jonas Weber",
    date: "February 2026",
    destinationSlug: "ella",
    excerpt:
      "Legs dangling from the open carriage door, tea country rushing past at 40km/h — pure, unscripted joy.",
    body: [
      "Everyone told me to do the Kandy–Ella train, and everyone was right. I booked second class a week ahead (do this online, it sells out), grabbed a window seat on the right side, and for six hours watched the world roll past — tea pickers with baskets on their backs, monkeys on signal posts, waterfalls crashing beside the track.",
      "The highlight came on the final stretch. The carriage door slid open and there was barely any floor left — just the green rush of the valley and the wind. The nine arches bridge appeared round the bend and the whole carriage cheered. We passed over it so slowly it felt like the train was posing for us.",
      "A word of advice: the platform at Demodara is where locals say the real magic happens. Wait for the train to loop back on itself while you stand below the arch. I've got the photo on my wall now.",
    ],
    videoId: "YVLI5OW14KM",
  },
  {
    slug: "whale-watching-mirissa",
    title: "A humpback, a rainbow and a very wet backpack",
    author: "Amara Silva",
    date: "January 2026",
    destinationSlug: "mirissa",
    excerpt:
      "Blue whales, spinner dolphins and a spray of salt water that ruined my camera — worth every rupee.",
    body: [
      "I have never been so seasick and so happy at the same time. The whale-watching boats leave Mirissa harbour at 6am, all of them racing to the same patch of ocean where the deep channel meets the shallows. For two hours we saw nothing but open water.",
      "Then someone screamed. A blue whale — the largest animal that has ever lived — surfaced twenty metres from the bow, its blowhole erupting like a fountain in the morning light. It sounded, dived, and fluked right beside us, an arched tail the size of a small car. The captain cut the engine and the whole boat just breathed.",
      "On the way back, spinner dolphins danced alongside, spinning out of the water in perfect pirouettes. I was soaked, sunburnt and my camera had given up, but I didn't care. It's one of those mornings you tell everyone about — and I'm telling you now.",
    ],
    videoId: "0yVQ5Nyb3RU",
  },
  {
    slug: "rice-and-curry-in-a-village-home",
    title: "Learning to cook rice and curry in a village home",
    author: "Freya Lindqvist",
    date: "December 2025",
    destinationSlug: "anuradhapura",
    excerpt:
      "A grandmother, a clay pot, and the spiciest lesson of my life — I left with a full belly and a family.",
    body: [
      "We found the cooking class through our homestay in Anuradhapura — a small house with chickens scratching in the yard and a grandmother named Aunty Kamala who ran the kitchen like a conductor runs an orchestra. We peeled, we pounded, we ground spices by hand on a stone slab.",
      "Two hours later, six dishes covered the table: dhal cooked in coconut milk, chicken curry with fresh pandan, sambol that brought tears to my eyes (mine, not hers), and warm pol roti straight off the griddle. Aunty Kamala watched us eat with the proud smile of a woman who has fed generations.",
      "I keep the recipe card she wrote for me in my passport, pressed between the pages. It's not just a meal — it's a lesson in the Sri Lankan way: food is love, and love is shared.",
    ],
  },
  {
    slug: "surfing-weligama-bay",
    title: "Catching my first wave in Weligama Bay",
    author: "Leo Park",
    date: "November 2025",
    destinationSlug: "mirissa",
    excerpt:
      "Twenty falls, one wobbling stand-up and a cheer from a retiree in the water — beginner surfing done right.",
    body: [
      "Weligama means 'sand village', and the bay is basically a giant shallow pool built for first-timers. For $20 I got a board, a wetsuit and a Sri Lankan coach named Ruwan who had the patience of a saint. 'Stand up like you're surprised,' he kept saying. 'Like you just saw a ghost.'",
      "For two hours I fell — off the board, into the board, and once spectacularly over the front. Then, on my twenty-first try, it clicked. I stood, wobbled, and rode the foam all the way to the beach while a retired couple on the sand gave me a standing ovation.",
      "By day three I was catching green waves, and Ruwan had invited me to his family's Sunday lunch. That's the thing about the south coast — it teaches you to surf and then it feeds you. Beginner surfers, go to Weligama. You'll thank me.",
    ],
    videoId: "0yVQ5Nyb3RU",
  },
  {
    slug: "evening-in-galle-fort",
    title: "A slow evening inside Galle Fort",
    author: "Charlotte Beaumont",
    date: "October 2025",
    destinationSlug: "galle",
    excerpt:
      "Cobbled lanes, a lighthouse at dusk, and the best street food of my trip — Galle Fort is pure magic.",
    body: [
      "Galle Fort has no agenda, and that's the point. I spent an afternoon wandering the ramparts where 400-year-old cannons still point out to sea, popping into galleries that sell batik and antiques, and losing myself in the tangle of pastel-painted lanes.",
      "As the light turned golden, I joined the walkers circling the bastions while kites soared overhead. The lighthouse blinked on, and from the top of the old Dutch watchtower the whole coast glowed pink. Then I found the street food stalls by the mosque — kottu roti, chopped and fried with drumsticks, eggs and spice, eaten from a tin plate while leaning on a wall.",
      "Some places you visit. Galle is a place you live in for a few days. Slow down, don't plan too much, and let the fort do the guiding.",
    ],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export function getVideo(id: string) {
  return videos.find((v) => v.id === id);
}

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug);
}

export function videosByDestination(slug: string) {
  return videos.filter((v) => v.destinationSlug === slug);
}

export function experiencesByDestination(slug: string) {
  return experiences.filter((e) => e.destinationSlug === slug);
}
