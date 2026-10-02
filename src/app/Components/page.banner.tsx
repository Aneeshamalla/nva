import { Volleyball } from "lucide-react";

type PageBannerProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
};

export default function PageBanner({
  eyebrow,
  title,
  highlight,
  description,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-nva-blue">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute -right-32 -top-32 size-112 rounded-full bg-nva-sky/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 size-96 rounded-full bg-nva-indigo/50 blur-3xl"
      />

      {/* Decorative volleyball */}
      <Volleyball
        aria-hidden
        strokeWidth={0.75}
        className="absolute -bottom-24 right-4 hidden size-104 text-white/6 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20 md:py-28">
        {eyebrow && (
          <p className="flex animate-fade-up items-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-nva-yellow">
            <span aria-hidden className="h-0.5 w-10 bg-nva-yellow" />
            {eyebrow}
          </p>
        )}

        <h1 className="mt-5 animate-fade-up font-display text-[2.75rem] sm:mt-6 font-bold uppercase leading-[0.95] text-white [animation-delay:150ms] sm:text-6xl lg:text-8xl">
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-nva-yellow">{highlight}</span>
            </>
          )}
        </h1>

        {description && (
          <p className="mt-6 max-w-xl animate-fade-up sm:mt-8 text-balance text-base leading-relaxed text-white/75 [animation-delay:300ms] sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}