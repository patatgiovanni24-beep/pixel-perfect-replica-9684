export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`px-6 py-20 md:py-28 ${className}`}>{children}</section>;
}
