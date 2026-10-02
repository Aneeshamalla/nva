import type { Metadata } from "next";
import PageBanner from "@/app/Components/page.banner";
import AboutUs from "../Components/about/about.us";
import History from "@/app/Components/about/history";
import Board from "../Components/about/board";


export const metadata: Metadata = {
  title: "About Us | Nepal Volleyball Association",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="One nation,"
        highlight="One game."
        description="From village courts to the national team, volleyball is part of who we are. We're here to help the game grow."
      />
      <AboutUs />
      <History />
      <Board />
    </>
  );
}