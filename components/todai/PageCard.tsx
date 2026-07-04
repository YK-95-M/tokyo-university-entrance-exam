"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import type { PageMeta } from "@/lib/content/registry";

export function PageCard({
  sectionSlug,
  page,
  index,
}: {
  sectionSlug: string;
  page: PageMeta;
  index: number;
}) {
  const { isVisited } = useProgress();
  const done = isVisited(`${sectionSlug}/${page.slug}`);

  return (
    <Link
      href={`/todai/${sectionSlug}/${page.slug}`}
      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600"
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          done
            ? "bg-emerald-500 text-white"
            : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
        }`}
      >
        {done ? "✓" : index + 1}
      </div>
      <div>
        <p className="text-[11px] font-bold tracking-wide text-slate-400">
          {page.quest}
        </p>
        <p className="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">
          {page.title}
        </p>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
          {page.summary}
        </p>
      </div>
    </Link>
  );
}
