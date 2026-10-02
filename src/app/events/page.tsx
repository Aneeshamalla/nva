import type { Metadata } from "next";
import PageBanner from "@/app/Components/page.banner";
import EventsList from "@/app/Components/events/events.list";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events | Nepal Volleyball Association",
  description:
    "Upcoming tournaments, championships and events organised by the Nepal Volleyball Association.",
};

export default function EventsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Events"
        title="On the"
        highlight="calendar."
        description="Championships, leagues and tournaments from across Nepali volleyball. Find out what's coming up next."
      />
      <EventsList items={events} />
    </>
  );
}
