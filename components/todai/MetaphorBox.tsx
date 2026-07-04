export function MetaphorBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/30">
      <span className="text-2xl leading-none" aria-hidden>
        💡
      </span>
      <div>
        <p className="mb-1 text-xs font-bold tracking-wide text-amber-700 dark:text-amber-400">
          要するに…
        </p>
        <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-100">
          {children}
        </p>
      </div>
    </div>
  );
}
