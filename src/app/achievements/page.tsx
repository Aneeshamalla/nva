import type { Metadata } from "next";
import PageBanner from "@/app/Components/page.banner";
import AchievementsList from "@/app/Components/achievements/achievements.list";

export const metadata: Metadata = {
  title: "Achievements | Nepal Volleyball Association",
};

export default function AchievementsPage() {
  return (
    <>
      <PageBanner

      eyebrow="Honours"
      title="Proud moments,"
      highlight="Achievements."
      description="From South Asian titles to Asian medals, Nepali volleyball has come a long way. Here are the moments we're proudest of."
      />
      <AchievementsList />
    </>
  );
}