"use client";

import { useState } from "react";

export function GapCalculator() {
  const [current, setCurrent] = useState("");
  const [target, setTarget] = useState("60");

  const c = parseFloat(current);
  const t = parseFloat(target);
  const gap = !Number.isNaN(c) && !Number.isNaN(t) ? Math.max(0, t - c) : undefined;

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <label className="text-xs">
          <span className="mb-1 block font-semibold text-slate-600 dark:text-slate-300">
            今の自分の得点率(%)
          </span>
          <input
            inputMode="decimal"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            placeholder="例: 30"
            className="w-full rounded-lg border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          />
        </label>
        <label className="text-xs">
          <span className="mb-1 block font-semibold text-slate-600 dark:text-slate-300">
            合格ラインの目安(%)
          </span>
          <input
            inputMode="decimal"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          />
        </label>
      </div>
      {gap !== undefined && (
        <div className="rounded-xl bg-slate-100 p-3 text-center dark:bg-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400">埋めるべきギャップ</p>
          <p className="text-xl font-bold text-slate-900 dark:text-slate-50">
            約{gap.toFixed(0)}ポイント
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            このギャップを04章の学習計画シミュレータで、必要な学習時間に変換してみましょう。
          </p>
        </div>
      )}
    </div>
  );
}
