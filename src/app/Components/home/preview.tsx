import Image from "next/image";
import featuredImg from "@/assets/featured.jpg";
import Reveal from "../reveal";

const highlights = [
  {
    title: "77 District Associations",
    detail: "Affiliated and competing annually",
  },
  {
    title: "Coach & Referee Education",
    detail: "Licensed pathways in all provinces",
  },
  {
    title: "National Team Programme",
    detail: "Senior, U-23, U-19 and U-17 squads",
  },
];

export default function Preview() {
  return (
    <section className="w-full bg-[#FAF9F6] py-14 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 md:grid-cols-2 md:gap-10 lg:gap-16">
        {/* Image */}
        <Reveal className="relative aspect-4/3 w-full overflow-hidden">
          <Image
            src={featuredImg}
            alt="Pokhara volleyball match in front of the Annapurna range"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
              Featured
            </p>

            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-[#0B1535] lg:text-6xl">
              A national game played
              <br className="hidden lg:block" /> in every district
            </h2>
          </Reveal>

          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-sm lg:mt-8 lg:text-base lg:leading-[1.8]">
            From dirt courts in the mid-hills to competition-standard indoor
            halls, volleyball is Nepal&apos;s most widely played sport. The
            association&apos;s mandate is to turn that participation into a
            structured pathway — district leagues, provincial series, national
            championships and international representation.
          </p>

          <ul className="mt-8 border-t border-gray-200">
            {highlights.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 120}
                className="flex flex-col gap-1 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:flex-col md:items-start md:gap-1 lg:flex-row lg:items-center lg:gap-6 lg:py-5"
              >
                <span className="font-display text-xl font-semibold uppercase text-[#0B1535] lg:text-2xl">
                  {item.title}
                </span>
                <span className="text-sm text-gray-500 sm:text-right md:text-left lg:text-right lg:text-base">
                  {item.detail}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
