export function ProgressBar({
  percent,
  label,
}: {
  percent: number;
  label?: string;
}) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div>
      {label && (
        <div className="mb-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>{label}</span>
          <span>{clamped}%</span>
        </div>
      )}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
