"use client";

import { useMemo, useState } from "react";

const PACE_NOTES: { max: number; note: string; tone: string }[] = [
  {
    max: 1,
    note: "1年勝負は超高速ルート。仕事の負荷を大きく下げられる前提でないと厳しい。まずは2〜3年ルートと比較してから決めよう。",
    tone: "bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-100",
  },
  {
    max: 2,
    note: "2年ルートは標準的な社会人プラン。週の学習時間を安定して確保できるかがカギ。",
    tone: "bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-100",
  },
  {
    max: 3,
    note: "3年ルートは余裕を持って基礎から積み上げられるペース。地頭トレも並行しやすい。",
    tone: "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100",
  },
  {
    max: 99,
    note: "4年以上ならじっくり型。ただし間延びしてモチベが切れやすいので、06章の継続の技術と必ずセットで運用しよう。",
    tone: "bg-sky-50 text-sky-800 dark:bg-sky-950/40 dark:text-sky-100",
  },
];

export function YearPlanSimulator() {
  const [years, setYears] = useState(2);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);

  const totalHours = years * 52 * hoursPerWeek;
  const perDay = (hoursPerWeek / 7).toFixed(1);

  const paceNote = useMemo(
    () => PACE_NOTES.find((p) => years <= p.max) ?? PACE_NOTES[PACE_NOTES.length - 1],
    [years]
  );

  return (
    <div className="space-y-5">
      <label className="block">
        <span className="mb-1 flex justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
          <span>攻略年数</span>
          <span>{years}年</span>
        </span>
        <input
          type="range"
          min={1}
          max={5}
          step={1}
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
      </label>
      <label className="block">
        <span className="mb-1 flex justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
          <span>週の学習時間</span>
          <span>{hoursPerWeek}時間/週</span>
        </span>
        <input
          type="range"
          min={5}
          max={40}
          step={1}
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
      </label>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-slate-100 p-3 text-center dark:bg-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400">総学習時間</p>
          <p className="text-lg font-bold text-slate-900 dark:text-slate-50">
            {totalHours.toLocaleString()}h
          </p>
        </div>
        <div className="rounded-xl bg-slate-100 p-3 text-center dark:bg-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400">1日あたり</p>
          <p className="text-lg font-bold text-slate-900 dark:text-slate-50">
            約{perDay}h
          </p>
        </div>
        <div className="rounded-xl bg-slate-100 p-3 text-center dark:bg-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400">受験まで</p>
          <p className="text-lg font-bold text-slate-900 dark:text-slate-50">
            {years * 52}週
          </p>
        </div>
      </div>

      <p className={`rounded-xl p-3 text-xs leading-relaxed ${paceNote.tone}`}>
        {paceNote.note}
      </p>
    </div>
  );
}
