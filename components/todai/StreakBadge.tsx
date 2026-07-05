"use client";

import { useProgress } from "@/lib/progress";

export function StreakBadge() {
  const { streak, percent } = useProgress();
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 font-bold text-orange-700 dark:bg-orange-950/50 dark:text-orange-300">
        🔥 {streak}日連続
      </span>
      <span className="hidden items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300 sm:inline-flex">
        📈 攻略度 {percent}%
      </span>
    </div>
  );
}
