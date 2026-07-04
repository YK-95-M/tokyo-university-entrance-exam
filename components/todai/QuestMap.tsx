"use client";

import Link from "next/link";
import { SECTIONS } from "@/lib/content/registry";
import { useProgress } from "@/lib/progress";

const NODES = [
  { x: 7, y: 88 },
  { x: 21, y: 62 },
  { x: 37, y: 82 },
  { x: 53, y: 46 },
  { x: 67, y: 70 },
  { x: 81, y: 36 },
  { x: 93, y: 58 },
];

const BOSS = { x: 100, y: 12 };

export function QuestMap() {
  const { isVisited } = useProgress();

  const pathD = `M ${NODES.map((n) => `${n.x} ${n.y}`).join(" L ")} L ${BOSS.x} ${BOSS.y}`;

  return (
    <div className="relative w-full overflow-visible rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-2 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-4">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path
          d={pathD}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          className="text-slate-300 dark:text-slate-700"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative aspect-[16/11] w-full sm:aspect-[16/9]">
        {SECTIONS.map((section, i) => {
          const node = NODES[i];
          const doneCount = section.pages.filter((p) =>
            isVisited(`${section.slug}/${p.slug}`)
          ).length;
          const total = section.pages.length;
          const status =
            doneCount === total ? "done" : doneCount > 0 ? "active" : "new";
          const statusStyle =
            status === "done"
              ? "bg-emerald-500 border-emerald-600 text-white"
              : status === "active"
              ? "bg-amber-400 border-amber-500 text-amber-950"
              : "bg-white border-slate-300 text-slate-600 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300";

          return (
            <Link
              key={section.id}
              href={`/todai/${section.slug}`}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold shadow transition group-hover:scale-110 sm:h-14 sm:w-14 ${statusStyle}`}
                >
                  {section.id}
                </div>
                <span className="whitespace-nowrap rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-slate-700 shadow-sm dark:bg-slate-900/90 dark:text-slate-200 sm:text-xs">
                  {section.title}
                </span>
                <span className="text-[10px] text-slate-400">
                  {doneCount}/{total}
                </span>
              </div>
            </Link>
          );
        })}

        <div
          className="absolute -translate-x-full -translate-y-1/2 text-center"
          style={{ left: `${BOSS.x}%`, top: `${BOSS.y}%` }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-rose-600 bg-rose-500 text-2xl shadow-lg sm:h-20 sm:w-20">
              👹
            </div>
            <span className="whitespace-nowrap rounded-full bg-rose-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm sm:text-xs">
              ラスボス：東大合格
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
