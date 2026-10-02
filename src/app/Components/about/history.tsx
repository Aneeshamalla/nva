import Reveal from "../reveal";

const milestones = [
  { year: "1933", text: "Volleyball arrives in Nepal through Nepali soldiers serving in the British Army." },
  { year: "1942", text: "Students at Tri-Chandra College play the game at community level." },
  { year: "1973", text: "Kathmandu hosts the first National Volleyball Competition." },
  { year: "1974", text: "The national volleyball association is formally established." },
  { year: "2017", text: "Volleyball is declared Nepal's national sport." },
  { year: "2019", text: "Women's team wins the first Asian Senior Women's Central Zone title." },
];

export default function History() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="text-4xl font-bold uppercase leading-none text-[#0b2545] md:text-5xl mb-8">
            The Beginning of <span className="text-nva-sky">Nepal&apos;s Volleyball Story</span>
          </h2>
          {/* <span className="mt-5 mb-8 block h-1 w-16 bg-[#ffc72c]" /> */}

          <div className="space-y-5 text-base leading-relaxed sm:text-lg text-gray-600">
            <p>
              Volleyball first came to Nepal in the early 1930s, carried home from England by Nepali
              soldiers who had picked up the game while serving in the British Army. It was simple to
              set up and needed little more than a ball, a net and a patch of open ground, which made
              it a natural fit for a country of hills and small villages.
            </p>
            <p>
              By 1942, students at Tri-Chandra College in Kathmandu were playing it at community
              level, and over the following decades the game quietly spread from town squares to
              school grounds. The first National Volleyball Competition, held in Kathmandu in 1973,
              brought teams together on a national stage and led to the formal founding of the
              association a year later.
            </p>
            <p>
              Real growth came after the 1990s, as more districts formed teams and national
              competitions became regular fixtures. Today volleyball is played in every corner of the
              country, and in 2017 it was officially declared Nepal&apos;s national sport, a
              recognition of what generations of players had already made it.
            </p>
          </div>
        </Reveal>

        <div className="relative border-l-2 border-[#e6ebf2] pl-8 lg:mt-4">
          {milestones.map((item, i) => (
            <Reveal key={item.year} delay={i * 120} className="relative pb-8 last:pb-0">
              <span
              className="absolute -left-10.25 top-1 h-4 w-4 rounded-full border-4 border-white bg-nva-sky"
              />
              <p className="text-2xl font-bold leading-none text-nva-sky">{item.year}</p>
              <p className="mt-2 text-base leading-relaxed text-gray-600">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}