import Link from "next/link";
import Reveal from "../reveal";

export default function About() {
  return (
    <section className="w-full bg-[#F9F8F5] py-14 md:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 md:grid-cols-2 md:gap-10 lg:gap-16">
        {/* Heading */}
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#DE1D3E]">
            About NVA
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-[#0B1535] lg:text-6xl">
            The Governing Body of Nepali Volleyball
          </h2>
        </Reveal>

        {/* Body + CTA */}
        <Reveal delay={120} className="lg:pt-1">
          <p className="text-base leading-relaxed text-[#4B5563] md:text-sm lg:text-base lg:leading-[1.8]">
            Established in 1976 and affiliated to the FIVB, AVC and CAVA, the
            Nepal Volleyball Association organises national championships,
            manages the country&apos;s national teams and develops officials and
            coaches nationwide. Working with the National Sports Council and its
            district members, the association is responsible for the integrity,
            growth and international standing of volleyball in Nepal.
          </p>

          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-[#DE1D3E] px-6 py-3.5 lg:px-7 lg:py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#c01833] lg:mt-10"
          >
            Read more
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
