"use client";

import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { EXERCISES, EXERCISE_MAP } from "@/lib/workout/exercises";
import { useWorkout } from "@/lib/workout/store";
import { formatShortDate } from "@/lib/workout/date";
import { MAX_SERIES, SERIES_COLORS_DARK, SERIES_COLORS_LIGHT } from "@/components/workout/palette";
import { useIsDark } from "@/components/workout/useIsDark";

type ChartRow = { date: string } & Record<string, number | string | undefined>;

export default function ProgressPage() {
  const { ready, getExerciseHistory } = useWorkout();
  const isDark = useIsDark();
  const colors = isDark ? SERIES_COLORS_DARK : SERIES_COLORS_LIGHT;
  const [selected, setSelected] = useState<string[]>([]);
  const [view, setView] = useState<"chart" | "table">("chart");

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= MAX_SERIES) return prev;
      return [...prev, id];
    });
  };

  const histories = useMemo(() => {
    const map: Record<string, { date: string; maxWeight: number }[]> = {};
    for (const id of selected) map[id] = getExerciseHistory(id);
    return map;
  }, [selected, getExerciseHistory]);

  const chartData = useMemo<ChartRow[]>(() => {
    const dateSet = new Set<string>();
    for (const id of selected) for (const p of histories[id]) dateSet.add(p.date);
    const dates = Array.from(dateSet).sort();
    return dates.map((date) => {
      const row: ChartRow = { date };
      for (const id of selected) {
        const point = histories[id].find((p) => p.date === date);
        if (point) row[id] = point.maxWeight;
      }
      return row;
    });
  }, [selected, histories]);

  const lastIndexByExercise = useMemo(() => {
    const map: Record<string, number> = {};
    chartData.forEach((row, i) => {
      for (const id of selected) {
        if (row[id] !== undefined) map[id] = i;
      }
    });
    return map;
  }, [chartData, selected]);

  const showDirectLabels = selected.length > 0 && selected.length <= 4;

  if (!ready) {
    return <p className="py-10 text-center text-sm text-slate-400">読み込み中…</p>;
  }

  return (
    <div className="space-y-4 pb-6">
      <div>
        <p className="text-xs font-semibold text-slate-400">成長記録</p>
        <h2 className="mt-0.5 text-lg font-bold text-slate-900 dark:text-slate-50">
          重量の推移グラフ
        </h2>
      </div>

      <div>
        <p className="mb-2 px-1 text-xs text-slate-400">
          見たい種目を選ぶ（最大{MAX_SERIES}件）
        </p>
        <div className="flex flex-wrap gap-2">
          {EXERCISES.map((exercise) => {
            const idx = selected.indexOf(exercise.id);
            const active = idx !== -1;
            const disabled = !active && selected.length >= MAX_SERIES;
            return (
              <button
                key={exercise.id}
                type="button"
                disabled={disabled}
                onClick={() => toggle(exercise.id)}
                className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? "border-transparent text-white"
                    : disabled
                    ? "border-slate-200 text-slate-300 dark:border-slate-800 dark:text-slate-700"
                    : "border-slate-200 text-slate-600 hover:border-violet-300 dark:border-slate-700 dark:text-slate-300"
                }`}
                style={active ? { backgroundColor: colors[idx % colors.length] } : undefined}
              >
                <span>{exercise.icon}</span>
                {exercise.name}
              </button>
            );
          })}
        </div>
      </div>

      {selected.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center dark:border-slate-700 dark:bg-slate-900">
          <span className="text-2xl">📈</span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            種目を選ぶと重量の推移が表示されます
          </p>
        </div>
      ) : chartData.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center dark:border-slate-700 dark:bg-slate-900">
          <span className="text-2xl">🗒️</span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            まだ記録がありません。ワークアウトを記録すると表示されます
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-2 flex justify-end">
            <div className="flex overflow-hidden rounded-full border border-slate-200 text-[11px] font-semibold dark:border-slate-700">
              <button
                type="button"
                onClick={() => setView("chart")}
                className={`px-3 py-1 ${
                  view === "chart"
                    ? "bg-violet-600 text-white"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                グラフ
              </button>
              <button
                type="button"
                onClick={() => setView("table")}
                className={`px-3 py-1 ${
                  view === "table"
                    ? "bg-violet-600 text-white"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                表
              </button>
            </div>
          </div>

          {view === "chart" ? (
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 8, right: 56, left: -16, bottom: 0 }}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-slate-200 dark:stroke-slate-800"
                  />
                  <XAxis
                    dataKey="date"
                    tickFormatter={formatShortDate}
                    tick={{ fontSize: 11 }}
                  />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    unit="kg"
                    domain={["auto", "auto"]}
                  />
                  <Tooltip
                    labelFormatter={(v) => formatShortDate(String(v))}
                    formatter={(value, name) => [
                      `${value}kg`,
                      EXERCISE_MAP[String(name)]?.name ?? String(name),
                    ]}
                  />
                  {selected.length >= 2 && (
                    <Legend
                      formatter={(value: string) => EXERCISE_MAP[value]?.name ?? value}
                      wrapperStyle={{ fontSize: 11 }}
                    />
                  )}
                  {selected.map((id, idx) => (
                    <Line
                      key={id}
                      type="monotone"
                      dataKey={id}
                      name={id}
                      stroke={colors[idx % colors.length]}
                      strokeWidth={2.5}
                      dot={{ r: 3 }}
                      connectNulls
                      label={
                        showDirectLabels
                          ? (props: {
                              x?: string | number;
                              y?: string | number;
                              index?: number;
                            }) => {
                              if (props.index !== lastIndexByExercise[id]) return <g />;
                              return (
                                <text
                                  x={Number(props.x ?? 0) + 6}
                                  y={Number(props.y ?? 0) - 6}
                                  fontSize={11}
                                  fontWeight={600}
                                  fill={colors[idx % colors.length]}
                                >
                                  {EXERCISE_MAP[id]?.name}
                                </text>
                              );
                            }
                          : undefined
                      }
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="max-h-72 overflow-auto">
              <table className="w-full text-left text-xs">
                <thead className="sticky top-0 bg-white dark:bg-slate-900">
                  <tr className="text-slate-400">
                    <th className="py-1.5 pr-2 font-semibold">日付</th>
                    {selected.map((id) => (
                      <th key={id} className="py-1.5 pr-2 font-semibold">
                        {EXERCISE_MAP[id]?.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {chartData.map((row) => (
                    <tr key={row.date} className="border-t border-slate-100 dark:border-slate-800">
                      <td className="py-1.5 pr-2 tabular-nums text-slate-500">
                        {formatShortDate(row.date)}
                      </td>
                      {selected.map((id) => (
                        <td key={id} className="py-1.5 pr-2 tabular-nums text-slate-700 dark:text-slate-200">
                          {row[id] !== undefined ? `${row[id]}kg` : "–"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
