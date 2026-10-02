import Image from "next/image";
import Link from "next/link";
import nvaImg from "@/assets/nva-logo.png";

const exploreLinks = [
  { label: "Achievements", href: "/achievements" },
  { label: "About NVA", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Events & Tournaments", href: "/events" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#064898] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8 sm:px-8 md:pt-16 lg:pt-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_1.3fr] md:gap-8 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 lg:gap-4">
              <Image
                src={nvaImg}
                alt="Nepal Volleyball Association"
                className="size-14 bg-white object-contain p-1 lg:size-16"
              />
              <span className="font-display text-xl font-semibold uppercase leading-[1.05] lg:text-2xl">
                Nepal Volleyball
                <br />
                Association
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 lg:mt-6 lg:text-base">
              The national governing body for volleyball in Nepal since 1976.
              Sports for health, sports for nation.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FDC539] lg:text-sm">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 lg:mt-6">
              {exploreLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/80 transition-colors hover:text-[#FDC539] lg:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Head office */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FDC539] lg:text-sm">
              Head Office
            </h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-white/80 lg:mt-6 lg:text-base">
              <p className="leading-relaxed">
                National Sports Council Complex, Tripureshwor, Kathmandu, Nepal
              </p>
              <p>
                <a
                  href="mailto:nepalvolleyballassociationit@gmail.com"
                  className="break-all transition-colors hover:text-[#FDC539]"
                >
                  nepalvolleyballassociationit@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+97714259969"
                  className="transition-colors hover:text-[#FDC539]"
                >
                  +977-1-4259969
                </a>
              </p>
              <p>Sunday – Friday, 10:00 – 17:00 NPT</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs uppercase tracking-[0.2em] text-white/50 sm:flex-row sm:items-center sm:justify-between md:mt-14 lg:pt-8 lg:text-sm">
          <p>© {year} Nepal Volleyball Association</p>
          <p>Play. Collaborate. Grow.</p>
        </div>
      </div>
    </footer>
  );
}
