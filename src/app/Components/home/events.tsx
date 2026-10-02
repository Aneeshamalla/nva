import Link from "next/link";
import Reveal from "../reveal";

const events = [
  {
    category: "International",
    title: "CAVA Men's Challenge Cup",
    date: "12 – 19 Mangsir 2082",
    venue: "Dasharath Rangasala Covered Hall, Kathmandu",
    status: "Upcoming",
  },
  {
    category: "Club",
    title: "9th NVA Women's & Men's Club Championship",
    date: "Poush 14 – Magh 2, 2082",
    venue: "National Sports Council Complex, Tripureshwor",
    status: "Registration Open",
  },
  {
    category: "National",
    title: "Nepal Super League Volleyball",
    date: "Falgun 2082",
    venue: "Pokhara Rangasala Indoor Hall",
    status: "Upcoming",
  },
];

export default function Events() {
  return (
    <section className="w-full bg-[#F9F8F5] py-16 md:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D0202E]">
              Calendar
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-[#0B1220] sm:text-5xl lg:text-6xl">
              Upcoming Events &amp;
              <br />
              Tournaments
            </h2>
          </div>
          <Link
            href="/events"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#D0202E] transition-colors hover:text-[#0B1220]"
          >
            Full calendar
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>

        <ul className="mt-10 border-t border-[#0B1220]/15 md:mt-12">
          {events.map((event, index) => (
            <Reveal
              as="li"
              key={event.title}
              delay={index * 120}
              className="grid gap-3 border-b border-[#0B1220]/15 py-7 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-8 md:py-7 lg:grid-cols-[190px_1fr_auto]"
            >
              <div className="flex items-center justify-between gap-4 md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D0202E]">
                  {event.category}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4B5563] md:hidden">
                  {event.status}
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold uppercase leading-tight text-[#0B1220] sm:text-2xl lg:text-[2rem]">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-[#4B5563] lg:text-base">
                  {event.date} · {event.venue}
                </p>
              </div>

              <p className="hidden text-right text-sm font-semibold uppercase tracking-[0.2em] text-[#4B5563] md:block">
                {event.status}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
