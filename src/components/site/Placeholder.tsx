type Props = { label: string; alt: string; aspect?: string; soft?: boolean; className?: string };
export function Placeholder({ label, alt, aspect = "aspect-[4/3]", soft, className = "" }: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`${aspect} w-full rounded-lg flex items-center justify-center text-center px-4 ${soft ? "placeholder-gradient-soft" : "placeholder-gradient"} ${className}`}
    >
      <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase opacity-90">
        {label}
      </span>
    </div>
  );
}
