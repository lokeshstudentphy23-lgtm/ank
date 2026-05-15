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
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 text-navy-foreground">
        <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
          {eyebrow && (
            <p className="text-saffron font-semibold tracking-[0.18em] uppercase text-xs sm:text-sm">{eyebrow}</p>
          )}
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/90 max-w-2xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}