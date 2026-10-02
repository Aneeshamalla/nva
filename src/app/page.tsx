import Image from "next/image";
import Hero from "./Components/home/hero";
import Preview from "./Components/home/preview";
import About from "./Components/home/about";
import Achievements from "./Components/home/achievements";
import Events from "./Components/home/events";
import News from "./Components/home/news";
import GetInTouch from "./Components/home/get.in.touch";

export default function Home() {
  return (
    <main>
      <Hero />
      <Preview />
      <Achievements />
      <Events />
      <News />
      <About />
      <GetInTouch />
    </main>
  );
}
