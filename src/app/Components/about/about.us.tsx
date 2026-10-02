import Image from "next/image";
import aboutImg from "@/assets/who-we-are.png";
import Reveal from "../reveal";

const affiliations = ["FIVB", "Asian Volleyball Confederation", "National Sports Council"];

export default function AboutUs() {
  return (
    <section className="bg-[#f8f7f4] py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <h2 className="text-4xl font-bold uppercase leading-none text-[#0b2545] md:text-5xl">
            Who We Are
          </h2>
          <span className="mt-5 mb-8 block h-1 w-16 bg-[#ffc72c]" />

          <p className="mb-4 text-lg font-medium sm:text-xl leading-relaxed text-[#0b2545]">
            The Nepal Volleyball Association (NVA) is the national governing body for volleyball in
            Nepal.
          </p>

          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            We&apos;re a non-governmental, nonprofit organisation that represents the country at the
            Fédération Internationale de Volleyball (FIVB) and the Asian Volleyball Confederation
            (AVC), and works alongside the National Sports Council to look after the sport at home.
            Volleyball is Nepal&apos;s national game, played everywhere from school grounds to city
            courts. Through our domestic league and national teams, we give players the chance to
            compete at the highest level and represent Nepal with pride.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {affiliations.map((item) => (
              <span
                key={item}
                className="rounded-full border border-nva-sky/20 bg-white px-4 py-2 text-sm font-medium text-nva-sky"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          {/* <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-nva-sky" /> */}
          <div className="group relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={aboutImg}
              alt="Volleyball match on a village court in Nepal"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}