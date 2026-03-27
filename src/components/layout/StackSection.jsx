
export default function StackSection({
  children,
  bg,
  z,
  topOffset = "0px"
}) {
  return (
    <section
      className="stack-panel w-full min-h-screen sticky overflow-hidden shadow-[0_-15px_40px_rgba(0,0,0,0.08)]"
      style={{
        backgroundColor: bg,
        zIndex: z,
        top: topOffset,
      }}
    >
      {children}
    </section>
  );
}
