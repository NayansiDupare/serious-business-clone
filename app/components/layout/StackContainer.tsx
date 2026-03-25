"use client";

export default function StackContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative">{children}</div>;
}