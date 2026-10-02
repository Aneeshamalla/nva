import type { Metadata } from "next";
import PageBanner from "@/app/Components/page.banner";
import NewsList from "@/app/Components/news/news.list";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "News | Nepal Volleyball Association",
  description:
    "Latest news, announcements and match updates from the Nepal Volleyball Association.",
};

export default function NewsPage() {
  return (
    <>
      <PageBanner
        eyebrow="News"
        title="Latest from"
        highlight="the court."
        description="Announcements, match reports and updates from across Nepali volleyball."
      />
      <NewsList items={news} />
    </>
  );
}