"use client";

export default function StackSection({
  children,
  bg,
  z,
  topOffset = "0px"
}: {
  children: React.ReactNode;
  bg: string;
  z: number;
  topOffset?: string;
}) {
  return (
    <section
      className="w-full sticky overflow-hidden shadow-[0_-15px_40px_rgba(0,0,0,0.08)]"
      style={{
        backgroundColor: bg,
        zIndex: z,
        top: topOffset
      }}
    >
      {children}
    </section>
  );
}