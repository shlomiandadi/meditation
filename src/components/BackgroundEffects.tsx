"use client";

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  size: 2 + (i % 3),
  duration: 12 + (i % 8) * 2,
  delay: (i % 12) * 0.8,
  opacity: 0.15 + (i % 5) * 0.08,
}));

export function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(color-mix(in srgb, #7c5cbf 80%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, #7c5cbf 80%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "grid-move 20s linear infinite",
        }}
      />

      {/* Floating orbs */}
      <div className="glow-orb absolute -top-40 right-[10%] h-[600px] w-[600px] opacity-50" />
      <div className="glow-orb-gold absolute top-1/3 -left-32 h-[450px] w-[450px] opacity-40" />
      <div className="glow-orb absolute bottom-[20%] right-[5%] h-[350px] w-[350px] opacity-35" style={{ animationDelay: "-3s" }} />
      <div className="glow-orb-gold absolute -bottom-20 left-1/3 h-[500px] w-[500px] opacity-30" style={{ animationDelay: "-5s" }} />

      {/* Horizontal energy line */}
      <div
        className="absolute left-0 right-0 top-1/2 h-px opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, #d4a853, #7c5cbf, #d4a853, transparent)",
          animation: "glow-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Particles */}
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
