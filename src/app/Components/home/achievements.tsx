import Image from "next/image";
import Link from "next/link";
import achievementsImg from "@/assets/achievements.jpg";
import Reveal from "../reveal";

const achievements = [
  {
    title: "CAVA Women's Nations League",
    subtitle: "Central Asian Volleyball Association",
    result: "Champions",
    year: "2024",
  },
  {
    title: "South Asian Games",
    subtitle: "Volleyball — Men's & Women's",
    result: "Gold & Silver",
    year: "2023",
  },
  {
    title: "U-23 Asian Central Zone Championship",
    subtitle: "Men's Volleyball",
    result: "Runners-up",
    year: "2022",
  },
  {
    title: "National Volleyball Declaration",
    subtitle: "Government of Nepal",
    result: "National Sport",
    year: "2021",
  },
];

export default function Achievements() {
  return (
    <section className="w-full bg-[#064898] py-16 md:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#FDC539]">
            Honours
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
            Achievements
          </h2>

          <div className="mt-5 flex flex-col gap-6 md:mt-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-base leading-relaxed text-white/70 lg:text-base">
              Podium finishes and milestones that define Nepali volleyball on
              the regional stage.
            </p>
            <Link
              href="/achievements"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#FDC539] transition-colors hover:text-white"
            >
              All achievements
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>

        {/* Image + list */}
        <div className="mt-10 grid items-center gap-10 md:mt-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-3/2 w-full overflow-hidden">
            <Image
              src={achievementsImg}
              alt="Nepal women's national team lifting the CAVA Nations League trophy"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </Reveal>

          <ul className="border-t border-white/15">
            {achievements.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 120}
                className="flex flex-col gap-3 border-b border-white/15 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6 md:py-6"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold uppercase leading-tight text-white sm:text-2xl lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/60 sm:text-base">
                    {item.subtitle}
                  </p>
                </div>
                <div className="flex items-baseline gap-3 sm:shrink-0 sm:flex-col sm:items-end sm:gap-1">
                  <span className="font-display text-lg font-semibold uppercase text-[#FDC539] sm:text-xl">
                    {item.result}
                  </span>
                  <span className="text-sm text-white/60 sm:text-base">
                    {item.year}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
