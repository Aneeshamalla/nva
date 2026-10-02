import Image from "next/image";
import heroImg from "@/assets/hereo3.jpg";
import BlendedHeader from "./blended.header";
import QuickLinks from "./quick.links";
import HeroMedia from "./hero.media";

export default function Hero() {
  return (
    <section 
    id="home"
    className="relative flex h-svh min-h-[36rem] w-full items-center overflow-hidden bg-[#0B1535]">
      <Image
        src={heroImg}
        alt="Nepal national volleyball player spiking at the net"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[30%_top] lg:object-top"
      />

      <HeroMedia />

      <BlendedHeader />

      <div className="absolute inset-0 bg-[#0B1535]/80 lg:bg-transparent lg:bg-linear-to-r lg:from-[#0B1535]/90 lg:via-[#0B1535]/60 lg:to-[#0B1535]/20" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
        <h1 className="animate-fade-up [animation-delay:200ms] max-w-3xl font-display text-[2.6rem] font-bold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
          Sports for health,
          <br />
          sports for <span className="text-[#FDC539]">nation</span>
        </h1>

        <p className="animate-fade-up [animation-delay:450ms] mt-6 max-w-md text-base leading-relaxed text-white/75 lg:text-lg ">
          From club leagues to international courts, we play, collaborate and grow Nepal&apos;s volleyball.
        </p>
      </div>
      <QuickLinks />
    </section>
  );
}