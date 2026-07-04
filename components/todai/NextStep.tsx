import Link from "next/link";

export function NextStep({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600"
    >
      <div>
        <p className="text-xs font-bold tracking-wide text-slate-400 dark:text-slate-500">
          次の一歩
        </p>
        <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
          {label}
        </p>
        {description && (
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>
      <span
        aria-hidden
        className="text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700 dark:group-hover:text-slate-200"
      >
        →
      </span>
    </Link>
  );
}
