"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/data/news";
import defaultNewsImg from "@/assets/news.jpg";

export default function NewsList({ items }: { items: NewsItem[] }) {
  const [active, setActive] = useState("All");

  const counts = items.reduce<Record<string, number>>((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  }, {});
  const categories = [{ name: "All", count: items.length }].concat(
    Object.entries(counts).map(([name, count]) => ({ name, count }))
  );

  const filtered = active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <section className="bg-[#f8f7f4] pt-10 pb-16 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:gap-6 sm:px-6">
          <div className="flex shrink-0 items-center gap-3 sm:border-r sm:border-gray-200 sm:pr-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#418CCB]/10 text-[#418CCB]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M4 6h16M7 12h10M10 18h4" />
              </svg>
            </span>
            <h2 className="text-lg font-bold uppercase text-[#0b2545]">Categories</h2>
          </div>

          <ul className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:ml-auto sm:px-0">
            {categories.map((category) => {
              const isActive = active === category.name;
              return (
                <li key={category.name} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setActive(category.name)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-colors ${
                      isActive
                        ? "bg-[#418CCB] text-white shadow-sm"
                        : "bg-[#f8f7f4] text-[#0b2545]/70 hover:bg-[#418CCB]/10 hover:text-[#418CCB]"
                    }`}
                  >
                    {category.name}
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs ${
                        isActive ? "bg-white/25 text-white" : "bg-white text-gray-500"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl bg-white py-20 text-center text-lg text-gray-500">
            No news in this category yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image ?? defaultNewsImg}
                    alt={item.title}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {active === "All" && i === 0 && (
                    <span className="absolute left-4 top-4 rounded-full bg-[#ffc72c] px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#0b2545]">
                      Latest
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3
                    title={item.title}
                    className="mb-3 truncate text-xl font-bold uppercase text-[#418CCB] transition-colors group-hover:text-[#054a9a]"
                  >
                    {item.title}
                  </h3>
                  <p className="mb-5 line-clamp-3 leading-relaxed text-gray-600">{item.excerpt}</p>

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
        )}
      </div>
    </section>
  );
}