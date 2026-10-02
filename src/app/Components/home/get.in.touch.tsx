"use client";

import { useState } from "react";
import Reveal from "../reveal";

const contacts = [
  {
    label: "Visit us",
    value: "National Sports Council Complex, Tripureshwor, Kathmandu",
    icon: (
      <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    ),
  },
  {
    label: "Call us",
    value: "+977-1-4259969",
    href: "tel:+97714259969",
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    ),
  },
  {
    label: "Email us",
    value: "nepalvolleyballassociationit@gmail.com",
    href: "mailto:nepalvolleyballassociationit@gmail.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "Office hours",
    value: "Sunday – Friday, 10:00 – 17:00",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-[#f8f7f4] px-4 py-3 text-base text-[#0b2545] sm:text-sm outline-none transition focus:border-[#054a9a] focus:bg-white";

export default function GetInTouch() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section
      id="contact"
      className="scroll-mt-18 bg-white py-16 lg:scroll-mt-22 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="grid overflow-hidden rounded-3xl shadow-xl lg:grid-cols-[1fr_1.15fr]">
          <div className="relative overflow-hidden bg-nva-sky p-6 sm:p-8 md:p-12">
            <svg
              className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 text-white opacity-[0.06]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="46" />
              <path d="M50 4c-10 20-10 50 0 92M8 35c25 5 55 25 72 52M92 35C70 40 40 60 25 90" />
            </svg>

            <div className="relative">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-0.5 w-12 bg-nva-yellow" />
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ffc72c]">
                  Get in touch
                </span>
              </div>

              <h2 className="mb-5 text-4xl font-bold uppercase leading-none text-white md:text-5xl">
                Let&apos;s grow the game{" "}
                <span className="text-nva-yellow">together.</span>
              </h2>

              <p className="mb-10 text-lg leading-relaxed text-white/80">
                Questions about tournaments, clubs or partnerships? Send us a
                message and our team will get back to you.
              </p>

              <ul className="space-y-6">
                {contacts.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item.label}
                    delay={150 + i * 100}
                    className="flex items-start gap-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-nva-yellow">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        {item.icon}
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-all text-white transition-colors hover:text-nva-yellow"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-white">{item.value}</p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t-4 border-white bg-white p-6 sm:p-8 md:p-12 lg:border-t-0 lg:border-l-4">
            <Reveal delay={150}>
              <h3 className="mb-2 text-2xl font-bold uppercase text-[#0b2545]">
                Send us a message
              </h3>
              <p className="mb-8 text-gray-600">
                We usually reply within two working days.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[#0b2545]"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Ram Bahadur"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#0b2545]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ram@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-[#0b2545]"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    placeholder="Club registration"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#0b2545]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#c8102e] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#a50d26] sm:w-auto"
                >
                  Send message
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>

                {sent && (
                  <p className="text-sm font-medium text-green-700">
                    Thanks! Your message has been sent.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
