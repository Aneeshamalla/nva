import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/data/news";
import defaultNewsImg from "@/assets/news.jpg";
import Reveal from "@/app/Components/reveal";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) return { title: "News not found | Nepal Volleyball Association" };

  return {
    title: `${item.title} | Nepal Volleyball Association`,
    description: item.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  const paragraphs = item.content ?? [];
  const related = news
    .filter((n) => n.slug !== item.slug)
    .sort(
      (a, b) =>
        Number(b.category === item.category) -
        Number(a.category === item.category),
    )
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-[#EAF2FB] py-12 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <svg
            className="pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] text-[#064898] opacity-[0.06] lg:h-[36rem] lg:w-[36rem]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="46" />
            <path d="M50 4c-10 20-10 50 0 92M8 35c25 5 55 25 72 52M92 35C70 40 40 60 25 90" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <span
              aria-hidden
              className="mb-6 block h-1 w-16 rounded-full bg-nva-red"
            />
            <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] text-nva-blue sm:text-5xl lg:text-7xl">
              {item.title}
            </h1>

            {item.date && (
              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white py-1.5 pr-5 pl-1.5 shadow-sm ring-1 ring-[#064898]/10">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#064898] text-white">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DE1D3E]">
                  Published
                </span>
                <span aria-hidden className="h-4 w-px bg-[#064898]/15" />
                <time className="text-sm font-semibold text-[#0B1535] sm:text-base">
                  {item.date}
                </time>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f8f7f4] pt-10 pb-16 lg:pt-14 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal delay={150} className="mb-10 lg:mb-14">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl shadow-[#064898]/20 ring-1 ring-black/5 lg:aspect-[21/9] lg:rounded-3xl">
              <Image
                src={item.image ?? defaultNewsImg}
                alt={item.title}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal as="div">
            <article>
              <p className="border-l-4 border-[#DE1D3E] pl-6 text-xl font-medium leading-relaxed text-[#0B1535] lg:text-2xl lg:leading-relaxed">
                {item.excerpt}
              </p>
              {paragraphs.length > 0 && (
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#4B5563]">
                  {paragraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:px-8 lg:mt-24">
            <h2 className="mb-8 text-3xl font-bold uppercase text-[#0b2545]">
              More <span className="text-[#418CCB]">news</span>
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/news/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={r.image ?? defaultNewsImg}
                      alt={r.title}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3
                      title={r.title}
                      className="mb-3 truncate text-xl font-bold uppercase text-[#418CCB] transition-colors group-hover:text-[#054a9a]"
                    >
                      {r.title}
                    </h3>
                    <p className="mb-5 line-clamp-3 leading-relaxed text-gray-600">
                      {r.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#c8102e]">
                      Read more
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
