import type { Metadata } from "next";
import { experiences } from "@/lib/data";
import ExperienceCard from "@/components/ExperienceCard";

export const metadata: Metadata = {
  title: "Traveller Experiences",
  description: "Read real stories from travellers in Sri Lanka — adventures, food, and moments.",
};

export default function ExperiencesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-teal">Stories</p>
        <h1 className="mt-2 max-w-2xl font-serif text-4xl font-bold sm:text-5xl">
          Experiences &amp; stories from the road
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          First-hand tales from travellers who lived them — sunrises, trains, whales, surf and
          home-cooked rice &amp; curry.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((e) => (
            <ExperienceCard key={e.slug} slug={e.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
