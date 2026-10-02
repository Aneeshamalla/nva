import Link from "next/link";
import { Medal, Users, Newspaper, CalendarDays, Mail } from "lucide-react";

const quickLinks = [
  { label: "Achievements", href: "/achievements", icon: Medal },
  { label: "About", href: "/about", icon: Users },
  { label: "News", href: "/news", icon: Newspaper },
  { label: "Events", href: "/events", icon: CalendarDays },
  { label: "Contact", href: "/#contact", icon: Mail },
];

export default function QuickLinks() {
  return (
    <nav aria-label="Quick links" className="absolute inset-x-0 bottom-0 z-20">
      <div className="mx-auto flex max-w-7xl snap-x gap-3 overflow-x-auto px-6 pt-6 pb-6 sm:gap-4 sm:px-8 sm:pb-8 lg:grid lg:grid-cols-5 lg:overflow-visible scrollbar-none">
        {quickLinks.map(({ label, href, icon: Icon }, index) => (
          <Link
            key={href}
            href={href}
            style={{ animationDelay: `${700 + index * 100}ms` }}
            className="animate-fade-up group flex min-w-36 shrink-0 snap-start items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 sm:min-w-44 sm:gap-4 sm:px-6 text-white backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#064898] hover:shadow-lg hover:shadow-red-900/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:min-w-0"
          >
            <Icon
              aria-hidden
              strokeWidth={1.75}
              className="size-7 shrink-0 sm:size-10 text-[#FDC539] transition-all duration-300 group-hover:scale-110 "
            />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/90 sm:text-sm transition-colors duration-300 group-hover:text-white">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}