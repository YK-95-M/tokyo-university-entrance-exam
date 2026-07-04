"use client";

import { useState } from "react";

export function TermTooltip({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="rounded border-b-2 border-dotted border-sky-400 font-semibold text-sky-700 decoration-transparent dark:border-sky-600 dark:text-sky-400"
      >
        {term}
        <sup className="ml-0.5 text-[10px]" aria-hidden>
          ?
        </sup>
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-xl border border-sky-200 bg-white p-3 text-xs leading-relaxed text-slate-700 shadow-lg dark:border-sky-900 dark:bg-slate-900 dark:text-slate-200"
        >
          {children}
        </span>
      )}
    </span>
  );
}
