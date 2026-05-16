type Props = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  height?: "sm" | "md" | "lg";
  align?: "left" | "center";
};

const heightMap = {
  sm: "min-h-[320px] md:min-h-[380px]",
  md: "min-h-[420px] md:min-h-[520px]",
  lg: "min-h-[520px] md:min-h-[640px]",
};

export function Hero({ image, imageAlt, eyebrow, title, subtitle, children, height = "md", align = "left" }: Props) {
  return (
    <section className={`relative overflow-hidden ${heightMap[height]} flex items-center`}>
      <img
        src={image}
        alt={imageAlt}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover ken-burns"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 text-navy-foreground">
        <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
          {eyebrow && (
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold/80" aria-hidden />
              <p className="text-gold eyebrow">{eyebrow}</p>
            </div>
          )}
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.02] text-white drop-shadow-md">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl font-light">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}