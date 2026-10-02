import Image from "next/image";
import Link from "next/link";
import featuredImg from "@/assets/featured.jpg";
import Reveal from "../reveal";

const featured = {
  category: "National Team",
  title: "Women's National Team Opens Closed Camp Ahead of CAVA Duty",
  excerpt:
    "Twenty-four players report to Kathmandu for an eight-week residential camp built around a new strength and conditioning programme.",
  date: "Bhadra 28, 2082",
  href: "/news/womens-national-team-closed-camp",
};

const stories = [
  {
    category: "Development",
    title: "NVA Certifies 46 Coaches in Level 1 Licence Course",
    excerpt:
      "The association's expanded coach education pathway reached all seven provinces for the first time this season.",
    date: "Bhadra 19, 2082",
    href: "/news/level-1-coaching-licence",
  },
  {
    category: "Domestic",
    title: "Club Championship Draw Confirmed, 32 Teams Entered",
    excerpt:
      "Defending champions begin their title defence against last season's runners-up in the opening round in Tripureshwor.",
    date: "Bhadra 11, 2082",
    href: "/news/club-championship-draw",
  },
  {
    category: "Federation",
    title: "New Referee Commission to Standardise Domestic Officiating",
    excerpt:
      "A seven-member commission will handle appointments, assessment and annual re-certification for all sanctioned competitions.",
    date: "Shrawan 30, 2082",
    href: "/news/referee-commission",
  },
];

export default function News() {
  return (
    <section className="w-full bg-[#EAF2FB] py-16 md:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#DE1D3E]">
              Newsroom
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-[#0B1535] sm:text-5xl lg:text-6xl">
              Latest News
            </h2>
          </div>
          <Link
            href="/news"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#064898] transition-colors hover:text-[#DE1D3E]"
          >
            All news
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-12 md:mt-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Featured story */}
          <Reveal>
            <article className="group">
              <Link href={featured.href} className="block">
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#064898]/10">
                  <Image
                    src={featuredImg}
                    alt="Indoor volleyball court prepared for the national championship"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#DE1D3E]">
                  {featured.category}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-[1.05] text-[#0B1535] transition-colors group-hover:text-[#064898] sm:text-3xl lg:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4B5563] lg:text-base">
                  {featured.excerpt}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-[#6B7280] sm:text-sm">
                  {featured.date}
                </p>
              </Link>
            </article>
          </Reveal>

          {/* Side stories */}
          <ul className="border-t border-[#064898]/15">
            {stories.map((story, index) => (
              <Reveal
                as="li"
                key={story.href}
                delay={index * 120}
                className="border-b border-[#064898]/15 last:border-b-0"
              >
                <Link href={story.href} className="group block py-7 sm:py-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#DE1D3E]">
                    {story.category}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold uppercase leading-tight text-[#0B1535] transition-colors group-hover:text-[#064898] sm:text-2xl">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4B5563] sm:text-base">
                    {story.excerpt}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                    {story.date}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
