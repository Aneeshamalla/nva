import Image, { StaticImageData } from "next/image";
import { Mail, Phone } from "lucide-react";
import Reveal from "../reveal";
import jitendraImg from "@/assets/jitendra-bahadur-portrait.jpg";
import madanImg from "@/assets/madan-khadka-portrait.jpg";
import roshanImg from "@/assets/roshan-shrestha-portrait.jpg";

type Member = {
  name: string;
  post: string;
  email: string;
  phone: string;
  photo?: StaticImageData;
};

const members: Member[] = [
  {
    name: "Mr. Jitendra Bahadur Chand",
    post: "Chairperson",
    email: "chairperson@example.com",
    phone: "+977-98XXXXXXXX",
    photo: jitendraImg,
  },
  {
    name: "Mr. Madan Khadka",
    post: "Vice-Chairperson",
    email: "vicechair@example.com",
    phone: "+977-98XXXXXXXX",
    photo: madanImg,
  },
  {
    name: "Mr. Roshan Shrestha",
    post: "Secretary General",
    email: "secretary@example.com",
    phone: "+977-98XXXXXXXX",
    photo: roshanImg,
  },
];

function getInitials(name: string) {
  const parts = name.replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/i, "").split(" ").filter(Boolean);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Board() {
  return (
    <section className="bg-[#f8f7f4] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="mb-10 text-center sm:mb-12">
          <h2 className="text-4xl font-bold uppercase leading-none text-[#0b2545] md:text-5xl mb-5">
            Board of <span className="text-nva-sky">Members</span>
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">The team behind the accomplishments</p>
        </Reveal>

        <div className="mx-auto grid max-w-md gap-6 sm:max-w-none sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {members.map((member, index) => (
            <Reveal key={member.name} delay={index * 120}>
              <article
                className="group relative aspect-4/5 overflow-hidden rounded-3xl bg-[#e6ebf2] shadow-md ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0b2545]/20"
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-6xl font-bold text-nva-blue">
                    {getInitials(member.name)}
                  </span>
                )}

                {/* Bottom gradient for legibility */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#0b1535] via-[#0b1535]/70 to-transparent" />

                {/* Info */}
                <div className="absolute inset-x-0 bottom-0 p-6 ">
                  <h3
                    title={member.name}
                    className="truncate text-xl font-bold leading-tight text-white lg:text-[22px] xl:text-2xl"
                  >
                    {member.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between gap-4">
                    <p className="truncate text-xs font-semibold uppercase tracking-[0.2em] text-nva-yellow">
                      {member.post}
                    </p>

                    <div className="flex shrink-0 gap-2">
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        title={member.email}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-md transition-colors hover:bg-white hover:text-nva-blue"
                      >
                        <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                      </a>
                      <a
                        href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
                        aria-label={`Call ${member.name}`}
                        title={member.phone}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-md transition-colors hover:bg-nva-red hover:ring-nva-red"
                      >
                        <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
