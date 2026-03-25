"use client";

export default function SmileLogo() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full fill-black opacity-10 drop-shadow-2xl"
    >
      {/* Outer Circle */}
      <circle cx="100" cy="100" r="95" fill="black" />

      {/* Inner Circle (Hollow base) */}
      <circle cx="100" cy="100" r="90" fill="var(--color-primary)" />

      {/* SB */}
      <text
        x="50%"
        y="45%"
        textAnchor="middle"
        className="fill-black"
        style={{ fontSize: "50px", fontWeight: "900", fontFamily: "var(--font-geist-sans)", letterSpacing: "-0.05em" }}
      >
        SB
      </text>

      {/* Smile */}
      <path
        d="M60 120 Q100 170 140 120"
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}