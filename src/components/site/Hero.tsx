import React from "react";

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

const heightMap: Record<string, { minHeight: string }> = {
  sm: { minHeight: "clamp(280px, 38vw, 420px)" },
  md: { minHeight: "clamp(380px, 48vw, 560px)" },
  lg: { minHeight: "clamp(480px, 60vw, 700px)" },
};

export function Hero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  children,
  height = "md",
  align = "left",
}: Props) {
  const minH = heightMap[height] ?? heightMap.md;

  return (
    <section
      aria-label="Page hero"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        ...minH,
      }}
    >
      {/* Background image */}
      <img
        src={image}
        alt={imageAlt}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="ken-burns"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          inset: 0,
          /* Fallback if hero-overlay CSS class doesn't apply */
          background:
            "linear-gradient(180deg, rgba(10,20,60,0.25) 0%, rgba(10,20,60,0.58) 55%, rgba(5,10,40,0.88) 100%), linear-gradient(90deg, rgba(10,20,60,0.72) 0%, rgba(10,20,60,0.0) 60%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 24px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
            textAlign: align === "center" ? "center" : "left",
          }}
        >
          {eyebrow && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "4px",
                justifyContent: align === "center" ? "center" : "flex-start",
              }}
            >
              {align !== "center" && (
                <span
                  aria-hidden
                  style={{
                    display: "block",
                    height: "1px",
                    width: "40px",
                    background: "rgba(212,175,55,0.8)",
                    flexShrink: 0,
                  }}
                />
              )}
              <p
                className="eyebrow"
                style={{
                  color: "#d4af37",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {eyebrow}
              </p>
            </div>
          )}

          <h1
            style={{
              marginTop: "16px",
              fontFamily: "Fraunces, Georgia, serif",
              fontSize: "clamp(2rem, 5.5vw, 4.25rem)",
              fontWeight: 700,
              lineHeight: 1.04,
              color: "#ffffff",
              textShadow: "0 2px 16px rgba(0,0,0,0.4)",
              marginBottom: 0,
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{
                marginTop: "24px",
                fontSize: "clamp(0.95rem, 1.6vw, 1.125rem)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.85)",
                maxWidth: "600px",
                fontWeight: 300,
                marginLeft: align === "center" ? "auto" : undefined,
                marginRight: align === "center" ? "auto" : undefined,
              }}
            >
              {subtitle}
            </p>
          )}

          {children && (
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                justifyContent: align === "center" ? "center" : "flex-start",
              }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}