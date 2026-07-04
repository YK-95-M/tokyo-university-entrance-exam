"use client";

import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Point = { label: string; score: number };

const KEY = "todai-score-log-v1";

const DEFAULT_DATA: Point[] = [
  { label: "1回目", score: 35 },
  { label: "2回目", score: 42 },
  { label: "3回目", score: 48 },
];

export function ScoreTrendChart() {
  const [data, setData] = useState<Point[]>(DEFAULT_DATA);
  const [label, setLabel] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      // localStorageはサーバーに存在しないため、マウント後にクライアント側でのみ読み込む
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setData(JSON.parse(raw));
    } catch {
      // 読み込み失敗時はデフォルト値のまま
    }
  }, []);

  const save = (next: Point[]) => {
    setData(next);
    window.localStorage.setItem(KEY, JSON.stringify(next));
  };

  const addPoint = (e: React.FormEvent) => {
    e.preventDefault();
    const s = Number(score);
    if (!label.trim() || Number.isNaN(s)) return;
    save([...data, { label: label.trim(), score: s }]);
    setLabel("");
    setScore("");
  };

  const reset = () => save(DEFAULT_DATA);

  return (
    <div className="space-y-4">
      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />
            <XAxis dataKey="label" tick={{ fontSize: 11 }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <form onSubmit={addPoint} className="flex flex-wrap items-end gap-2">
        <label className="text-xs">
          <span className="mb-1 block font-semibold text-slate-600 dark:text-slate-300">
            模試・回の名前
          </span>
          <input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="例: 4回目"
            className="w-28 rounded-lg border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          />
        </label>
        <label className="text-xs">
          <span className="mb-1 block font-semibold text-slate-600 dark:text-slate-300">
            得点(%)
          </span>
          <input
            inputMode="numeric"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="例: 55"
            className="w-24 rounded-lg border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900"
        >
          追加
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          リセット
        </button>
      </form>
      <p className="text-xs text-slate-400">
        入力した記録はこの端末のブラウザにのみ保存されます（サーバー送信なし）。
      </p>
    </div>
  );
}
