export function DiagramCard({
  caption,
  children,
}: {
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-center overflow-x-auto p-4 sm:p-6">
        {children}
      </div>
      {caption && (
        <figcaption className="border-t border-slate-100 bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
