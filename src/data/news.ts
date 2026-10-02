import type { StaticImageData } from "next/image";

export type NewsItem = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  content?: string[];
  date?: string;
  image?: StaticImageData;
};

export const news: NewsItem[] = [
  {
    slug: "new-referee-commission",
    date: "Shrawan 30, 2082",
    category: "Federation",
    title: "New referee commission to standardise domestic officiating",
    excerpt:
      "A seven-member commission will handle appointments, assessment and annual re-certification for all sanctioned competitions.",
    content: [
      "The Nepal Volleyball Association has formed a seven-member referee commission to bring a common standard to officiating across domestic competitions.",
      "The commission will be responsible for appointing referees to sanctioned events, assessing their performance through the season and running an annual re-certification process.",
      "The move is aimed at giving players, coaches and clubs more confidence in match officiating as the domestic calendar continues to grow.",
    ],
  },
  {
    slug: "women-lift-cava-nations-league-trophy",
    date: "Shrawan 24, 2082",
    category: "National Team",
    title: "Nepal women lift the CAVA Nations League trophy",
    excerpt:
      "The women's national team capped a strong campaign by lifting the CAVA Nations League trophy, another proud moment for Nepali volleyball on the regional stage.",
    content: [
      "Nepal's women's national team lifted the CAVA Nations League trophy after a strong campaign against teams from across the Central Asian region.",
      "The result adds to a growing list of regional achievements for the women's programme and reflects the depth of talent coming through domestic competitions.",
      "The association congratulated the players, coaches and support staff on the achievement.",
    ],
  },
  {
    slug: "everest-womens-volleyball-league-franchises",
    date: "Shrawan 18, 2082",
    category: "Domestic",
    title: "Everest Women's Volleyball League unveils six franchises",
    excerpt:
      "The inaugural Everest Women's Volleyball League, organised with the NVA, brings six franchise teams together and gives women players a new professional platform at home.",
    content: [
      "The Everest Women's Volleyball League has announced six franchise teams for its inaugural season, organised in association with the Nepal Volleyball Association.",
      "The franchise format gives women players more competitive matches, better exposure and a professional platform within Nepal.",
      "The league is expected to help strengthen the pool of players available to the national team.",
    ],
  },
  {
    slug: "lumbini-lavas-join-ewvl",
    date: "Shrawan 12, 2082",
    category: "Domestic",
    title: "Lumbini Lavas join the Everest Women's Volleyball League",
    excerpt:
      "Lumbini Lavas have been confirmed for the second edition of the Everest Women's Volleyball League, adding another franchise to the growing competition.",
    content: [
      "Lumbini Lavas have been confirmed as a franchise for the second edition of the Everest Women's Volleyball League.",
      "Their addition continues the league's growth after its first season and brings more representation from across the country.",
    ],
  },
  {
    slug: "central-zone-championship-unbeaten",
    date: "Shrawan 5, 2082",
    category: "National Team",
    title: "Women's team wins Central Zone title without dropping a set",
    excerpt:
      "Nepal made history at the first Asian Senior Women's Central Zone Volleyball Championship, winning the title without losing a single set throughout the tournament.",
    content: [
      "Nepal's women's team made history at the first Asian Senior Women's Central Zone Volleyball Championship, winning the title without losing a single set.",
      "The unbeaten run remains one of the most memorable results in the history of Nepali volleyball and a milestone for the women's programme.",
    ],
  },
  {
    slug: "volleyball-national-sport",
    date: "Ashadh 28, 2082",
    category: "Federation",
    title: "Volleyball recognised as Nepal's national sport",
    excerpt:
      "Volleyball was officially declared Nepal's national sport, recognising a game that is played in every district, from village grounds to city courts.",
    content: [
      "Volleyball was officially declared Nepal's national sport, recognising the game's popularity in every district of the country.",
      "From village grounds to city courts, volleyball has long been part of community life in Nepal, and the decision gave the sport formal recognition at the national level.",
    ],
  },
];