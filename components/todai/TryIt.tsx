export function TryIt({
  children,
  label = "やってみよう",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <section className="rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50/60 p-4 dark:border-emerald-800 dark:bg-emerald-950/20 sm:p-6">
      <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-wide text-emerald-700 dark:text-emerald-400">
        <span aria-hidden>🎮</span>
        {label}
      </p>
      {children}
    </section>
  );
}
