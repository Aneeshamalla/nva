import Image from "next/image";
import achievementsImg from "@/assets/achievements.jpg";
import Reveal from "../reveal";

const achievements = [
  {
    year: "2024",
    title: "CAVA Women's Nations League",
    subtitle: "Central Asian Volleyball Association",
    description:
      "Nepal's women's team won the regional title on home soil in Kathmandu, sweeping the final in straight sets.",
    result: "Champions",
  },
  {
    year: "2023",
    title: "South Asian Games",
    subtitle: "Volleyball — Men's & Women's",
    description:
      "The men's team took gold for the first time in two decades while the women's team finished as silver medallists.",
    result: "Gold & Silver",
  },
  {
    year: "2022",
    title: "U-23 Asian Central Zone Championship",
    subtitle: "Men's Volleyball",
    description:
      "A young Nepali squad reached the final in Dhaka, confirming the strength of the junior pathway.",
    result: "Runners-up",
  },
  {
    year: "2021",
    title: "National Volleyball Declaration",
    subtitle: "Government of Nepal",
    description:
      "Volleyball was officially recognised as the national sport of Nepal by the Government of Nepal.",
    result: "National Sport",
  },
];

export default function AchievementsList() {
  return (
    <section className="w-full bg-[#F9F8F5] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Image */}
        <Reveal className="relative aspect-video w-full overflow-hidden lg:aspect-21/9">
          <Image
            src={achievementsImg}
            alt="Nepal women's national team celebrating with the CAVA Nations League trophy"
            fill
            placeholder="blur"
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover hover:scale-105 duration-700 transition-transform overflow-hidden"
          />
        </Reveal>

        {/* List */}
        <ul className="mt-12 border-t border-nva-navy/10 md:mt-16">
          {achievements.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 120}
              className="grid gap-3 border-b border-[#0B1535]/10 py-8 md:grid-cols-[120px_1fr_auto] md:gap-8 md:py-10"
            >
              <div className="flex items-baseline justify-between gap-4 md:block">
                <span className="font-display text-3xl font-medium text-[#DE1D3E] md:text-4xl">
                  {item.year}
                </span>
                <span className="font-display text-lg font-semibold uppercase text-[#0B1535] md:hidden">
                  {item.result}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold uppercase leading-tight text-[#0B1535] lg:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                  {item.subtitle}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#4B5563] lg:text-base">
                  {item.description}
                </p>
              </div>

              <span className="hidden text-right font-display text-xl font-semibold uppercase text-nva-blue md:block lg:text-2xl">
                {item.result}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
