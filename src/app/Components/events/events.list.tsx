import Image from "next/image";
import courtImg from "@/assets/featured.jpg";
import type { EventItem, EventStatus } from "@/data/events";
import Reveal from "../reveal";

const statusStyles: Record<EventStatus, string> = {
  Upcoming: "bg-[#DE1D3E] text-white",
  "Registration Open": "bg-[#FDC539] text-[#0B1535]",
  Concluded: "bg-[#0B1535]/5 text-[#0B1535]/70",
};

function StatusBadge({ status }: { status: EventStatus }) {
  return (
    <span
      className={`inline-block whitespace-nowrap px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default function EventsList({ items }: { items: EventItem[] }) {
  return (
    <section className="bg-[#F9F8F5] py-14 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="relative aspect-video overflow-hidden lg:aspect-[21/9]">
          <Image
            src={courtImg}
            alt="Volleyball court prepared for a championship match"
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <ul className="mt-12 border-t border-[#0B1535]/10 lg:mt-16">
          {items.map((event, index) => (
            <Reveal
              as="li"
              key={event.title}
              delay={(index % 3) * 100}
              className="grid gap-4 border-b border-[#0B1535]/10 py-8 md:grid-cols-[200px_1fr] md:gap-x-10 lg:grid-cols-[230px_1fr_auto] lg:py-10"
            >
              <div>
                <div className="mb-3 md:mb-4 lg:hidden">
                  <StatusBadge status={event.status} />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold uppercase text-[#DE1D3E] lg:text-2xl">
                    {event.date}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">{event.venue}</p>
                </div>
              </div>

              <div className="max-w-2xl">
                <h3 className="font-display text-2xl font-bold uppercase leading-tight text-[#0B1535] lg:text-3xl">
                  {event.title}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-[#6B7280] lg:text-sm">
                  {event.category}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#4B5563] sm:mt-4">
                  {event.description}
                </p>
              </div>

              <div className="hidden lg:block">
                <StatusBadge status={event.status} />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
