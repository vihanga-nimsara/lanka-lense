import type { Metadata } from "next";
import { destinations } from "@/lib/data";
import DestinationCard from "@/components/DestinationCard";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore the best destinations in Sri Lanka — from Colombo to the tea country.",
};

export default function DestinationsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-teal">Destinations</p>
        <h1 className="mt-2 max-w-2xl font-serif text-4xl font-bold sm:text-5xl">
          Every corner of Sri Lanka, ready to explore
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          From the sacred highlands of Kandy to the whale-rich waters of Mirissa — pick a
          destination and dive into the stories and videos travellers have shared.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {destinations.map((d) => (
            <DestinationCard key={d.slug} slug={d.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
