export type EventStatus = "Upcoming" | "Registration Open" | "Concluded";

export type EventItem = {
  title: string;
  category: string;
  date: string;
  venue: string;
  description: string;
  status: EventStatus;
};

export const events: EventItem[] = [
  {
    title: "CAVA Men's Challenge Cup",
    category: "International",
    date: "12 – 19 Mangsir 2082",
    venue: "Dasharath Rangasala Covered Hall, Kathmandu",
    description:
      "Eight Central Asian nations meet in Kathmandu as Nepal defends home advantage in the region's flagship men's competition.",
    status: "Upcoming",
  },
  {
    title: "9th NVA Women's & Men's Club Championship",
    category: "Club",
    date: "Poush 14 – Magh 2, 2082",
    venue: "National Sports Council Complex, Tripureshwor",
    description:
      "Sixteen affiliated clubs in each category compete across a two-week league and knockout format for national club honours.",
    status: "Registration Open",
  },
  {
    title: "Nepal Super League Volleyball",
    category: "National",
    date: "Falgun 2082",
    venue: "Pokhara Rangasala Indoor Hall",
    description:
      "Franchise volleyball returns with six city sides, a full broadcast schedule and a national draft of emerging players.",
    status: "Upcoming",
  },
  {
    title: "U-17 Provincial Development Series",
    category: "Development",
    date: "Baisakh 2083",
    venue: "All seven provinces",
    description:
      "The association's talent pathway tournament, feeding scouted players into the national junior training camp.",
    status: "Upcoming",
  },
  {
    title: "10th National Games — Volleyball",
    category: "National",
    date: "Jestha 2082",
    venue: "Birgunj",
    description:
      "Provincial squads contested the national multi-sport games with Bagmati Province taking both titles.",
    status: "Concluded",
  },
  {
    title: "National School Volleyball Festival",
    category: "Development",
    date: "Ashoj 2082",
    venue: "Butwal",
    description:
      "More than 240 school teams played across district qualifiers in the association's largest grassroots event to date.",
    status: "Concluded",
  },
];
